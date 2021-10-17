import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, SplashPage } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/beranda" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
