/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Signup, { simpleAuth } from './components/Signup';
import Home from './components/Home';
import LoginFunctionComp from './components/Login';
import Tos from './components/Tos';
import Faq from './components/Faq';
import Upgrade from './components/Upgrade';
import Search from './components/Search';
import SuccessSignUp from './components/SuccessSignUp';
import UserDashboard from './components/UserDashboard';
import Members from './components/Members';
// app > index

function App() {
  return (
    <div className="App">

      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginFunctionComp />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/search" element={<Search />} />
          <Route path="/members" element={<Members />} />
          <Route path="/userDashboard/:username-:id" element={<UserDashboard />} />

          <Route path="/signup=success" element={<PrivateRoute><SuccessSignUp /></PrivateRoute>} />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

function PrivateRoute({ children }) {
  if (simpleAuth) {
    return children;
  }

  return <Navigate to="/signup" />;
}

export default App;