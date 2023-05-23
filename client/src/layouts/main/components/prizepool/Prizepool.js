import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

import {getCountdownTimeLocal} from 'actions/prizepool';
import {convertSeconds2DHMS, convertRegularNumber10} from 'utils/helper';

import './Prizepool.css';

const Prizepool = ({prizepoolAmount, countdownTime, getCountdownTimeLocal}) => {
    const [DHMS, setDHMS] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const dhmsTime = convertSeconds2DHMS(countdownTime);
        setDHMS({
            days: convertRegularNumber10(dhmsTime.days),
            hours: convertRegularNumber10(dhmsTime.hours),
            minutes: convertRegularNumber10(dhmsTime.minutes),
            seconds: convertRegularNumber10(dhmsTime.seconds)
        });
    }, [countdownTime]);
    
    setInterval(() => {
        getCountdownTimeLocal();
    }, 1000);

    return (
        <MDBox className="prize-pool">
            <MDBox className="prize-pool-count">
                <MDTypography sx={{fontSize: '20px', fontWeight: 700, lineHeight: '20px'}}>Prize pool</MDTypography>
                <span style={{fontSize: '70px', fontWeight: 400, lineHeight: '70px'}}>$</span>
                <span style={{fontSize: '85px', fontWeight: 900, lineHeight: '70px'}}>{prizepoolAmount}</span>
            </MDBox>
            <MDBox className="prize-pool-time">
                <MDBox>
                    <MDTypography className="prize-pool-time-item">{DHMS.days}</MDTypography>
                    <MDTypography className="prize-pool-time-label">days</MDTypography>
                </MDBox>
                <MDBox className="prize-pool-time-colon">:</MDBox>
                <MDBox>
                    <MDTypography className="prize-pool-time-item">{DHMS.hours}</MDTypography>
                    <MDTypography className="prize-pool-time-label">hours</MDTypography>
                </MDBox>
                <MDBox className="prize-pool-time-colon">:</MDBox>
                <MDBox>
                    <MDTypography className="prize-pool-time-item">{DHMS.minutes}</MDTypography>
                    <MDTypography className="prize-pool-time-label">minutes</MDTypography>
                </MDBox>
                <MDBox className="prize-pool-time-colon">:</MDBox>
                <MDBox>
                    <MDTypography className="prize-pool-time-item">{DHMS.seconds}</MDTypography>
                    <MDTypography className="prize-pool-time-label">seconds</MDTypography>
                </MDBox>
            </MDBox>
        </MDBox>
    );
}

const mapStateToProps = (state) => ({
    countdownTime: state.prizepool.countdownTime,
    prizepoolAmount: state.prizepool.prizepoolAmount,
});

export default connect(mapStateToProps, {getCountdownTimeLocal}) (Prizepool);