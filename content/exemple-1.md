---
eleventyNavigation:
  key: Exemple simple
  order: 10
description: Configuration minimale pour usage de c-toggle.js
layout: libdoc_page.liquid
permalink: "{{ eleventyNavigation.key | slugify }}/index.html"
---
{% sandbox %}
<button c-toggle="ex1">déclencheur</button>
<p c-toggle-name="ex1"
    class="d-none"
    data-opened-state-class=" ">
    Je suis la cible cToggle câblée sur le canal "ex1"
</p>
<hr>
<button c-toggle="ex2" data-opened-state-class="bg-green">déclencheur</button>
<p c-toggle-name="ex2"
    class="d-none"
    data-opened-state-class=" ">
    Je suis la cible cToggle câblée sur le canal "ex2"
</p>
<script src="/assets/c-toggle.js"></script>
<!-- DEMO UNIQUEMENT -->
<style>
    .d-none {
        display: none;
    }
    .bg-green {
        background-color: yellowgreen;
    }
</style>
{% endsandbox %}