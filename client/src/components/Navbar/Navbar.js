import { useState, useEffect } from "react";
import { connect } from 'react-redux';
// react-router components
import { useLocation, Link } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Custom styles for DashboardNavbar
import {
    navbar,
    navbarContainer,
  } from "components/Navbar/styles";

// Material Dashboard 2 React context
import {
    useMaterialUIController,
    setTransparentNavbar,
} from "context";

import { logout } from 'actions/auth';

import "./Navbar.css";
import logo from "img/logo/logo4.svg";

const Navbar = ({absolute, isAuthenticated, username, logout}) => {
    const [navbarType, setNavbarType] = useState();
    const [controller, dispatch] = useMaterialUIController();
    const { transparentNavbar, fixedNavbar } = controller;
    const [openMenu, setOpenMenu] = useState(false);
    const route = useLocation().pathname.split("/").slice(1);

    useEffect(() => {
        // Setting the navbar type
        if (fixedNavbar) {
          setNavbarType("sticky");
        } else {
          setNavbarType("static");
        }
    
        // A function that sets the transparent state of the navbar.
        function handleTransparentNavbar() {
            setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
        }

        /** 
         The event listener that's calling the handleTransparentNavbar function when 
            scrolling the window.
        */
        window.addEventListener("scroll", handleTransparentNavbar);

        // Call the handleTransparentNavbar function to set the state with the initial value.
        handleTransparentNavbar();

        // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleTransparentNavbar);
    }, [dispatch, fixedNavbar]);

    const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
    const handleCloseMenu = () => setOpenMenu(false);

    const onClickLogout = () => {
        setOpenMenu(false);
        logout();
    }

    // Render the notifications menu
    const renderMenu = () => (
        <Menu
            className="menu-group"
            anchorEl={openMenu}
            anchorReference={null}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            open={Boolean(openMenu)}
            onClose={handleCloseMenu}
            sx={{ mt: 2 }}
            >
                <MDBox sx={{width: 100, textAlign: "center"}}>
                    <Link className="logout" to="#" onClick={onClickLogout}>
                    {/* <Icon sx={iconsStyle} fontSize="small">logout</Icon> */}
                    Logout
                    </Link>
                </MDBox>
        </Menu>
    );

    return (
        <AppBar 
            position={absolute ? "absolute" : navbarType}
            color="inherit"
            sx={(theme) => navbar(theme, { transparentNavbar, absolute })}
        >
            <Toolbar sx={(theme) => navbarContainer(theme)}>
                <MDBox color="white" className="navbar-container">
                    <Link to="/">
                        <img className="logo" alt="" src={logo} />
                    </Link>
                    <MDBox className="menu-container">
                        <Link to="/aboutus" className="menu-aboutus">About Us</Link>
                        {!isAuthenticated ? 
                            (<Link to="/login" className="menu-profile">
                                Login
                            </Link>) :
                            (<Link to="#" className="menu-profile"
                                onClick={handleOpenMenu}
                            >
                                Try your luck App, {username}
                            </Link>)
                        }
                        {!isAuthenticated ? 
                            (<Link to="/register" className="menu-profile">
                                Sign up
                            </Link>) : ''
                        }
                    </MDBox>
                </MDBox>
            </Toolbar>
            {renderMenu()}
        </AppBar>
    )
}

// Setting default values for the props of DashboardNavbar
Navbar.defaultProps = {
    absolute: false,
    light: false,
    isMini: false,
  };
  
  // Typechecking props for the DashboardNavbar
Navbar.propTypes = {
    absolute: PropTypes.bool,
    light: PropTypes.bool,
    isMini: PropTypes.bool,

    logout: PropTypes.func.isRequired,
};
  
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    username: state.auth.user && state.auth.user.name
});

export default connect(mapStateToProps, { logout })(Navbar);