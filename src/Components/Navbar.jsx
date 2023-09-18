import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import i18next from 'i18next';


const Navbar = () => {
    const { t } = useTranslation();
    const navigate=useNavigate()
    const [currentLan,setCurrentLan]=useState(document.cookie.split(';')[1].split('=')[1])
    let languages=[{code:'en',language:'English'},{code:'hi',language:'हिंदी'},{code:'es',language:"Español"},{code:'fr',language:"Francés"}]
  return (
    <nav className='w-full h-14 bg-[#1a0033] fixed z-10'>
      <div className='flex justify-between h-full items-center px-3'>
        <h1 className='text-3xl text-[#61dbfb] font-bold cursor-pointer' onClick={()=>navigate('/')}>React Js</h1>
        <div className='flex gap-6 justify-between'>
            <h3 onClick={()=>navigate('/about')} className='text-xl text-white cursor-pointer'>{t('about')}</h3>
            <div className='flex items-center gap-1'>
            <FontAwesomeIcon className='text-white text-xl' icon={faEarthAmerica} />
            
              <select onChange={(e)=>{i18next.changeLanguage(e.target.value);setCurrentLan(e.target.value)}} name="" id="" value={currentLan} className='bg-transparent text-white outline-none' >

              {languages.map((lan)=><option  value={lan.code} className='text-black'>{lan.language}</option>)}
            </select>
            </div>
            
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
