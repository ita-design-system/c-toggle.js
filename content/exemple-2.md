---
eleventyNavigation:
  key: Multiples déclencheurs 1 cible
  order: 20
description: Plusieurs déclencheurs câblés sur une cible seule
layout: libdoc_page.liquid
permalink: "{{ eleventyNavigation.key | slugify }}/index.html"
---
{% sandbox %}
<button c-toggle="ex2" data-opened-state-class="bg-green">déclencheur 1</button> 
<p c-toggle-name="ex2"
    class="d-none"
    data-opened-state-class="">
    Je suis la cible cToggle câblée sur le canal "ex2".<br>
    <button c-toggle="ex2">déclencheur 3</button> 
</p>
<script src="/assets/c-toggle.js"></script>
<!-- DEMO UNIQUEMENT -->
<style>
    .d-none {
        display: none
    }
    .bg-green {
        background-color: yellowgreen;
    }
</style>
{% endsandbox %}