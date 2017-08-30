<template>
	<div>
		<div class="peliculaList">
			<ol>
			  <li v-for="pelicula in peliculasList">
			  <a @href.prevent="" v-on:click="selectPelicula(pelicula)">
			    Título: {{pelicula.Titulo}} --- Director: {{pelicula.Director}}
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
    		peliculasList:[],
            seen:false
    	}
    },
    components:{
    	detallePeliculas
    },
    mounted() {

     this.cargaListadoPeliculas();
    },
    methods: {
        selectPelicula: function(pelicula) {
        this.seen=true;
        this.$emit('selectPelicula', pelicula);
        },
        cargaListadoPeliculas(){

            let _this = this;
            $.ajax({

                url: "http://192.168.1.38:51845/api/Peliculas/",
                type: 'GET',

                // el tipo de información que se espera de respuesta
                dataType: 'json',

                // código a ejecutar si la petición es satisfactoria;
                // la respuesta es pasada como argumento a la función
                success: function(data) {
                  debugger;

                  var i = 0;


                  for (i = 0; i < data.length; i++) {
                    var pelicula = {};
                    pelicula.Id = data[i].Id;
                    pelicula.Titulo = data[i].Titulo;
                    pelicula.Director = data[i].Director;
                    pelicula.FechaEstreno = data[i].FechaEstreno;
                    
                    _this.peliculasList.push(pelicula);

                  }

                },
                error: function(xhr, status) {
                   debugger;

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