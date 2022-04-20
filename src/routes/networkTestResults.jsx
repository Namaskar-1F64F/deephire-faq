import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';
import ImageFunction from './imageFunction';
// import { SiderDemo } from '../sider';

const markdown = 
`# The following steps will help us debug and diagnose your issue!

## Video Tutorial 

[TAKE NETWORK TEST
](https://tokbox.com/developer/tools/precall/results)
Here is a [video](https://www.loom.com/share/a87f03992c4f4b30a7266fba9659475d) outlining the steps.

## Text Tutorial 

1. Click the following link to take our [Network Test](https://tokbox.com/developer/tools/precall/results)
2. Wait for the Network Test to complete
3. Once the Network test completes, scroll to the very bottom of the page
4. Click "Save this data as simple text"
5. Copy the results, and send it in the chatbox.`

const markdownFinal = 
`Awesome! All done! If you have any problems with any of these steps, let us know in the chat!`

const { Title } = Typography;


export default function NetworkTestResults() {
    return (
        <>
            <Row>
                <Col xs={0} sm={4}>
                </Col>
                <Col xs={24} sm={16}>
                    <Title style={{justifyContent: 'center'}}>Network Testing</Title>
                </Col>
                <Col xs={0} sm={4}></Col>
            </Row>
            <Row>
                <Col xs={0} sm={4}>
                    {/* <SiderDemo /> */}
                </Col>
                <Col xs={24} sm={16}>
                    <Row>
                        <Col>
                            <ReactMarkdown 
                            children={markdown}>
                            </ReactMarkdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ImageFunction
                            src={'https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_grtv9g.png'}
                            alt={'Send your results in the chatbox'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ReactMarkdown
                            children={markdownFinal}>
                            </ReactMarkdown>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}