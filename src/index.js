import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, PageHeader, Divider } from "antd";
// import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CheatSheet from "./routes/videoInterviewCheatSheet";
import NetworkTestResults from "./routes/networkTestResults";
import FrequentlyAskedQuestions from "./routes/frequentlyAskedQuestions";
import Debugging from "./routes/videoInterviewErrors";
import SupportedBrowsers from "./routes/supportedBrowsers";
import PracticeInterview from "./routes/instructionsOneWayInterview";
import SampleQuestions from "./routes/sampleQuestions";
import SearchFunction from "./searchFunction";

const { Footer, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh", padding: 24 }}>
        <PageHeader
          title={<a href="/">Deephire Help Desk</a>}
          avatar={{ src: "/deephire-favicon.png" }}
          extra={<SearchFunction />}
        ></PageHeader>
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
          <a target="_blank" rel="noreferrer" href="https://www.deephire.com">
            <img
              alt="Deephire Logo"
              src="/deephire-favicon.png"
              height="30px"
            />
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
