# c-toggle.js

Librairie Javascript dédiée à la bascule d’état des classes CSS d’un élément.

[Démo](https://ita-design-system.github.io/c-toggle.js/)

cToggle permet de créer des modales, des listes déroulantes, etc.

cToggle met en relation des éléments de DOM déclencheurs avec d'autres éléments de DOM cibles. Une instance de cToggle met en relation un ou plusieurs déclencheurs sur une ou plusieurs cibles lors d'événements utilisateur de type clic, mouseenter, mouseover, sur les déclencheurs.

cToggle est destiné à être personnalisé avec le CSS, le Javascript impliqué est juste la «partie mécanique».

## Installation

```html
<body>
    <!-- Il est recommandé de placer la librairie avant la balise fin de body -->
    <script src="/path/to/c-toggle.js"></script>
</body>
```

## Usage

* **Déclencheurs** : éléments disposant de l'attribut `c-toggle="ID_DU_CANAL"`, une action utilisateur (click, mouseenter, mouseover) sur un de ces éléments déclenche l'échange des valeurs des attributs `class` et `data-opened-state-class` sur tous les déclencheurs `c-toggle="ID_DU_CANAL"` et cibles `c-toggle-name="ID_DU_CANAL"`.
* **Cibles** : éléments disposant de l'attribut `c-toggle-name="ID_DU_CANAL"` et dont la bascule `data-opened-state-class` et `class` est pilotée par les déclencheurs du même canal.
* **État fermé** : on dit que l'état est fermé lorsque les attributs `class` et `data-opened-state-class` ont les même valeurs qu'au chargement de la page.
* **État ouvert** : on dit que l'état est ouvert lorsque l'attribut `data-opened-state-class` vient remplacer l'attribut `class`.

```mermaid
stateDiagram-v2
    DÉCLENCHEUR(S)<br>id1<br>état_fermé --> click
    click --> DÉCLENCHEUR(S)<br>id1<br>état_ouvert
    click --> CIBLE(S)<br>id1<br>état_ouvert
    DÉCLENCHEUR(S)<br>id1<br>état_ouvert --> reclick
    reclick --> DÉCLENCHEUR(S)<br>id1<br>état_fermé
    reclick --> CIBLE(S)<br>id1<br>état_fermé
```

### Configuration simple: un déclencheur, une cible.

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-1.html)

```html
<button c-toggle="ex1">déclencheur</button>
<p c-toggle-name="ex1"
    class="u-d-none"
    data-opened-state-class="">
    Je suis la cible cToggle câblée sur le canal "ex1"
</p>
```

### Multiples déclencheurs 1 cible

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-2.html)

```html
<button c-toggle="ex2">déclencheur 1</button> 
<button c-toggle="ex2">déclencheur 2</button> 
<p c-toggle-name="ex2"
    class="u-d-none"
    data-opened-state-class="">
    Je suis la cible cToggle câblée sur le canal "ex2".<br>
    <button c-toggle="ex2">déclencheur 3</button> 
</p>
```

### 1 déclencheur multiples cibles

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-3.html)

```html
<button c-toggle="ex3">déclencheur</button> 
<p c-toggle-name="ex3"
    class="c-dim m-p-6"
    data-opened-state-class="
    c-skin m-bc-primary-200 m-c-primary-800 
    c-dim m-p-6">
    Je suis la cible 1 du canal "ex3".
</p>
<div c-toggle-name="ex3"
    class="
    c-dim m-p-6 m-mt-6
    c-skin m-bc-primary-100 m-c-primary-300"
    data-opened-state-class="
    c-dim m-p-6 m-mt-6
    c-skin m-bc-primary-800 m-c-primary-100">
    Je suis la cible 2 du canal "ex3".
</div>
<p c-toggle-name="ex3"
    class="u-d-none"
    data-opened-state-class="">
    Je suis la cible 3 du canal "ex3".
</p>
```

### Multiples déclencheur multiples cibles

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-4.html)

