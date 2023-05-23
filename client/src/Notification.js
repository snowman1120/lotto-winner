import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import MDSnackbar from "components/MDSnackbar";
import MDBox from 'components/MDBox';

const Notification = ({notifications}) => {
    const [open, setOpen] = useState(false);

    const close = () => setOpen(false);

    useEffect(() => {
        notifications && notifications.length > 0 ? setOpen(true) : setOpen(false);
    }, [notifications]);

    const renderNotification = (notificationType, title, content) => {
        let color = "primary"; // info - null, warning - warinig
        let icon = "check"; // info - notifications, warning - star

        switch(notificationType) {
            case 'danger': 
                color = 'error';
                icon = 'warning'
                break;
            default:
                color = 'primary';
                icon = 'check';
                break;
        }
        return (
            <MDSnackbar
                color={color}
                icon={icon}
                title={title}
                content={content}
                // dateTime="11 mins ago"
                open={open}
                onClose={close}
                close={close}
                />
        );
    }

    return (
        <MDBox>
            {
                open ? 
                    notifications.map((notification) => renderNotification(notification.alertType, notification.title, notification.msg)) 
                    : ''
            }
        </MDBox>
    );
}

const mapStateToProps = (state) => ({
    notifications: state.notification
});
export default connect(mapStateToProps) (Notification);