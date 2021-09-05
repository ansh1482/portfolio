import './App.css';
import About from './sections/about/about';
import Education from './sections/education/education';
import Experience from './sections/experience/experience';
import Introduction from './sections/introduction/introduction';
import Projects from './sections/projects/projects';
import Skills from './sections/skills/skills';

function App() {
  return (
    <div className="App">
      <Introduction />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
