<template>
  	<div >
        <form>
            <legend>Detalle Entradas</legend>
            <br/>
            <label id="textEntrada">Código entrada: </label>
            <input id="inputEntrada" type="text" v-bind:value="message"/>
            <br/><br/>
            <label id="textFecha">Fecha: </label>
            <input id="inputFechaEntrada" type="text"/>
            <br/><br/>
            <label id="textImporte">Importe: </label>
            <input id="inputImporteEntrada" type="date"/>
            <br/><br/>
            <button id="buttonNuevo">Nuevo</button>
            <button id="buttonSave">Guardar</button>
            
        </form>
    </div>
  
</template>

<script>
//import Hello from './components/Hello'

export default {
  name: 'detallepeliculas',
  props: ['message']
	  
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

#inputEntrada{
    margin-left: 40px;
}

#inputFechaEntrada{
    margin-left: 135px;
}

#inputImporteEntrada{
    margin-left: 113px;
}

#buttonNuevo{
    margin-top: 75px;
    margin-left: 100px;
    
}

#buttonSave{
    margin-top: 75px;
    margin-left: 55px;
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

button {
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

button:hover {
  background: #fff;
  color: #09C;
}
</style>
