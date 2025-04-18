import Navbar from './components/Header/Header';
import { Description } from './components/Description/Description';
import { Services } from './components/Services/Services';
import { Project } from './components/Project/Project';
import { Skills } from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import SnowBackground from './components/SnowBackground';

function App() {

  return (
    <>
      <SnowBackground />
      <Navbar />
      <main className='px-4 py-4'>
        <Description />
        <Services />
        <Project />
        <Skills />
        <Contact />

      </main>
    </>
  )
}

export default App
