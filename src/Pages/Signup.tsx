import { Link } from "react-router-dom";
import SigninSugnupHeader from "../Components/signinSignup/Header";
import Input from "../Components/signinSignup/Input";
import Button from "../Components/signinSignup/Button";
import Footer from "../Components/Footer";
import { SignProps } from "../types/types";

function Signup({ formValue, setEnteredValue, formSubmit }: SignProps) {
  return (
    <>
      <SigninSugnupHeader />
      <main className="sign-up-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form className="sign-up-form" autoComplete="off" onSubmit={formSubmit}>
          <h2 className="sign-up-form__title">Sign Up</h2>
          <Input
            inputName="Full name"
            dataTestId="auth-full-nam"
            name="full-name"
            type="text"
            setEnteredValue={setEnteredValue}
            enteredValue={formValue["full-name"]}
          />
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
          <Button buttonText="Sign Un" />
        </form>
        <span>
          Already have an account?{" "}
          <Link
            data-test-id="auth-sign-in-link"
            to="/sign-in"
            className="sign-up-form__link"
          >
            Sign In
          </Link>
        </span>
      </main>
      <Footer />
    </>
  );
}

export default Signup;
