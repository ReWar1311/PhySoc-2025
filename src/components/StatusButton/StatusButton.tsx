import "./StatusButton.css";

interface StatusButtonProps {
  status: string;
}

const StatusButton: React.FC<StatusButtonProps> = ({ status }) => {
  let color = "";
  let borderColor = "";
  
  switch(status.toLowerCase()) {
    case "leader":
      color = "rgba(99, 1, 252, 0.17)";
      borderColor = "#6301FC";
      break;
    case "pending":
      color = "#403816";
      borderColor = "#fcca00";
      break;
    case "rejected":
      color = "#3a1717";
      borderColor = "#d80c09";
      break;
    case "accepted":
      color = "#174016";
      borderColor = "#00fd00";
      break;
    default:
      color = "rgba(128, 128, 128, 0.2)";
      borderColor = "#808080";
  }

  return (
    <span className="badge" style={{ backgroundColor: color, borderColor: borderColor }}>
      {status}
    </span>
  );
};

export default StatusButton;
