import './App.css';
import Header  from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return ( 
    <>
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </>
   );
}

export default App;
