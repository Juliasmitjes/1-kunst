import './styles/App.css';
import {Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import NoPage from "./pages/NoPage";
import Gallery from './pages/Gallery.jsx';
import Trees from './pages/Trees.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        <Route path="gallerij" element={<Gallery />} />
        <Route path="bomen" element={<Trees />} />
      </Route>
    </Routes>

  );
}

export default App;