---
eleventyNavigation:
  key: 1 déclencheur multiples cibles
  order: 30
description: Un seul déclencheur câblé sur plusieurs cibles
layout: libdoc_page.liquid
permalink: "{{ eleventyNavigation.key | slugify }}/index.html"
---
{% sandbox %}
<button c-toggle="ex3">déclencheur</button> 
<p c-toggle-name="ex3"
    class="orange-mode"
    data-opened-state-class="green-mode fw-bold">
    Je suis la cible 1 du canal "ex3".
</p>
<div c-toggle-name="ex3"
    class="d-none"
    data-opened-state-class="pos-fixed bottom-0 left-0 green-mode">
    Je suis la cible 2 du canal "ex3".
</div>
<p c-toggle-name="ex3"
    class="orange-mode"
    data-opened-state-class="green-mode fw-bold fs-large">
    Je suis la cible 3 du canal "ex3".
</p>
<script src="/assets/c-toggle.js"></script>
<!-- DEMO UNIQUEMENT -->
<style>
    .d-none {
        display: none
    }
    .orange-mode {
        background-color: orange;
        color: black;
    }
    .green-mode {
        background-color: yellowgreen;
        color: darkgreen;
    }
    .pos-fixed {
        position: fixed
    }
    .bottom-0 {
        bottom: 0;
    }
    .left-0 {
        left: 0;
    }
    .fs-large {
        font-size: xx-large;
    }
    .fw-bold {
        font-weight: 700;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif; 
    }
</style>
{% endsandbox %}