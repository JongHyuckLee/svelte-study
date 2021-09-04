import Vue from 'vue';
import React from 'react';
import ReactDOM from 'react-dom';
import VueApp from './Vue/Index';
import SvelteApp from './Svelte/Index.svelte'
import ReactApp from  './React/index'

ReactDOM.render(<ReactApp/>, document.getElementById('react-app'));
new Vue({
    el: '#vue-app',
    components: {
        VueApp
    }
})

new SvelteApp({
    target: document.body,
});
