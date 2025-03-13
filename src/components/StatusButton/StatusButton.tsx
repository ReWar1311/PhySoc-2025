import "./StatusButton.css";
const StatusButton = (props:any) => {
    return (
        <>
            <span className="badge" style={{backgroundColor:props.color,borderColor:props.borderColor}}>{props.status}</span>
        </>
        
    );
}

export default StatusButton;
