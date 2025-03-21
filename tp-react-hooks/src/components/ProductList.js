import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import useProductSearch from '../hooks/useProductSearch';
import {LanguageContext} from "../language/LanguageContext";


const ProductList = ({searchterm}) => {
  const { isDarkTheme } = useContext(ThemeContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext pour les traductions
  const {language} = useContext(LanguageContext);
    console.log("Langue actuelle dans ProductList :", language);


  const { 
    products, 
    loading, 
    error,reload,
    previousPage,nextPage,page,totalpages,
    // TODO: Exercice 4.1 - Récupérer la fonction de rechargement
    // TODO: Exercice 4.2 - Récupérer les fonctions et états de pagination
  } = useProductSearch();
  
  if (loading) return (
    <div className="text-center my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">
            {language==="fr"?'chargement....':'loading...'}
        </span>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="alert alert-danger" role="alert">
      Erreur: {error}
    </div>
  );
  const filterProducts=products.filter(product=>product.title.toLowerCase().includes(searchterm.toLowerCase()));
  return (
    <div>
      {/* TODO: Exercice 4.1 - Ajouter le bouton de rechargement */}
      <div className="mb-3">
        <button onClick={reload} disabled={loading}>
          {loading?(language==='fr'?'Chargement....':'loading...'):(language==='fr'?'Recharger':'Reload')}
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filterProducts.map(product => (
          <div key={product.id} className="col">
            <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
              {product.thumbnail && (
                <img 
                  src={product.thumbnail} 
                  className="card-img-top" 
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>{language==='fr'?'prix':'price'}</strong>
                  {product.price}€
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* TODO: Exercice 4.2 - Ajouter les contrôles de pagination */}

      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={previousPage} disabled={page<=1}>
              {language==='fr'?'Precedent':'Previous'}
            </button>
          </li>
          <li className="page-item">
            <span className="page-link">
              {language==='fr'?`Page${page}Sur${totalpages}`:`Page${page}Of${totalpages}`}
            </span>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage} disabled={page>=totalpages}>
              {language==='fr'?'Suivant':'Next'}
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default ProductList;