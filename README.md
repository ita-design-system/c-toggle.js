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
    DÉCLENCHEUR(S)<br>id1<br>état_fermé --> click
    click --> DÉCLENCHEUR(S)<br>id1<br>état_ouvert
    click --> CIBLE(S)<br>id1<br>état_ouvert
    DÉCLENCHEUR(S)<br>id1<br>état_ouvert --> reclick
    reclick --> DÉCLENCHEUR(S)<br>id1<br>état_fermé
    reclick --> CIBLE(S)<br>id1<br>état_fermé
```

Configuration simple: un déclencheur, une cible.

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/example-1.html)

```html
<button c-toggle="ex1">déclencheur</button>
<p c-toggle-name="ex1"
    class="u-d-none"
    data-opened-state-class="">
    Je suis la cible cToggle câblée sur le canal "ex1"
</p>
```


## Méthodes

```javascript
// Initialise ou actualise les instances de c-toggle
// A invoquer au chargement de la page ainsi qu'à chaque changement
cToggle.update();

// Ouvre l'onglet spécifié et affecte les tabulations liées à ce groupe d'onglets
cToggle.open('ID_ONGLET');
```
