import { Filtres } from "../scripts/filtres.js";
import { livres } from "../scripts/livres.js";

export class Librairie {

    constructor() {

        //** header */
        this._header = document.querySelector('header');
        this._BtnPanier = this._header.querySelector('div');
    
        //** Aside */
        this._aside = document.querySelector('aside');
        this._div = this._aside.querySelector('div');
        this._btnTous = this._div.querySelector('button[data-js="Tous"]');
        this._btnNouveautes = this._div.querySelector('button[data-js="Nouveautés"]');
        this._btnLitterature = this._div.querySelector('button[data-js="Littérature"]');
        this._btnArtDeVivre = this._div.querySelector('button[data-js="Art de vivre"]');
        this._btnBJH = this._div.querySelector('button[data-js="BD, Jeunesse, Humour"]');
        this._btnCultSoc = this._div.querySelector('button[data-js="Culture et société"]');
        this._btnLTN = this._div.querySelector('button[data-js="Loisirs, Tourismes, Nature"]');
        this._btnSavSci = this._div.querySelector('button[data-js="Savoir et science"]');

        //** Section */
        this._section = document.querySelector('section');
        this._elsLivreInitial = this._section.querySelectorAll('[data-js-livre]');
        
        //** Modal */
        this._elModal = document.querySelector('[data-js-modal]');
        this._btnFerme = this._elModal.querySelector('button');

        //** Modal Panier */
        this._elModalPanier= document.querySelector('[data-js-modal-panier]');

        this._elHTML = document.documentElement;
        this._elBody = document.body;

        this._filtres = new Filtres();

        this.init();
    }

    //** Methode qui affiche le modal du livre */
    afficheModal(index){
        this._elModal.classList.replace('modal--ferme', 'modal--ouvert');  

        let titre = livres[index].titre,
            auteur = livres[index].auteur,
            editeur = livres[index].editeur,
            pages = livres[index].pages,
            description = livres[index].description,
            image = livres[index].image;

        
        let modalInfo = document.querySelector('.modal__affichage-info'),
            modalImage = document.querySelector('.modal__image');


        // Création des éléments pour les informations du livres
        let elTitre = document.createElement('h2');
        elTitre.textContent = titre;

        let elAuteur = document.createElement('h4');
        elAuteur.textContent = `Auteur: ${auteur}`;

        let elEditeur = document.createElement('h4');
        elEditeur.textContent = `Éditeur: ${editeur}`;

        let elPages = document.createElement('h4');
        elPages.textContent = `Pages: ${pages}`;

        let elDescription = document.createElement('p');
        elDescription.textContent = description;

        modalImage.src = image;

        // Effacage du contenu existant de modalInfo
        modalInfo.innerHTML = '';

        // Ajout des éléments créés
        modalInfo.appendChild(elTitre);
        modalInfo.appendChild(elAuteur);
        modalInfo.appendChild(elEditeur);
        modalInfo.appendChild(elPages);
        modalInfo.appendChild(elDescription);

  
        this._elHTML.classList.add('overflow-y-hidden');
        this._elBody.classList.add('overflow-y-hidden');

    }

    //** Methode qui supprime le modal du livre */
    supprimeModal(){
        this._elModal.classList.replace('modal--ouvert', 'modal--ferme'); 

        this._elHTML.classList.remove('overflow-y-hidden');
        this._elBody.classList.remove('overflow-y-hidden');
    }

    //** Methode qui affiche le modal du panier */
    afficheModalPanier() {
        this._elModalPanier.classList.replace('modalPanier--ferme', 'modalPanier--ouvert');
    
    }

    //** Methode qui supprime le modal du panier */
    suppriemModalPanier() {
        this._elModalPanier.classList.replace('modalPanier--ouvert', 'modalPanier--ferme');
    
    }


