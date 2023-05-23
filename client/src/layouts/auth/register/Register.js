import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// @mui material components
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from 'components/MDButton';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';

import { Link, Navigate } from 'react-router-dom';

import logo from "img/logo/logo1.svg";
import arrowCircle from "img/arrow-circle.svg";

import { register } from 'actions/auth';

// reCAPTCHA module
import ReCAPTCHA from 'react-google-recaptcha';

import './Register.css';
import { reCAPTCHA_SITEKEY } from 'config/config';

const Register = ({register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
      
    const { name, email, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            //setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    };

    if (isAuthenticated) {
        return <Navigate to="/main" />;
    }
    const handleRegister = () => {

    }

    const onChangeReCAPTCHA = (value) => {
        console.log('Captcha value:', value);
    }

    return (
        <MDBox>
            <MDBox className="register-container">
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
                        Sign up
                    </Grid>
                    <Grid item
                        xs={2}
                        sx={{mt:'7px'}}>
                        <img className="register-logo" alt="" src={logo}
                        style={{width: 60}} />
                    </Grid>
                </Grid>
                <MDBox 
                sx={{fontWeight: 400, fontSize: 17, lineHeight: '21px'}}
                mt="8px">
                    Please enter your details
                </MDBox>
                <MDBox
                    mt="37px">
                    <Grid container>
                        <Grid item xs={6}>
                            <MDBox>
                                <MDBox>Your name</MDBox>
                                <MDInput 
                                name="name"
                                value={name}
                                onChange={onChange}
                                sx={{width: 350, marginTop: "8px"}}
                                label="Enter your name">
                                </MDInput>
                            </MDBox>
                            <MDBox>
                                <MDBox>Email</MDBox>
                                <MDInput 
                                name="email"
                                type="email"
                                value={email}
                                onChange={onChange}
                                sx={{width: 350, marginTop: "8px"}}
                                label="Enter your email">
                                </MDInput>
                            </MDBox>
                        </Grid>
                        <Grid item xs={6}>
                        <MDBox>
                            <MDBox>Password</MDBox>
                                <MDInput 
                                name="password"
                                value={password}
                                onChange={onChange}
                                type="password"
                                sx={{width: 350, marginTop: "8px"}}
                                label="Password">
                                </MDInput>
                            </MDBox>
                            <MDBox>
                                <MDBox>Repeat Password</MDBox>
                                <MDInput 
                                name="password2"
                                value={password2}
                                onChange={onChange}
                                type="password"
                                sx={{width: 350, marginTop: "8px"}}
                                label="Password">
                                </MDInput>
                            </MDBox>
                        </Grid>
                    </Grid>
                </MDBox>
                <MDBox
                    mt="18px">
                    <Grid container>
                        <Grid item xs={6}>
                            <ReCAPTCHA
                                sitekey={reCAPTCHA_SITEKEY}
                                onChange={onChangeReCAPTCHA}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <MDBox>
                                <MDButton className="register-button"
                                onClick={onSubmit}
                                >
                                    Sign up
                                </MDButton>
                            </MDBox>
                        </Grid>
                    </Grid>
                </MDBox>
                {/* <Grid container>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6}>
                        <MDBox>
                            <MDButton className="register-button"
                            onClick={onSubmit}
                            >
                                Sign up
                            </MDButton>
                        </MDBox>
                    </Grid>
                </Grid>
                 */}
                <MDBox sx={{textAlign:"center", marginTop: '37px'}}>
                    <MDTypography variant="body2" fontSize={15}>
                        Do have an account?
                        <Link to="/login" style={{fontWeight: 800, fontSize: 15}}>&nbsp;&nbsp;Sign in&nbsp;&nbsp;</Link>
                    </MDTypography>
                </MDBox>
            </MDBox>
        </MDBox>
    );
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

//export default connect(mapStateToProps, { setAlert, register })(Register);
export default connect(mapStateToProps, { register })(Register);