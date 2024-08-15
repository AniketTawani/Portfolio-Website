import { useContext } from "react";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import Navi from './components/nav/Navi.jsx';
import Edu from './components/education/Edu.jsx';
import Social from './components/social/Social.jsx';
import Skills from './components/skills/Skills.jsx';
import Project from './components/projects/Project.jsx';
import { ThemeContext } from "./context";
import './app.css';


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <Intro />
      <Navi />
      <Social />
      <Edu />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
