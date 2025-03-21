<h1>TP React Hooks - Application de Gestion de Produits</h1>
<h3>Exercice 1 : État et Effets</h3>
<h4>1.1 Modification du composant ProductSearch pour l'utiliser dans la recherche:</h4>

Dans cette 1ere partie, on a modifié le composant ProductSearch pour qu’il reçoit deux props : searchTerm et setSearchTerm. Ces deux éléments qui viennent d’un composant parent vont nous permettre de gérer la recherche en temps réel. À chaque fois que l’utilisateur tape dans le champ de recherche, setSearchTerm est appelé pour mettre à jour la valeur, et cette valeur est utilisée pour filtrer la liste des produits.
Voici deux exemples qui montrent la recherche des deux produits(ice cream , kiwi):

<img src="tp-react-hooks/captures/Captureex1.1icecream.png" width="800">

<img src="tp-react-hooks/captures/Captureex1.1kiwi.png" width="800">

<h4>1.2 Implémentation du debounce dans la recherche:</h4>
Pour améliorer la performance, on a implémenté un système de debounce afin d’éviter la répétition de la recherche qu'elle fasse à chaque frappe du clavier. On a utilisé un setTimeout combiné à useEffect pour attendre quelques millisecondes après que l’utilisateur finit de taper avant de lancer la recherche.

<img src="tp-react-hooks/captures/Captureusedebounce.png" width="800">

Voici un exemple qui illustre l'utilisation de usedebounce lors de la recherche du produit "eggs".
<img src="tp-react-hooks/captures/Captureex1.2.png" width="800">

<h3>Exercice 2 : Context et Internationalisation</h3>
<h4>2. Création du LanguageContext et l'ajout du sélecteur de langue:</h4>

LanguageContext va nous permettre de gérer la langue de l’interface d'une manière globale dans l’application.
On a utilisé useContext(LanguageContext) dans ProductSearch pour récupérer la langue actuelle, et on a affiché le placeholder du champ de recherche ainsi que le Prix dans la langue correspondante (fr ou en). L'exemple suivant montre le changement de la langue lorsqu'on selectionne la langue francaise et la langue d'anglais.

<img src="tp-react-hooks/captures/Captureex2languefrancais.png" width="800">

<img src="tp-react-hooks/captures/Captureex2langueanglais.png" width="800">

<h5>Difficulté rencontrée :</h5>

Au début, j’ai oublié d’englober mon application dans le LanguageContext.Provider, donc la valeur language était undefined. Une fois corrigé, tout est bien fonctionné.

<h3>Exercice 3 : Hooks Personnalisés</h3>
<h4>3. Création du hook useDebounce et le hook useLocalStorage:</h4>

On a utilisé deux hooks personnalisés : useDebounce et useLocalStorage. Le hook useDebounce a déjà été expliqué précédemment. Quant au hook useLocalStorage, il nous a permis de stocker la langue choisie par l’utilisateur dans le localStorage du navigateur,et grâce à cela, la langue reste
sauvegardée même après un rafraîchissement de la page.

<img src="tp-react-hooks/captures/Captureuselocal.png" width="800">

En testant dans la console, on a bien retrouvé la valeur "fr" enregistrée, ce qui confirme le bon fonctionnement du hook.

<img src="tp-react-hooks/captures/Captureex3hooklocal.png" width="800">

<h3>Exercice 4 : Gestion Asynchrone et Pagination</h3>
<h4>4. L'ajout du bouton de rechargement et l'implémentation de la pagination:</h4>

On a ajouté le bouton de rechargement pour réinitialiser l'affichage des produits, permettant ainsi de remettre à zéro les filtres ou la recherche en cours. Cela facilite la gestion de l'état des produits sans affecter d'autres parties de l'application.De plus on a également implémenté la pagination afin de diviser les produits en plusieurs pages, améliorant ainsi la lisibilité et la performance de l'application.

<img src="tp-react-hooks/captures/Captureex4.1.png" width="800">

<img src="tp-react-hooks/captures/Captureex4.2.png" width="800">
