import React, {useState, useContext, useMemo} from 'react';
import { ThemeContext } from '../App';
import useDebounce from "../hooks/useDebounce";
import {LanguageContext} from "../language/LanguageContext";
import useProductSearch from "../hooks/useProductSearch";

const ProductSearch = ({searchterm,setSearchterm,products}) => {


  const { isDarkTheme } = useContext(ThemeContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  const {language}=useContext(LanguageContext);
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
const debounceSerchterm=useDebounce(searchterm,300);
  const filteredProducts =(products||[]).filter(product=>product.title.toLowerCase().includes(debounceSerchterm.toLowerCase()));
    console.log("Valeur actuelle (searchterm) :", searchterm);
    console.log("Valeur débouncée (debounceSearchterm) :", debounceSerchterm);
  console.log("Langue actuelle dans ProductSearch :", language);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
        placeholder={language==='fr'?'Rechercher un produit...':'Search for a product...'}
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
        <ul>
            {filteredProducts.map((product) => (
                <li key={product.title}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>{language==='fr'?'Prix:':'Price:'} {product.price}€</p>
                </li>
            ))}
        </ul>


    </div>
  );
};

export default ProductSearch;