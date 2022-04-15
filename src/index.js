import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, PageHeader } from "antd";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CheatSheet from "./routes/videoInterviewCheatSheet";
import NetworkTestResults from "./routes/networkTestResults";
import FrequentlyAskedQuestions from "./routes/frequentlyAskedQuestions";
import Debugging from "./routes/videoInterviewErrors";
import SupportedBrowsers from "./routes/supportedBrowsers";
import PracticeInterview from "./routes/instructionsOneWayInterview";
import SampleQuestions from "./routes/sampleQuestions";

const { Footer, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <PageHeader
          className="site-page-header"
          title="Deephire Help Desk"
          avatar={{ src: "/deephire-favicon.png" }}
        />
        <Content>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/frequentlyAskedQuestions"
              element={<FrequentlyAskedQuestions />}
            />
            <Route path="/videoInterviewCheatSheet" element={<CheatSheet />} />
            <Route
              path="/networkTestResults"
              element={<NetworkTestResults />}
            />
            <Route path="/videoInterviewErrors" element={<Debugging />} />
            <Route path="/supportedBrowsers" element={<SupportedBrowsers />} />
            <Route
              path="/instructionsOneWayInterview"
              element={<PracticeInterview />}
            />
            <Route path="/sampleQuestions" element={<SampleQuestions />} />
            <Route path="*" element={<>fallback page</>} />
          </Routes>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
