<template>
	<div>
	  	<div class="entradaList">
		  	<ol>
			  <li v-for="entrada in entradasList">
			  <a @href.prevent="" v-on:click="selectEntrada(entrada)">
			    Fecha: {{entrada.FechaEntrada.getUTCDate()}}/{{entrada.FechaEntrada.getMonth()+1}}/{{entrada.FechaEntrada.getFullYear()}} --- Pelicula: {{entrada.Pelicula}}
			   </a>
			  </li>
			</ol>
		</div>
		<detalleEntradas v-on:updateEntradas="cargaListadoEntradas" v-show="seen"></detalleEntradas>
	</div>

  
</template>

<script>
import detalleEntradas from './detalleEntradas'

export default {
    name: 'maestroentradas',
	data:function(){
		return {
			entradasList:[],
            seen:false
		}
	},
	components:{
  	detalleEntradas
    },
    mounted() {
     this.cargaListadoEntradas();
    },
    methods: {
        selectEntrada: function(entrada) {
            debugger;
        this.seen=true;
        this.$emit('selectEntrada', entrada);
        },
        cargaListadoEntradas(){
            let _this = this;
            $.ajax({

                url: "http://192.168.1.38:51845/api/Entradas/",
                type: 'GET',

                // el tipo de información que se espera de respuesta
                dataType: 'json',

                // código a ejecutar si la petición es satisfactoria;
                // la respuesta es pasada como argumento a la función
                success: function(data) {
                  debugger;
                  var i = 0;


                  for (i = 0; i < data.length; i++) {
                    var entrada = {};
                    entrada.Id = data[i].Id;
                    var fecha = new Date(Date.parse(data[i].FechaEntrada));
                    entrada.FechaEntrada = fecha;
                    entrada.Codigo = data[i].Codigo;
                    entrada.Precio = data[i].Precio;
                    entrada.Pelicula = data[i].Pelicula;

                    _this.entradasList.push(entrada);

                  }

                },
                error: function(xhr, status) {
                  // debugger;
                },
                // código a ejecutar sin importar si la petición falló o no
                complete: function(xhr, status) {
                  //alert('Petición realizada');
                }
            });
        }
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
