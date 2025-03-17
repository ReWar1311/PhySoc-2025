import './InvitationCard.css';

interface InvitationCardProps {
  name: string;
  teamName: string;
  message: string;
  acceptedStatus?: boolean;
  rejectedStatus?: boolean;
  onAccept?: () => void;
  onReject?: () => void;
}

const InvitationCard: React.FC<InvitationCardProps> = ({
  name,
  teamName,
  message,
  acceptedStatus,
  rejectedStatus,
  onAccept,
  onReject
}) => {
  return (
    <div className="invitation-card">
      <p><b>{name}</b> invited you to join:</p>
      <h3>{teamName}</h3>
      <p>{message}</p>
      
      {!(rejectedStatus || acceptedStatus) && (
        <div className="invitation-actions">
          <button className="accept-btn" onClick={onAccept}>Accept</button>
          <button className="reject-btn" onClick={onReject}>Reject</button>
        </div>
      )}
      
      {rejectedStatus && <span className="rejected-status">Rejected</span>}
      {acceptedStatus && <span className="accepted-status">Accepted</span>}
    </div>
  );
};

export default InvitationCard;