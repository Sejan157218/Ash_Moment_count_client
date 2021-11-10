import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/Share/SignIn/SignIn';
import SignUp from './Pages/Share/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
