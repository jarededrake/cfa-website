import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CfaStaff from "./components/CfaStaff";
import AllianceOfStates from "./components/AllianceOfStates";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Route exact path='/' component={HomePage} />
        <Route path='/cfastaff' component={CfaStaff} />
        <Route path='/allianceofstates' component={AllianceOfStates} />
        <Route path='/faqs' component={Faqs} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
