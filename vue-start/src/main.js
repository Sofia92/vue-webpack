/**
 * Created by sofia on 2017/3/16.
 */
import Vue from 'vue'

const capitalize = function (value) {
    return value.toUpperCase()
};

new Vue({
    el: '#app',
    data: {
        message: 'sofia',
        seen:true,
        filters:{
            capitalize:function (value) {
                return value.toUpperCase()
            }
        }
    }
});
