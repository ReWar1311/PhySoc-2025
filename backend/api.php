<?php
// Database connection
$servername = "localhost";    // Change if needed
$username = "physoc";         // Change if needed
$password = "036c0d57";       // Change if needed
$dbname = "physoc";           // Change to your database name

// Secret key for encoding and decoding the token
$secretKey = "your-secret-key";  // Change this to a secure, random key

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the request method (GET, POST, etc.)
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Handle the different API routes
switch ($requestMethod) {
    case 'POST':
        // Check the API route
        $route = $_SERVER['REQUEST_URI'];

        if ($route === '/api.php/register') {
            registerUser($conn);
        } elseif ($route === '/api.php/login') {
            loginUser($conn);
        } elseif ($route === '/api.php/verify') {
            verifyToken($conn);
        } else {
            sendResponse(['message' => 'Route not found','route' => $route], 404);
        }
        break;

    default:
        sendResponse(['message' => 'Method not allowed'], 405);
        break;
}

// Function to handle user registration
function registerUser($conn)
{
    // Get the raw POST data
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate input
    if (empty($data['name']) || empty($data['contact']) || empty($data['email']) || empty($data['password'])) {
        sendResponse(['message' => 'All fields are required'], 400);
        return;
    }

    // Prepare the input data
    $name = $conn->real_escape_string($data['name']);
    $contact = $conn->real_escape_string($data['contact']);
    $email = $conn->real_escape_string($data['email']);
    $password = password_hash($data['password'], PASSWORD_DEFAULT);  // Hash password

    // Check if email already exists
    $checkEmailQuery = "SELECT id FROM users WHERE email = '$email'";
    $result = $conn->query($checkEmailQuery);

    if ($result->num_rows > 0) {
        sendResponse(['message' => 'Email already exists'], 400);
        return;
    }

    // Insert the new user into the database
    $sql = "INSERT INTO users (name, contact, email, password) VALUES ('$name', '$contact', '$email', '$password')";
    if ($conn->query($sql) === TRUE) {
        sendResponse(['message' => 'User registered successfully'], 201);
    } else {
        sendResponse(['message' => 'Error: ' . $conn->error], 500);
    }
}

// Function to handle user login
function loginUser($conn)
{
    // Get the raw POST data
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate input
    if (empty($data['email']) || empty($data['password'])) {
        sendResponse(['message' => 'Email and password are required'], 400);
        return;
    }

    // Prepare input data
    $email = $conn->real_escape_string($data['email']);
    $password = $data['password'];

    // Fetch user from the database based on email
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows === 0) {
        sendResponse(['message' => 'Invalid email or password'], 401);
        return;
    }

    // Fetch user data
    $user = $result->fetch_assoc();

    // Verify password
    if (password_verify($password, $user['password'])) {
        // Password is correct, generate token
        $userId = $user['id'];
        $userEmail = $user['email'];

        // Create the token by encoding user data with a secret key
        $token = generateToken($userId, $userEmail);

        // Set the token as a cookie (optional)
        setcookie("token", $token, time() + 86400 * 2, "/", "", true, true);  // Expires in 2 days

        sendResponse(['message' => 'Login successful', 'token' => $token], 200);
    } else {
        sendResponse(['message' => 'Invalid email or password'], 401);
    }
}

// Function to generate a custom token (encode user data with a secret key)
function generateToken($userId, $userEmail)
{
    global $secretKey;

    // Create a simple token structure with user ID and email
    $data = [
        'userId' => $userId,
        'email' => $userEmail,
        'timestamp' => time()
    ];

    // Encode the data with the secret key
    $dataString = json_encode($data);
    $encodedData = base64_encode($dataString);
    $token = $encodedData . '.' . hash_hmac('sha256', $encodedData, $secretKey);

    return $token;
}

// Function to verify the custom token (decode user data and check validity)
function verifyToken($conn)
{
    // Check if the token is sent as a cookie
    if (!isset($_COOKIE['token'])) {
        sendResponse(['message' => 'No token provided'], 403);
        return;
    }

    // Get the token from the cookie
    $token = $_COOKIE['token'];

    // Split the token into the encoded data and the signature
    list($encodedData, $signature) = explode('.', $token);

    // Verify the signature
    $validSignature = hash_hmac('sha256', $encodedData, $GLOBALS['secretKey']);
    if ($signature !== $validSignature) {
        sendResponse(['message' => 'Invalid token'], 403);
        return;
    }

    // Decode the data
    $decodedData = base64_decode($encodedData);
    $userData = json_decode($decodedData, true);

    // Check token expiration (if any) - for this example we don't have expiration, but you can add it
    if (time() - $userData['timestamp'] > 86400 * 2) {  // 2 days expiry
        sendResponse(['message' => 'Token expired'], 403);
        return;
    }

    // If the token is valid, return the user data
    sendResponse(['message' => 'Token is valid', 'user' => $userData], 200);
}

// Function to send JSON responses
function sendResponse($data, $statusCode)
{
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

$conn->close();
?>
