import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { SearchBox } from "./component/searchBox/searchBox";
import { addLocaleData, IntlProvider, FormattedMessage } from "react-intl";
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
      <IntlProvider locale="zh" messages={messages["zh_CN"]}>
        <Component />
      </IntlProvider>
    </AppContainer>,
    root
  );
};

render(SearchBox);
if (module.hot) {
  module.hot.accept("./component/searchBox/searchBox", () => {
    const NewRoot = require("./component/searchBox/searchBox").default;
    render(NewRoot);
  });
}
