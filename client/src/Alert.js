import {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import MDAlert from "components/MDAlert";
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';

const Alert = ({ alerts }) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        alerts && alerts.length > 0 ? setOpen(true) : setOpen(false);
    }, [alerts]);

    const renderAlert = (alertType, msg, index) => {
        let color = "primary";
        switch(alertType) {
            case 'danger': 
                color = 'error';
                break;
            default:
                color = 'primary';
                break;
        }
        return <MDAlert key={index} color={color} dismissible>
            <MDTypography variant="body2" color="white">
                {msg}
            </MDTypography>
        </MDAlert>;
    }

    return (
        <MDBox>
            {
                open ? (
                    <MDBox sx={{position: 'fixed', right: 20, top: 30, zIndex: 9999}}>
                        {alerts.map((alert, index) => renderAlert(alert.alertType, alert.msg, index))}
                    </MDBox>) : ''
            }
        </MDBox>
    )
}

const mapStateToProps = (state) => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);