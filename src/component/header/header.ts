import * as Vue from 'vue';

export default Vue.extend({
    template: require('./header.html'),
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
})