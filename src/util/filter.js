import Vue from 'vue'

export default {
    install (Vue){
        Vue.filter('join',function(value,separator) {
            return value.join(separator);
        });
        Vue.filter('addUnit',function(value,unit) {
            if(value instanceof Array){
                value.forEach(item=>item += unit)
            }
            if(value instanceof String){
                return value + unit;
            }
            return ''
        });
    }
}
