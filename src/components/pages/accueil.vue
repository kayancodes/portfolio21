<template>
    <div id="accueil">

        <article id="wrapper">
<!-- DEBUT HEADER--------------------------------------->
        <header>
            <div class="header" id="head">
                <h1>INTÉGRATEUR DÉVELOPPEUR FRONT</h1>
                <h2 class="header__titre">YANNICK KABASELE</h2>
            </div>        
        </header> 
<!--FIN HEADER--------------------------------------------->           



<!--DEBUT COMPETENCES-------------------------------------->
            <section id="comp" class="competences">

                    <h2>COMPETENCES</h2>
                     <div class="container comp">
                        <div class="container__box container__box--comp">
                            <h3>INTEGRATION WEB</h3>
                            <p>Découpe de maquette PSD avec Photoshop ou Avocode</p>
                            <p>Intégration responsive en HTML et SCSS</p>
                            <p>Recettage et optimisation du code</p>
                            <p>Force de proposition en UX UI Design</p>
                            <!-- <p>referencement naturel SEO</p> -->
                        </div>

                        <div class="container__box container__box--comp">
                            <h3>DEVELOPPEMENT WEB</h3>
                            <p>Animation en Javascript et CSS</p>
                            <p>Front : Framework Vue.js</p>     
                            <p>Back : Node.js et MySql</p>                  
                            <p>Versioning avec Git et Github</p>
                            <p>Hosting</p>
                            <!-- <p>Réalisation de test TDD</p>
                            <p>Sécurité</p> -->
                        </div>

                        <div class="container__box container__box--comp">
                            <h3>UX UI DESIGN</h3>
                            <p>Methodologie de design UX</p>
                            <p>Adobe Photoshop</p>
                            <p>Adobe XD</p>
                            <p>Marvel App</p>
                        </div>

                        <div class="container__box container__box--comp">
                            <h3>GESTION DE PROJET</h3>
                            <p>Methode agile Scrum</p> 
                            <p>Capacité à travailler en équipe</p>
                            <p>Trello</p>
                            <p>Anglais technique</p>
                        </div>
                    </div>
                         
            </section>
<!--FIN COMPETENCES-------------------------------------->



<!--DEBUT STATISTIQUES ------------------------------------->        
                <section  class="header__stats">
                    <div class="ank stats" id="stats"></div>

                    <div class="right">
                    <h2>STATISTIQUES</h2>
                        <div class="container containerStats">
                            <div class="container__box container__box--stats">
                                <p>33</p>
                                <p>sites responsives</p>
                                <p>intégrés</p>
                            </div>

                            <div class="container__box container__box--stats">
                                <p>01</p>
                                <p>application web</p>
                                <p>développée</p>
                            </div>

                            <div class="container__box container__box--stats">
                                <p>04</p>
                                <p>projets UX UI</p>
                                <p>réalisés</p>
                            </div>

                            <div class="container__box container__box--stats">
                                <p>02</p>
                                <p>années</p>
                                <p>d'activité </p>
                            </div>
                        </div>
                </div>
                    
                </section>
<!--FIN STATISTIQUES -------------------------------------->        




<!--DEBUT REALISATION -------------------------------------->        
                <section  class="real">
                    <div class="ank" id="real"></div>
                    <h2>RÉALISATIONS</h2>
                        <div class="container real">

                            <div class="container__box container__box--real">
                                <div class="real__projet">
                                    <div class="real__projet--text">                    
                                        <p>INTÉGRATION WEB</p>
                                        <p>CAFÉ ROYAL :<br/> SITE RESPONSIVE</p> 
                                        <p>ACQUISITION ET TRAFIC</p>
                                        <router-link :to="{name: 'projet1'}"><p class="bouton">EN SAVOIR PLUS</p></router-link>
                                    </div>
                                    <img class="real__projet--img" src="../../assets/cr.png" alt="image projet cafe royal">
                                    <div class="real__projet--text ghost__desktop">                    
                                        <p>INTÉGRATION WEB</p>
                                        <p>CAFÉ ROYAL :<br/> SITE RESPONSIVE</p> 
                                        <p>ACQUISITION ET TRAFIC</p>
                                        <router-link :to="{name: 'projet1'}"><p class="bouton">EN SAVOIR PLUS</p></router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="container__box container__box--real">
                                <div class="real__projetImpair">
                                    <img class="real__projet--img"  src="../../assets/fi.png" alt="image projet cafe fiat">
                                    <div class="real__projet--text">
                                        <p>INTÉGRATION WEB</p>
                                        <p>FIAT 500X SPORT :<br/>SITE RESPONSIVE</p>
                                        <p>LEAD TO STORE</p>
                                        <router-link :to="{name: 'projet2'}"><p class="bouton">EN SAVOIR PLUS</p></router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="container__box container__box--real">
                                <div class="real__projet">
                                    <div class="real__projet--text">
                                        <p>INTÉGRATION WEB</p>
                                        <p>ZADIG & VOLTAIRE : <br/> SITE RESPONSIVE</p>
                                        <p>ACQUISITION ET TRAFIC</p>
                                        <router-link :to="{name: 'projet3'}"><p class="bouton">EN SAVOIR PLUS</p></router-link>
                                    </div>
                                    <img class="real__projet--img"  src="../../assets/zv.png" alt="image projet zadig et voltair">
                                    <div class="real__projet--text ghost__desktop">
                                        <p>INTÉGRATION WEB</p>
                                        <p>ZADIG & VOLTAIRE : <br/> SITE RESPONSIVE</p>
                                        <p>ACQUISITION ET TRAFIC</p>
                                        <router-link :to="{name: 'projet3'}"><p class="bouton">EN SAVOIR PLUS</p></router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="container__box container__box--real">
                                <div class="real__projetImpair">
                                    <img class="img real__projet--img"  src="../../assets/p.png" alt="image projet panser">
                                    <div class="real__projet--text">
                                        <!-- <p>API CRUD MEVN FULLSTACK </p> -->
                                        <p>FULLSTACK</p>
                                        <p>PANSER : <br/> APPLICATION WEB</p>
                                        <p>PROJET DE FIN D'ÉTUDE</p>
                                        <router-link :to="{name: 'projet4'}"><p class="bouton">EN SAVOIR PLUS</p></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
