import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Header from "./components/Header";
import NoMatchPage from "./components/NoMatchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharactersScreen from "./screens/CharactersScreen";
import DetailCharacterScreen from "./screens/DetailCharacterScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={LoginScreen} exact />
        <Route path="/signin" component={LoginScreen} />
        <Route path="/signup" component={RegisterScreen} />
        <Route path="/characters" component={CharactersScreen} />
        <Route path={`/character/:id`} component={DetailCharacterScreen} />
        <Route>
          <NoMatchPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
