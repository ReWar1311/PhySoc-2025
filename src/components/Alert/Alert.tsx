import "./Alert.css";

interface AlertProps {
  type?: string;
  message: string;
  link: string;
  className?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { type="new" , message, link } = props;
  return (
    <a className={`alert alert-${type}`} role="alert" href={link}>
      <div className="alert-container">
        <div className="alert-icon">{type}</div>
        <p>{message}</p>
      </div>
    </a>
  );
};

export default Alert;
