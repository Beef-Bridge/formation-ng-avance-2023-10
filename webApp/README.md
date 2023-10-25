Pour générer le fichier lisible : CTRL + SHIFT + v
ou bouton droit

# Commandes Angular NG

# New projet

ng new nomDuProjet

## options :

# Generate objets

## composant 
- ng g(enerate) c(omposant) nomDuComposant
- options : 
--export (exporte le composant depuuis le module)
--skip-tests : omet la création du fichier de spec.ts (tests unitaires)
--skip-import : ne déclare pas le composant dans un module
--flat : crée le composant sans dossier

## module
- ng g(enerate) m(odule) nomDuModule
- options :
-- routing : crée le fichier de routing forChild pour le module concerné

## service 
- ng g(enerate) s(ervice) nomDuService
- options : 
--skip-tests : omet la création du fichier de spec.ts (tests unitaires)

## pipe 
- ng g(enerate) p(ipe) nomDuPipe
- options : 
--skip-tests : omet la création du fichier de spec.ts (tests unitaires)