```html
<button c-toggle="canal_1" 
    data-opened-state-class="c-skin m-bc-support-success-100"
    title="Je bascule tous les canaux canal_1">
    déclencheur canal_1
</button> 
<button c-toggle="canal_2" 
    data-opened-state-class="c-skin m-bc-support-warning-100"
    title="Je bascule tous les canaux canal_2">
    déclencheur canal_2
</button> 
<p c-toggle-name="canal_1"
    class="u-d-none"
    data-opened-state-class="
    c-skin m-bc-support-success-100 m-c-support-success-900 
    c-dim m-p-6">
    canal_1. Je suis la cible 1 du canal "canal_1".<br>
    <button c-toggle="canal_1" 
        data-opened-state-class="c-skin m-bc-support-success-100"
        title="Je bascule tous les canaux canal_1">
        déclencheur canal_1
    </button> 
    <button c-toggle="canal_2" 
        data-opened-state-class="c-skin m-bc-support-warning-100"
        title="Je bascule tous les canaux canal_2">
        déclencheur canal_2
    </button> 
</p>
<p c-toggle-name="canal_2"
    class="u-d-none"
    data-opened-state-class="
    c-skin m-bc-support-warning-100 m-c-support-warning-900 
    c-dim m-p-6">
    canal_2. Je suis la cible 1 du canal "canal_2".<br>
    <button c-toggle="canal_1" 
        data-opened-state-class="c-skin m-bc-support-success-100"
        title="Je bascule tous les canaux canal_1">
        déclencheur canal_1
    </button> 
    <button c-toggle="canal_2" 
        data-opened-state-class="c-skin m-bc-support-warning-100"
        title="Je bascule tous les canaux canal_2">
        déclencheur canal_2
    </button> 
</p>
<p c-toggle-name="canal_2"
    class="u-d-none"
    data-opened-state-class="
    c-skin m-bc-support-warning-100 m-c-support-warning-900 
    c-dim m-p-6">
    canal_2. Je suis la cible 2 du canal "canal_2".
</p>
```

### Clic externe

L'attribut `data-dismiss="true"` permet le retour à l’état fermé du canal spéccifié lorsque un clic est effectué en dehors d'un déclencheur ou d'une cible.

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-5.html)

```html
<button c-toggle="ex1" data-dismiss="true">déclencheur</button>
<p c-toggle-name="ex1"
    class="u-d-none"
    data-opened-state-class="c-skin m-bc-primary-100">
    Je suis la cible cToggle câblée sur le canal "ex1". Avec <br>data-dismiss="true" <br>Je me ferme si un clic est effectué en dehors de cette cible.
</p>
```

### Mouseenter

L'attribut `data-event="mouseenter"` permet de basculer le canal spécifié vers l’état ouvert lorsque le pointeur passe dans la zone d'un déclencheur.

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-6.html)

```html
<button c-toggle="ex1" data-event="mouseenter">déclencheur</button>
<p c-toggle-name="ex1"
    class="u-d-none"
    data-opened-state-class=" 
    c-dim m-p-6
    c-skin m-bc-primary-100">
    Je suis la cible cToggle câblée sur le canal "ex1". Avec <br>data-event="mouseenter" <br>Je m'ouvre lorsque le pointeur passe dans la zone d'un déclencheur.<br>
    Pour le fermer il faut invoquer la méthode<br>
    cToggle.close('ex1')<br>
    <button onclick="cToggle.close('ex1')">fermer avec la méthode</button><br>
    ou créer un autre déclencheur c-toggle="ex1" :<br>
    <button c-toggle="ex1">fermer avec un autre c-toggle</button>
</p>
```

### Mouseover

L'attribut `data-event="mouseover"` permet de basculer le canal spécifié vers l’état ouvert lorsque le pointeur entre dans la zone d’un déclencheur et vers l’état fermé quand il en sort.

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-7.html)

```html
<button c-toggle="ex1" data-event="mouseover">déclencheur</button>
<p c-toggle-name="ex1"
    class="u-d-none"
    data-opened-state-class=" 
    c-dim m-p-6
    c-skin m-bc-primary-100">
    Je suis la cible cToggle câblée sur le canal "ex1". Avec <br>
    data-event="mouseover" <br>
    Je bascule vers l'état ouvert lorsque le pointeur entre dans la zone d'un déclencheur et vers l'état fermé quand il en sort.
</p>
```


## Méthodes

```javascript
// Initialise ou actualise les instances de c-toggle
// A invoquer au chargement de la page ainsi qu'à chaque changement de DOM
cToggle.update();

/**
 * OPEN
 * Méthode qui bascule vers l'état ouvert l'ensemble des déclencheurs et cibles de l'id/canal spécifié
 * @param {String} channel identifiant du canal
 */
cToggle.open(channel)

/**
 * CLOSE
 * Méthode qui bascule vers l'état fermé l'ensemble des déclencheurs et cibles de l'id/canal spécifié
 * @param {String} channel identifiant du canal
 */
cToggle.close(channel)

/**
 * TOGGLE
 * Méthode qui bascule l'ensemble des déclencheurs et cibles de l'id/canal spécifié:
 * vers l'état fermé si leur état est ouvert
 * vers l'état ouvert si leur état est fermé
 * @param {String} channel identifiant du canal
 */
cToggle.toggle(channel)

```
