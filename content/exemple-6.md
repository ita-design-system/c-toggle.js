---
eleventyNavigation:
  key: Mouseenter
  order: 60
description: Bascule le canal spécifié vers l’état ouvert lorsque le pointeur passe dans la zone d'un déclencheur
layout: libdoc_page.liquid
permalink: "{{ eleventyNavigation.key | slugify }}/index.html"
---
{% sandbox %}
<button c-toggle="ex1" data-event="mouseenter">déclencheur</button>
<p c-toggle-name="ex1"
    class="d-none"
    data-opened-state-class="p-6 bc-support-success c-support-success">
    Je suis la cible cToggle câblée sur le canal "ex1". Avec <br><code>data-event="mouseenter"</code> <br>Je m'ouvre lorsque le pointeur passe dans la zone d'un déclencheur.<br>
    Pour le fermer il faut invoquer la méthode<br>
    <code>cToggle.close('ex1')</code><br>
    <button onclick="cToggle.close('ex1')">fermer avec la méthode</button><br>
    ou créer un autre déclencheur <code>c-toggle="ex1"</code> :<br>
    <button c-toggle="ex1">fermer avec un autre déclencheur</button>
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