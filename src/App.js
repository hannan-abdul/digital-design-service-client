import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddService from './components/Dashboard/AddService/AddService';
import AddReview from './components/Dashboard/AddReview/AddReview';
import ManageService from './components/Dashboard/ManageService/ManageService';
import ProcessPayment from './components/Dashboard/ProcessPayment/ProcessPayment';
import ManageReviews from './components/Dashboard/ManageReviews/ManageReviews';
import SignUp from './components/Login/SignUp/SignUp';
import NotFound from './components/Home/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/add-service">
            <AddService />
          </Route>
          <Route path="/add-review">
            <AddReview />
          </Route>
          <Route path="/manage-services">
            <ManageService />
          </Route>
          <Route path="/manage-reviews">
            <ManageReviews />
          </Route>
          <PrivateRoute path="/process-payment">
            <ProcessPayment />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
