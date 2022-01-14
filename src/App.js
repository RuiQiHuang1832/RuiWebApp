import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Tos from "./components/Tos";
import Faq from "./components/Faq";
function App() {
  return (
    <div className="App">
      
      <Router>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tos" element={<Tos />}/>
          <Route path="/faq" element={<Faq />}/>
        </Routes>
      
        <Footer />
      </Router>

  

    
      
    </div>
  );
}

export default App;
