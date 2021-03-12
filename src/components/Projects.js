import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Col, Row } from 'antd';


const ProjectsPageContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 600px) {  // On Mobile
        justify-content: center;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        justify-content: flex-end;
    }

`;

const ProjectsContentContainer = styled(Row)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 950px;
    min-height: 100px;
    // background-color: grey; // testing

    @media only screen and (max-width: 600px) {  // On Mobile
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 30px;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        margin-top: 50px;
        margin-right: 200px;

    }
    
`;

const InfoBoxAnimation = keyframes`
    from{ 
        background-color: rgba(147, 36, 50, 0.4);
    }

    to {
        background-color: rgba(222, 53, 76, 0.8);
    }
`;

const ProjectsInfoBox = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    background-color: rgba(${props => props.backcolor || ""});
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px 50px 30px;

    /* animation: ${InfoBoxAnimation} 2s ease-in-out alternate infinite; */

    &:hover{
        /* animation-play-state: paused; */
        /* background-color: white; */
        background-color: rgba(243, 243, 243, 0.8);
    }

    @media only screen and (max-width: 600px) {  // On Mobile
        min-width: 320px;
        min-height: 50px;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        min-width: 300px;
        min-height: 50px;
    }
`;

const InfoData = styled.span`
    background-color: ${props => props.backcolor || ""};
    font-weight: bold;
    font-size: ${props => props.fontsize || "22px"};
    color: ${props => props.fontcolor || "black"};
    direction: rtl;
    margin: 10px;
    padding: 5px;

    &:hover{
        color: black;
    }
`;

const InfoLink = styled.a`
    color: white;

    &:hover{
        color: black;
    }
`;

const Projects = (props) => {

    return (
        <ProjectsPageContainer>
            <ProjectsContentContainer>
                <ProjectsInfoBox backcolor="147, 36, 50, 0.8">
                    {/* <InfoData>
                        <a href="https://www.shlomo.redboxteams.com/" target="_blank" rel="noopener noreferrer">
                        שלמה מחשוב הייצור&nbsp;&nbsp;-&nbsp;&nbsp;
                        אתר הזמנות חומרים&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{color: "white"}}><u>בתהליך בנייה</u></span>
                        </a>
                    </InfoData> */}
                    <InfoData>
                        <InfoLink style={{  }} href="https://www.shlomo.redboxteams.com/" target="_blank" rel="noopener noreferrer">
                        שלמה מחשוב הייצור&nbsp;&nbsp;-&nbsp;&nbsp;
                        אתר הזמנות חומרים&nbsp;&nbsp;&nbsp;&nbsp;
                        </InfoLink>
                    </InfoData>
                </ProjectsInfoBox>
                <ProjectsInfoBox backcolor="68, 184, 172, 0.8">
                    <InfoData>
                        <InfoLink style={{  }} href="https://www.shopping.redboxteams.com/" target="_blank" rel="noopener noreferrer">
                        קניות עושים במוג׳ו&nbsp;&nbsp;-&nbsp;&nbsp;
                        תיווך מוצרים&nbsp;&nbsp;&nbsp;&nbsp;
                        </InfoLink>
                    </InfoData>
                </ProjectsInfoBox>
                <ProjectsInfoBox backcolor="68, 184, 172, 0.8">
                    <InfoData>
                        ...
                    </InfoData>
                </ProjectsInfoBox>
            </ProjectsContentContainer>
        </ProjectsPageContainer>
    );

}


export default Projects;


