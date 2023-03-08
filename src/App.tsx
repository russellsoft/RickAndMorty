import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { PagesRouter } from "./router/PagesRouter";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(255, 152, 0)",
        },
      }}
    >
      <PagesRouter />
    </ConfigProvider>
  );
};

export default App;
