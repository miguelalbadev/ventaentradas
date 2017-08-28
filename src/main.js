// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import MaestroEntradas from './components/MaestroEntradas'
import MaestroPeliculas from './components/MaestroPeliculas'


new Vue({
	el:'#tab-1',
  
	components: {
    'maestroentradas': MaestroEntradas,
    'maestropeliculas': MaestroPeliculas
  }
})

new Vue({
  el:'#tab-2',
  
  components: {
    'maestroentradas': MaestroEntradas,
    'maestropeliculas': MaestroPeliculas
  }
})

