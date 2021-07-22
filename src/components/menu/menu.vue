<template>
  <div id="menuMain">
    <nav>
      <div class="navWrapper">
        <div class="right">
          <!------------- DEBUT DES 3 BARRES ------->
          <div id="nav-icon" class="menuIcon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <!------------- FIN DES 3 BARRES ------->


          <!------------- DEBUT DU PANNEAU MENU ------->
          <div class="overlay">
            <div class="overlayContent">
              <a href="/#head">Home</a>
              <a href="/#comp">Compétences</a>
              <a href="/#stats">Statistiques</a>
              <a href="/#real">Réalisations</a>
              <a href="/#apro">A propos</a>
              <a href="/#cont">Contact</a>
            </div>
          </div>
          <!------------- FIN DU PANNEAU MENU ------->
        </div>
      </div>
    </nav>


    <!--DEBUT MENU----------------------------------------------------------------
        <ul class="navbar-nav">
                <li class="nav-item"><a href="/#head">Home</a></li>
                <li class="nav-item"><a href="/#comp">Compétences</a></li>
                <li class="nav-item"><a href="/#stats">Statistiques</a></li>
                <li class="nav-item"><a href="/#real">Réalisations</a></li>
                <li class="nav-item"><a href="/#apro">A propos</a></li>
                <li class="nav-item"><a href="/#cont">Contact</a></li>
        </ul>
!--FIN MENU------------------------------------------------------------------>
  </div>
</template>







<script>
export default {};
</script>







<style lang="scss">
#menuMain {
  * {
    margin: 0;
    padding: 0;
  }

  //--------------------- DEBUT PANNEAU MENU
  .overlay {
    //panneau fermé, quand on a pas encore cliqué sur les 3 barres
    width: 0%;
    height: 100%;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255, 255, 255, 0.72);
    overflow-x: hidden;
    position: fixed;
    top: 0;
    left: 0;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .overlay.open {
    //panneau ouvert. apres avoir cliqué sur les 3barres
    width: 100%;
  }

  .overlayContent {
    //contenu du panneau, là ou sont les liens
    position: relative;
    top: 15%;
    text-align: center;
    width: 100%;
    margin-top: 30px;
  }

  .overlay a {
    //liens d'ancrage quand le panneau est en mouvement
    font-size: 22px;
    font-weight: 600;
    padding-top: 20px;
    padding-bottom: 20px;
    color: gray;
    opacity: 1;
    text-decoration: none;
    display: block;
    -webkit-transition: color 0.3s ease 0.3s;
    transition: color 0.3s ease 0.3s;
  }

  .overlay a.open {
    //liens d'ancrage quand le panneau est fixe
    color: black;
    opacity: 1;
  }
  //--------------------- FIN PANNEAU MENU


  //--------------------- DEBUT DES 3 BARRES

  #nav-icon {
    //quand "open" est remove
    width: 60px;
    height: 45px;
    position: fixed;
    z-index: 1;
    top: 20px;
    right: 20px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg) scale(0.4);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: gray;
    break-inside: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  //FERMÉS (donc paralleles)
  #nav-icon span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-icon span:nth-child(2) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-icon span:nth-child(3) {
    top: 36px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  //OUVERT (donc croisé)
  #nav-icon.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
    background: black;
  }

  #nav-icon.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
    background: black;
  }

  #nav-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;
    background: black;
  }
  //--------------------- FIN DES 3 BARRES
}
</style>