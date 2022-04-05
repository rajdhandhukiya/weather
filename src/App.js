import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomeApp from "./Home/Home";
import ErrorPage from "./Error/Error";
import SuccessApp from "./Success/Success";

import "./App.css";
import "../node_modules/antd/dist/antd.css";
import DesignPage from "./Components/Ui";
function App() {
  return (
    <div className="main">
      <div>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={HomeApp} />
            <Route path="/SuccessApp" component={SuccessApp} />
            <Route path="/ErrorPage" component={ErrorPage} /> */}
            <DesignPage />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
