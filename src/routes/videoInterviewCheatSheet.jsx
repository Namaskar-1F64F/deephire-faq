import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';
import ImageFunction from './imageFunction.jsx';
import { SiderDemo } from '../sider.jsx';

const markdown = 
`## Last minute interview tips.`

const { Title } = Typography;

export default function CheatSheet() {
    return (
        <div>
            <Row>
                <Col span={4}>
                </Col>
                <Col span={16}>
                    <Title style={{justifyContent: 'center'}}>Interview Cheat Sheet</Title>
                </Col>
                <Col span={4}></Col>
            </Row>
            <br></br>
            <Row>
                <Col span={4}>                    
                    <SiderDemo />
                </Col>
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
                    src="https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_cy119m.png"
                    alt="Deephire CheatSheet"/>
                </Col>
                <Col span={4}></Col>
            </Row>
        </div>
    );
}