---
eleventyNavigation:
  key: Événements
  order: 80
description: Exemple d’utilisation de l’événement cToggle_event propagé sur le document
layout: libdoc_page.liquid
permalink: "{{ eleventyNavigation.key | slugify }}/index.html"
---
{% sandbox %}
<div id="notif"></div>

<button c-toggle="ex1"
    data-opened-state-class="
    bc-support-success
    c-support-success">
    déclencheur 1
</button>
<button onclick="cToggle.open('ex1')">
    déclencheur open
</button>
<button onclick="cToggle.close('ex1')">
    déclencheur close
</button>

<p class="d-none"
    c-toggle-name="ex1"
    data-opened-state-class="
    p-6
    bc-support-success c-support-success">
    Je suis la cible ex1
</p>
<script src="/assets/c-toggle.js"></script>
<script>
    const myHandler = function(evt) {
        notif.innerText = `cToggle "${evt.detail.id}" a été invoqué avec la méthode "${evt.detail.method}"`;
    }
    document.addEventListener('cToggle_event', myHandler);
</script>
<!-- DEMO UNIQUEMENT -->
<style>
    .d-none {
        display: none
    }
    .p-6 {
        padding: 1em;
    }
    .bc-support-success {
        background-color: yellowgreen;
    }
    .c-support-success {
        color: darkgreen;
    }
    #notif {
        position: fixed;
        left: 0;
        bottom: 0;
        padding: 1em;
        background-color: #F5F5F5;
    }
    #notif::before {
        content: "Info : "
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