    init() {


        //** Gestionnaire d'evenement pour le Panier */
        this._BtnPanier.addEventListener('click', () => {
            
            if (this._elModalPanier.classList.contains('modalPanier--ferme')){
                this.afficheModalPanier();
            }else {
                this.suppriemModalPanier();
            }

        });


        //** Gestionnaire d'evenement pour les 12 premier livres [Div] */
        this._elsLivreInitial.forEach((div) => {
            div.addEventListener('click', (e) => {

                let titreLivre = div.querySelector('p[data-livre-titre]').getAttribute('data-livre-titre');

                let index = -1;

                for (let i = 0, l = livres.length; i<l; i++) {
                    if (livres[i].titre === titreLivre) {
                        index = i; 
                        break;
                    }
                }

                this.afficheModal(index);
            });
        });


        //** Gestionnaire d'evenement pour la fermeture du modal*/
        this._btnFerme.addEventListener('click', () => this.supprimeModal());
        this._elModal.addEventListener('click', () => this.supprimeModal());


        //** Gestionnaire d'evenement du boutton [Tous] */
        this._btnTous.addEventListener('click', () => {
            this._filtres.afficherLivreAll();

            let nouvLivres = this._section.querySelectorAll('[data-js-livre]');

            // Ajoutez un gestionnaire d'événement à chaque élément de nouvLivres
            nouvLivres.forEach((div) => {
                div.addEventListener('click', (e) => {

                    let titreLivre = div.querySelector('p[data-livre-titre]').getAttribute('data-livre-titre');
    
                    let index = -1;
    
                    for (let i = 0, l = livres.length; i<l; i++) {
                        if (livres[i].titre === titreLivre) {
                            index = i; 
                            break;
                        }
                    }
    
                    this.afficheModal(index);
                });
            });

        });


        //** Gestionnaire d'evenement du boutton [Nouveautés] */
        this._btnNouveautes.addEventListener('click', () => {
            this._filtres.afficherNouveautes();

            let nouvLivres = this._section.querySelectorAll('[data-js-livre]');

            // Ajoutez un gestionnaire d'événement à chaque élément de nouvLivres
            nouvLivres.forEach((div) => {
                div.addEventListener('click', (e) => {

                    let titreLivre = div.querySelector('p[data-livre-titre]').getAttribute('data-livre-titre');
    
                    let index = -1;
    
                    for (let i = 0, l = livres.length; i<l; i++) {
                        if (livres[i].titre === titreLivre) {
                            index = i; 
                            break;
                        }
                    }
    
                    this.afficheModal(index);
                });
            });
        });

        
        //** Gestionnaire d'evenement du boutton [Littéerature] */
        this._btnLitterature.addEventListener('click', () => {
            this._filtres.afficherLitterature();

            let nouvLivres = this._section.querySelectorAll('[data-js-livre]');

            // Ajoutez un gestionnaire d'événement à chaque élément de nouvLivres
            nouvLivres.forEach((div) => {
                div.addEventListener('click', (e) => {

                    let titreLivre = div.querySelector('p[data-livre-titre]').getAttribute('data-livre-titre');
    
                    let index = -1;
    
                    for (let i = 0, l = livres.length; i<l; i++) {
                        if (livres[i].titre === titreLivre) {
                            index = i; 
                            break;
                        }
                    }
    
                    this.afficheModal(index);
                });
            });
        });


        //** Gestionnaire d'evenement du boutton [Art de vivre] */
        this._btnArtDeVivre.addEventListener('click', () => {
            this._filtres.afficherArtDeVivre();

            let nouvLivres = this._section.querySelectorAll('[data-js-livre]');

            // Ajoutez un gestionnaire d'événement à chaque élément de nouvLivres
            nouvLivres.forEach((div) => {
                div.addEventListener('click', (e) => {

                    let titreLivre = div.querySelector('p[data-livre-titre]').getAttribute('data-livre-titre');
    
                    let index = -1;
    
                    for (let i = 0, l = livres.length; i<l; i++) {
                        if (livres[i].titre === titreLivre) {
                            index = i; 
                            break;
                        }
                    }
    
                    this.afficheModal(index);
                });
            });
        });


        //** Gestionnaire d'evenement du boutton [BD, Jeunesse, Humour] */
        this._btnBJH.addEventListener('click', () => {
            this._filtres.afficherBJH();

            let nouvLivres = this._section.querySelectorAll('[data-js-livre]');

            // Ajoutez un gestionnaire d'événement à chaque élément de nouvLivres
            nouvLivres.forEach((div) => {
                div.addEventListener('click', (e) => {

                    let titreLivre = div.querySelector('p[data-livre-titre]').getAttribute('data-livre-titre');
    
                    let index = -1;
    
                    for (let i = 0, l = livres.length; i<l; i++) {
                        if (livres[i].titre === titreLivre) {
                            index = i; 
                            break;
                        }
                    }
    
                    this.afficheModal(index);
                });
            });
        });


        //** Gestionnaire d'evenement du boutton [Culture et société] */
        this._btnCultSoc.addEventListener('click', () => {
            this._filtres.afficherCultSoc();

            let nouvLivres = this._section.querySelectorAll('[data-js-livre]');

            // Ajoutez un gestionnaire d'événement à chaque élément de nouvLivres
            nouvLivres.forEach((div) => {
                div.addEventListener('click', (e) => {

                    let titreLivre = div.querySelector('p[data-livre-titre]').getAttribute('data-livre-titre');
    
                    let index = -1;
    
                    for (let i = 0, l = livres.length; i<l; i++) {
                        if (livres[i].titre === titreLivre) {
                            index = i; 
                            break;
                        }
                    }
    
                    this.afficheModal(index);
                });
            });
        });


        //** Gestionnaire d'evenement du boutton [Loisirs, Tourismes, Nature] */
        this._btnLTN.addEventListener('click', () => {
            this._filtres.afficherLTN();

            let nouvLivres = this._section.querySelectorAll('[data-js-livre]');

            // Ajoutez un gestionnaire d'événement à chaque élément de nouvLivres
            nouvLivres.forEach((div) => {
                div.addEventListener('click', (e) => {

                    let titreLivre = div.querySelector('p[data-livre-titre]').getAttribute('data-livre-titre');
    
                    let index = -1;
    
                    for (let i = 0, l = livres.length; i<l; i++) {
                        if (livres[i].titre === titreLivre) {
                            index = i; 
                            break;
                        }
                    }
    
                    this.afficheModal(index);
                });
            });
        });

        
        //** Gestionnaire d'evenement du boutton [Savoir et science] */
        this._btnSavSci.addEventListener('click', () => {
            this._filtres.afficherSavScience();

            let nouvLivres = this._section.querySelectorAll('[data-js-livre]');

            // Ajoutez un gestionnaire d'événement à chaque élément de nouvLivres
            nouvLivres.forEach((div) => {
                div.addEventListener('click', (e) => {

                    let titreLivre = div.querySelector('p[data-livre-titre]').getAttribute('data-livre-titre');
    
                    let index = -1;
    
                    for (let i = 0, l = livres.length; i<l; i++) {
                        if (livres[i].titre === titreLivre) {
                            index = i; 
                            break;
                        }
                    }
    
                    this.afficheModal(index);
                });
            });
        });
    }
}