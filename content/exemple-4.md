---
eleventyNavigation:
  key: Multiples déclencheur multiples cibles
  order: 40
description: Plusieurs déclencheurs câblés sur plusieurs cibles
layout: libdoc_page.liquid
permalink: "{{ eleventyNavigation.key | slugify }}/index.html"
date: git Last Modified
---
{% sandbox %}
<button c-toggle="canal_1"
    data-opened-state-class="bc-support-success"
    title="Je bascule tous les canaux canal_1">
    déclencheur canal_1
</button> 
<button c-toggle="canal_2" 
    data-opened-state-class="bc-support-warning"
    title="Je bascule tous les canaux canal_2">
    déclencheur canal_2
</button> 
<p c-toggle-name="canal_1"
    class="d-none"
    data-opened-state-class="p-6 bc-support-success c-support-success">
    canal_1. Je suis la cible 1 du canal "canal_1".<br>
    <button c-toggle="canal_1" 
        data-opened-state-class="bc-support-success"
        title="Je bascule tous les canaux canal_1">
        déclencheur canal_1
    </button> 
    <button c-toggle="canal_2" 
        data-opened-state-class="bc-support-warning"
        title="Je bascule tous les canaux canal_2">
        déclencheur canal_2
    </button> 
</p>
<p c-toggle-name="canal_2"
    class="d-none"
    data-opened-state-class="p-6 bc-support-warning c-support-warning">
    canal_2. Je suis la cible 1 du canal "canal_2".<br>
    <button c-toggle="canal_1" 
        data-opened-state-class="bc-support-success"
        title="Je bascule tous les canaux canal_1">
        déclencheur canal_1
    </button> 
    <button c-toggle="canal_2" 
        data-opened-state-class="bc-support-warning"
        title="Je bascule tous les canaux canal_2">
        déclencheur canal_2
    </button> 
</p>
<p c-toggle-name="canal_2"
    class="d-none"
    data-opened-state-class="p-6 bc-support-warning c-support-warning">
    canal_2. Je suis la cible 2 du canal "canal_2".
</p>
<script src="/assets/c-toggle.js"></script>
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
    }
</style>
{% endsandbox %}