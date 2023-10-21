import { livres } from "../scripts/livres.js";

export class Filtres {
    constructor() {
        this.section = document.querySelector('section');
    }


    afficherLivreAll() {
        this.section.innerHTML = '';

        for (let i = 0, l = livres.length; i < l; i++) {
            let livre = livres[i];

            let dom = `
                <div data-js-livre>
                    <div class="container-livre-img">
                        <img src="${livre.image}" alt="">
                    </div>
                    <div class="container-livre-info">
                        <p data-livre-titre="${livre.titre}">${livre.titre}</p>
                        <div class="container-livre-prix-ajouter">
                            <p>${livre.prix} $</p>
                            <input type="button" value="Ajouter">
                        </div>
                    </div>
                </div>
            `;

            this.section.innerHTML += dom;
        }
    }

    afficherNouveautes() {
        this.section.innerHTML = '';

        for (let i = 0, l = livres.length; i < l; i++) {
            let livre = livres[i];

            if (livre.nouveaute === true) {
                let dom = `
                    <div data-js-livre>
                        <div class="container-livre-img">
                            <img src="${livre.image}" alt="">
                        </div>
                        <div class="container-livre-info">
                            <p data-livre-titre="${livre.titre}">${livre.titre}</p>
                            <div class="container-livre-prix-ajouter">
                                <p>${livre.prix} $</p>
                                <input type="button" value="Ajouter">
                            </div>
                        </div>
                    </div>
                `;

                this.section.innerHTML += dom;
            }
        }
    }

    afficherLitterature() {
        this.section.innerHTML = '';

        for (let i = 0, l = livres.length; i < l; i++) {
            let livre = livres[i];

            if (livre.categorie === 'Littérature') {
                let dom = `
                    <div data-js-livre>
                        <div class="container-livre-img">
                            <img src="${livre.image}" alt="">
                        </div>
                        <div class="container-livre-info">
                            <p data-livre-titre="${livre.titre}">${livre.titre}</p>
                            <div class="container-livre-prix-ajouter">
                                <p>${livre.prix} $</p>
                                <input type="button" value="Ajouter">
                            </div>
                        </div>
                    </div>
                `;
                
                this.section.innerHTML += dom;
            }
        }

    }


    afficherArtDeVivre() {
        this.section.innerHTML = '';

        for (let i = 0, l = livres.length; i < l; i++) {
            let livre = livres[i];

            if (livre.categorie === 'Art de vivre') {
                let dom = `
                    <div data-js-livre>
                        <div class="container-livre-img">
                            <img src="${livre.image}" alt="">
                        </div>
                        <div class="container-livre-info">
                            <p data-livre-titre="${livre.titre}">${livre.titre}</p>
                            <div class="container-livre-prix-ajouter">
                                <p>${livre.prix} $</p>
                                <input type="button" value="Ajouter">
                            </div>
                        </div>
                    </div>
                `;

                this.section.innerHTML += dom;
            }
        }
    }

    afficherBJH() {
        this.section.innerHTML = '';

        for (let i = 0, l = livres.length; i < l; i++) {
            let livre = livres[i];

            if (livre.categorie === 'BD, Jeunesse, Humour') {
                let dom = `
                    <div data-js-livre>
                        <div class="container-livre-img">
                            <img src="${livre.image}" alt="">
                        </div>
                        <div class="container-livre-info">
                            <p data-livre-titre="${livre.titre}">${livre.titre}</p>
                            <div class="container-livre-prix-ajouter">
                                <p>${livre.prix} $</p>
                                <input type="button" value="Ajouter">
                            </div>
                        </div>
                    </div>
                `;

                this.section.innerHTML += dom;
            }
        }
    }

    afficherCultSoc() {
        this.section.innerHTML = '';

        for (let i = 0, l = livres.length; i < l; i++) {
            let livre = livres[i];

            if (livre.categorie === 'Culture et société') {
                let dom = `
                    <div data-js-livre>
                        <div class="container-livre-img">
                            <img src="${livre.image}" alt="">
                        </div>
                        <div class="container-livre-info">
                            <p data-livre-titre="${livre.titre}">${livre.titre}</p>
                            <div class="container-livre-prix-ajouter">
                                <p>${livre.prix} $</p>
                                <input type="button" value="Ajouter">
                            </div>
                        </div>
                    </div>
                `;

                this.section.innerHTML += dom;
            }
        }
    }

    afficherLTN() {
        this.section.innerHTML = '';

        for (let i = 0, l = livres.length; i < l; i++) {
            let livre = livres[i];

            if (livre.categorie === 'Loisirs, Tourisme, Nature') {
                let dom = `
                    <div data-js-livre>
                        <div class="container-livre-img">
                            <img src="${livre.image}" alt="">
                        </div>
                        <div class="container-livre-info">
                            <p data-livre-titre="${livre.titre}">${livre.titre}</p>
                            <div class="container-livre-prix-ajouter">
                                <p>${livre.prix} $</p>
                                <input type="button" value="Ajouter">
                            </div>
                        </div>
                    </div>
                `;

                this.section.innerHTML += dom;
            }
        }
    }

    afficherSavScience() {
        this.section.innerHTML = '';

        for (let i = 0, l = livres.length; i < l; i++) {
            let livre = livres[i];

            if (livre.categorie === 'Savoir et science') {
                let dom = `
                    <div data-js-livre>
                        <div class="container-livre-img">
                            <img src="${livre.image}" alt="">
                        </div>
                        <div class="container-livre-info">
                            <p data-livre-titre="${livre.titre}">${livre.titre}</p>
                            <div class="container-livre-prix-ajouter">
                                <p>${livre.prix} $</p>
                                <input type="button" value="Ajouter">
                            </div>
                        </div>
                    </div>
                `;

                this.section.innerHTML += dom;
            }
        }
    }
}
