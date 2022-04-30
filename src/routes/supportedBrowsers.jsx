import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';
import ImageFunction from './imageFunction';
// import { SiderDemo } from '../sider';

const markdown =
    `# Browser Support
For iPhone, the interview will only work in Safari. It will not work if you open it through Gmail. Please copy the link and paste it in the Safari Browser if you are having issues.

If possible, please take the interview on a computer with a webcam/mic as it will have higher quality video and audio.`


const { Title } = Typography;

export default function SupportedBrowsers() {
    return (
        <>
            <Row>
                <Col xs={0} sm={4}>
                </Col>
                <Col xs={24} sm={16}>
                    <Title style={{ justifyContent: 'center' }}>Supported Browsers</Title>
                </Col>
                <Col xs={0} sm={4}></Col>
            </Row>
            <Row>

                <Col xs={0} sm={4}>
                    {/* <SiderDemo /> */}
                </Col>
                <Col xs={24} sm={20}>
                    <Row>
                        <Col xs={24} sm={20}>
                            <ReactMarkdown
                                children={markdown}>
                            </ReactMarkdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={20}>
                            <ImageFunction
                                src={'https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_1kg9bhn.png'}
                                alt={'Supported browsers for IOS and Android'} />
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Col>
            </Row>
        </>
    );
}