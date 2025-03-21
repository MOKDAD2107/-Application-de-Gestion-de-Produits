import { useState, useEffect } from 'react';

// TODO: Exercice 3.1 - Créer le hook useDebounce
// TODO: Exercice 3.2 - Créer le hook useLocalStorage

const useProductSearch = (searchterm) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // TODO: Exercice 4.2 - Ajouter l'état pour la pagination
  const [page, setPage] = useState(1);
  const [totalpages,setTotalpages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // TODO: Exercice 4.2 - Modifier l'URL pour inclure les paramètres de pagination
        setLoading(true); // important de remettre le loading à true à chaque fetch
        const response = await fetch(`https://api.daaif.net/products?delay=1000&page=${page}&search=${searchterm}`);
        if (!response.ok) throw new Error('Erreur réseau');
        const data = await response.json();
        setProducts(data.products);
        setTotalpages(data.totalpages || 1);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts(); // appel de la fonction ici
  }, [page, searchterm]);

    // TODO: Exercice 4.2 - Ajouter les dépendances pour la pagination

    // TODO: Exercice 4.1 - Ajouter la fonction de rechargement
  const reload = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch(`https://api.daaif.net/products?delay=1000&page=${page}&search=${searchterm}`);
        if (!response.ok) throw new Error('Erreur réseau');
        const data = await response.json();
        setProducts(data.products);
        setTotalpages(data.totalpages||1);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }, 1000);
  };






  // TODO: Exercice 4.2 - Ajouter les fonctions pour la pagination
  const nextPage = () => {
    setPage((prev) => Math.min(prev + 1,totalpages));
  }
  const previousPage = () => {
    setPage((prev) => Math.max(prev - 1,1));
  }

  return {
    products,
    loading,
    error,
  // TODO: Exercice 4.1 - Retourner la fonction de rechargement
    reload,
  // TODO: Exercice 4.2 - Retourner les fonctions et états de pagination
    page,totalpages,
    nextPage,previousPage,
}
  ;
};

export default useProductSearch;