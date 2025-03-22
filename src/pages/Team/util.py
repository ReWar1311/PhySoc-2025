import re
def convert_drive_links(file_path):
    """
    Converts Google Drive photo links to embed links in the given file.
    
    Supports two formats:
    1. Open links: https://drive.google.com/open?id=FILE_ID
    2. File links: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    
    Both convert to: https://drive.google.com/uc?export=view&id=FILE_ID
    """
    # Read the file content
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
    except FileNotFoundError:
        print(f"Error: File {file_path} not found.")
        return
    except Exception as e:
        print(f"Error reading file: {e}")
        return
    
    # Pattern to match Google Drive file links
    file_pattern = r'https://drive\.google\.com/file/d/([a-zA-Z0-9_-]+)/view\?usp=sharing'
    
    # Pattern to match Google Drive open links
    open_pattern = r'https://drive\.google\.com/open\?id=([a-zA-Z0-9_-]+)'
    
    # Replace file links with the new thumbnail format
    updated_content = re.sub(file_pattern, r'https://drive.google.com/thumbnail?id=\1&sz=w1000', content)
    
    # Replace open links with the new thumbnail format
    updated_content = re.sub(open_pattern, r'https://drive.google.com/thumbnail?id=\1&sz=w1000', updated_content)
    
    # Count replacements
    file_links = re.findall(file_pattern, content)
    open_links = re.findall(open_pattern, content)
    num_replacements = len(file_links) + len(open_links)
    
    # Write back to file if changes were made
    if content != updated_content:
        try:
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(updated_content)
            print(f"Successfully replaced {num_replacements} Drive links in {file_path}")
        except Exception as e:
            print(f"Error writing to file: {e}")
    else:
        print("No Drive links found to replace.")

convert_drive_links('Team.tsx')