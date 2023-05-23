import {useState} from 'react';

// Bootstarp components
import {Check2Circle, Trash} from 'react-bootstrap-icons';

import TicketBall from './TicketBall';

import {
    MAX_BALL_NUMBER,
    MAX_TICKET_NUMBER, 
    TICKET_COL_NUMBER,
    TICKET_NUMBER_TYPE
} from 'constants/constants.js';

import MDButton from 'components/MDButton';

import {getRandomArbitrary} from 'utils/helper';
import './Ticket.css';

const Ticket = ({
    number,
    updateStatus
}) => {
    const [completed, setCompleted] = useState(false);
    const [selectedBalls, setSelectedBalls] = useState([]);

    const changeStatus = (status) => {
        setCompleted(status);
        updateStatus(number, status);
    }
    const onClickQuickChoose = () => {
        let balls = [];
        while(balls.length < MAX_BALL_NUMBER) {
            const randomNumber = Math.round(getRandomArbitrary(1, MAX_TICKET_NUMBER));
            if(balls.indexOf(randomNumber) < 0) balls.push(randomNumber);
        }
        setSelectedBalls(balls);
        changeStatus(true);
    }

    const onClickRemove = () => {
        setSelectedBalls([]);
        changeStatus(false);
    }

    const onClickBall = (ballNumber, isSelect) => {
        if(isSelect) {
            setSelectedBalls([...selectedBalls, ballNumber]);
            if(selectedBalls.length >= MAX_BALL_NUMBER - 1) changeStatus(true);
        }
        else {
            let balls = selectedBalls;
            balls.splice(balls.indexOf(ballNumber), 1);
            changeStatus(false);
        }
    }

    const renderNumbers = () => {
        let renderJsx = [];
        let num = 1;
        for(let i = 0; i < Math.ceil(MAX_TICKET_NUMBER / TICKET_COL_NUMBER); i ++) {
            let row = [];
            for(let j = 0; j < 6; j ++) {
                row.push(
                    <TicketBall 
                        key={"ticket-" + num} 
                        number={num} 
                        type={TICKET_NUMBER_TYPE} 
                        updateReport={onClickBall} 
                        canSelect={!completed}
                        forceSelect={selectedBalls.indexOf(num) < 0 ? false : true}
                    />
                )
                num ++;
                if(num > MAX_TICKET_NUMBER) break;
            }
            renderJsx.push(
                (<div key={"ticket-row-" + (i + 1)} style={{display: 'flex'}}>
                    {row}
                </div>)
            )
        }
        return renderJsx;
    }

    return (
        <div className='ticket-container'>
            <div className='ticket-header'>
                <div className='ticket-remove-quickchoose'>
                    <Trash className='ticket-ball-remove' onClick={onClickRemove} />
                    <MDButton className="ticket-quick-choose-button" onClick={onClickQuickChoose}>Quick Choose</MDButton>
                </div>
                <div className='ticket-header-choose'>
                    <div>Choose 7 numbers</div>
                    <Check2Circle className={"ticket-choose-completed-icon" + (!completed ? " disabled" : "")} />
                </div>
                
            </div>
            <div className='ticket-body'>
                <div>
                    {renderNumbers()}
                </div>
                <div className='ticket-number'>{number}</div>
            </div>
        </div>
    )
}

export default Ticket;