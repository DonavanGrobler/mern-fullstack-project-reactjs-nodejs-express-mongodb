import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <>
      <Router>
        <MainNavigation>
          <main>
            <Switch>
              <Route path="/" exact>
                <Users />
              </Route>
              <Route path="/places/new" exact>
                <NewPlace />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </MainNavigation>
      </Router>
    </>
  );
};

export default App;
