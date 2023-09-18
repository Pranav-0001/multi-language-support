import React from 'react'
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation(); // t indicates the translation
    return (
        <div className='min-h-[92.2vh] w-full pt-10   bg-black '>
            <div className='flex items-center md:gap-5'>
                <h2 className='ps-6 text-white  text-3xl font-bold'>{t('sub-head')} </h2>
                <img className='h-20 w-20 animate-spin' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
            </div>
            <div className='text-justify grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white lg:px-12 md:px-8 px-8 gap-6 mt-8'> 
                <div className='w-full'>
                    <h3 className='font-bold text-2xl pb-4'>{t('Declarative-head')}</h3>
                    <p>{t('Declarative-content')}</p>
                    <p className='pt-2'>{t('Declarative-note')}</p>
                </div>
                <div className='w-full'>
                    <h3 className='font-bold text-2xl pb-4'>{t('Component-head')}</h3>
                    <p>{t('Component-content')}</p>
                    <p className='pt-2'>{t('Component-footer')}</p>
                </div>  
                <div className='w-full'>
                    <h3 className='font-bold text-2xl pb-4'>{t('Learn-head')}</h3>
                    <p className=''>{t('Learn-content')}</p>
                    <p className='pt-2'>{t('Learn-footer')}</p>
                </div>  
            </div>
            <div className='lg:px-12 md:px-8 px-8 mt-10 text-white pb-10'>
                <h1 className='text-3xl font-bold pb-8'>{t('Why-react-head')}</h1>
                <p className='text-justify'>{t('Why-react-content')}</p>
                <p className='text-justify pt-4'>{t('Why-react-2content')}</p>
            </div>

        </div>
    )
}

export default Home
