<template>
    <body class="body">
        <form class="formulario-registrar" v-on:submit.prevent="agregarRegistro">
             <!--Titulo-->
            <div class="titulo-registrarse">
                <h1 class="text-registrarse">Registrarse</h1>
            </div>
            <div class="texto-formulario" @submit.prevent="processRegistro">
                <!--Tipo de identidad-->
                <label for="" class="palabras-titulo">Tipo de identidad</label>
                <select v-model="tipoidentidad" class="genero identidad" required> 
                    <option v-for="tipoidentidad in identidadList" :key="tipoidentidad.idtipoidentidad" :value="tipoidentidad.idtipoidentidad">{{ tipoidentidad.nombre }}</option> <!--corregir cuando ya lo tenga hecho-->
                </select>

                <!--Numero identidad-->
                <div class="form-group">
                <label class="palabras-titulo" for="numeroidentidad">Numero de Identidad:</label>
                <input type="text"
                    class="input-registrar" name="numeroidentidad" id="numeroidentidad" v-model="pacientes.pa_cedula" aria-describedby="helpId" placeholder="Agregar Numero de identidad">
                </div>

                <!--Fecha de Nacimiento-->
                <div class="form-group">
                <label class="palabras-titulo" for="nacimient">Fecha de Nacimiento:</label>
                <input type="date"
                    class="input-fecha" name="nacimiento" id="nacimiento" v-model="pacientes.pa_fechanacimiento" aria-describedby="helpId" placeholder="Ingrese su Fecha de Nacimiento">
                </div>

                <!--Nombre-->
                <div class="form-group">
                <label class="palabras-titulo" for="nombre">Nombre:</label>
                <input type="text" class="input-registrar" name="nombre" id="nombre" v-model="pacientes.pa_nombre" aria-describedby="helpId" placeholder="Ingrese su Nombre">
                </div>

                <!--Apellido-->
                <div class="form-group">
                <label class="palabras-titulo" for="apellido">Apellido:</label>
                <input type="text" class="input-registrar" name="apellido" id="apellido" v-model="pacientes.pa_apellido" aria-describedby="helpId" placeholder="Ingrese su Apellido">
                </div>

                <!--Direccion-->
                <div class="form-group">
                <label  class="palabras-titulo" for="direccion">Direccion:</label>
                <input type="text" class="input-registrar" name="direccion" id="direccion" v-model="pacientes.pa_direccion" aria-describedby="helpId" placeholder="Ingrese su Direccion">
                </div>

                 <!--Localidad-->
                <div class="form-group">
                <label class="palabras-titulo" for="localidad">Pais de Origen</label>
                <input type="text" class="input-registrar" name="localidad" id="localidad" v-model="pacientes.pa_paisorigen" aria-describedby="helpId" placeholder="Ingrese su Localidad">
                </div>

                <!--Ciudad-->
                <div class="form-group">
                <label class="palabras-titulo" for="ciudad">Ciudad:</label>
                <input type="text" class="input-registrar" name="ciudad" id="ciudad" v-model="pacientes.pa_ciudad" aria-describedby="helpId" placeholder="Ingrese su Ciudad">
                </div>

                <div class="flex">
                    <label class="palabras-titulo" for="">Genero</label>
                    <label class="palabras-titulo select" for="">RH</label>
                </div>

                <div class="flexselect">
                    <!--Genero-->
                    <select v-model="Genero" class="genero" required> 
                        <option v-for="cargo in cargoList" :key="cargo.id" :value="cargo.id">{{ cargo.nombre }}</option> <!--corregir cuando ya lo tenga hecho-->
                    </select>
                    <!--RH-->
                    <select v-model="rh" class="select rh" required> 
                        <option v-for="cargo in cargoList" :key="cargo.id" :value="cargo.id">{{ cargo.nombre }}</option> <!--corregir cuando ya lo tenga hecho-->
                    </select>
                </div>

                <!--Estado Civil-->
                <div class="form-group">
                <label for="civil" class="palabras-titulo">Estado Civil</label>
                <select v-model="rh" class="genero" required> 
                        <option v-for="cargo in cargoList" :key="cargo.id" :value="cargo.id">{{ cargo.nombre }}</option> <!--corregir cuando ya lo tenga hecho-->
                    </select>
                </div>
                <!--Correo-->
                <div class="form-group">
                <label for="correo" class="palabras-titulo">Correo</label>
                <input type="email" class="input-registrar" name="correo" id="correo" v-model="pacientes.pa_correo" aria-describedby="helpId" placeholder="Ingrese su Correo">
                </div>
                <!--Telefono Celular-->
                <div class="form-group">
                    <label for="telefono" class="palabras-titulo">Telefono</label>
                    <input type="text" class="input-registrar" name="telefono" id="telefono" v-model="pacientes.pa_telefonocelular" aria-describedby="helpId" placeholder="Ingrese su Telefono">
                </div>
                <!--Contraseña-->
                <div class="form-group">
                    <label for="contraseña" class="palabras-titulo">Contraseña</label>
                    <input type="password" class="input-registrar" name="contraseña" id="contraseña" v-model="pacientes.pa_contraseña" aria-describedby="helpId" placeholder="Ingrese su Contraseña">
                </div>
                <!--Boton-->
                <div>
                    <button type="submit" class="boton-registro">Registrarse</button>
                </div>
            </div>
        </form> 
    </body>
</template>

<script>
import axios from 'axios';
export default {

    data:function() {
        return{
            tipoidentidad:"",
            identidadList: [],
            pacientes:{
                "idtipoidentidad":""
            }
        }   
    },
    methods:{
        agregarRegistro(){
            console.log(this.pacientes)
        },
        getIdentidadList(){
        axios
        .get('http://localhost/gestiondecitas/tipoidentidad.php/')
        .then(response => {
            this.identidadList = response.data
        })
        .catch(error=>{
            console.log(error)
        })
    }
    },

    
}
</script>

<style>
.formulario-registrar{
    width: 500px;
    height: 1050px;
    background: white;
    margin: auto;
    margin-top: 50px;
    border-color: #0b458a;
    border-style: solid;
    border-width: 1px;
    font-family: 'Anonymous Pro Bold Italic', arial;
}

.titulo-registrarse{
    width: 100%;
    background: #0b458a;
}

.text-registrarse{
    color: white;
    margin: 0px;
    text-align: center;
    padding: 10px;
}

.palabras-titulo{
    margin-left: 20px;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    display: block;
}

.input-registrar{
    margin-left: 20px;
    width: 75%;
    height: 25px;
    font-size: 20px;
}

.flex{
    display: flex;
}

.flexselect{
    display: flex;
}

.select{
    margin-left: 204px;
}

.rh{
    margin-left: 250px;
}

.genero{
    margin-left: 20px;
}

.input-fecha{
    margin-left: 20px;
}

.boton-registro{
    width: 195px;
    height: 36px;
    font-size: 26px;
    margin-top: 40px;
    margin-left: 140px;
    background:#0b458a ;
    color: white;
    border-style: none;
}

.identidad{
    width: 20%;
}
</style>
