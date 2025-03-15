import { useState } from 'react';
import Home from '../src/components/home.jsx';
import Navbar from '../src/components/navbar.jsx';
import Perfection from '../src/components/perfection.jsx';
import Spec from '../src/components/spec.jsx';
import Banner1 from './components/banner1.jsx';
import CarComponents from './components/carComponents.jsx';
import AutoSkin from './components/autoskin.jsx';
import Banner2 from './components/banner2.jsx';
import Clip from './components/clip2.jsx';
import Footer from './components/footer.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Home /> 
      <Perfection />
      <Spec />
      <Banner1 />
      <CarComponents />
      <AutoSkin />
      <Banner2 />
      <Clip />
      <Footer />
    </div>
  
  )
}

export default App

