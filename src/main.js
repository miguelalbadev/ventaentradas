// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import MaestroEntradas from './components/MaestroEntradas'


var maestroEntradas = Vue.component('entradas',{
	  template: `
        <ol>
          <li v-for="entrada in entradasList">
          	<a @href.prevent="" v-on:click="">
            {{entrada}}
            </a>
          </li>
        </ol>
    `,

	  data:function(){
	  	return {entradasList: ["Entrada 1","Entrada 2","Entrada 3"]}
	  }
})

var peliculas = Vue.component('peliculas',{
	template: `
        <ol>
          <li v-for="pelicula in peliculasList">
          <a @href.prevent="" v-on:click="">
            {{pelicula}}
           </a>
          </li>
        </ol>
    `,
    data:function() {
    return {peliculasList: ["El Padrino","Casablanca","El cabo del miedo"]}
  }
})

new Vue({
	el: '#tab-1'
	
		
})

new Vue({
	el:'#tab-2'
	
})
