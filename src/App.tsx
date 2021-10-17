import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { HomePage, SplashPage } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/beranda" component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
