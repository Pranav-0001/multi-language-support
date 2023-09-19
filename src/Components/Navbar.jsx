import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import i18next from 'i18next';


const Navbar = () => {
    const { t } = useTranslation();
    const navigate=useNavigate()
    const [currentLan,setCurrentLan]=useState(localStorage.getItem('i18nextLng')) //assigning the language code to state from cookie by split the string
    let languages=[{code:'en',language:'English'},{code:'hi',language:'हिंदी'},{code:'es',language:"Español"},{code:'fr',language:"Francés"}] //languages with their codes.
  return (
    <nav className='w-full h-14 bg-[#1a0033] fixed z-10' style={{height:'3.5rem'}} data-testid='navbar'>
      <div className='flex justify-between h-full items-center px-3'>
        <h1 className='text-3xl text-[#61dbfb] font-bold cursor-pointer' onClick={()=>navigate('/')}>React Js</h1>
        <div className='flex gap-6 justify-between'>
            <h3 onClick={()=>navigate('/about')} className='text-xl text-white cursor-pointer' data-testid='about-text'>{t('about')}</h3>
            <div className='flex items-center gap-1'>
            <FontAwesomeIcon className='text-white text-xl' icon={faEarthAmerica} /> 
            
              <select data-testid="languageSelect" onChange={(e)=>{i18next.changeLanguage(e.target.value);setCurrentLan(e.target.value)}} name="" id="" value={currentLan} className='bg-transparent text-white outline-none' > {/* Changing the language and the state to display the current selected language */}

              {languages.map((lan)=><option  key={lan.language} value={lan.code} className='text-black'>{lan.language}</option>)} 
            </select> 
            </div>
            
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
