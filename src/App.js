import "./App.css";
import ContactUsHeader from "./components/ContactUsHeader";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className='App'>
      <ContactUsHeader />
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
