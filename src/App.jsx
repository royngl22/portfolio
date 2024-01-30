import React, { lazy } from "react";
const NavBar = lazy(() => import("./components/NavBar/NavBar"));
const Hero = lazy(() => import("./pages/Hero/Hero"));
const About = lazy(() => import("./pages/About/About"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Experience = lazy(() => import("./pages/Experience/Experience"));

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
