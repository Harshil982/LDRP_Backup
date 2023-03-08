import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Scheme_table from "./Pages/Scheme_table";
import "./Css/Default.css";
import { ContactUs } from "./Pages/Contact/ContactUs";
import { LDRPSports } from "./Pages/Sports/LDRPSports";
import Login from "./Pages/Login/Login";
import SignupStepOne from "./Pages/Signup/Signup";
import SignupStepTwo from "./Pages/Signup/SignupStepTwo";
import Verify from "./Pages/Account-Recovery/Verify";
import AccountRecovery from "./Pages/Account-Recovery/AccountRecovery";
import WelcomeAlumni from "./Pages/Welcome-Alumni/WelcomeAlumni";
import CreateProfile from "./Pages/CreateProfile/CreateProfile";
import { Dashboard } from "./Pages/Main-Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <SignupStepOne /> */}
      {/* <SignupStepTwo /> */}
      {/* <Verify />  */}
      {/* <AccountRecovery /> */}
      {/* <Header />
      <LDRPSports />
      <ContactUs />
      <Footer /> */}
      {/* <WelcomeAlumni /> */}
      {/* <CreateProfile /> */}
      <Dashboard />
    </div>
  );
}

export default App;
