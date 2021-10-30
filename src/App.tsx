import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "./components";
import {
  FurnitureDetails,
  HomePage,
  LoginPage,
  RegisterPage,
  SplashPage,
} from "./pages";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/masuk" component={LoginPage} />
        <Route exact path="/daftar" component={RegisterPage} />
        <Route exact path="/beranda" component={HomePage} />
        <Route exact path="/furnitur/:id" component={FurnitureDetails} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
