import styles from "./App.module.css";
import { NavBar } from "./components/NavBar/NavBAr";
import { Hero } from "./components/Hero/hero";
import About from "./components/about/about.jsx";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

function App() {
 return (
    <div className={styles.App}>
   <NavBar/>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
  <Contact/>
    </div>
  );
}
export default App;
