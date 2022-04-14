import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';
import ImageFunction from './imageFunction';

const markdown = 
`# Browser Support
For iPhone, the interview will only work in Safari. It will not work if you open it through Gmail. Please copy the link and paste it in the Safari Browser if you are having issues.

If possible, please take the interview on a computer with a webcam/mic as it will have higher quality video and audio.` 

const markdownFinal = `> If you have any issues send us a message in the bottom right!`

const { Title } = Typography;

export default function SupportedBrowsers() {
    return (
        <div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Title style={{justifyContent: 'center'}}>Supported Browsers</Title>
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
                    src= {'https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_1kg9bhn.png'}
                    alt= {'Supported browsers for IOS and Android'}/>
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