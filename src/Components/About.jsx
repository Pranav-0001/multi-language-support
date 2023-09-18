import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className='pt-16 min-h-screen text-white px-8  md:px-24 lg:px-32'>
            <h1 className='pt-12 font-bold text-4xl pb-4'>{t('About-head')}</h1>
            <p className='text-xl pb-12'>{t('About-summary')}</p>
            <div className='grid md:grid-cols-2 gap-6 text-justify pb-12'>
                <div>
                    <h3 className='text-2xl font-bold mb-3'>{t('About-mission-head')}</h3>
                    <p>{t('About-mission-content')}</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-3'>{t('About-contributors-head')}</h3>
                    <p>{t('About-contributors-content')}</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-3'>{t('About-involved-head')}</h3>
                    <p>{t('About-involved-content')}</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-3'>{t('About-FAQ-head')}</h3>
                    <p>{t('About-FAQ-content')}</p>
                </div>

            </div>


        </div>
    )
}

export default About
