import * as Vue from 'vue';

export default Vue.extend({
    template: require('./app.html'),
    data() {
        return {
            radio: '1'
        }
    },
    mounted() {
        console.log(this);
    }
});