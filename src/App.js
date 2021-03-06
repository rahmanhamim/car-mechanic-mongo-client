import "./App.css";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Booking from "./pages/Booking/Booking/Booking";
import Login from "./pages/Login/Login/Login";
import Header from "./pages/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import AddService from "./pages/AddService/AddService";
import ManageServices from "./pages/ManageServices/ManageServices";

function App() {
 return (
  <div className="App">
   <AuthProvider>
    <Router>
     <Header></Header>
     <Switch>
      <Route exact path="/">
       <Home></Home>
      </Route>
      <Route path="/home">
       <Home></Home>
      </Route>
      <Route path="/login">
       <Login></Login>
      </Route>
      <PrivateRoute path="/booking/:serviceId">
       <Booking></Booking>
      </PrivateRoute>
      <Route path="/addservice">
       <AddService></AddService>
      </Route>
      <Route path="/manageservices">
       <ManageServices></ManageServices>
      </Route>
      <Route path="*">
       <NotFound></NotFound>
      </Route>
     </Switch>
    </Router>
   </AuthProvider>
  </div>
 );
}

export default App;
