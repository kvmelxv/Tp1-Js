import { livres } from "./livres.js";

(function(){

    /** Récuperer la section dédier au livres */

    let section = document.querySelector('section');

    //** boucler pour récuperer les 12 premiers livres  */

    for (let i = 0, l = livres.length; i <= 11; i++) {
        let livre = livres[i];


        /**Création du dom*/

        let dom = 
        `
        <div data-js-livre>
            <div class="container-livre-img">
                <img src="${livre.image}" alt="">
            </div>
            <div class="container-livre-info">
                <p>${livre.titre}</p>
                <div class="container-livre-prix-ajouter">
                    <p>${livre.prix} $</p>
                    <input type="button" value="Ajouter">
                </div>
            </div>
        </div>
        `;

        // Insèrtion du code HTML directement dans la section

        section.innerHTML += dom;
     
    }   

})();