
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
import OrderPgae from './Pages/OrderPgae/OrderPgae';
import ExploreCollection from './Pages/ExploreCollection/ExploreCollection';
import Footer from './Pages/Share/Footer/Footer';
import NotFound from './Pages/Share/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
            <Route path='/exploreCollection'>
              <ExploreCollection></ExploreCollection>
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/order/:id'>
              <OrderPgae></OrderPgae>
            </PrivateRoute>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
