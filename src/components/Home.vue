<template>
    <h1 class="titulo">Servicio</h1>
    <div class="menuservicios">
        <div class="flecha izquierda">
            <i class="fa fa-chevron-left"  ></i>
        </div>
            <div class="servicios" >
               <img src="../assets/Diseno-sonrisa.jpg" alt="">
            </div>
        <div class="flecha derecha">
            <i class="fa fa-chevron-right"></i>
        </div>
    </div>
    <h1 class="titulo">Novedades</h1>
    <div class="menuservicios2">
        <img src="../assets/logo2.png" alt="" class="imagen2">
        <div class="titulo3">
            <div class="palabra1">Cambio de diseño</div>
            <div class="palabra2">Modernizacion del logo</div>
            <div class="palabra3">de la empresa</div>
        </div>
        
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .titulo{
        text-align: center;
        margin-top: 25px;
    }

    .menuservicios{
        display: flex;
        align-content: space-between;
        margin-top: 25px;
    }

    .servicios{
        display: flex;
        width: 90%;
        height: 350px;
        background: #55cabe;
        margin-left: 40px;
        margin-right: 40px;
        
    }

    .flecha{
        display: flex;
        font-size: 35px;
        margin-top: 150px;
        
    }
    .derecha{
        margin-right: 20px;
    }

    .izquierda{
        margin-left: 20px;
        
    }

    .menuservicios2{
        width: 550px;
        height: 150px;
        background: #0b458a;
        margin-top: 20px;
        margin-left: 85px;
        display: flex;
    }

    .imagen2{
        width: 50%;
        height: 100%;
        display: flex;
        
    }

    .titulo3{
        font-size: 24px;
        color: white;
        margin-top: 22px;
        margin-left: 10px;

    }
    .palabra1{
        margin-bottom: 5px;
    }

    .palabra2{
        margin-bottom: 5px ;
    }
</style>
