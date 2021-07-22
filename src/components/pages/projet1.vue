<template>
  <div id="projet1">

    <article id="wrapper">

      <!--- DEBUT HEADER PROJET -------------------------------------------------
      <div class="header_projet" id="headProjet">
        <img class="img_headerProjet" src="../../assets/cr.png" alt="" />
      </div>
      --- FIN HEADER PROJET -------------------------------------------------->





      <!---------------------------- DEBUT INFOS ------------------------->
      <section class="projet__presentation">
        <h1>CAFE ROYAL</h1>
        <h2>SITE RESPONSIVE</h2>

        <div class="projet__container projet__presentation">
          <div class="projet__containerBox--1 projet__presentation--infos1">
         
              <p>
                CAFÉ ROYAL est une marque de Delica AG (filiale du groupe
                MIGROS). L’entreprise constitue l’un des plus grands
                torréfacteurs de Suisse.
              </p>

              <p>
                Café Royal a fait une entrée remarquée sur le marché français,
                en 2014, en proposant à sa clientèle un café varié, avec
                différents goûts de Capsule tout comme son concurrent principal
                : Nespresso®.
              </p>
              <br>



              <h4>La campagne</h4>

              <p>
                Il s'agit d'une campagne de type "Acquisition et trafic".
                L'objectif de ce type de campagne est d'envoyer les utilisateurs
                vers le site client pour augmenter son trafic grâce aux codes
                promos, obtenus après inscription.
              </p>
              
              <p>
                Le projet est composé de deux pages : Une page
                d'inscription et une page de confirmation. La campagne a été
                déclinée en 4 langues : français, anglais, espagnol et allemand.
                Pour cette présentation, la version Allemande a été choisit.
              </p>
        
          </div>

          <div class="projet__containerBox--2 projet__presentation--infos2">
            <div class="projet__presentation--infosBox">
              <h4>Type de campagne</h4>
              <p>Acquisition et trafic</p>
            </div>

             <div class="projet__presentation--infosBox">
              <h4>Nombre de pages</h4>
              <p>2</p>
            </div>

             <div class="projet__presentation--infosBox">
              <h4>Rôle joué</h4>
              <p>Intégrateur Web</p>
            </div>

             <div class="projet__presentation--infosBox">
              <h4>Agence</h4>
              <p>Avent Media Group</p>
            </div>

             <div class="projet__presentation--infosBox">
              <h4>Client</h4>
              <p>Café Royal</p>
            </div>

             <div class="projet__presentation--infosBox">
              <h4>Technologies utilisées</h4>
              <p>
                HTML - CSS - SASS <br />Responsive - PHP <br />NPM - Yarn -
                Gitbash <br />Avocode - Photoshop
              </p>
            </div>
          </div>
        </div>
      </section>
      <!---------------------------- FIN INFOS ------------------------->




      <!---------------------------- DEBUT PAGE D'INSCRIPTION ------------------------->
      <section class="projet">
        <h2 class="ghost__desktop">PAGE D'INSCRIPTION</h2> 

        <div class="projet__base projet__container ">

          <div class="projet__vizu">
            <div class="border_out">
                <img class="img__infos" src="../../assets/test.gif" alt="" />
            </div>
          </div>

          <div class="projet__infos">
            <h2 class="ghost__mobile">PAGE D'INSCRIPTION</h2>
            <p>
              Après s'être inscrit, l'utilisateur reçoit une invitation par mail
              afin d'accéder au site de confirmation, où il retrouvera son code
              promo.
            </p>
            <p></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              facere enim natus dolor animi vero doloribus nesciunt, tenetur
              magni nemo! Commodi dolores vero, explicabo ullam est inventore
              omnis sunt velit.
            </p>
            <br>
            <br>
            <div class="projet_bouton bouton">DECOUVRIR LA PAGE WEB</div>
          </div>
        </div>
      </section>
      <!---------------------------- DEBUT PAGE D'INSTCRIPTION ------------------------->



      <!---------------------------- DEBUT PAGE DE CONFIRMATION ------------------------->
      <section class="projet">
        <!-- <h2>PAGE DE CONFIRMATION</h2>  -->

        <div class="projet__base projet__container">
          <div class="projet__infos projet__confirmation ">
            <h2>PAGE DE CONFIRMATION</h2>

            <div class="projet__vizu projet__confirmation ghost__desktop">
            <div class="border_out">
                <img class="img__infos" src="../../assets/cafe.gif" alt="" />
            </div>
                <br>
                <br>
          </div>

            <p>
              Après s'être inscrit, l'utilisateur reçoit une invitation par mail
              afin d'accéder au site de confirmation, où il retrouvera son code
              promo.
            </p>
            <p></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              facere enim natus dolor animi vero doloribus nesciunt, tenetur
              magni nemo! Commodi dolores vero, explicabo ullam est inventore
              omnis sunt velit.
            </p>
            <br>
                <br>
            <div class="projet_bouton bouton">DECOUVRIR LA PAGE WEB</div>
          </div>


          <div class="projet__vizu projet__confirmation ghost__mobile">
            <div class="border_out">
                <img class="img__infos" src="../../assets/cafe.gif" alt="" />
            </div>
          </div>




        </div>
      </section>

    <div class="projet__confirmation--image">
        <img src="../../assets/cafeconf.jpg" alt="">
    </div>
      

    
      <!---------------------------- DEBUT PAGE DE CONFIRMATION ------------------------->

      <div class="link">
        <router-link :to="{ name: 'projet2' }"><p>PROJET 2</p></router-link>
        <router-link :to="{ name: 'projet3' }"><p>PROJET 3</p></router-link>
      </div>
    </article>
  </div>
</template>




<script>
export default {
//     mounted () {
//   window.scrollTo(0, 0)
// }
};
</script>






<style  lang="scss" scoped>
@import "../../responsive/devices.scss";
@import "../../responsive/breakpoints.scss";
@import "../../scss/cssBase.scss";
@import "../../scss/projet.scss";




p{
  text-align: justify;
}

.img_conf {
  width: 100%;
}

.link {
  text-align: center;
  border: 1px solid red;
  width: 11rem;

  margin: 2rem auto;
}
</style>