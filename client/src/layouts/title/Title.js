import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import './Title.css';

const Title = ({title, description_1, description_2}) => {
    return (
        <MDBox>
            <MDTypography className="main-title">
            {title}
            </MDTypography>
            <MDBox className="main-description">
                <MDTypography>
                {description_1}
                </MDTypography>
                <MDTypography>
                {description_2}
                </MDTypography>
            </MDBox>
        </MDBox>
    )
}

export default Title;