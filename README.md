# c-toggle.js

Librairie Javascript dédiée à la bascule d’état des classes CSS d’un élément.

[Démo](https://ita-design-system.github.io/c-toggle.js/)

cToggle permet de créer des modales, des listes déroulantes, etc.

cToggle met en relation des éléments de DOM déclencheurs avec d'autres éléments de DOM cibles. Une instance de cToggle met en relation un ou plusieurs déclencheurs sur une ou plusieurs cibles lors d'événements utilisateur de type clic, mouseenter, mousehover, sur les déclencheurs.

cToggle est destiné à être entièrement personnalisé avec le CSS, le Javascript impliqué est juste la partie mécanique.

## Installation

```html
<body>
    <!-- Il est recommandé de placer la librairie avant la balise fin de body -->
    <script src="/path/to/c-toggle.js"></script>
</body>
```

## Usage



* **`DÉCLENCHEURS_état_fermé`** classe par défaut.
* **`CIBLES_état_fermé`** classe par défaut.
* **`DÉCLENCHEURS_état_ouvert`** l'attribut `class` est remplacé par la valeur de l'attribut `data-opened-state-class`.
* **`CIBLES_état_ouvert`** l'attribut `class` est remplacé par la valeur de l'attribut `data-opened-state-class`.

```mermaid
stateDiagram-v2
    DÉCLENCHEURS<br>+CIBLES<br>_état_fermé --> click
    click --> DÉCLENCHEURS<br>+CIBLES<br>_état_ouvert
    DÉCLENCHEURS<br>+CIBLES<br>_état_ouvert --> reclick
    reclick --> DÉCLENCHEURS<br>+CIBLES<br>_état_fermé
```

```html
<button c-toggle="premiere">déclencheur</button>
<div c-toggle-name="premiere"
    class="maclasse1 maclasse2 maclasseN"
    data-opened-state-class="nouvelleclasse1 nouvelleclasse2 nouvelleclasseN">
    Cible sur le canal "première". 
    Par défaut, au clic sur le déclencheur, cToggle va appliquer 
    la valeur de l'attribut "data-opened-state-class" (nouvelleclasse1 nouvelleclasse2 nouvelleclasseN)
    sur l'attribut "class" (maclasse1 maclasse2 maclasseN).

    Cet état s'appelle l'état ouvert
</div>
```

## Méthodes

```javascript
// Initialise ou actualise les instances de c-toggle
// A invoquer au chargement de la page ainsi qu'à chaque changement
cToggle.update();

// Ouvre l'onglet spécifié et affecte les tabulations liées à ce groupe d'onglets
cToggle.open('ID_ONGLET');
```
