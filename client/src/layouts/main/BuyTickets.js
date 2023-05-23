import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from 'components/MDTypography';

// Custom components
import LottoTitle from '../title/Title';
import Prizepool from './components/prizepool/Prizepool';
import LottoLinks from './components/links/Links';
import TicketGroup from './components/tickets/TicketGroup';

import {setAlert} from 'actions/alert';

import './BuyTickets.css';

const title = "Choose your numbers and win";
const description_1 = "It is a long established fact that a reader will be distracted by";
const description_2 = "the readable content of a page";

const BuyTickets = ({
  isAuthenticated
}) => {
  let lastWeekNumbers = ["01", "02", "03", "04", "05"];
  let latestNumbers = ["01", "02", "03", "04", "05"];

  const navigate = useNavigate();
  return (
    <div>
      <LottoTitle title={title} description_1={description_1} description_2={description_2} />
      <Prizepool />
      <TicketGroup />
      
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
    </div>

  )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {}) (BuyTickets);