import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ForgotPassword/>} />
          <Route path="/" element={<Offers/>} />
          <Route path="/" element={<Profile/>} />
          <Route path="/" element={<SignIn/>} />
          <Route path="/" element={<SignUp/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
