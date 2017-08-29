<template>
	<div>
		<div class="peliculaList">
			<ol>
			  <li v-for="pelicula in peliculasList">
			  <a @href.prevent="" v-on:click="selectPelicula(pelicula)">
			    {{pelicula}}
			   </a>
			  </li>
			</ol>
		</div>
		<detallePeliculas v-show="seen"></detallePeliculas>
	</div>
</template>

<script>
import detallePeliculas from './detallePeliculas'

export default {
  name: 'maestropeliculas',
  data:function(){
  	return {
  		peliculasList:["El Padrino", "Casablanca","Con la muerte en los talones"],
        seen:false
  	}
  },
  components:{
  	detallePeliculas
  },
    methods: {
        selectPelicula: function(pelicula) {
        this.seen=true;
        this.$emit('selectPelicula', pelicula);
        }
  }
   
  
}
</script>

<style>
/* css list with numeber circle background -------------- */
.peliculaList{

    width:450px;
    margin-left: 75px;
 
}

.peliculaList ol{

    counter-reset: li;

    list-style: none;

    *list-style: decimal;

    font: 22px 'verdana', 'lucida sans';

    padding: 0;

    margin-bottom: 4em;

 

}

.peliculaList ol ol{

    margin: 0 0 0 2em;

}

 

.peliculaList a{

    position: relative;

    display: block;

    padding: .4em .4em .4em 2em;

    *padding: .4em;

    margin: .5em 0;

    background: #FFF;

    color: #444;

    text-decoration: none;

    -moz-border-radius: .3em;

    -webkit-border-radius: .3em;

    border-radius: .3em;

}

 

.peliculaList a:hover{

    background: #cbe7f8;

    text-decoration:underline;

}

.peliculaList a:before{

    content: counter(li);

    counter-increment: li;

    position: absolute;

    left: -1.3em;

    top: 50%;

    margin-top: -1.3em;

    background: #87ceeb;

    height: 2em;

    width: 2em;

    line-height: 2em;

    border: .3em solid #fff;

    text-align: center;

    font-weight: bold;

    -moz-border-radius: 2em;

    -webkit-border-radius: 2em;

    border-radius: 2em;

    color:#FFF;

}


</style>