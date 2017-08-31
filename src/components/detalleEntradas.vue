<template>
  	<div >
        <form>
            <legend>Detalle Entradas</legend>
            <br/>
            <label id="textEntrada">Código entrada: </label>
            <input id="inputEntrada" type="text" v-model:value="entrada.Codigo"/>
            <br/><br/>
            <label id="textFecha">Fecha: </label>
            <input id="inputFechaEntrada" type="date" v-model:value="entrada.FechaEntrada"/>
            <br/><br/>
            <label id="textImporte">Importe: </label>
            <input id="inputImporteEntrada" type="text" v-model:value="entrada.Precio"/>
            <br/><br/>
            <label id="textPelicula">Película: </label>
            <input id="inputPeliculaEntrada" type="text" v-model:value="entrada.Pelicula"/>
            <br/><br/>
            <input class="boton" v-bind:disabled="deshabilitado" type="button" id="buttonNuevo" v-on:click="nuevaEntrada()" value="Nuevo"/>
            <input class="boton" v-bind:disabled="deshabilitado" type="button" id="buttonUpdate" value="Modificar"/>
            <input class="boton" v-bind:disabled="deshabilitado" type="button" id="buttonDelete" value="Eliminar"/>
            <input class="boton" type="button" v-if="seen" id="buttonSave" v-on:click="guardarEntrada()" value="Guardar"/>
            
        </form>
    </div>
  
</template>

<script>
//import Hello from './components/Hello'

export default {
  name: 'detalleEntradas',
  data:function(){
    return{
      entrada:{
          Codigo:'',
          FechaEntrada: '',
          Precio: '',
          Pelicula: ''
      },
      seen:false,
      deshabilitado:false
      
    }
  },
  /*computed: {
    
    // a computed getter
    formatFecha: function () {
      debugger;
      var fecha = this.entrada;
      return fecha.FechaEntrada;
    }
  },*/
  methods: {
    
    nuevaEntrada:function(){
      debugger;
      this.seen = true;
      this.entrada = {
          Codigo:'',
          FechaEntrada: '',
          Precio: '',
          Pelicula: ''
      };
      this.deshabilitado = true;

    },
    guardarEntrada(){
      debugger;
      var entrada = this.entrada;
      if(entrada.Codigo==""||entrada.Precio==""||entrada.Pelicula==""||entrada.FechaEntrada==""){
        alert('Debes rellenar todos los campos para poder guardar el registro');
      }
      else{
         
        $.ajax({

          url: "http://192.168.1.38:51845/api/Entradas/",
          type: 'POST',

          // el tipo de información que se espera de respuesta
          dataType: 'json',

          data: {
            Codigo: entrada.Codigo,
            FechaEntrada: entrada.FechaEntrada,
            Precio: entrada.Precio,
            Pelicula: entrada.Pelicula
          },

          // código a ejecutar si la petición es satisfactoria;
          // la respuesta es pasada como argumento a la función
          success: function(data) {
            debugger;
            alert('La función POST funcionó correctamente');
            //_this.personasList.push(persona);
            this.$emit('updateEntradas');
          },
          error: function(xhr, status) {
            debugger;
            alert('Disculpe, existió un problema con la función POST');
          },
          // código a ejecutar sin importar si la petición falló o no
          complete: function(xhr, status) {
            //alert('Petición realizada');
          }
        });
      }
  },
  
	  
  },
  created() {
      let _this = this;
      this.seen = false;
      this.$parent.$on('selectEntrada', (otro)=>{
        this.entrada = otro;
        
      });
    
  }

}
</script>

<style>
#textEntrada{
    margin-left: 75px;
}

#textFecha{
    margin-left: 75px;
}

#textImporte{
    margin-left: 75px;
}

#textPelicula{
    margin-left: 75px;
}

#inputEntrada{
    margin-left: 40px;
}

#inputFechaEntrada{
    margin-left: 135px;
}

#inputImporteEntrada{
    margin-left: 113px;
}

#inputPeliculaEntrada{
  margin-left: 113px;
}

#buttonNuevo{
    margin-top: 75px;
    margin-left: 100px;
    
}

#buttonSave{
    margin-top: 75px;
    margin-left: 35px;
}

legend{

    margin-left: 75px;
}

fieldset{
    
    margin-left:65px;

}

form {
    background: -webkit-linear-gradient(bottom, #CCCCCC, #EEEEEE 175px);
    background: -moz-linear-gradient(bottom, #CCCCCC, #EEEEEE 175px);
    background: linear-gradient(bottom, #CCCCCC, #EEEEEE 175px);
    margin: auto;
    position: relative;
    width: 550px;
    height: 450px;
    font-family: Tahoma, Geneva, sans-serif;
    font-size: 18px;
    font-style: italic;
    line-height: 24px;
    font-weight: bold;
    color: #09C;
    text-decoration: none;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #999;
    border: inset 1px solid #333;
    -webkit-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
}

input {
  
  -webkit-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
}

.boton {
  width: 100px;
  
  right: 20px;
  bottom: 20px;
  background: #09C;
  color: #fff;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 18px;
  height: 30px;
  border-radius: 15px;
  border: 1p solid #999;
}

input:hover {
  background: #fff;
  color: #09C;
}
</style>
