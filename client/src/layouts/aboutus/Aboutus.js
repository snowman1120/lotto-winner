import { useState, useEffect } from 'react';

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from 'components/MDButton';

import './Aboutus.css';
import { Link, Navigate } from 'react-router-dom';

const Aboutus = () => {
    const handleTryluck = () => {
        return <Navigate to="/" />;
    }

    return (
        <MDBox>
            <MDBox className="aboutus-title">
                <p style={{
                    color: 'var(--main-color)',
                    fontSize: 30,
                    fontWeight: 700,
                    lineHeight: '130%',
                    fontStyle: "normal"
                }}>About Us</p>
                <p className='aboutus-title-content'>
                It is a long established fact that a reader will be distracted by the readable content of a page
                </p>
            </MDBox>
            <MDBox className="aboutus-main">
                <Grid container className='aboutus-main-sub'>
                    <Grid item className='aboutus-main-sub-title'
                        xs={12} xl={2}>
                        Rules, description
                    </Grid>
                    <Grid item className='aboutus-main-sub-content'
                        xs={12} xl={10}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 

All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfu
                    </Grid>
                </Grid>
                <Grid container className='aboutus-main-sub'>
                    <Grid item className='aboutus-main-sub-title'
                        xs={12} xl={2}>
                        Where does it come from?
                    </Grid>
                    <Grid item className='aboutus-main-sub-content'
                        xs={12} xl={10}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 

Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 

This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </Grid>
                </Grid>
                <Grid container className='aboutus-main-sub'>
                    <Grid item className='aboutus-main-sub-title'
                        xs={12} xl={2}>
                        Where can I get some?
                    </Grid>
                    <Grid item className='aboutus-main-sub-content'
                        xs={12} xl={10}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 

If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    </Grid>
                </Grid>
            </MDBox>
            <MDBox>
                <MDButton className="try-luck-button"
                onClick={handleTryluck}
                >
                    <Link to="/" style={{color: 'white'}} >Try my luch</Link>
                    
                </MDButton>
            </MDBox>
        </MDBox>
    );
}

export default Aboutus;