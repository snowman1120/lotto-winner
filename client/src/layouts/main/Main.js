import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from 'components/MDButton';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';

import LottoTitle from '../title/Title';
import Prizepool from './components/prizepool/Prizepool';
import LottoLinks from './components/links/Links';
import TicketGroup from './components/tickets/TicketGroup';

import './Main.css';
import {setAlert} from 'actions/alert';

const title = "Choose your numbers and win";
const description_1 = "It is a long established fact that a reader will be distracted by";
const description_2 = "the readable content of a page";

const Main = ({
    isAuthenticated,
    canSelectNumber, 
    lastWeekNumbers, 
    latestNumbers,

    setAlert
}) => {
    const navigate = useNavigate();

    const [amount, setAmount] = useState(0);

    const [clickableButton, setClickableButton] = useState(true);

    useEffect(() => {
        if(!isAuthenticated) setClickableButton(false);
        else setClickableButton(true);
    }, [isAuthenticated]);

    /*
    Amount Input
    */
    const onChangeAmount = (e) => {
        setAmount(e.target.value);
    }

    const onFocusAmount = (e) => {
        if(e.target.value == 0) setAmount('');
    }

    const onBlurAmount = (e) => {
        if(e.target.value == '') setAmount(0);
    }

    /*
    Submit 
    */
    const onSubmit = () => {
        if(!isAuthenticated) return navigate('/login');
        if(canSelectNumber) {
            setAlert("Please Select 7 numbers. A ticket consists of 7 numbers.", 'warning');
            return;
        }
        if(amount == 0 || amount == '')
            setAlert("Please input amount corretly.", 'warning');
    }

    lastWeekNumbers = ["01", "02", "03", "04", "05"];
    latestNumbers = ["01", "02", "03", "04", "05"];

    return (
        <MDBox>
            <LottoTitle title={title} description_1={description_1} description_2={description_2} />
            <Prizepool />
            <MDBox className="main-primary-area">
                <MDBox className="main-ticket-buttons">
                    <TicketGroup />
                </MDBox>
                <MDBox className="main-action">
                    <MDInput 
                        label="USD" 
                        className="main-action-input" 
                        value={amount} 
                        onChange={onChangeAmount} 
                        onFocus={onFocusAmount}
                        onBlur={onBlurAmount}
                    ></MDInput>
                    <MDButton className="main-action-submit" onClick={onSubmit}>Submit</MDButton>
                </MDBox>
                <MDBox className="main-history">
                    <Grid container>
                        <Grid className='main-history-grid-item'>
                            <MDBox className="main-history-item" sx={{marginRight: '15px'}}>
                                <MDTypography className="main-history-item-title">Last week winning numbers</MDTypography>
                                <MDBox sx={{display: 'flex', width: 'fit-content'}}>
                                {lastWeekNumbers.map(number => 
                                    <MDBox key={number} className="main-history-number-item">
                                        <span>{number}</span>
                                    </MDBox>)
                                }
                                </MDBox>
                            </MDBox>
                        </Grid>
                        <Grid className='main-history-grid-item'>
                            <MDBox className="main-history-item" sx={{marginLeft: '15px'}}>
                                <MDTypography className="main-history-item-title">Latest winning numbers</MDTypography>
                                <MDBox sx={{display: 'flex', width: 'fit-content'}}>
                                {latestNumbers.map(number => 
                                    <MDBox key={number} className="main-history-number-item">
                                        <span>{number}</span>
                                    </MDBox>)
                                }
                                </MDBox>
                            </MDBox>
                        </Grid>
                    </Grid>
                </MDBox>
                <MDBox className="main-links">
                    <LottoLinks />
                </MDBox>
            </MDBox>
        </MDBox>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    canSelectNumber: state.prizepool.canSelectNumber
});

export default connect(mapStateToProps, {setAlert}) (Main);