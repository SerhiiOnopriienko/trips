import { Link } from "react-router-dom";
import SigninSugnupHeader from "../Components/signinSignup/Header";
import Footer from "../Components/Footer";
import Input from "../Components/signinSignup/Input";
import Button from "../Components/signinSignup/Button";
import { SignProps } from "../types/types";

function Signin({ formValue, setEnteredValue, formSubmit }: SignProps) {
  return (
    <>
      <SigninSugnupHeader />
      <main className="sign-in-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form className="sign-in-form" autoComplete="off" onSubmit={formSubmit}>
          <h2 className="sign-in-form__title">Sign In</h2>
          <Input
            inputName="Email"
            dataTestId="auth-email"
            name="email"
            type="email"
            setEnteredValue={setEnteredValue}
            enteredValue={formValue.email}
          />
          <Input
            inputName="Password"
            dataTestId="auth-password"
            name="password"
            type="password"
            setEnteredValue={setEnteredValue}
            enteredValue={formValue.password}
            pattern=".{3,20}"
            title="Password length should be between 3 and 20 characters."
          />
          <Button buttonText="Sign In" />
        </form>
        <span>
          Don't have an account?{" "}
          <Link
            data-test-id="auth-sign-up-link"
            to="/sign-up"
            className="sign-in-form__link"
          >
            Sign Up
          </Link>
        </span>
      </main>
      <Footer />
    </>
  );
}

export default Signin;
