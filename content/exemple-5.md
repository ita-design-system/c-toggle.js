---
eleventyNavigation:
  key: Clic externe
  order: 50
description: Retour à l’état fermé lorsque un clic est effectué en dehors du déclencheur ou de sa cible
layout: libdoc_page.liquid
permalink: "{{ eleventyNavigation.key | slugify }}/index.html"
date: git Last Modified
---
{% sandbox %}
<button c-toggle="ex1" data-dismiss="true">déclencheur</button>
<p c-toggle-name="ex1"
    class="d-none"
    data-onclick-force-dismiss-children-ids="ex3"
    data-opened-state-class="bc-support-success">
    Cible ex2. Je suis la cible cToggle câblée sur le canal "ex1".<br>
    Avec <code>data-dismiss="true"</code><br>
    Je me ferme si un clic est effectué en dehors de cette cible.
    Au clic sur ce paragraphe 
    <code>data-onclick-force-dismiss-children-ids="ex3"</code> 
    force la fermeture de la cible 
    <code>ex3</code>
    <button c-toggle="ex3"
        data-dismiss="true">
        Déclencheur 3
    </button>
    <span c-toggle-name="ex3"
        class="d-none"
        data-opened-state-class="bc-support-warning c-support-warning">
        Cible ex3. Je me ferme lorsque le contenu de 
        <code>ex1</code> est cliqué.
    </span>
    <button c-toggle="ex4"
        data-dismiss="true">
        Déclencheur 4
    </button>
    <span c-toggle-name="ex4"
        class="d-none"
        data-opened-state-class="bc-support-success c-support-success">
        Cible ex4. Je reste ouvert même si 
        le contenu de <code>ex1</code> est cliqué.
    </span>
</p>
<br><br>
<button c-toggle="ex2">Déclencheur par défaut</button>
<p c-toggle-name="ex2"
    class="d-none"
    data-onclick-force-dismiss-children-ids="ex5,ex6"
    data-opened-state-class="bc-primary-300">
    Cible ex2. Je suis la cible cToggle câblée sur le canal "ex2".
    Je me ferme que si un déclencheur ou une méthode sont invoqués.
    <button c-toggle="ex5"
        data-dismiss="true">
        Déclencheur 5
    </button>
    <span c-toggle-name="ex5"
        class="d-none"
        data-opened-state-class="bc-support-warning c-support-warning">
        Cible ex5. Je me ferme lorsque 
        le contenu de <code>ex2</code> est cliqué.
    </span>
    <button c-toggle="ex6"
        data-dismiss="true">
        Déclencheur 6
    </button>
    <span c-toggle-name="ex6"
        class="d-none"
        data-opened-state-class="bc-support-success c-support-success">
        Cible ex6. Je me ferme lorsque 
        le contenu de <code>ex2</code> est cliqué.
    </span>
</p>
<script src="{{ libdocConfig.htmlBasePathPrefix }}assets/c-toggle.js"></script>
<!-- DEMO UNIQUEMENT -->
<style>
    .d-none {
        display: none
    }
    .p-6 {
        padding: 1em;
    }
    .bc-support-warning {
        background-color: orange;
    }
    .c-support-warning {
        color: black;
    }
    .bc-support-success {
        background-color: yellowgreen;
    }
    .c-support-success {
        color: darkgreen;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif; 
        line-height: 1.5em;
    }
    code {
        font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
        color: #444;
        padding: 0em 0.3em;
        background-color: rgba(255,255,255,0.3);
    }
</style>
{% endsandbox %}