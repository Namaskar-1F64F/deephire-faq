import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';
import ImageFunction from './imageFunction';
// import { SiderDemo } from '../sider';

const markdown =
    `# Congratulations on being selected for a One Way Interview!

## What is a one way video interview?

Your recruiter wants to move you to the next step of the recruiting process, and has a few interview questions that they requested you respond to. A One Way Interview consists of you answering text based questions on your own time, using your webcam or smartphone.

This is a One Way Video Interview - which means you can answer each question on video, at your own convenience (with unlimited retakes!)

## Why am I being asked to do one?

You are being asked to do a One Way Interview because you stand out amongst all other candidates, and the company + recruiter wants to learn more about you! This is the easiest and fastest way for you to lock down an in person or phone interview with the company. Video is an opportunity to showcase your personality, and show why you're a great fit for the position.

## Who watches my videos?

The company looking to hire you (and your recruiter) watch your videos from a private, secure account. Only those involved in your hiring process will watch your videos.

## Are there any tips for the interview?
Yes! Click around our [helpdesk](add link here) for lots of tips and tricks to optimize your video interview.

## What's in it for me?

Because you can take the interview on your own time, it gives you the opportunity to prepare and set up a comfortable setting so that you can showcase yourself in the best possible way. 

## What are my next steps?

When you are ready to take the video interview, click the interview link your recruiter sent to you. 

We are here to support you every step of the way.

## When I click the link, what can I expect? 

When you click your interview link, you will be able to watch an Introduction Video provided by your recruiter. 

The video typically introduces the job details to you, and will explain the rest of the process. 

## Can I do a Practice Interview to see what it will be like? 

There is no practice interview but depending on your configuration you should have unlimited retakes.

This means you should be able to practice by recording, then clicking the retake button. Videos are never submitted unless you choose to submit them. 


## What if I don't have a webcam?

If you don't have a webcam on your computer, you can access the interview on your phone or tablet. 

Just open the interview link on the browser app of your phone (usually Safari or Chrome).`

const markdownFinalFinal = `Good luck, you're going to do great!`

const { Title } = Typography;

export default function PracticeInterview() {
    return (
        <>
            <Row>
                <Col xs={0} sm={4}>
                </Col>
                <Col xs={24} sm={16}>
                    <Title style={{ justifyContent: 'center' }}>One Way Interview Instructions</Title>
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

                    </Row>
                    <br></br>
                    <Row>

                    </Row>

                    <Row>

                    </Row>
                    <Row>
                        <Col xs={24} sm={20}>
                            <ReactMarkdown
                                children={markdownFinalFinal}>
                            </ReactMarkdown>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}