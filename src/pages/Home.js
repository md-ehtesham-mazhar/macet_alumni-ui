import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';
import Footer from '../components/Footer';
import Alumni from './Alumni';
import EventPage from './EventPage';
import ProfilePage from '../components/Profile';
import ImageCarousel from '../components/ImageCarousel'; // Import the slideshow
import Content from '../components/Content';

function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignInSuccess = () => {
    setIsSignedIn(true);
  };

  const handleLogout = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="home">
      <Navbar isSignedIn={isSignedIn} />

      {/* Image Carousel (Slideshow) */}
      

      <div className="container">
        <Routes>
          <Route
            path="/home"
            element={
              <>
              <ImageCarousel />
              <Content />

              </>
            }
          />
          <Route path='/' element={<ImageCarousel />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/signin" element={<SignIn onSignInSuccess={handleSignInSuccess} />} />

          {isSignedIn && (
            <>
              <Route path="/post" element={<h1>Post Page</h1>} />
              <Route path="/developer-info" element={<h1>Developer Info</h1>} />
              <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
            </>
          )}
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
