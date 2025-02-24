import React from 'react'

function Content() {
  return (
    <div className="college-info">
  <h1 className="college-title">Welcome to <span>Maulana Azad College of Engineering and Technology</span></h1>
  <h2 className="college-location">📍 Patna, Bihar, India</h2>
  
  <p className="college-description">
    Established in <strong>1988</strong>, <span className="highlight">MACET</span> is one of the most reputed engineering colleges in Bihar, 
    providing quality education and fostering innovation. The college is affiliated with <strong>Bihar Engineering University</strong> 
    and approved by the <strong>All India Council for Technical Education (AICTE)</strong>.
  </p>

  <div className="programs">
    <h3>🎓 Programs Offered:</h3>
    <ul>
      <li>💻 Computer Science & Engineering (CSE)</li>
      <li>📡 Electronics & Communication Engineering (ECE)</li>
      <li>⚡ Electrical & Electronics Engineering (EEE)</li>
      <li>🔧 Mechanical Engineering (ME)</li>
      <li>🏗️ Civil Engineering (CE)</li>
      <li>🧰 Artificial Intelligence & Machine Learning (AI & ML)</li>
      <li>🌐 Data Science & Analytics</li>
    </ul>
  </div>

  <div className="facilities">
    <h3>🏫 Campus Facilities:</h3>
    <ul>
      <li>📚 Well-equipped library with 25,000+ books</li>
      <li>🛠️ State-of-the-art laboratories</li>
      <li>🏆 Sports and recreation facilities</li>
      <li>🏢 Separate hostels for boys and girls</li>
      <li>🏨 On-campus cafeteria</li>
      <li>💼 Dedicated training & placement cell</li>
    </ul>
  </div>

  <p className="visit-link">
    🌐 Visit: <a href="https://macet.ac.in/" target="_blank" rel="noopener noreferrer">MACET Official Website</a>
  </p>
</div>

  )
}

export default Content
