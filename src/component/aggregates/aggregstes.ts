import * as Vue from 'vue';

export default Vue.extend({
    template: require('./aggregates.html'),
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
})