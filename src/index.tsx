import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { addLocaleData, IntlProvider } from "react-intl";
import App from './view/app';
import * as zh from "react-intl/locale-data/zh";
import * as en from "react-intl/locale-data/en";
import zh_CN from "./locale/zh";
import en_US from "./locale/en";

let messages: any = {};
messages["en"] = en_US;
messages["zh_CN"] = zh_CN;
addLocaleData([...zh, ...en]);
const root = document.getElementById("app");
const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <IntlProvider locale="en" messages={messages["en"]}>
        <Component />
      </IntlProvider>
    </AppContainer>,
    root
  );
};

render(App);
if (module.hot) {
  module.hot.accept("./view/app", () => {
    const NewRoot = require("./view/app").default;
    render(NewRoot);
  });
}
