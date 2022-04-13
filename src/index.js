import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Test from "./routes/test";
import CameraPermission from "./routes/cameraPermission";
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
            <Route path="/test" element={<Test />} />
            <Route path="/cameraPermission" element={<CameraPermission />} />
            <Route path="*" element={<>fallback page</>} />
          </Routes>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
