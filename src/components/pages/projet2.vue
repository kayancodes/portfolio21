<template>
    <div id="projet1">
        <h3>PROJET 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat similique dicta fugit sed quas at magnam saepe veniam eius, harum, quam, doloribus reiciendis ratione maiores rem! Corrupti, facilis non!</p>
        <!-- <p class="bouton">test</p> -->
        <div class="link">
            <router-link :to="{name: 'projet3'}"><p>PROJET 3</p></router-link>
            <router-link :to="{name: 'projet4'}"><p>PROJET 4</p></router-link>


        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style  lang="scss" scoped>

 @import "../../responsive/devices.scss";
   @import "../../responsive/breakpoints.scss";
   @import "../../scss/cssBase.scss";


h3{
    padding-top: 10rem;
    margin-top: 0rem;
    text-align: center;
}

.link{
    text-align: center;
    border:1px solid red;
    width:11rem;

    margin: 2rem auto;

}



</style>