"use strict";
var Vue = require('vue');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Vue.extend({
    template: require('./app.html'),
    data: function () {
        return {
            radio: '1'
        };
    },
    mounted: function () {
        console.log(this);
    }
});
//# sourceMappingURL=app.js.map