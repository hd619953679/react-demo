import * as React from "react";
import * as ReactDOM from "react-dom";
// import { AppContainer } from "react-hot-loader";
import { SearchBox } from "./component/searchBox/searchBox";

ReactDOM.render(<SearchBox text= "hello React"/>, document.getElementById("app"));
// if (process.env.NODE_ENV != "production" && module.hot) {
//   module.hot.accept("./component/searchBox/searchBox", () => {
//     const NewRoot = require("./component/searchBox/searchBox").default;
//     render(
//       <AppContainer>
//         <NewRoot />
//       </AppContainer>,
//       document.getElementById("app")
//     );
//   });
// }