import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Tos from "./components/Tos";
import Faq from "./components/Faq";
import Upgrade from "./components/Upgrade"
import Search from "./components/Search"
//app > index
function App() {
  return (
    <div className="App">

      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/search" element={<Search />} />
        </Routes>

        <Footer />
      </Router>





    </div>
  );
}

export default App;