<!--FIN REALISATION -------------------------------------->    




<!--DEBUT A PROPOS -------------------------------------->        
                <section class="apropos">
                    <div class="ank" id="apro"></div>

                    <h2>A PROPOS</h2>
                        <div class="container apro">

                            <div class="apro__cadre">
                                <img class="img apro__img"  src="../../assets/profil.png" alt="">
                            </div>

                            <div class="apro__text">   
                                <p>Yann, Integrateur - Developpeur Front, basé à Paris.</p>         
                                <p>Mon objectif est de vous aider a réaliser des integration parfaites</p>        
                                <p class="apro__text--3">Passionné par le monde du numérique, les nouvelles technologies, la psychologie cognitive et le design sous toutes ses formes, j’ai initialement suivit un cursus dans le domaine de la qualité. Un domaine que j’ai quitté en 2017 pour me reconvertir vers un autre plus en accord avec moi meme : le develeloppemnt web. </p>         
                                <!-- <p>Durant ma formation j’ai eu l’opportunité de rejoindre l’agence Avent Media Groupe en tant qu’intégrateur web, pendant 13 mois. Periode durant laquelle j’ai pu travailler avec des clients tels que Lancôme, Givenchy, Kenzo, Piccard, Fiat, Café Royal…</p>                    -->
                            </div>

                            <div class="apro__column">
                                <h3>Mes valeurs</h3>
                                <div class="apro__boxContainer">

                                    <div class="apro__box">
                                        <p>Empathie</p>
                                        <p>Communication</p>
                                    </div>

                                    <div class="apro__box">
                                        <p>Humilité</p>
                                        <p>Détermination</p>
                                    </div>

                                    <div class="apro__box">
                                        <p>Autonomie</p>
                                        <p>Sens du détail</p>
                                    </div>
                                </div>
                            </div>


                            <div class="apro__prize">
                                <h3>Mon palmarès sportif</h3>
                                <div class="apro__boxContainer">
                                    <h4>Athlétisme</h4>
                                    <p>2 fois champion du Val d'Oise sur 200 mètres et en équipe sur relais 4x100m</p>
                                    <p>Médaillé de bronze au championnat de France junior, en équipe, sur relais 4x100m</p>
                                </div>
                            </div>


                            <div class="apro__column">
                                <h3>Mes centres d'intérêts</h3>
                                <div class="apro__boxContainer">

                                    <div class="apro__box">
                                        <p>Dessin</p>
                                        <p>Photographie</p>
                                    </div>

                                    <div class="apro__box">
                                        <p>Philosophie</p>
                                        <p>Psychologie cognitive</p>
                                    </div>
                                    
                                    <div class="apro__box">
                                        <p>Les nouvelles</p>
                                        <p>technologies</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                </section>
<!--FIN A PROPOS --------------------------------------> 




<!--DEBUT CONTACT -------------------------------------->        
                <section class="contact">
                    <div class="ank" id="cont"></div>

                    <h2>CONTACT</h2>
                        <div class="container cont">

                            <div class="container__box container__box--cont">      
                                <p><a href="mailto:yannickabasele@gmail.com">E-mail</a></p>
     
                                <p><a href="tel:0769758716">Téléphone</a></p>

                                <p><a href="KABASELE-Yannick-CV.pdf" target="_blank">Curriculum Vitae</a></p>

                                <p><a href="https://github.com/kayancodes" target="_blank">Github</a></p>                
                            </div>

                        </div>
                </section>
<!--FIN CONTACT --------------------------------------> 
        </article> 




<!--DEBUT FOOTER -------------------------------------->
        <footer>
            <p>Copyright © 2021 KABASELE Yannick</p>
        </footer>
<!--FIN FOOTER -------------------------------------->
    </div> 
       
</template>






<script>
export default {
    
}
</script>






<style lang="scss">


</style>