
import { useTranslation } from 'react-i18next';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';


function App() {
  const { t } = useTranslation();
  return (
    <div className="App bg-black">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
