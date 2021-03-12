import React, { useState } from 'react';
import './App.less';
import { Layout, Row, Col, Breadcrumb, ConfigProvider } from 'antd';
import WebIcon from './images/logo_transparent.png';
import pictureAbout from './images/about.jpg';
import pictureProjects from './images/projects.jpg';
import pictureContact from './images/contact.jpg';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { XS_SCREEN, LG_SCREEN } from './components/globals';

const { Content, Footer } = Layout;

const LayoutStyled = styled(Layout)`
  background-image: url(${props => props.picture || pictureAbout});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

const HeaderMenuAndIcon = styled(Row)`

  @media only screen and (max-width: ${XS_SCREEN}px) {  // On Mobile
    justify-content: center;
  }

  @media only screen and (min-width: ${LG_SCREEN}px) {  // On Computer

  }
`;

const PageIcon = styled(Col)`

`;

const PageMenuBar = styled(Col)`

`;

const PageMenu = styled(Breadcrumb)`
  font-weight: bold;
  font-size: 16px;
`;

const MenuButtonLink = styled(Breadcrumb.Item)`
  margin-right: 10px;
  margin-left: 10px;
  color: white;
    &:hover{
      color: #8A2BE2;
      cursor: pointer;
    }
    @media only screen and (max-width: ${XS_SCREEN}px) {  // On Mobile
      margin-right: 0px;
      margin-left: 0px;
    }
    @media only screen and (min-width: ${LG_SCREEN}px) {  // On Computer

    }
`;

const App = (props) => {

  const [page, setPage] = useState("About");
  const [pageBackgroundPicture, setPageBackgroundPicture] = useState(pictureAbout);

  const loadPage = (page) => { // set page + layout background
    setPage(page);
    if(String(page).localeCompare("About") === 0){
      setPageBackgroundPicture(pictureAbout);
    }
    else if(String(page).localeCompare("Projects") === 0){
      setPageBackgroundPicture(pictureProjects);
    }
    else{
      setPageBackgroundPicture(pictureContact);
    }
  }

  return (
    <LayoutStyled picture={pageBackgroundPicture}>

      <Content>
        <Row justify="center" >
          <Col span={18}>
          <ConfigProvider direction="rtl">
            <HeaderMenuAndIcon align="middle">
              <PageIcon>
                  <img src={WebIcon} alt="WebIcon" style={{ maxWidth: "140px" }}></img>
              </PageIcon>
              <PageMenuBar>
              <PageMenu>
                <MenuButtonLink onClick={()=>{loadPage("About")}}>
                  <UserOutlined />
                  <span>אודות</span>
                </MenuButtonLink>
                <MenuButtonLink onClick={()=>{loadPage("Projects")}}>
                  <UserOutlined />
                  <span>פרויקטים</span>
                </MenuButtonLink>
                <MenuButtonLink onClick={()=>{loadPage("Contact")}}>
                  <UserOutlined />
                  <span>צור קשר</span>
                </MenuButtonLink>
              </PageMenu>
              </PageMenuBar>
            </HeaderMenuAndIcon>
            </ConfigProvider>
          </Col>
        </Row>

          {page.localeCompare("About") === 0 ? <About></About> : null}
          {page.localeCompare("Projects") === 0 ? <Projects></Projects> : null}
          {page.localeCompare("Contact") === 0 ? <Contact></Contact> : null}

      </Content>

      <Footer>
        <Row justify="center">
          <Col style={{fontWeight: "bold", color: "#BC243C"}}>
            Let’s Build The Future Together
          </Col>
        </Row>
      </Footer>

    </LayoutStyled>
  );
}

export default App;
