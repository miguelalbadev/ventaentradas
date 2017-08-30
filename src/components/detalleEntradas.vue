<template>
  	<div >
        <form>
            <legend>Detalle Entradas</legend>
            <br/>
            <label id="textEntrada">Código entrada: </label>
            <input id="inputEntrada" type="text" v-bind:value="entrada.Codigo"/>
            <br/><br/>
            <label id="textFecha">Fecha: </label>
            <input id="inputFechaEntrada" type="date" v-bind:value="entrada.FechaEntrada.substring(0,10)"/>
            <br/><br/>
            <label id="textImporte">Importe: </label>
            <input id="inputImporteEntrada" type="text" v-bind:value="entrada.Precio"/>
            <br/><br/>
            <label id="textPelicula">Película: </label>
            <input id="inputPeliculaEntrada" type="text" v-bind:value="entrada.Pelicula"/>
            <br/><br/>
            <input class="boton" type="button" id="buttonNuevo" v-on:click="nuevaEntrada()" value="Nuevo"/>
            <input class="boton" type="button" id="buttonUpdate" value="Modificar"/>
            <input class="boton" type="button" id="buttonDelete" value="Eliminar"/>
            <input class="boton" type="button" v-show="seen" id="buttonSave" value="Guardar"/>
            
        </form>
    </div>
  
</template>

<script>
//import Hello from './components/Hello'

export default {
  name: 'detallepeliculas',
  data:function(){
    return{
      entrada:null,
      seen:false
    }
  },
  methods: {
    
    nuevaEntrada:function(){
      debugger;
      this.seen = true;
      this.entrada = null;
    }
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
