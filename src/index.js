import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, PageHeader, Divider } from "antd";
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
      {/*Changing to 100vh doesn't work */}
      <Layout>
        <PageHeader
          className="site-page-header"
          title={<a href="/">Deephire Help Desk</a>}
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
        <Footer>
          <img alt="Deephire Logo" src="/deephire-favicon.png" height="30px" />
          <a target="_blank" rel="noreferrer" href="https://www.deephire.com">
            <Divider type="vertical" />
            Deephire.com
          </a>
        </Footer>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
