import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';

const markdown = 
`## Common Mistakes:
1. Candidates don't realize they can retake 
2. Candidates don't realize there is a time limit for the questions
3. Candidates don't know what to expect from the one way interview
4. Candidates don't know what devices they can use
5. Candidates don't know how to answer the questions
6. Candidates don't know how to make a good video
7. Candidates don't know what to wear for the interview
8. Candidates don't silence their phones during the recording and have alarm bell notifications going off

## Best Practices: 
* Present yourself professionally
* Dress to Impress; appropriately dressed candidates are 43% more likely to land the job!
* Smile! Before every response make sure you’re coming across as a cheery person you’d like to work with by smiling. 
* Confident body language: sit up straight, relax your shoulders, breathe calmly before beginning. Non-verbal signals are a huge part of an employer's decision process.
* Clean your recording environment
* In a video interview the interviewer also notices your surroundings unlike an onsite interview. Make your environment an extension of how you’d like to present yourself professionally. When in doubt: just sit in front of a clean, blank wall.
* Pay attention to video quality
* Adjust the lighting in your area. We recommend sitting across from a well lit window or a relatively bright lamp. Don’t let the light source face the camera or your face will be very difficult to see!
* Use retakes to your advantage
    * See this article on [RETAKE ARTICLE LINK]
* Prepare to do your best on each attempt, but there’s no pressure on a one-way video interview! If you’re unsatisfied with your performance simply hit ‘Retake’ in the bottom right when reviewing your response
* Eliminate any potential distractions
* Silence your cell phone
* Let the people around you know that you can’t be interrupted for 30-45 minutes
* Lock your door and turn off any noisy appliances nearby
* Refer to your notes and resources
* Have your resume nearby, it will help you remember relevant job experience and your proudest accomplishments
* Have a notepad and pen nearby, taking notes will organize your thoughts and keep you on track for your responses`

const { Title } = Typography;


export default function MistakesBestPractice() {
    return (
        <div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Title style={{justifyContent: 'center'}}>Common Mistakes and Best Practices</Title>
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