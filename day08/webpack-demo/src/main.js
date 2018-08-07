import '../src/styles/main';

const vue = require('vue');

import Vue from 'vue';

import App from './App';

import Card from './components/Card';

import Button from './components/Button';

new Vue({
    el: '#app',
    template: `
        <div>
            <App />
            <Card />
            <Button />
        </div>
    `,
    components: {
        App,
        Card,
        Button
    }
})