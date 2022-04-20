import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';
// import { SiderDemo } from '../sider';

const markdown = 
`## What are common mistakes candidates make?

1. Candidates don't realize they can retake the interview.
2. Candidates don't realize there is a time limit for the questions.
3. Candidates don't know what to expect from the one way interview.
4. Candidates don't know what device to use.
5. Candidates don't know how to answer the questions.
6. Candidates don't know how to make a good video.
7. Candidates don't know what to wear for the interview.
8. Candidates don't create an environment conducive to an interview.

Keep reading so you can avoid these mistakes!

## Can I retake an Interview?

**You can retake an individual question during the interview process.**

DeepHire gives companies the ability to set how many times a job seeker can re-record their answers during an interview. The recruiter/hiring manager will define the number of retakes available to a candidate, so use retakes sparingly and try to do your best on each question. Most recruiters allow unlimited retakes, if you have a limit, you will be notified before your interview starts.

You will see how many **Retakes** you have available to use while completing your One Way Video Interview. Each question also has as associated **Prep Time** - the amount of time you have to view the question, and think of your response before the recording automatically starts. 

The number of **Retakes** for a specific question refers to the number of times you can attempt to answer that question. When you run out of **Retakes**, you will no longer be able to re-record and your most recent answer will be submitted.

However, you cannot retake an entire interview, so make sure to review your answer and decide whether you’d like a retake before hitting ‘Submit’ in the bottom-right. If you need to retake the entire interview due to a technical issue, message our support.

To retake an individual question simply click the ‘Retake’ button in the bottom left of your last recorded question.

**IMPORTANT:** If you run out of retakes due to any technical difficulties the chat-box in the very bottom right corner of the webpage can be accessed for live support 24/7, and we will report the issues to your recruiter to encourage a new interview to be conducted.

If you run into any problems, reach out through the chat button on the bottom right of your screen. We would be happy to help!

## Is there a time limit for interview questions? 

Recruiters and hiring managers will usually set a time limit for each interview question.
Manage your response time accordingly.
To help manage your time effectively refer to the question-clock in the upper right corner while recording an interview:

**Time Management Quick Tip:** Use the STAR Method [Link to STAR Method FAQ Article] to guide your responses. Here are some general guidelines for how long to spend on each component of a professional response:

* **Situation:** Spend 10% of your time explaining the background information
* **Task:** Spend 20% of your time describing your task or goal in this example; what responsibilities were you specifically asked to fulfill?
* **Action:** Spend 50% of your time explaining how you took positive action to achieve your goal, and what challenges you overcame throughout the process.
* **Result:** Spend the last 20% of your time talking about the outcomes of your action.

### What does STAR stand for? 

* **S**ituation: Set the scene and briefly describe the background info for your example.
* **T**ask: Describe what your goal or assigned responsibility was for the situation.
* **A**ction: Explain exactly what steps you took to achieve your goal, what challenges did you overcome, how did you make it to the finish line?
* **R**esult: Explain the outcome of your actions. What changed? Did you meet the goal? Change any processes? How did you measure your results?

### Why use STAR?
* Every recruiter recognizes and understands the format well, you’ll be understood.
* It’s an easy way to outline a story without rambling or adding useless details.
* It’s a very easy acronym to remember: STAR, Situation, Task, Action, Result.
* You’ll never forget an important piece of an otherwise perfect explanation.

## What to expect from a One-Way Video Interview? 

Many candidates are used to traditional face-to-face interviewing and may have less experience with video interviewing. These FAQs will highlight the process, key differences, and best practices for completing a one-way video interview. 

**Process Video:** 
[Will’s Video Here]

**Key Differences between a one-way interview and a traditional interview:**
A one-way interview is not a dialogue/conversation like a face-to-face interview
You will have time to prepare for each interview question at your leisure unlike in a face-to-face interview, use this time to polish and practice how you’d like to present yourself in your response. 
There will  be a non-negotiable time limit for answering your questions.
You will be able to review (and retake if allowed by the recruiter/hiring manager) your questions before submitting them.

## How do I make a Good Video?

To learn how to best answer interview questions, not just how to record please see here [LINK TO HOW TO ANSWER LIKE A PRO ARTICLE]

**Best Practices:** 
* Present yourself professionally
* Dress to Impress
    * Appropriately dressed candidates are 43% more likely to land the job!
* Confident body language 
    * Sit up straight, relax your shoulders, breathe calmly before beginning. Non-verbal signals are a huge part of an employer's decision process.
    * Smile! Before every response make sure you’re coming across as a cheery person you’d like to work with by smiling. 
* Clean your recording environment
    * In a video interview the interviewer also notices your surroundings unlike an onsite interview. 
    * Make your environment an extension of how you’d like to present yourself professionally. 
    * When in doubt: just sit in front of a clean, blank wall.
* Pay attention to video quality
    * Adjust the lighting in your area. 
    * We recommend sitting across from a well lit window or a relatively bright lamp. 
    * Don’t let the light source face the camera or your face will be very difficult to see!
* Use Retakes to Your Advantage
    * See this article on [RETAKE ARTICLE LINK].
    * Prepare to do your best on each attempt, but there’s no pressure on a one-way video interview! If you’re unsatisfied with your performance simply hit ‘Retake’ in the bottom right when reviewing your response.
    * Review your videos after each question to ensure video quality, audio quality, etc. are looking good and staying consistent throughout the interview.
* Eliminate any potential distractions
    * Silence your cell phone.
    * Let the people around you know that you can’t be interrupted for 30-45 minutes.
    * Lock your door and turn off any noisy appliances nearby.
* Refer to your notes and resources
    * Have your resume nearby, it will help you remember relevant job experience and your proudest accomplishments.
    * Have a notepad and pen nearby, taking notes will organize your thoughts and keep you on track for your responses.

## What Device do I Need to Complete a One-Way Video Interview?

DeepHire is a very flexible platform in regards to interview completion!

A DeepHire Interview can be completed on any wifi-connected device with a camera and microphone. 
Everything on the platform operates off a one-click link, no external app downloads, no setup time. Just click your link and hit ‘Record Answer’ on any phone, tablet, or computer!
If you encounter any technical issues, use the chatbox in the bottom right corner of the webpage to contact our live tech support team. We can help with any camera, connection, or software issue. 

## How do I answer Interview Questions like a Professional? 

DeepHire and professional recruiters everywhere recommend the STAR Method for effectively answering interview questions that ask something like: 
* Give an example of a time when....
* How would you handle a situation like…
* Describe a situation in which…
* Or any question where you need to tell a story to prove your prior experience!`

const { Title } = Typography;


export default function FrequentlyAskedQuestions() {
    return (
        <>
            <Row>
                <Col xs={0} sm={4}>
                </Col>
                <Col xs={24} sm={16}>
                    <Title style={{justifyContent: 'center'}}>Frequently Asked Questions</Title>
                </Col>
                <Col xs={0} sm={4}></Col>
            </Row>
            <Row>
                <Col xs={0} sm={4}>
                    {/* <SiderDemo /> */}
                </Col>
                <Col xs={24} sm={16}>
                    <ReactMarkdown 
                    children={markdown}>
                    </ReactMarkdown>
                </Col>
            </Row>
        </>
    );
}