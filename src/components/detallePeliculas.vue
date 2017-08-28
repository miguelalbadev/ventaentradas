<template>
	<div >
        <form>
            <legend>Detalle Película</legend>
            <br/>
            <label id="textTitulo">Título: </label>
            <input id="inputTitulo" type="text"/>
            <br/><br/>
            <label id="textDirector">Director: </label>
            <input id="inputDirector" type="text"/>
            <br/><br/>
            <label id="textFecha">Fecha estreno: </label>
            <input id="inputFecha" type="date"/>
            <br/><br/>
            <button id="buttonNuevo">Nuevo</button>
            <button id="buttonSave">Guardar</button>
        </form>
    </div>
</template>

<script>
//import Hello from './components/Hello'

export default {
  name: 'detallePeliculas',
  data:function(){
    return{
      seen:false
    }
  }
  
}   


</script>

<style>
#textTitulo{
    margin-left: 75px;
}

#textDirector{
    margin-left: 75px;
}

#textFecha{
    margin-left: 75px;
}

#inputTitulo{
    margin-left: 140px;
}

#inputDirector{
    margin-left: 115px;
}

#inputFecha{
    margin-left: 55px;
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