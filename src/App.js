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
import AddService from './components/AddService/AddService';
import AddReview from './components/AddReview/AddReview';
import ManageService from './components/ManageService/ManageService';
import ProcessPayment from './components/ProcessPayment/ProcessPayment';
import ManageReviews from './components/ManageReviews/ManageReviews';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/addService">
              <AddService />
            </Route>
            <Route path="/addReview">
              <AddReview />
            </Route>
            <Route path="/manageService">
              <ManageService />
            </Route>
            <Route path="/managereviews">
              <ManageReviews />
            </Route>
            <PrivateRoute path="/processPayment">
              <ProcessPayment />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
