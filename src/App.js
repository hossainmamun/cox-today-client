import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddBlog from "./Components/Dashboard/AddBlog.js";
import BookingList from "./Components/Dashboard/BookingList.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import DashboardHome from "./Components/Dashboard/DashboardHome.js";
import ImgUpload from "./Components/Dashboard/ImgUpload.js";
import ReviewList from "./Components/Dashboard/ReviewList.js";
import RoomListing from "./Components/Dashboard/RoomListing.js";
import SpecialOffer from "./Components/Dashboard/SpecialOffer.js";
import Error from "./Components/ErrorPage/Error.js";
import Account from "./Components/FirebaseAuth/Account.js";
import Home from "./Components/LandingPage/Home.js";
import ReviewAdding from "./Components/LandingPage/ReviewAdding.js";
import ViewAllRooms from "./Components/LandingPage/ViewAllRooms.js";
import Booking from "./Components/RoutingPage/Booking.js";
import SingleRoomDetail from "./Components/RoutingPage/SingleRoomDetail.js";
import './Styles/Main.scss';

export const contextApi = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  
  return (
    <contextApi.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* routing page */}
          <Route path="/room-booking">
            <Booking />
          </Route>
          <Route path="/login_register">
            <Account />
          </Route>
          <Route path="/review/add-client-review">
            <ReviewAdding />
          </Route>
          <Route path="/single-room-detail/:roomId">
            <SingleRoomDetail />
          </Route>
          <Route path="/all-rooms-list">
            <ViewAllRooms />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard">
            <DashboardHome />
          </Route>
          <Route path="/dashboard/room-listing">
            <RoomListing />
          </Route>
          <Route path="/dashboard/special-room-listing">
            <SpecialOffer />
          </Route>
          <Route path="/dashboard/add-latest-blog">
            <AddBlog />
          </Route>
          <Route path="/dashboard/upload-img-gallery">
            <ImgUpload />
          </Route>
          <Route path="/dashboard/booking-list">
            <BookingList />
          </Route>
          <Route path="/dashboard/reviews-list">
            <ReviewList />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </contextApi.Provider>
  );
}

export default App;
