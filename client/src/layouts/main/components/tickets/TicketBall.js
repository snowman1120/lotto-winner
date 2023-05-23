import {useState, useEffect} from 'react';

import './TicketBall.css';

const TicketBall = ({
    number,
    type,
    canSelect,

    forceSelect,
    updateReport,
}) => {
    const [selected, setSelected] = useState(false);
    
    const handleClick = () => {
        if(!selected && !canSelect) return;
        setSelected(!selected);
        updateReport(number, !selected);
    }

    useEffect(() => {
        setSelected(forceSelect);
    }, [forceSelect]);

    let boxClassName = 'ticket-ball';
    if(selected) boxClassName += ' selected';
    boxClassName += " " + type;

    return (
        <div className='ticket-ball-container'>
            <div className={boxClassName} onClick={handleClick}>
                <span>{number}</span>
            </div>
        </div>
    );
}

export default TicketBall;