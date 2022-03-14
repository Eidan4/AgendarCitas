<template>
    <div class="nosotros">
        <h1>Informacion</h1> 
        <div class="nosotrosimg">
            <img v-bind:src="require('../assets/sede3.jpg')" alt="Odontologo en plena operacion ortodoncista" style="width: 100%;"> 
            <h1 class="texto-nosotros">¿Que es Arte Oral?</h1>
            <h2 class="texto-nosotros">Somos una empresa reconocida por nuestros exelentes  servicios</h2>
            <h2 class="texto-nosotros">y protocolos de higiene en nuestros tratamientos</h2>
        </div>
        <h2>Si eres personal de nuestro consultorio, dar click aqui</h2>
        
     </div>
</template>

<style>

.sedeprincipal{
    border: 3px solid black;
    margin: 20px;
}
.sedeprincipaltxt{
    float: right;
    text-align: right;
    margin: 10px 600px 0px 0px;
}
.sededelnorte{
    border: 3px solid black;
    margin: 20px;
}
.sededelnortetxt{
    float: right;
    text-align: right;
    margin: 10px 570px 0px 0px;
}
.sedevillaluz{
    border: 3px solid black;
    margin: 20px;
}
.sedevillatxt{
    float: right;
    text-align: right;
    margin: 10px 570px 0px 0px;
}
.nosotros{
    text-align: center;
    margin-top: 20px;
    
}
.nosotrosimg{
    border: 5px solid black;
    margin: 4%;
    background: #55cabe; 
}
.texto-nosotros{
    margin-top: 5px;
    margin-bottom: 10px;
}

</style>