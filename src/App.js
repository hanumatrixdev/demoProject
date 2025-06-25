import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componant/NavBar';
import Header from './Componant/Header';
import Footer from './Componant/Footer';
import About_us from './Componant/About_us';
import Demo from './Demo';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      
      <Routes>
        <Route path='/about-us' element={<About_us />} />
        <Route path='/demo-demo' element={<Demo />} />
        {/* Other routes */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
