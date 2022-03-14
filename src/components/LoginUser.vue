<template>
     <form class="formulario">
        <div class="titulo-iniciarsesion">
            <h1 class="palabra-titulo">Iniciar Sesion</h1>
        </div>
        <div class="text-formulario">
            <!--Tipo de identidad-->
            <label for="" class="text">Tipo de identidad</label>
            <select v-model="identidad"  required> 
                <option v-for="cargo in cargoList" :key="cargo.id" :value="cargo.id">{{ cargo.nombre }}</option> <!--corregir cuando ya lo tenga hecho-->
            </select>

            <!--Numero identidad-->
            <div class="form-group">
            <label class="text" for="numeroidentidad">Numero de Identidad:</label>
            <input type="text"
                class="input-text" name="numeroidentidad" id="numeroidentidad" aria-describedby="helpId" placeholder="Agregar Numero de identidad">
            </div>

            <!--Contraseña-->
            <div class="form-group">
                <label for="contraseña" class="text">Contraseña</label>
                <input type="password" class="input-text" name="contraseña" id="contraseña" aria-describedby="helpId" placeholder="Ingrese su Contraseña">
            </div>
        </div>
        <div class="boton-iniciarsesion">
            <button class="palabra-iniciarsesion">Iniciar Sesion</button>
        </div>
        <div>
            <a href="" class="link-text">Olvidaste tu contraseña</a>
        </div>
        <div>
            <a href=""  class="link-text">Registrarte</a>
        </div>
        
    </form>
</template>

<style>
.formulario{
    width: 500px;
    height: 460px;
    background: white;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 20px;
    border-color: #0b458a;
    border-style: solid;
    border-width: 1px;
    font-family: 'Anonymous Pro Bold Italic', arial;
}

.text-formulario{
    margin-left: 10px;
    margin-top: 30px;
}


.titulo-iniciarsesion{
    width: 100%;
    background: #0b458a;
    
}

.palabra-titulo{
    color: white;
    margin: 0px;
    text-align: center;
    padding: 10px;
}

.text{
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    display: block;
}

.input-text{
    width: 75%;
    height: 30px;
    font-size: 20px;
}

.palabra-iniciarsesion{
    width: 195px;
    height: 36px;
    font-size: 26px;
    margin-top: 40px;
    margin-left: 160px;
    background:#0b458a ;
    color: white;
    border-style: none;
    margin-bottom: 10px;
}

.link-text{
    text-decoration: none;
    font-size: 20px;
    display: flex;
   justify-content: flex-end;
   margin-top: 15px;
   margin-right: 10px;
}
</style>