import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';

import {Form} from 'react-bootstrap';
import Carousel from 'react-grid-carousel';

// Material ui components
import MDButton from "components/MDButton";

import {setAlert} from 'actions/alert';
import {setTotalPayAmount} from 'actions/prizepool';

import Ticket from './Ticket';

import {MIN_TICKET_COUNT, MAX_TICKET_COUNT, TICKET_PRICE} from 'constants/constants';
import './TicketGroup.css';

const TicketGroup = ({isAuthenticated, setAlert, setTotalPayAmount}) => {
    const [ticketCount, setTicketCount] = useState(MIN_TICKET_COUNT);
    const [ticketsStatus, setTicketsStatus] = useState(Array(MAX_TICKET_COUNT));

    const navigate = useNavigate();

    const handleTicketCount = (e) => {
        setTicketCount(e.target.value);
        
        // Move to first dot
        const dotEls = document.getElementsByClassName('sc-htpNat');
        if(dotEls.length > 0) dotEls[0].click();
    }

    const handleBuy = (e) => {
        let completedChoose = true;
        for(let i = 0; i < ticketCount; i ++) {
            if(!ticketsStatus[i]) {
                completedChoose = false;
                break;
            }
        }
        if(!completedChoose) {
            setAlert("Some tickets have not been completed.", 'info');
            return;
        }
        if(isAuthenticated) {
            //return navigate('/payment');
            setTotalPayAmount(TICKET_PRICE * ticketCount);
            return navigate('/bankcards');
        }
        
        return navigate('/login');
    }

    const updateTicketsStatus = (ticketNumber, status) => {
        const tempStatus = ticketsStatus;
        tempStatus[ticketNumber - 1] = status;
        setTicketsStatus(tempStatus);
    }

    const renderTickets = () => {
        let tickets = [];
        for(let i = 0; i < ticketCount; i ++) {
            tickets.push(
                <Carousel.Item key={i}>
                    <Ticket number={i + 1} updateStatus={updateTicketsStatus} />
                </Carousel.Item>
            );
        }
        return tickets;
    }

    const renderOptions = () => {
        let options = [];
        for(let i = MIN_TICKET_COUNT; i <= MAX_TICKET_COUNT; i ++) {
            options.push(
                <option key={i}>{i}</option>
            )
        }
        return options;
    }

    return (
        <div className='ticket-group-container'>
            <Form.Group style={{justifyContent: 'center', display: 'flex'}}>
                <Form.Label>How many tickets do you want to buy?</Form.Label>
                <Form.Control as="select" className='ticket-group-count' style={{width: '200px', marginLeft: '30px'}} onChange={handleTicketCount}>
                    {renderOptions()}
                </Form.Control>
            </Form.Group>
            <div className="ticket-carousel">
                <Carousel
                    cols={3}
                    rows={1}
                    gap={6}
                    showDots
                    loop={true}
                    scrollSnap={false}
                    responsiveLayout={[
                        {
                        breakpoint: 1440,
                        cols: 2
                        },
                        {
                        breakpoint: 990,
                        cols: 1
                        }
                    ]}
                    mobileBreakpoint={670}
                    // arrowLeft={<ArrowBtn type="left" />}
                    // arrowRight={<ArrowBtn type="right" />}
                    >
                    {renderTickets()}
                </Carousel>
            </div>
            <div className='ticket-group-amount'>
                <div className='row'>
                    <div className='col-md-6 col-sx-12'>
                        <div style={{justifyContent: 'space-between', display: "flex"}}>
                            <span>Ticket Price ({ticketCount} lines)</span>
                            <span className='ticket-group-per-ticket-price'>x ${TICKET_PRICE.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div style={{justifyContent: 'space-between', display: "flex"}}>
                            <span>Total Price</span>
                            <span className="ticket-group-total-price">${(TICKET_PRICE * ticketCount).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className='col-md-6 col-sx-12' style={{justifyContent: 'center', display: "flex", alignItems: 'center'}}>
                        <MDButton className="ticket-group-buy-button" onClick={handleBuy}>Buy Now</MDButton>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setAlert, setTotalPayAmount}) (TicketGroup);