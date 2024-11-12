import {createContext, useContext, useState} from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const changeLanguage = (lang) => {
        setLanguage(lang);
    }

    // const changeLanguage = (lang) => {
    //     setLanguage(lang);
    //     localStorage.setItem('selectedLanguage', lang);
    // }
    // useEffect(() => {
    //     const savedLanguage = localStorage.getItem('selectedLanguage');
    //     if(savedLanguage) {
    //         setLanguage(savedLanguage);
    //     }
    // },[]);
    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
// Custom hook to use the LanguageContext
export const useLanguage = () => useContext(LanguageContext);