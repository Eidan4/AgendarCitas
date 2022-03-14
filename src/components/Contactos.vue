<template>
    <h1 class="titulo-redes-sociales">Redes Sociales</h1>    
    <div class="redes-sociales">
        <div class="redes">
            <div class="social">
                 <i class="fa fa-facebook-f"></i>
                 <h2 class="texto-red">Facebook</h2>
            </div>
           
        </div>
        <div class="redes">
            <div class="social">
                <i class="fa fa-twitter"></i>
                <h2 class="texto-red">Twitter</h2>
            </div>
        </div>
        <div class="redes">
            <div class="social">
                <i class="fa fa-instagram"></i>
                <h2 class="texto-red">Instagram</h2>
            </div>
        </div>
    </div>
</template>

<style>

.titulo-redes-sociales{
    margin-top:40px;
    text-align: center;
    font-size:40px;
}

.redes-sociales{
    margin-top:30px;
    display:flex;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;
}

.redes{
    border: solid 3px black;
    border-radius:10px;
    height:310px;
    width:345px;
    
}

.social{
    font-size:200px;
    text-align: center;
    margin-top:44px;
}

.texto-red{
    font-size:30px;
    margin-top: 50px;
}

</style>