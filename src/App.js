
import { useTranslation } from 'react-i18next';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';


function App() {
  const { t } = useTranslation();
  return (
    <div className="App bg-black">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        {/* <h1 className='underline text-red-600'>{t('Welcome_to_React')}</h1> */}
      </Routes>
      
      
       

    </div>
  );
}

export default App;
