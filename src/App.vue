<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
      <div class="principal">
        <img v-bind:src="require('./assets/logo2.png')" alt="" class="imagenes">
        <div class="principal2">
            <p class="texto">Realizar su busqueda</p>
            <div class="busqueda">
                <input type="text" placeholder="&#xF002; Buscar" class="buscar" style="font-family:Arial, FontAwesome" />
            </div>
        </div>
    </div>
    <div class="menu">
        <div class="menupalabra" id="nav">
          <router-link to="/" class="palabra">Inicio</router-link>
          
            <router-link to="/Nosotros" class="palabra">Nosotros</router-link>
            <router-link to="/RedAtencion" class="palabra">Red de atencion</router-link>
            <router-link to="/Contactos" class="palabra">Contactos</router-link>
          <router-link to="/Registrarse" class="palabra">Registrarse</router-link>
          <router-link to="/LoginUSer" class="palabra">Iniciar Sesion</router-link>
        </div>
        <router-view/>
    </div>

  </body>
  </html>
</template>

<style>
  *{
      margin: 0px 0px 0px 0px;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Anonymous Pro Bold Italic', arial;
  }

  .principal{
      margin-top: 20px;
      margin-left: 20px;
      display: flex;
  }

  .principal2{
      display: flex;
      margin-left: 520px;
      margin-top: 30px;
      
  }

  .imagenes{
      width: 244px;
      height: 100px;
      float: left;
  }

  .texto{
      font-size: 24px;
  }

  .buscar{
      font-size: 24px;
      width: 270px;
      margin-left: 20px;
      border-radius: 20px;
      padding-left: 10px;
  }

  .menu{
      background: #0b458a;
      height: 44px;
      margin-top: 10px;
  }

  .menupalabra{
      font-size: 20px;
      display: flex;
      margin-left: 29px;
      margin-right: 130px;
  }

  .palabra{
      margin-left: 90px;
      margin-top: 10px;
      text-decoration: none;
      color: white;
      
  }

</style>
