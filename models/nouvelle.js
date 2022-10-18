const Model = require('./model');
module.exports = 
    class Nouvelle extends Model {
        constructor(categorie, titre, texte, imageUrl, date) {
            super();
            this.Categorie = categorie;
            this.Titre = titre;
            this.Texte = texte;
            this.ImageUrl = imageUrl;
            this.Date = date;

            this.addValidator('Categorie', 'string');
            this.addValidator('Titre', 'string');
            this.addValidator('Texte', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Date', 'string');
        }
    }