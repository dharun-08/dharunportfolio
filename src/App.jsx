import Home from './Home/Home';
import About from './About/About';
import Skill from './Skills/Skill';
import Project from './Projects/Project';
import Contact from './Contact/Contact';
import ScrollToTop from './ScrollToTop/ScrollToTop';
function App() {
  return (
    <div className='main-container'>
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
        <ScrollToTop />
    </div>
  );
}

export default App;
