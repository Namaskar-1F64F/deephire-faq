import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';

const markdown = 
`## Can I retake an Interview?

**You can retake an individual question during the interview process.**

However, you cannot retake an entire interview, so make sure to review your answer and decide whether you’d like a retake before hitting ‘Submit’ in the bottom-right. If you need to retake the entire interview due to a technical issue, message our support.
To retake an individual question simply click the ‘Retake’ button in the bottom left of your last recorded question.

The recruiter/hiring manager will define the number of retakes available to a candidate, so use retakes sparingly and try to do your best on each question. Most recruiters allow unlimited retakes, if you have a limit, you will be notified before your interview starts.
REVIEW: If you run out of retakes due to any technical difficulties the chat-box in the very bottom right corner of the webpage can be accessed for live support 24/7, and we will report the issues to your recruiter to encourage a new interview to be conducted.`

const { Title } = Typography;


export default function Retakes() {
    return (
        <div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Title style={{justifyContent: 'center'}}>Retaking Interview Questions</Title>
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
        </div>
    );
}