import {createContext, useEffect, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage('language','fr'); // Par défaut en anglais
    console.log("Langue actuelle dans LanguageProvider :", language);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};