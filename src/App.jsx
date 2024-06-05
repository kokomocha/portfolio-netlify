import { useState } from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';
import About from './components/About';
// import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
