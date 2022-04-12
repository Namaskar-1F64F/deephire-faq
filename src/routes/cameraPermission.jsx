import ReactMarkdown from "react-markdown"; 

const markdown = '## The error `Camera Permissions Denied` usually occurs when your browser permissions do not allow access to the camera. If you are on your computer, or on Android, we suggest doing the interview on either Google Chrome or Firefox. If you are on iOS please use Safari. ### Here is how you can change your camera permissions on Google Chrome: ![Enable Camera Permissions Chrome (Laptop or Desktop)](https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_1yvwohq.png) ![Enable Camera Permissions (Android)](https://storage.crisp.chat/users/helpdesk/website/96ec5e572d82d800/image_9yuwqb.png) If none of this helps you, please send a message to our support (icon on bottom right) and we will help you out.'

export default function cameraPermission() {
    return (
        
            <main style={{ padding: "1rem 0" }}>
                <ReactMarkdown children={markdown}>
            </ReactMarkdown>

            </main>
    );
}