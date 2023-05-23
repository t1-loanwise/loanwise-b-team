import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import Pricing from './Pages/Pricing/Pricing'
import Blog from './Pages/Blog/Blog'
import Register from './components/register'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/AboutUs' element={<AboutUs />} />
          <Route exact path='/Pricing' element={<Pricing />} />
          <Route exact path='/Blog' element={<Blog />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
