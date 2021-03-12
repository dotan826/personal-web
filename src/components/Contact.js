import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Button, Input, Modal } from 'antd';
import { WhatsAppOutlined, MailOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';
import axios from 'axios';
import { base } from './globals.js';

const { TextArea } = Input;

const ContactPageContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 600px) {  // On Mobile
        justify-content: center;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        justify-content: center;
    }

`;

const ContactContentContainer = styled(Row)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 950px;
    min-height: 100px;
    // background-color: grey; // testing

    @media only screen and (max-width: 600px) {  // On Mobile
        // margin-left: 20px;
        // margin-right: 20px;
        // margin-top: 30px;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        // margin-top: 50px;
        // margin-right: 100px;

    }
    
`;

const ContactInfoBox = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    background-color: rgba(${props => props.backcolor || ""});

    @media only screen and (max-width: 600px) {  // On Mobile
        margin-top: 30px;
        margin-bottom: 30px;
        max-width: 320px;
        min-height: 50px;
        flex-direction: column;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        min-width: 300px;
        min-height: 50px;
        margin-top: 100px;
    }

    text-align: center;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    // border-radius: 10%;
    border-radius: 15px 50px 30px;

`;

const FormDisplay = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormLine = styled.div`
    display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    margin: 10px;
    font-weight: bold;
    font-size: 20px;

    @media only screen and (max-width: 600px) {  // On Mobile
        flex-wrap: wrap-reverse;
        justify-content: center;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        justify-content: space-between;
    }
`;

const FormInput = styled(Input)`
    margin: 10px;
    font-weight: bold;
    

    @media only screen and (max-width: 600px) {  // On Mobile
        margin: 0px;
        max-width: 250px;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        min-width: 300px;
    }
`;

const FormTextArea = styled(TextArea)`
    margin: 10px;
    font-weight: bold;
    // display: inline-block;

    @media only screen and (max-width: 600px) {  // On Mobile
        margin: 0px;
        width: 250px;
    }

    @media only screen and (min-width: 600px) {  // On Computer
        width: 300px;
    }
`;

const FormLabel = styled.label`
    margin: 10px;
    min-width: 130px;

    @media only screen and (max-width: 600px) {  // On Mobile
        margin: 0px;
    }
`;

const FormButton = styled(Button)`
    margin: 10px;
    font-weight: bold;
    font-size: 20px;
    width: auto;
    height: auto;

    @media only screen and (max-width: 600px) {  // On Mobile
        
    }
`;

const Contact = (props) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [msg, setMsg] = useState("");
    const [sendLoading, setSendLoading] = useState(false);

    const onFormChange = (e) => {
        if(e.target.name.localeCompare("name") === 0){
            setName(e.target.value);
        }
        else if(e.target.name.localeCompare("phone") === 0){
            setPhone(e.target.value);
        }
        else if(e.target.name.localeCompare("mail") === 0){
            setMail(e.target.value);
        }
        else if(e.target.name.localeCompare("msg") === 0){
            setMsg(e.target.value);
        }
    }

    const onFormSend = () => {
        setSendLoading(true);
        if(name.localeCompare("") === 0 || phone.localeCompare("") === 0 || mail.localeCompare("") === 0 ){
            Modal.info({
                title: 'חסר נתונים',
                content: "חובה למלא את השדות : שם, טלפון ודואר אלקטרוני - ואז ללחוץ על שלח",
              });
              setSendLoading(false);
        }
        else if(name.length > 20){
            Modal.info({
                title: 'תיקון נתונים',
                content: "שם יכול להכיל עד 20 תווים",
              });
              setSendLoading(false);
        }
        else if(phone.length > 15){
            Modal.info({
                title: 'תיקון נתונים',
                content: "טלפון יכול להכיל עד 15 תווים",
              });
              setSendLoading(false);
        }
        else if(mail.length > 50){
            Modal.info({
                title: 'תיקון נתונים',
                content: "מייל יכול להכיל עד 50 תווים",
              });
              setSendLoading(false);
        }
        else if(msg.length > 100){
            Modal.info({
                title: 'תיקון נתונים',
                content: "תוכן הודעה יכול להכיל עד 100 תווים",
              });
              setSendLoading(false);
        }
        else{
            axios.post(base + "/contact",{
                name: name,
                phone: phone,
                mail: mail,
                msg: msg
              }).then((res)=>{
                //   console.log(res);
                if(res.data){ // if email send success
                    Modal.success({
                        content: 'הודעתך נשלחה! תודה.',
                      });
                      setName("");
                      setPhone("");
                      setMail("");
                      setMsg("");
                }
                else{
                    Modal.error({
                        title: 'שגיאת התחברות',
                        content: 'נא נסו שנית או בחרו באחת הדרכים המוצעות מטה',
                      });
                }
                  setSendLoading(false);
              });
        }
    }

    return(
        <ContactPageContainer>
            <ContactContentContainer>
                <ContactInfoBox backcolor="127, 205, 205, 0.8">
                        <FormDisplay>
                            <FormLine>
                                <FormInput type="text" name="name" onChange={(e)=>{onFormChange(e)}} value={name} style={{direction: "rtl"}} placeholder="שם מלא" required={true}></FormInput>
                                <FormLabel>שם מלא</FormLabel>
                            </FormLine>
                            <FormLine>
                                <FormInput type="text" name="phone" onChange={(e)=>{onFormChange(e)}} value={phone} style={{direction: "rtl"}} placeholder="טלפון"></FormInput>
                                <FormLabel>טלפון</FormLabel>
                            </FormLine>
                            <FormLine>
                                <FormInput type="text" name="mail" onChange={(e)=>{onFormChange(e)}} value={mail} placeholder="E-Mail"></FormInput>
                                <FormLabel>דואר אלקטרוני</FormLabel>
                            </FormLine>
                            <FormLine>
                                <FormTextArea name="msg" autoSize="true" onChange={(e)=>{onFormChange(e)}} value={msg} style={{direction: "rtl"}} placeholder="פירוט הפנייה"></FormTextArea>
                                <FormLabel>תוכן הודעה</FormLabel>
                            </FormLine>
                            <FormLine style={{justifyContent: "center"}}>
                                <FormButton type="primary" onClick={()=>{onFormSend()}} loading={sendLoading}>שלח</FormButton>
                            </FormLine>
                        </FormDisplay>
                </ContactInfoBox>
                <ContactInfoBox backcolor="155, 35, 53, 0.8">
                    <FormButton type="link">
                        <a href="tel:0526368099" rel="noopener noreferrer"><PhoneOutlined />&nbsp;התקשר</a>
                    </FormButton>
                    <FormButton type="link">
                        <a href="mailto:dotantz26@gmail.com" rel="noopener noreferrer"><MailOutlined />&nbsp;Email</a>
                    </FormButton>
                    <FormButton type="link">
                        <a href="https://www.linkedin.com/in/dotan-tzarfaty" target="_blank" rel="noopener noreferrer"><LinkedinOutlined />&nbsp;LinkedIn</a>
                    </FormButton>
                    <FormButton type="link">
                        <a href="https://wa.me/972526368099" target="_blank" rel="noopener noreferrer"><WhatsAppOutlined />&nbsp;WhatsApp</a>
                    </FormButton>
                </ContactInfoBox>
            </ContactContentContainer>
        </ContactPageContainer>
    );

}


export default Contact;


