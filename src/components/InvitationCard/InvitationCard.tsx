import './InvitationCard.css';
const InvitationCard = (props:any) => {
    return (
        <div className="invitation-card">
            <p><b>{props.name}</b> invited you to join:</p>
            <h3>{props.teamName}</h3>
            <p>{props.message}</p>
            {props.rejectedStatus || props.acceptedStatus || <div className="invitation-actions">
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
            </div>}
            {props.rejectedStatus && <span className="rejected-status">Rejected</span>}
            {props.acceptedStatus && <span className="accepted-status">Accepted</span>}
        </div>
    );
}

export default InvitationCard;