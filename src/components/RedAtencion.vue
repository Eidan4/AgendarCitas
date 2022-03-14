<template>

    <div class="sede">
       <img v-bind:src="require('../assets/sede1.jpg')" alt="" class="imagen-sede">
       <div>
           <h2 class="texto-sede grande">Sede Principal</h2>
           <h3 class="texto-sede pequeño">Cra. 47a ##118-27, Bogotá</h3>
       </div>
       
    </div>
    <div class="sede">
       <img v-bind:src="require('../assets/sede2.jpg')" alt="" class="imagen-sede">
       <div>
           <h2 class="texto-sede grande">Sede del Norte</h2>
           <h3 class="texto-sede pequeño">Av. Boyacá #80-94, Bogota</h3>
       </div>
    </div>
    <div class="sede">
       <img v-bind:src="require('../assets/sede3.jpg')" alt="" class="imagen-sede">
       <div>
           <h2 class="texto-sede grande">Sede de Villa Luz</h2>
           <h3 class="texto-sede pequeño">Ak. 86 ## 55 A 75, Bogota</h3>
       </div>
    </div>

</template>

<style>

.sede{
    border: 1px solid black;
    width: 96%;
    height: 180px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
}

.imagen-sede{
    height:100%;  
}

.texto-sede{
    margin-left: 40px;
    margin-top: 20px;
}

.grande{
    font-size: 40px;
}

.pequeño{
    font-size: 25px;
    margin-left:90px;
}
</style>