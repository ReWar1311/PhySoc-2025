import './Grids.css';

const  Grids: React.FC = ({count}: {count?: number}) => {
    const divs = new Array(count || 135).fill(1);
    return (
        <div className="grid-container"><div className="gradient-div"></div>{divs.map((_, index) => <div key={index} className="grid-item"></div>)}</div>
    )
};

export default Grids;