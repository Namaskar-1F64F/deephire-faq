import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CameraPermission from "./routes/cameraPermission";
import CheatSheet from "./routes/videoInterviewCheatSheet";
import NetworkTestResults from "./routes/networkTestResults";
import MistakesBestPractice from "./routes/commonMistakesBestPractice";
import Retakes from "./routes/retakes";
import { Layout, PageHeader } from "antd";

const { Footer, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <PageHeader />
        <Content>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/commonMistakesBestPractice"
              element={<MistakesBestPractice />}
            />
            <Route path="/videoInterviewCheatSheet" element={<CheatSheet />} />
            <Route path="/cameraPermission" element={<CameraPermission />} />
            <Route
              path="/networkTestResults"
              element={<NetworkTestResults />}
            />
            <Route path="/retakes" element={<Retakes />} />
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
