import { useState } from 'react'

import './App.css'

import {
  BrowserRouter as Router,
  Routes, Route, Link 
} from 'react-router-dom'

import Resume from './components/Resume'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'

function App() {
  const [count, setCount] = useState(0)
  const padding = {
    padding: 5
  }
  return (

    <MantineProvider>
      <div>
        <Router>
          <div>
            <Link style={padding} to ='/'>home</Link>
            <Link style={padding} to ='/resume'>resume</Link>
            <Link style={padding} to ='/projects'>projects</Link>
            <Link style={padding} to ='/contact'>contact</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Router>
      </div>

    </MantineProvider>
  )
}

export default App
