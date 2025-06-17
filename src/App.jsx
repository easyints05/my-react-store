import './App.css'
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Login from "./Login";
import { BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (

<BrowserRouter>
  <Header/>
  <Routes>
    <Route index element={<Home />}/>
   <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
<Home />
</Routes>
  <Footer />
  </BrowserRouter>

  );
}

export default App
