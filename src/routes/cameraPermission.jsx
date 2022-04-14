import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';
import ImageFunction from './imageFunction.jsx';

const markdown = 
`### The error ***Camera Permissions Denied*** usually occurs when your browser permissions do not allow access to the camera.

> If you are on your computer, or on Android, we suggest doing the interview on either Google Chrome or Firefox. If you are on iOS please use Safari.

### Here is how you can change your camera permissions on Google Chrome:`;

const markdownAndroidImage = 
`### Here is how you can change your camera permissions on an Android device:`;

const markdownFinal =
`> If none of this helps you, please send a message to our support (icon on bottom right) and we will help you out.`;

const { Title } = Typography;


export default function CameraPermission() {
    return (
        <div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Title style={{justifyContent: 'center'}}>Camera Permissions</Title>
                </Col>
                <Col span={4}></Col>
            </Row>
            <br></br>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <ReactMarkdown 
                    children={markdown}>
                    </ReactMarkdown>
                </Col>
                <Col span={4}></Col>
            </Row>
            <br></br>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <ImageFunction
                    src= {'https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_1yvwohq.png'}
                    alt= {'Enable Camera Permissions Chrome (Laptop or Desktop)'}/>
                </Col>
                <Col span={4}></Col>
            </Row>
            <br></br>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <ReactMarkdown
                    children={markdownAndroidImage}>
                    </ReactMarkdown>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <ImageFunction 
                    src= {'https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_9yuwqb.png'}
                    alt= {'Enable Camera Permissions (Android)'}/>
                </Col>
                <Col span={4}></Col>
            </Row>
            <br></br>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <br></br>
                    <ReactMarkdown
                    children={markdownFinal}>
                    </ReactMarkdown>
                </Col>
                <Col span={4}></Col>
            </Row>
        </div>
    );
}