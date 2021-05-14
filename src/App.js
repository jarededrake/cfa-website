import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CfaStaff from "./components/CfaStaff";
import AllianceOfStates from "./components/AllianceOfStates";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Events from "./components/Events";
import GetInvolved from "./components/GetInvolved";
import Alerts from "./components/Alerts";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Route exact path='/' component={HomePage} />
        <Route path='/cfastaff' component={CfaStaff} />
        <Route path='/allianceofstates' component={AllianceOfStates} />
        <Route path='/faqs' component={Faqs} />
        <Route path='/events' component={Events} />
        <Route path='/getinvolved' component={GetInvolved} />
        <Route path='/alerts' component={Alerts} />
        <Route path='/contactus' component={ContactUs} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
