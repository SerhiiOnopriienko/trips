import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Wrapper from "./Pages/Wrapper";
import MainPage from "./Pages/MainPage";
import TripDetails from "./Pages/TripDetails";
import Bookings from "./Pages/Bookings";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import { Booking } from "./types/types";

function RouterComponent() {
  const [formValue, setFormValue] = useState({
    "full-name": "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const setEnteredValue = (name: string, value: string) => {
    setFormValue((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  const [bookings, setBookings] = useState<Booking[]>([]);

  return (
    <Routes>
      <Route
        path="sign-up"
        element={
          <Signup
            formValue={formValue}
            setEnteredValue={setEnteredValue}
            formSubmit={formSubmit}
          />
        }
      />
      <Route
        path="sign-in"
        element={
          <Signin
            formValue={formValue}
            setEnteredValue={setEnteredValue}
            formSubmit={formSubmit}
          />
        }
      />
      <Route path="/" element={<Wrapper />}>
        <Route index element={<MainPage />} />
        <Route
          path="/trip/:tripId"
          element={
            <TripDetails bookings={bookings} setBookings={setBookings} />
          }
        />
        <Route
          path="/bookings"
          element={<Bookings bookings={bookings} setBookings={setBookings} />}
        />
        <Route path="*" element={<MainPage />} />
      </Route>
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}

export default RouterComponent;
