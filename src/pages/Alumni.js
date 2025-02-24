import React, { useState } from "react";
import alumni1 from "../images/alumni1.jpeg";
import alumni3 from "../images/alumni3.jpeg";
import alumni4 from "../images/alumni4.jpeg";

// ProfileCard Component
const ProfileCard = ({ name, title, image, bio }) => {
  return (
    <div className="alumni-card">
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <img src={image} alt={`${name}'s profile`} className="alumni-card-image" />
          <h2 className="alumni-card-name">{name}</h2>
          <p className="alumni-card-title">{title}</p>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <p className="alumni-card-bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};

// Main Alumni Component
const Alumni = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const alumniProfiles = [
    { name: "Md Ehtesham Mazhar", title: "Senior Web Developer at Amazon", image: alumni1, bio: "Expert in front-end and back-end technologies. Graduated in 2015 with a degree in Computer Science." },
    { name: "Arzan Nawaz", title: "Lead Data Scientist at IBM", image:"https://via.placeholder.com/100", bio: "Graduated in 2018, specializing in AI and machine learning. Currently working on predictive analytics." },
    { name: "Md Shahzeb", title: "Full Stack Developer at Facebook", image: alumni3, bio: "Passionate about UX design and scalable web applications. Loves working with MERN stack." },
    { name: "Mohammad Sahil", title: "Product Manager at Tesla", image: alumni4, bio: "Graduated in 2016 and now managing innovative software projects at Tesla." },
    { name: "Sarah Williams", title: "Software Engineer at Google", image: "https://via.placeholder.com/100", bio: "Specializing in backend development, she contributes to Google Cloud projects." },
    { name: "David Johnson", title: "Cybersecurity Analyst at Microsoft", image: "https://via.placeholder.com/100", bio: "Graduated in 2021, passionate about ethical hacking and cloud security." },
    { name: "Emily Carter", title: "UI/UX Designer at Adobe", image: "https://via.placeholder.com/100", bio: "Loves creating intuitive user interfaces. Graduated in 2017." },
    { name: "Michael Brown", title: "Mobile App Developer at Apple", image: "https://via.placeholder.com/100", bio: "Developing iOS applications for Apple. Skilled in Swift and Flutter." },
    { name: "Sophia Lee", title: "AI Engineer at OpenAI", image: "https://via.placeholder.com/100", bio: "Passionate about deep learning and AI-driven solutions." },
    { name: "James Anderson", title: "Blockchain Developer at Binance", image: "https://via.placeholder.com/100", bio: "Specializes in decentralized finance (DeFi) and blockchain security." },
    { name: "Olivia Martinez", title: "Cloud Solutions Architect at AWS", image: "https://via.placeholder.com/100", bio: "Works on scalable cloud architectures for Fortune 500 companies." },
    { name: "William Harris", title: "Game Developer at Ubisoft", image: "https://via.placeholder.com/100", bio: "Designs immersive gaming experiences using Unity and Unreal Engine." },
    { name: "Ava Thompson", title: "IoT Engineer at Samsung", image: "https://via.placeholder.com/100", bio: "Developing smart home solutions using IoT technology." },
    { name: "Daniel Roberts", title: "Network Engineer at Cisco", image: "https://via.placeholder.com/100", bio: "Expert in networking, cybersecurity, and cloud infrastructure." },
    { name: "Isabella White", title: "Digital Marketer at HubSpot", image: "https://via.placeholder.com/100", bio: "Combining technology and marketing strategies for online growth." }
  ];

  // Filtering Alumni Based on Search Input
  const filteredAlumni = alumniProfiles.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`alumni-page ${darkMode ? "dark-mode" : "light-mode"}`}>
      <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <input
        type="text"
        className="search-bar"
        placeholder="Search Alumni..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h1>Our Distinguished Alumni</h1>
      <div className="alumni-container">
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumni) => (
            <ProfileCard key={alumni.name} {...alumni} />
          ))
        ) : (
          <p>No matching alumni found.</p>
        )}
      </div>
    </div>
  );
};

export default Alumni;