---
title: c-toggle.js
description: Documentation de la librairie c-toggle.js dédiée à la bascule d’état des classes CSS d’un élément
layout: libdoc_page.liquid
permalink: index.html
date: git Last Modified
---
cToggle permet de créer des modales, des listes déroulantes, etc.

cToggle met en relation des éléments de DOM déclencheurs avec d'autres éléments de DOM cibles. Une instance de cToggle met en relation un ou plusieurs déclencheurs sur une ou plusieurs cibles lors d'événements utilisateur de type clic, mouseenter, mouseover, sur les déclencheurs.

cToggle est destiné à être personnalisé avec le CSS, le Javascript impliqué est juste la «partie mécanique».

## Installation

Il est recommandé de placer les fichiers dans cet ordre avant la balise fin de body.

### En local

```html
<script src="/path/to/c-toggle.js"></script>
```

### Sur CDN

Via `https://www.jsdelivr.com` :

Version la plus récente

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-toggle.js/ui/js/c-toggle.js
```

Version la plus récente minifiée :

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-toggle.js/ui/js/c-toggle.min.js
```

Typologie avec numéro de version :

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-toggle.js@<TAG_VERSION>/ui/js/c-toggle.js
```

Typologie numéro de version + minification automatique :

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-toggle.js@<TAG_VERSION>/ui/js/c-toggle.min.js
```

Exemple avec version v0.1.2 : 

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-toggle.js@v0.1.2/ui/js/c-toggle.js
```

Exemple avec version v0.1.2 minifié :
```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-toggle.js@v0.1.2/ui/js/c-toggle.min.js
```

## Usage

* **Déclencheurs** : éléments disposant de l'attribut `c-toggle="ID_DU_CANAL"`, une action utilisateur (click, mouseenter, mouseover) sur un de ces éléments déclenche l'échange des valeurs des attributs `class` et `data-opened-state-class` sur tous les déclencheurs `c-toggle="ID_DU_CANAL"` et cibles `c-toggle-name="ID_DU_CANAL"`.
* **Cibles** : éléments disposant de l'attribut `c-toggle-name="ID_DU_CANAL"` et dont la bascule `data-opened-state-class` et `class` est pilotée par les déclencheurs du même canal.
* **État fermé** : on dit que l'état est fermé lorsque les attributs `class` et `data-opened-state-class` ont les même valeurs qu'au chargement de la page.
* **État ouvert** : on dit que l'état est ouvert lorsque l'attribut `data-opened-state-class` vient remplacer l'attribut `class`.

## Exemples

1. [Exemple simple](/content/exemple-1.md) Configuration minimale pour usage de c-toggle.js 
1. [Multiples déclencheurs 1 cible](/content/exemple-2.md) Plusieurs déclencheurs câblés sur une cible seule 
1. [1 déclencheur multiples cibles](/content/exemple-3.md) Un seul déclencheur câblé sur plusieurs cibles 
1. [Multiples déclencheur multiples cibles](/content/exemple-4.md) Plusieurs déclencheurs câblés sur plusieurs cibles 
1. [Clic externe](/content/exemple-5.md) Retour à l’état fermé lorsque un clic est effectué en dehors du déclencheur ou de sa cible 
1. [Mouseenter](/content/exemple-6.md) Bascule le canal spécifié vers l’état ouvert lorsque le pointeur passe dans la zone d'un déclencheur 
1. [Mouseover](/content/exemple-7.md) Bascule le canal spécifié vers l’état ouvert lorsque le pointeur entre dans la zone d’un déclencheur et vers l’état fermé quand il en sort 
1. [Événements](/content/exemple-8.md) Exemple d’utilisation de l’événement cToggle_event propagé sur le document 

## Clic externe

L'attribut `data-dismiss="true"` permet le retour à l’état fermé du canal spéccifié lorsque un clic est effectué en dehors d'un déclencheur ou d'une cible.

[Voir un exemple clic externe](/content/exemple-5.md)

## Clic interne

Par défaut, la fermeture d’un "dismiss" n’est pas propagée à l’intérieur d’un toggle. Il est possible de forcer cette fermeture en ajoutant l’attribut `data-onclick-force-dismiss-children-ids="[liste_d_ids]"` sur un `c-toggle` ou un `c-toggle-name`.

[Voir un exemple clic interne](/content/exemple-5.md)

## Mouseenter

L'attribut `data-event="mouseenter"` permet de basculer le canal spécifié vers l’état ouvert lorsque le pointeur passe dans la zone d'un déclencheur.

[Voir un exemple mouseenter](/content/exemple-6.md)

## Mouseover

L'attribut `data-event="mouseover"` permet de basculer le canal spécifié vers l’état ouvert lorsque le pointeur entre dans la zone d’un déclencheur et vers l’état fermé quand il en sort.

[Voir un exemple mouseover](content/exemple-7.md)

## Méthode update

Initialiser ou actualiser les instances de c-toggle. À invoquer au chargement de la page ainsi qu'à chaque changement de DOM.

```javascript
cToggle.update();
```

## Méthode open

Méthode qui bascule vers l'état ouvert l'ensemble des déclencheurs et cibles de l'id/canal spécifié.

`@param {String}` channel identifiant du canal

```javascript
cToggle.open(channel)
```

## Méthode close

Méthode qui bascule vers l'état fermé l'ensemble des déclencheurs et cibles de l'id/canal spécifié

`@param {String} channel` identifiant du canal

```javascript
cToggle.close(channel)
```

## Méthode toggle

Méthode qui bascule l'ensemble des déclencheurs et cibles de l'id/canal spécifié:

* vers l'état fermé si leur état est ouvert
* vers l'état ouvert si leur état est fermé

`@param {String} channel` identifiant du canal

```javascript
cToggle.toggle(channel)
```

## Événements

À chaque changement d’état d’une instance de cToggle, l’événement personnnalisé `cToggle_event` est propagé sur le document avec en option l’identifiant de l’instance et la méthode utilisée: `open`, `close` ou `toggle`.

[Voir l’exemple](content/exemple-8.md)

```javascript
const myHandler = function(evt) {
    console.log(`cToggle "${evt.detail.id}" a été invoqué avec la méthode "${evt.detail.method}"`)
}
document.addEventListener('cToggle_event', myHandler);
```

## États

Les états `ouvert` et `fermé` sont spécifiés dans les instances. On peut retrouver l'état courant de l'identifiant `foo` comme suit:

```javascript
cToggle.instances.foo.opened //true ou false
```