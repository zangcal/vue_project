import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homeware from '@/components/Homeware'

Vue.use( Router )

export default new Router( {
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/',
        name: 'Home',
        component: Homeware
    }]
} )
