import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";

export default function App() {
  const date = new Date();
  const content = [
    { id: "hero", component: <Hero /> },
    { id: "about", component: <About /> },
    { id: "skills", component: <Skills /> },
    { id: "experience", component: <Experience /> },
  ];

  return (
    <React.Fragment>
      <nav style={{ position: "sticky", top: 0, zIndex: 99 }}>
        <NavBar />
      </nav>
      {content.map((val, idx) => (
        <section id={val.id} key={idx}>
          {val.component}
        </section>
      ))}
      <footer>&copy; {date.getFullYear()}</footer>
    </React.Fragment>
  );
}
