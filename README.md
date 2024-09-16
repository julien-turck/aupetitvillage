# Site Internet aupetitvillage

Ce fichier est là pour vous aider à visualiser le projet de site Internet Au_petit_village, site de vente de figurines des personnages des bandes déssinées d'Asterix.
Le projet a été généré à l'aide du framework [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.
Ainsi que [Node.js](https://nodejs.org/) version 20.11.1.
Vous pourrez également le modifier afin de l'améliorer ou de vous l'approprier.
Attention : Toutes mes explications sont optimisées pour les OS Windows 10 et 11 de Microsoft.

## Configuration machine préalable

Installation des logiciels suivants :
[VSCode](https://code.visualstudio.com/) + [Node.js](https://nodejs.org/download)
La version de Node que vous utilisez s'affiche automatiquement à l'ouverture de l'invite de commande
Commande pour connaitre votre version de npm : npm --version
Commande pour mettre à jour npm : npm update

## installation du projet sur votre machine

Après téléchargement du projet à cette adresse : [aupetitvillage](https://github.com/julien-turck/aupetitvillage)
Dézippez le fichier afin que aupetitvillage devienne le dossier racine du projet (si le nom du dossier contient d'autres éléments que aupetitvillage, supprimez les en renommant le dossier)
Placez le à la racine du même lecteur que le logiciel Node.js pour plus de confort.
Attention : la première fois, ne modifiez pas l'arborescence des dossiers et fichiers du projets, sous peine que celui-ci comportent d'importantes erreurs ou qu'il soit inutilisable

### Afficher le projet

Démarrez 'Node.js command prompt' installé avec Node.js puis tapez les commandes suivantes, dans l'ordre, pour:

vous placez sur le bon dossier :

```sh
cd aupetitvillage
```

Attention : aupetitvillage est le nom de base du projet. Si vous avez modifié le nom du dossier contenant le projet, il faudra adapter la commande en conséquence.

démarrez la compilation du projet :

```sh
ng serve
```

Dans la barre d'URL d'un navigateur Internet, copiez et collez l'adresse local de type http://localhost:XXXX apparue dans la nouvelle fenêtre (XXXX étant à remplacer par le nombre correspondant au port qui lui sera reservé sur votre machine. Le plus souvent, sera prposé par défaut le port 4200)

### Modifier le projet

Démarrez le logiciel Visual Studio Code, puis dans le menu file, cliquez sur Open Folder. Depuis la nouvelle fenêtre, recherchez le dossier projet dans l'explorateur de fichiers de votre machine. Double-cliquez dessus pour le selectionner.

Pour générer un nouveau composant, lancez la commande :

```sh
ng generate component component-name
```

Vous pouvez également utiliser `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Créer un build exploitable pour les serveurs d'hébergement

Pour sa mise en ligne, il est important de "builder" le projet afin qu'il soit expoitable par les serveurs des hébergeurs.
Pour se faire, toujours dans Node.js, une fois placé dans le dossier du projet, tapez la commande suivante :

```sh
ng build
```

Un dossier Build s'inserera dans le dossier complet du projet. C'est le contenu de ce dossier qu'il faudra transférer sur votre serveur dédié par votre hebergeur.
Le transfert se fait en utilisant le protocole FTP, à l'aide d'un outil de transfert tiers comme Filezilla en téléchargeant la version "client" à cette adresse : [Filezilla](https://filezilla-project.org).

#### Aide supplémentaire

Pour obtenir plus d'aide sur l'utilisation d'Angular utilisez la commande `ng help` ou consultez la page [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
