import * as Vue from 'vue';
import header from './component/header/header';
import aggregate from './component/aggregates/aggregstes';

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
    mounted() {
        console.log(this);
    },
    components: {
        'admin-header': header,
        aggregate
    }
});