import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MainLoadingProvider } from "./contextApis/ContextLoading";

const App: React.FC = () => {
  return (
    <div className="w-full h-full bg-loginBackground ">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/main"
              element={
                <MainLoadingProvider>
                  <Main />
                </MainLoadingProvider>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
