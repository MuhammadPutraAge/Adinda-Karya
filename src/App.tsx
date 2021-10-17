import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SplashPage } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SplashPage} />
      </Switch>
    </Router>
  );
};

export default App;
