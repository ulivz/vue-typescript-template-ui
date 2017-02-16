import * as Vue from 'vue';


export default Vue.extend({
    template: require('./app.html'),
    data() {
        return {
            radio: '1',
            value1: 0
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    conmponents: {

    },
    mounted() {
        console.log(this);
    }
});