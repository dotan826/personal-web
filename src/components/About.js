import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import pictureHello from '../images/hello.jpg';
import { CloudServerOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons';

const AboutPageContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 600px) {  // On Mobile
        justify-content: center;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        justify-content: flex-end;
    }

`;

const AboutContentContainer = styled(Row)`
    display: flex;
    justify-content: center;
    align-items: center;


    // background-color: grey; // testing

    @media only screen and (max-width: 600px) {  // On Mobile
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 30px;
        width: 300px;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        margin-top: 50px;
        margin-right: 100px;
        max-width: 950px;
        min-height: 100px;
    }
    
`;

const AboutInfoBox = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    background-color: rgba(${props => props.backcolor || ""});

    @media only screen and (max-width: 600px) {  // On Mobile
        min-width: 300px;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        margin-left: ${props => props.marginleft || ""};
        min-width: 300px;
        min-height: 150px;
    }

    text-align: center;

    border: ${props => props.addborder ? "10px solid transparent" : ""};
    border-image: ${props => props.addborder ? "url(https://res.cloudinary.com/practicaldev/image/fetch/s--isLBn9ec--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://harnerdesigns.com/wp-content/uploads/2018/08/border.svg) 60 round" : ""};
    background-clip: ${props => props.addborder ? "padding-box" : ""};
    border-radius: 15px 50px 30px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    
    // transition: all 1s ease;
    // &:hover{
    //     min-width: 400px;
    //     min-height: 200px;
    // }
`;

const InfoData = styled.span`
    background-color: ${props => props.backcolor || ""};
    font-weight: bold;
    font-size: ${props => props.fontsize || "22px"};
    color: ${props => props.fontcolor || "black"};
    direction: rtl;
    margin: 10px;
`;

// Colors :
// Light Red (transfarend) : 255, 111, 97,0.5
// 
const About = (props) => {

    return (
        <AboutPageContainer>

            <AboutContentContainer>
                <AboutInfoBox span={10} style={{boxShadow: "none"}}>
                    <img src={pictureHello} alt="Hello!" style={{ maxWidth: "250px", borderRadius: "15px 50px 30px" }}></img>
                </AboutInfoBox>
                <AboutInfoBox span={8} backcolor="107, 91, 149,0.5" style={{ height: "100px" }}>
                    <InfoData>
                        מי אני ?<br></br>
                        דותן צרפתי<br></br>
                        Full Stack Developer<br></br>
                    </InfoData>
                </AboutInfoBox>
            
                <AboutInfoBox span={7} backcolor="152, 180, 212,0.5">
                    <InfoData>
                        <ManOutlined style={{ fontSize: "30px", padding: "10px", color: "#88B04B" }} />
                        <WomanOutlined style={{ fontSize: "30px", padding: "10px", color: "#BC243C" }} />
                        <br></br>
                        <u>צד לקוח</u><br></br>
                        React, JavaScript<br></br>
                        HTML, CSS
                    </InfoData>
                </AboutInfoBox>

                <AboutInfoBox span={9} backcolor="247, 202, 201, 0.5" marginleft="50px">
                    <InfoData>
                        <CloudServerOutlined style={{ fontSize: "30px", padding: "10px", color: "#6B5B95" }} />
                        <br></br>
                        <u>צד שרת</u><br></br>
                        Node.js, Express.js<br></br>
                        MongoDB, Google Cloud
                    </InfoData>
                </AboutInfoBox>

                <AboutInfoBox span={7} backcolor="188, 36, 60,0.5">
                    <InfoData>
                        ...
                    </InfoData>
                </AboutInfoBox>

                <AboutInfoBox span={8} backcolor="136, 176, 75,0.5" marginleft="50px">
                    <InfoData>
                        ...
                    </InfoData>
                </AboutInfoBox>

            </AboutContentContainer>
        </AboutPageContainer>
    );

}


export default About;


