import {useState, useEffect} from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from 'actions/auth';

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from 'components/MDButton';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';

// reCAPTCHA module
import ReCAPTCHA from 'react-google-recaptcha';

import logo from "img/logo/logo1.svg";

import './Login.css';
import { reCAPTCHA_SITEKEY } from 'config/config';

const Login = ({ login, isAuthenticated }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const { email, password } = formData;
    
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };
    
    if (isAuthenticated) {
        //return navigate('/main');
        window.location.href = '/main';
    }

    const onChangeReCAPTCHA = (value) => {
        console.log('Captcha value:', value);
    }

    return (
        <MDBox>
            <MDBox className="login-container">
                <Grid container>
                    <Grid item
                    xs={10}
                    sx={{
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 30,
                        lineHeight: '37px',
                        color: 'var(--main-color)'
                    }}>
                        Try my luck
                    </Grid>
                    <Grid item
                        xs={2}
                        sx={{mt:'7px'}}>
                        <img className="login-logo" alt="" src={logo} />
                    </Grid>
                </Grid>
                <MDBox 
                sx={{fontWeight: 400, fontSize: 17, lineHeight: '21px'}}
                mt="8px">
                    Please enter your details
                </MDBox>
                <MDBox
                    mt="37px">
                    <MDBox>Email</MDBox>
                    <MDInput type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        sx={{width: 350, marginTop: "8px"}}
                        label="Enter your email">
                    </MDInput>
                </MDBox>
                <MDBox
                    mt="26px">
                    <MDBox>Password</MDBox>
                    <MDInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        sx={{width: 350, marginTop: "8px"}}
                        label="password"
                    >
                    </MDInput>
                </MDBox>
                <MDBox mt="18px">
                    <ReCAPTCHA
                        sitekey={reCAPTCHA_SITEKEY}
                        onChange={onChangeReCAPTCHA}
                    />
                </MDBox>
                <MDBox>
                <Link to="#"
                    style={{
                        float: 'right',
                        fontWeight: 800,
                        fontSize: 15,
                        lineHeight: "18px",
                        marginTop: '10px'
                    }}
                    >Forgot password</Link>
                </MDBox>
                <MDBox>
                    <MDButton className="login-button"
                        onClick={onSubmit}
                    >
                        Try my luck
                    </MDButton>
                </MDBox>
                <MDBox sx={{textAlign:"center"}}>
                    <MDTypography variant="body2" fontSize={15}>
                        Don`t have an account?
                        {/* <MDTypography component="a" href="/register" variant="body2" fontWeight="medium">
                        &nbsp;&nbsp;Sign up&nbsp;&nbsp;
                        </MDTypography> */}
                        <Link to="/register" style={{fontWeight: 800, fontSize: 15}}>&nbsp;&nbsp;Sign up&nbsp;&nbsp;</Link>
                    </MDTypography>
                </MDBox>
            </MDBox>
        </MDBox>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, { login })(Login);