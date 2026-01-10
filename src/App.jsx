import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Akshaya B</h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Akshaya 👋</h1>
        <p>Computer Science Engineering Student</p>
        <p>Aspiring Software Engineer</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate Computer Science student interested in
          web development, problem solving, and building real-world projects
          using React and modern technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>MySql</span>
          <span>C++</span>
          <span>DSA</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Pharmacy Management  System</h3>
            <p>Web</p>
          </div>
          <div className="card">
            <h3>Credit Card Validity</h3>
            <p>C++</p>
          </div>
          <div className="card">
            <h3>Scholarship Management System</h3>
            <p>Web</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>Email: akshayaabhijith773@email.com</p>
        <p>GitHub | LinkedIn</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Akshaya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
