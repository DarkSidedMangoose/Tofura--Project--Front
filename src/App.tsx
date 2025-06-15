import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Generate from "./components/main/subComponents/main/mainBaseSubComponents/subComponents/Generate";

const App: React.FC = () => {
  return (
    <div className="w-full h-full bg-loginBackground ">
      <Provider store={store}>
        <BrowserRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Routes>
            <Route path="/" element={<Generate />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
