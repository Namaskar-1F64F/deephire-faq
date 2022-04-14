import { Row, Col, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';

const markdown = 
`# Here is a list of 70 example interview questions:

1. What specific goals, other than those related to your occupation, have you established for yourself for the next years?
2. What do you see yourself doing five years from now?
3. Provide an example of a long-range career goal?
4. How do you plan to achieve your career goals?
5. Why did you choose the career for which you are preparing?
6. What do you consider to be your greatest strengths and weaknesses?
7. How would you describe yourself?
8. How would your friends describe you? How would your professors describe you?
9. What motivates you to put forth your greatest effort?
10. How has your college experience prepared you for a career?
11. What qualifications do you have that you think will make you successful in this profession?
12. How do you know that you have been successful?
13. What qualities should a successful employee in this role possess?
14. What qualities should a successful manager possess?
15. Describe the relationship that should exist between a supervisor and subordinates.
16. Discuss two or three accomplishments that have given you the most satisfaction.
17. If you were hiring a recent graduate for this position, what qualities would you look for?
18. Why did you decide to attend [your school]? What led you to choose your major(s)/area(s) of study?
19. What advice would you share with a first-year student at [your school]?
20. What college subjects did you like best? Which did you like least?
21. If you could do so, how would you plan your academic study differently? Why?
22. Describe one change you would recommend be implemented at [your school].
23. Do you have plans for continued study? An advanced degree?
24. Do you think that your grades are a good indication of your academic achievement?
25. What have you learned from participation in extracurricular activities?
26. In what kind of work environment are you most comfortable?
27. Why did you decide to apply for this opportunity?
28. What criteria are you using to evaluate the employer for which you hope to work?
29. Do you have a geographical preference? Why?
30. Will you relocate? How do you feel about relocation?
31. Are you willing to travel?
32. Are you willing to spend at least six months as a trainee?
33. What major problems have you encountered in your studies, and how did you deal with them?
34. What have you learned from your mistakes?
35. What are your strengths?
36. What are your weaknesses?
37. Why do you want to leave your current company?
38. What can you offer us that someone else can not?
39. What are three things your former manager would like you to improve on?
40. What is your dream job?
41. How did you hear about this position?
42. What would you look to accomplish in the first 30 days/60 days/90 days on the job?
43. Discuss your resume.
44. Discuss your educational background.
45. Describe yourself.
46. Tell me how you handled a difficult situation.
47. Why should we hire you?
48. Why are you looking for a new job?
49. Would you work holidays/weekends?
50. How would you deal with an angry or irate customer?
51. Give a time when you went above and beyond the requirements for a project.
52. What motivates you?
53. What’s your availability?
54. Who’s your mentor?
55. Tell me about a time when you disagreed with your boss.
56. How do you handle pressure?
57. What are your career goals?
58. What gets you up in the morning?
59. What would your direct reports say about you?
60. What were your bosses’ strengths/weaknesses?
61. If I called your boss right now and asked him/her what is an area that you could improve on, what would he/she say?
62. What was the last book you’ve read for fun?
63. What are your co-worker pet peeves?
64. What are your hobbies?
65. What is your favorite website?
66. What makes you uncomfortable?
67. What are some of your leadership experiences?
68. How would you fire someone?
69. What do you like the most and least about working in this industry?
70. What questions haven’t I asked you?`

const { Title } = Typography;

export default function SampleQuestions() {
    return (
        <div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Title style={{justifyContent: 'center'}}>Sample Questions</Title>
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