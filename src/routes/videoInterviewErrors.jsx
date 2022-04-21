import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';
// import { SiderDemo } from '../sider';
import ImageFunction from './imageFunction';

const markdown = 
`## Debugging steps if you have an issue with your interview:

1. Completely close the browser and click on your interview again. This should resolve 80% of issues.
2. Run this additional network test: [https://tokbox.com/developer/tools/precall/results](https://tokbox.com/developer/tools/precall/results) 
3. Try on a different browser or network

## Steps to fix issues with video/audio
1. Make sure you are using a supported browser.
2. Make sure that video/audio permisons are enabled in your browser
3. Make sure that video/audio permisions are enabled on your device
4. Disconnect from your VPN
5. Make sure that you have a working webcam and microphone


##  1. Make sure you are using a supported browser.
On Windows/Android/MacOS the reccomended browser is Google Chrome. On iOS the reccomended browser is Safari.

[One-Way Video Introduction - Supported Browsers](/en/article/supported-browser-list-agyz4m/)

[Live Two-Way Video Interview - Supported Browsers](/en/article/supported-browser-list-agyz4m/)

## 2. Make sure that video/audio permissions are enabled in your browser:
[Chrome - How to Enable Video Permissions](/en/article/supported-browser-list-agyz4m/)

## 3. Make sure that video/audio permisions are enabled on your device:
If you have followed all of the above steps and it is still not working, next you should [click here to test your audio/microphone](https://tokbox.com/developer/tools/precall/results)

If there are issues with your audio or microphone from that test, click the link below to check if your device level camera permissions are enabled. 

[Windows - How to Enable Video Permissions](/en/article/enable-camera-permissions-in-windows-rg8up1/)

## 4. Disconnect from your VPN
Sometimes VPN's stop DeepHire from working correctly. Disconnect from your VPN then refresh the page. 

## 5. Make sure that you have a working webcam and microphone
Double check that your webcam and microphone are plugged in, and test them in another applications to make sure they are working correctly. 

If none of these solutions work for you, please send us a message using the chatbox on the bottom right. 

_________________________________________________________________

## The error ***Camera Permissions Denied*** usually occurs when your browser permissions do not allow access to the camera.

> If you are on your computer, or on Android, we suggest doing the interview on either Google Chrome or Firefox. If you are on iOS please use Safari.

### Here is how you can change your camera permissions on Google Chrome:`

const markdownAndroidImage = 
`### Here is how you can change your camera permissions on an Android device:`;

const markdownFinal =
`## Follow the below instructions to make sure your camera permissions are enabled on Windows:`;

const markdownFinalFinal = `### You should see a page like this. Make sure Google Chrome has camera access.`

const markdownFinalFinalFinal = `### Make sure "Allow Desktop Apps to Access Your Camera" is set to on. 

### After changing this permission close and reopen Google Chrome. 

If you are still having issues - contact our tech support team by clicking the button in the lower right corner of your screen.

If none of this helps you, please send a message to our support (icon on bottom right) and we will help you out.`;

const { Title } = Typography;

export default function VideoInterviewErrors() {
    return (
        <>
            <Row>
                <Col xs={0} sm={4}>
                </Col>
                <Col xs={24} sm={16}>
                    <Title style={{justifyContent: 'center'}}>Video Interview Errors</Title>
                </Col>
                <Col xs={0} sm={4}></Col>
            </Row>
            <Row>
                <Col xs={0} sm={4}>
                    {/* <SiderDemo /> */}
                </Col>
                <Col xs={24} sm={20}>
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
                            src= {'https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_1yvwohq.png'}
                            alt= {'Enable Camera Permissions Chrome (Laptop or Desktop)'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ReactMarkdown
                            children={markdownAndroidImage}>
                            </ReactMarkdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ImageFunction 
                            src= {'https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_9yuwqb.png'}
                            alt= {'Enable Camera Permissions (Android)'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ReactMarkdown
                            children={markdownFinal}>
                            </ReactMarkdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ImageFunction 
                            src= {'https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_t1xko5.png'}
                            alt= {'Make sure Chrome is ON'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ReactMarkdown
                            children={markdownFinalFinal}>
                            </ReactMarkdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ImageFunction 
                            src= {'https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_w2wzfh.png'}
                            alt= {'Make sure Google Chrome has camera access'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ReactMarkdown
                            children={markdownFinalFinalFinal}>
                            </ReactMarkdown>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}