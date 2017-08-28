<template>
	<div>
	  	<div class="entradaList">
		  	<ol>
			  <li v-for="entrada in entradasList">
			  <a @href.prevent="" v-on:click="">
			    {{entrada}}
			   </a>
			  </li>
			</ol>
		</div>
		<detalleEntradas></detalleEntradas>
	</div>

  
</template>

<script>
import detalleEntradas from './detalleEntradas'

export default {
	name: 'maestroentradas',
	data:function(){
		return {
			entradasList:["Entrada1","Entrada2","Entrada3"]
		}
	},
	components:{
  	detalleEntradas
  }
  
}
</script>

<style>
.entradaList{

    width:450px;
    margin-left: 75px;
 
}

.entradaList ol{

    counter-reset: li;

    list-style: none;

    *list-style: decimal;

    font: 22px 'verdana', 'lucida sans';

    padding: 0;

    margin-bottom: 4em;

 

}

.entradaList ol ol{

    margin: 0 0 0 2em;

}

 

.entradaList a{

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

 

.entradaList a:hover{

    background: #cbe7f8;

    text-decoration:underline;

}

.entradaList a:before{

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
