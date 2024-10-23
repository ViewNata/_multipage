import React, { useEffect } from 'react';
import './Home.css'; 

const Home = () => {
  useEffect(() => {
    const animatedCharacter = document.getElementById('animatedCharacter');
    let position = 0;
    const containerWidth = document.querySelector('.animation-container').clientWidth;
    const characterWidth = 50;

    const animateCharacter = () => {
      position += 2;

      if (position > containerWidth) {
        position = -characterWidth;
      }

      animatedCharacter.style.left = `${position}px`;
      requestAnimationFrame(animateCharacter);
    };

    animateCharacter();
  }, []);

  return (
    <div className="page-body"> 
      <div className="container-home">
        <div className="profile">
          <img src="img1/me.jpg" alt="Profile" className="profile-img" style={{ boxShadow: '0 0 1rem grey'}}/>
          <div>
            <div className="name">Miss. Natalee Naksup</div>
            <p className="contact">Phone: 090-942-3798</p>
            <p className="contact">Email: nataleenaksup27@gmail.com</p>
          </div>
        </div>

        <div className="content">
          <div className="left">
            <div className="section" style={{ boxShadow: '0 0 0.25rem grey'}}>
              <div className="section-title">Education</div>
              <p style={{ textAlign: 'left' }}>
                Bachelor of Information Technology (IT)
                <br />
                Major: Computer Science and Software Development Innovation (Full Stack Developer)
                <br />
                Sripatum University [2023] - [2026]
                <br />
                GPA: 3.98
              </p>
            </div>

            <div className="section" style={{ boxShadow: '0 0 0.25rem grey'}}>
              <div className="section-title">Skills</div>
              <ul style={{ textAlign: 'left' }}>
                <li>Proficiency in Microsoft Excel, HTML, CSS, JavaScript, React, Figma</li>
                <li>Good communication skills</li>
                <li>Teamwork skills</li>
              </ul>
            </div>
          </div>

          <div className="right">
            <div className="section" style={{ boxShadow: '0 0 0.25rem grey'}}>
              <div className="section-title">Interests</div>
              <ul style={{ textAlign: 'left' }}>
                <li>Reading books</li>
                <li>Investing in stocks</li>
                <li>Coding</li>
              </ul>
            </div>

            <div className="animation-container">
              <div className="animated-character" id="animatedCharacter"></div>
            </div>

            <div className="section-1" style={{ boxShadow: '0 0 0.25rem grey'}}>
              <div className="section-title">Projects</div>
              <p style={{ textAlign: 'left' }}>
                - Parking lot search project
                <br />
                - Responsible for data analysis and website development
                <br />
                - Worked with the web development team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
