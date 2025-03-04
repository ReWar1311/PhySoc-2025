import "./StatusButton.css";
const StatusButton = (props:any) => {
    return (
        <>
            <span className="badge" style={{backgroundColor:props.color}}>{props.status}</span>
        </>
        
    );
}

export default StatusButton;
