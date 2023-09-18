import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({

    fallbackLng: "en",
    detection:{
      order: [ 'cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: '/assets/locals/{{lng}}/translation.json',
    }

  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div className='loading'>Loading...</div>}>
    <App />
    </Suspense >
    </BrowserRouter>
  </React.StrictMode>
);


