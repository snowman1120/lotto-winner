import {Link} from 'react-router-dom';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import facebook from 'img/facebook.svg';
import twitter from 'img/twitter.svg';
import youtube from 'img/youtube.svg';
import instagram from 'img/instagram.svg';

import './Links.css';

const Links = () => {
    return (
        <MDBox className="links-container">
            <MDTypography className="links-letter">Links</MDTypography>
            <Link to="#" style={{width: '11px', marginRight: '18px'}}><img src={facebook} alt=""></img></Link>
            <Link to="#" style={{width: '22px', marginRight: '18px'}}><img src={twitter} alt=""></img></Link>
            <Link to="#" style={{width: '22px', marginRight: '18px'}}><img src={youtube} alt=""></img></Link>
            <Link to="#" style={{width: '20px', marginRight: '18px'}}><img src={instagram} alt=""></img></Link>
        </MDBox>
    );
}

export default Links;