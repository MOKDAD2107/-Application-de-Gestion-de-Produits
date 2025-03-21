import React, {createContext, useContext, useState} from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import {LanguageContext, LanguageProvider} from "./language/LanguageContext";


// TODO: Exercice 2.1 - Créer le LanguageContext

export const ThemeContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchterm,setSearchterm]=useState('')
  // TODO: Exercice 2.2 - Ajouter l'état pour la langue
const{language,setLanguage}=useContext(LanguageContext);
  return (

    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {/* TODO: Exercice 2.1 - Wrapper avec LanguageContext.Provider */}
      <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
        <header className="my-4">
          <h1 className="text-center my-4">Catalogue de Produits({language})</h1>
          <div className="d-flex justify-content-end gap-2">
            <ThemeToggle />
            {/* TODO: Exercice 2.2 - Ajouter le sélecteur de langue */}
            <select onChange={e =>{
              console.log("langue saisie dans app",e.target.value);

                setLanguage(e.target.value);}}
                    className={`form-select ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
              <option value="fr" >Francais</option>
              <option value="en">English</option>
            </select>
          </div>
        </header>
        <main>
          <ProductSearch searchterm={searchterm} setSearchterm={setSearchterm} />
          <ProductList searchterm={searchterm} />
        </main>
      </div>
    </ThemeContext.Provider>

  );
};

export default App
