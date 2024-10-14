import React , {useRef} from 'react'
import './Home.css'
import { useAnimationFrame } from "framer-motion"

export default function Home() {

    const ref = useRef(null)
  
    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 5000) * 200;
        const y = (1 + Math.sin(t / 500)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
      });
  return (
    <div>
      
         
         {/* home start */}

             {/* <!-- Navbar & Hero Start --> */}
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <img src="/img/logo.png" alt="" srcset=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="#accueil" className="nav-item nav-link active">Accueil</a>
                        <a href="#propos" className="nav-item nav-link">A Propos</a>
                        <a href="#service" className="nav-item nav-link">Services</a>
                        <a href="#formation" className="nav-item nav-link">Formation</a>
                        <a href="#projet" className="nav-item nav-link">Projets</a>
                        {/* <a href="contact.html" className="nav-item nav-link"></a> */}
                    </div>
                    <a href="#contact" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Contact</a>
                </div>
            </nav>

           
        </div>
        {/* <!-- Navbar & Hero End --> */}

    <div className='home' id='accueil'>
    <div className="d-flex justify-content-center ">
    <div className="col-lg-10 col-xl-8">
        <div className="animated fadeInLeft home-cotainer">
            <div className="text-center">
                <h4 className="text-bleu text-uppercase fw-bold mb-4"> CFES</h4>
                <h1 className="display-4 text-orange text-orange-4">Cabinet de Formation et d’Etudes Statistiques</h1>
                <p className="mb-5 fs-5 text-bleu">
                Éclairer l'avenir par la formation et l'expertise statistique.
                </p>
                <div className="d-flex justify-content-center mb-4">
                   
                    <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="#contact">Contact</a>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  
                </div>
            </div>
        </div>
    </div>
</div>

    <div className="wrapper">
   <div><i className="fas fa-microchip"></i></div>
   <div><i className="fas fa-laptop-code"></i></div>
   <div><i className="fas fa-robot"></i></div>
   <div><i className="fas fa-satellite-dish"></i></div>
   <div><i className="fas fa-cogs"></i></div>
   <div><i className="fas fa-cloud"></i></div>
   <div><i className="fas fa-wifi"></i></div>
   <div><i className="fas fa-server"></i></div>
   <div><i className="fas fa-mobile-alt"></i></div>
   <div><i className="fas fa-network-wired"></i></div>
   <div><i className="fas fa-database"></i></div>
   <div><i className="fas fa-code-branch"></i></div>
   <div><i className="fas fa-microchip"></i></div>
   <div><i className="fas fa-cloud"></i></div>
   <div><i className="fas fa-laptop-code"></i></div>
</div>


          </div>

   {/* home end */}

        {/* <!-- propos Start --> */}
        <div className="container-fluid about py-5" id='propos'>
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div>
                            <h4 className="text-orange">À propos</h4>
                            {/* <h1 className="display-5 mb-4">Meet our company unless miss the opportunity</h1> */}
                            <p className="mb-4"> 
                           <b> Le Cabinet de Formation et d’Etudes Statistiques (CFES),</b>basé à Bamako au Mali, est un bureau d’études à l’intention des structures gouvernementales, des organisations internationales, des entreprises, des chercheurs, etc., en quête de données fiables et de qualité pour la prise de décisions. 

                            </p>
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="d-flex">
                                        <div><i className="fas fa-users fa-3x text-color"></i></div>
                                        <div className="ms-4">
                                            <h4>Nos Equipes</h4>
                                            <p className="mb-4">Le bureau d’étude CFES dispose d’une équipe capitalisant plusieurs années d’expériences en matière d’enquête au Mali et à l’international. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="d-flex">
                                        <div><i className="bi bi-bookmark-heart-fill fa-3x text-color"></i></div>
                                        <div className="ms-4">
                                            <h4>Expertise</h4>
                                            <p className="mb-4">Les membres de l’équipe sont issus des grandes écoles de statistique et d’informatique et ayant aussi travaillé pour des ONG internationales, Agences des Nations unies et projets/programmes de développement rural et/ou local.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#equipe" className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0">Decouvrer nos Equipes</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="rounded position-relative overflow-hidden">
                            <img src="img/about.png" ref={ref} className="img-fluid rounded w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team Start --> */}
        <div className="container-fluid team pb-5" id='equipe'>
            <div className="container pb-5">
                
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-1.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div className="team-title">
                                <h4 className="mb-0">David James</h4>
                                <p className="mb-0">Profession</p>
                            </div>
                          
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-2.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div className="team-title">
                                <h4 className="mb-0">David James</h4>
                                <p className="mb-0">Profession</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-3.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div className="team-title">
                                <h4 className="mb-0">David James</h4>
                                <p className="mb-0">Profession</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-4.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div className="team-title">
                                <h4 className="mb-0">David James</h4>
                                <p className="mb-0">Profession</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}
        </div>

        

        {/* <!-- About End --> */}


        {/* <!-- Services Start --> */}
        <div className="container-fluid service pb-5" id='service'>
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <h1 className="display-5 text-orange">Nos Services</h1>
                    <p className="mb-0">CFES répond aux besoins des structures en termes de :
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/conception.jpeg" className="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div className="rounded-bottom p-4">
                                <a className="text"> Conception et conduite des enquêtes quantitatives et qualitatives</a>
                                <p className="mb-4">
                                Nous offrons des services de conception et de conduite d'enquêtes quantitatives et qualitatives pour collecter des données précises et exploitables. Nos experts vous accompagnent dans toutes les étapes, de la création des questionnaires à l'analyse des résultats, afin de mieux comprendre votre marché ou votre audience.
                                </p>
                           
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/analyse.jpeg" className="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div className="rounded-bottom p-4">
                                <a className="text">Traitement et l’analyse des données d’enquêtes quantitatives et qualitatives .
                                </a>
                                <p className="mb-4">
                                Nous proposons un service complet de traitement et d’analyse des données issues de vos enquêtes. Grâce à des méthodes rigoureuses, nous transformons vos données brutes en insights clairs et exploitables, pour vous permettre de prendre des décisions éclairées et stratégiques.

                                </p>
                           
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/rapport.jpeg" className="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div className="rounded-bottom p-4">
                                <a className="text">Rédaction des rapports d’enquêtes</a>
                                <p className="mb-4">
                                Nous offrons un service professionnel de rédaction des rapports d'enquêtes, vous fournissant des documents clairs, précis et bien structurés. Nos rapports mettent en lumière les résultats clés et les conclusions essentielles pour guider vos stratégies et prises de décisions.
                                
                                </p>
                                <p className="mb-4">
                                
                                </p>
                                <p className="mb-4">
                                
                                </p>
                                
                           
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/l.jpeg" className="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div className="rounded-bottom p-4">
                                <a className="text">Suivi et évaluation de projets</a>
                                <p className="mb-4">
                                Notre service de suivi et évaluation de projets vous aide à mesurer la performance et l'impact de vos initiatives. Nous vous accompagnons dans l’analyse continue des résultats pour ajuster vos actions et garantir le succès de vos projets à chaque étape.
                                </p>
                           
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/db.jpeg" className="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div className="rounded-bottom p-4">
                                <a className="text">Conception des bases de données </a>
                                <p className="mb-4">Nous vous offrons un service sur mesure de conception de bases de données, optimisées pour stocker et gérer vos données de manière efficace et sécurisée. Nos solutions sont adaptées à vos besoins spécifiques pour garantir une gestion fluide et évolutive de vos informations.
                                </p>
                           
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/sig.jpeg" className="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div className="rounded-bottom p-4">
                                <a className="text">Systèmes d’Information Géographiques (SIG).</a>
                                <p className="mb-4">Nous proposons des services complets en Systèmes d’Information Géographiques (SIG) pour analyser, visualiser et gérer des données géospatiales. Nos solutions vous aident à prendre des décisions éclairées en intégrant des analyses spatiales avancées dans vos projets et stratégies.
                                </p>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Services End --> */}

       


        {/* <!-- formation Start --> */}
        <div className="container-fluid offer-section pb-5" id='formation'>
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px'}}>
                    {/* <h4 className="text-primar">Our Offer</h4> */}
                    <h1 className="display-5  text-orange">Formations</h1>
                    <p className="mb-0">Le cabinet CFES propose des formations en 
                    </p>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="nav nav-pills bg-ligh rounded p-5">
                            <a className="accordion-link p-4 active mb-4" data-bs-toggle="pill" href="#collapseOne">
                                <h5 className="mb-0">Statistique</h5>
                            </a>
                            <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseTwo">
                                <h5 className="mb-0">Logiciels de conception des outils de collecte </h5>
                            </a>
                            <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseThree">
                                <h5 className="mb-0">Logiciels d’analyse statistique </h5>
                            </a>
                            <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseFour">
                                <h5 className="mb-0">visualisation des données </h5>
                            </a>
                            <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseFive">
                                <h5 className="mb-0">Bases de données  </h5>
                            </a>
                            <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseSixe">
                                <h5 className="mb-0">La suite Microsoft  </h5>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
                        <div className="tab-content">
                            <div id="collapseOne" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-md-7">
                                        <img src="img/offer-1.jpg" className="img-fluid w-100 rounded" alt=""/>
                                    </div>
                                    <div className="col-md-5">

                                        <p className="mb-4">
                                        Cette formation couvre les bases et techniques avancées de la statistique descriptive et multidimensionnelle, ainsi que les méthodes d'échantillonnage et l'économétrie. Elle est idéale pour les personnes souhaitant bénéficier des compétences analytiques solides, indispensables dans de nombreux domaines professionnels.
                                        </p>
                                   
                                    </div>
                                </div>
                            </div>
                            <div id="collapseTwo" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-md-7">
                                        <img src="img/offer-2.jpg" className="img-fluid w-100 rounded" alt=""/>
                                    </div>
                                    <div className="col-md-5">

                                        <p className="mb-4">
                                        Cette formation est centrale sur l'utilisation des outils comme Kobocollect , CSPro , et la programmation avec xlsform . Ces logiciels permettent de concevoir des formulaires numériques pour la collecte de données sur le terrain, une compétence essentielle pour les études de marché et la recherche.

                                        </p>
                                   
                                    </div>
                                </div>
                            </div>
                            <div id="collapseThree" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-md-7">
                                        <img src="img/offer-3.jpg" className="img-fluid w-100 rounded" alt=""/>
                                    </div>
                                    <div className="col-md-5">

                                        <p className="mb-4">
                                        Apprenez à maîtriser des outils comme R , STATA , et SPSS , qui sont parmi les plus utilisés pour l'analyse des données statistiques. Ces compétences sont cruciales pour interpréter des données complexes dans différents contextes (recherche, entreprise, etc.).
                                        </p>
                                   
                                    </div>
                                </div>
                            </div>
                            <div id="collapseFour" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-md-7">
                                        <img src="img/offer-4.jpg" className="img-fluid w-100 rounded" alt=""/>
                                    </div>
                                    <div className="col-md-5">

                                        <p className="mb-4">
                                        La visualisation des données devient de plus en plus importante pour la communication des résultats d'analyse. Dans cette formation, vous apprendrez à utiliser des logiciels comme Tableau et Power BI pour créer des rapports et des tableaux de bord interactifs et compréhensibles.
                                        </p>
                                   
                                    </div>
                                </div>
                            </div>
                            <div id="collapseFive" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-md-7">
                                        <img src="img/db.jpeg" className="img-fluid w-100 rounded" alt=""/>
                                    </div>
                                    <div className="col-md-5">

                                        <p className="mb-4">
                                        Une formation essentielle pour ceux qui souhaitent gérer des bases de données de manière efficace. Vous apprendrez à utiliser des outils comme ACCESS , VBA , et à maîtriser des langages de gestion de bases de données comme SQL et MySQL , vous permettant ainsi de créer et gérer des systèmes de stockage de données.
                                        </p>
                                   
                                    </div>
                                </div>
                                
                            </div>
                            <div id="collapseSixe" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-md-7">
                                        <img src="img/offer-5.jpeg" className="img-fluid w-100 rounded" alt=""/>
                                    </div>
                                    <div className="col-md-5">

                                        <p className="mb-4">
                                        Familiarisez-vous avec les outils de la suite Microsoft Office (Word, Excel, PowerPoint) pour une utilisation efficace dans un contexte professionnel. Ce module vous aidera à améliorer votre productivité et à maîtriser des fonctions avancées, notamment pour les présentations et la gestion de données.
                                        </p>
                                   
                                    </div>
                                </div>
                                
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- formation End --> */}

       


        {/* <!-- projet Start --> */}
        <div className="container-fluid faq-section pb-5" id='projet'>
            <div className="container pb-5 overflow-hidden">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <h1 className="display-5 mb-4 text-orange">Projets</h1>
                    <p className="mb-0">REFERENCES PROFESSIONNELLES DU CABINET CFES ET DES EXPERTS
                    </p>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="accordion accordion-flush bg-ligh rounded p-5" id="accordionFlushSection">
                            <div className="accordion-item rounded-top">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Projet Régional d’Appui au Pastoralisme au Sahel – PRAPS-Mali.

                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">
                                    Etablissement de la situation de référence / réalisation de l'enquête sur le revenu des ménages pastoraux et agropastoraux dans les zones d'intervention du projet PRAPS.
                                    </div>
                                    <div className="accordion-body">
                                        <p><i className="fas fa-user fa-1x" style={{color: '#FF8C00'}}></i>  Mansa KEITA, Responsable suivi évaluation PRAPS ML</p>
                                        <p> <i className="fas fa-phone fa-1x" style={{color: '#FF8C00'}}></i> (223) 78 67 52 83 / 66 95 21 43</p>
                                        <p><i className="fas fa-envelope fa-1x" style={{color: '#FF8C00'}}></i>  mansakeitaprapsc4@gmail.com</p>
                                    </div>

                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Projet Autonomisation des femmes et dividende démographique au Sahel (SWEDD)

                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">Evaluation finale du pilote de distribution des médicaments jusqu’au dernier km pour le compte du projet SWEDD</div>
                                
                    
                                        <div className="accordion-body">
                                        <p><i className="fas fa-user fa-1x" style={{color: '#FF8C00'}}></i>  Madou	Diallo,	Responsable Suivi évaluation SWEDD-Mali.
                                        </p>
                                        <p> <i className="fas fa-phone fa-1x" style={{color: '#FF8C00'}}></i> (223) (223) 76 23 33 36 /
                                        60 36 99 99</p>
                                        <p><i className="fas fa-envelope fa-1x" style={{color: '#FF8C00'}}></i>   ocamara@prre.ml</p>
                                    </div>
                                </div>
                            </div>
                           
                               
                               <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThr">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThr" aria-expanded="false" aria-controls="flush-collapseThr">
                                    Projet de Reconstruction et de Relance Economique.

                                    </button>
                                </h2>
                                <div id="flush-collapseThr" className="accordion-collapse collapse" aria-labelledby="flush-headingThr" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">
                                    Suivi itératif axé sur les bénéficiaires (IBM) du PRRE / Suivi des activités déjà visitées par la tierce partie – 1ère mission.
                                    </div>

                                    
                                    <div className="accordion-body">
                                    <p><i className="fas fa-user fa-1x" style={{color: '#FF8C00'}}></i> Oumarou CAMARA, Coordinateur PRRE
                                        </p>
                                        <p> <i className="fas fa-phone fa-1x" style={{color: '#FF8C00'}}></i> (223) 76 33 21 36
                                        </p>
                                        <p><i className="fas fa-envelope fa-1x" style={{color: '#FF8C00'}}></i>   ocamara@prre.ml</p>
                                    </div>
                                    
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Banque Mondiale

                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">
                                    Etude qualitative sur la parentalité au Mali - Développement de la Petite Enfance (DPE)
                                    </div>

                                    
                                    <div className="accordion-body">
                                        <p><i className="fas fa-user fa-1x" style={{color: '#FF8C00'}}></i> Aïchatou CISSE, Analyst – AFCW3
                                        Early childhood Development Consultant.
                                        </p>
                                        <p> <i className="fas fa-phone fa-1x" style={{color: '#FF8C00'}}></i>  (223) 70 62 25 34
                                        </p>
                                        <p><i className="fas fa-envelope fa-1x" style={{color: '#FF8C00'}}></i>    acisse4@worldbank.org</p>
                                    </div>
                                    <div className="accordion-body">
                                        <p><i className="fas fa-user fa-1x" style={{color: '#FF8C00'}}></i> Mamady KANTE, Expert en Développement Local & Gestion de projet
                                        Sécrétaire -Permanent ONG AMRAD
                                        </p>
                                        <p> <i className="fas fa-phone fa-1x" style={{color: '#FF8C00'}}></i>   (223) 77 62 02 09
                                        </p>
                                        <p><i className="fas fa-envelope fa-1x" style={{color: '#FF8C00'}}></i>    amrad@afribonemali.net</p>
                                    </div>
                                </div>
                            </div>

                        
                               <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThre">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThre" aria-expanded="false" aria-controls="flush-collapseThre">
                                    Projet de Développement de la productivité et de la diversification Agricole dans les Zones Arides du Mali (PDAZAM)


                                    </button>
                                </h2>
                                <div id="flush-collapseThre" className="accordion-collapse collapse" aria-labelledby="flush-headingThre" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">
                                    Elaboration du manuel de suivi - évaluation du PDAZAM
                                    </div>
                                    <div className="accordion-body">
                                        <p><i className="fas fa-user fa-1x" style={{color: '#FF8C00'}}></i> Sadio CISSE, Directeur technique
                                        </p>
                                        <p> <i className="fas fa-phone fa-1x" style={{color: '#FF8C00'}}></i>   (223) 66 75 22 07
                                        </p>
                                        <p><i className="fas fa-envelope fa-1x" style={{color: '#FF8C00'}}></i>   sadio_c2000@yahoo.fr</p>
                                    </div>
                                   
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Search For Commun Ground (SFCG)

                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">Evaluation finale du Projet « Boké Hèry : Renforcer le dialogue et réduire les conflits entre les compagnies minières, les autorités et les communautés en Guinée» </div>
                                
                                    <div className="accordion-body">
                                        <p><i className="fas fa-user fa-1x" style={{color: '#FF8C00'}}></i>  Julien Niankoye Bolamou Regional Research Associate for Sahel
                                        </p>
                                        <p> <i className="fas fa-phone fa-1x" style={{color: '#FF8C00'}}></i>   (223) 94 73 15 89
                                        </p>
                                        <p><i className="fas fa-envelope fa-1x" style={{color: '#FF8C00'}}></i>  jbolamou@sfcg.org</p>
                                    </div>
                                    <div className="accordion-body">
                                        <p><i className="fas fa-user fa-1x" style={{color: '#FF8C00'}}></i> Mamady KANTE, Expert en Développement Local & Gestion de projet
Sécrétaire -Permanent ONG AMRAD

                                        </p>
                                        <p> <i className="fas fa-phone fa-1x" style={{color: '#FF8C00'}}></i>   (223) 77 62 02 09 
                                        </p>
                                        <p><i className="fas fa-envelope fa-1x" style={{color: '#FF8C00'}}></i>   amrad@afribonemali.net</p>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    Commissaire à la Sécurité Alimentaire
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">
                                    Elaboration d'un guide référentiel du dispositif de suivi- évaluation du Plan National de Réponses (Aout-Septembre 2016).
                                    </div>
                                   
                                    <div className="accordion-body">
                                        <p><i className="fas fa-user fa-1x" style={{color: '#FF8C00'}}></i>   Ibrahima DIAKITE, Chef du Département Planification et Suivi du Commissariat à la Sécurité alimentaire
                                        </p>
                                        <p> <i className="fas fa-phone fa-1x" style={{color: '#FF8C00'}}></i>   (223) 76 45 43 22
                                        </p>
                                        <p><i className="fas fa-envelope fa-1x" style={{color: '#FF8C00'}}></i>  ibrahimadiakite56@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="bg-primary rounded">
                            <img src="img/pro.png" className=" w-100 h-100"  alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- projet End --> */}


        
        {/* <!-- Contact Start --> */}
        <div className="container-fluid contact py-5" id='contact'>
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px'}}>
                    {/* <h4 className="text-primar">Our Offer</h4> */}
                    <h1 className="display-5 mb-4 text-orange">Contact</h1>
                </div>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-xl-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <div className="bg-ligh rounded p-5 mb-5">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="contact-add-item">
                                            <div className="contact-icon text-primar mb-4">
                                                <i className="fas fa-map-marker-alt fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4>Address</h4>
                                                <p className="mb-0">123 Street New York.USA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-add-item">
                                            <div className="contact-icon text-primar mb-4">
                                                <i className="fas fa-envelope fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4>Mail Us</h4>
                                                <p className="mb-0">info@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-add-item">
                                            <div className="contact-icon text-primar mb-4">
                                                <i className="fa fa-phone-alt fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4>Telephone</h4>
                                                <p className="mb-0">(+012) 3456 7890</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-add-item">
                                            <div className="contact-icon text-primar mb-4">
                                                <i className="fab fa-firefox-browser fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4>Yoursite@ex.com</h4>
                                                <p className="mb-0">(+012) 3456 7890</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-ligh p-5 rounded h-100 wow fadeInUp" data-wow-delay="0.2s">
                               
                                <form>
                                    <div className="row g-4">
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="name" placeholder="Your Name"/>
                                                <label for="name">Prenom et Nom</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control border-0" id="email" placeholder="Your Email"/>
                                                <label for="email">Mail</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="phone" className="form-control border-0" id="phone" placeholder="Phone"/>
                                                <label for="phone">Telephone</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="project" placeholder="Project"/>
                                                <label for="project"> Project</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="subject" placeholder="Subject"/>
                                                <label for="subject">Sujets</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: '160px'}}></textarea>
                                                <label for="message">Message</label>
                                            </div>

                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3">Envoyer</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="rounded h-100">
                            <iframe className="rounded h-100 w-100" 
                            style={{height: '400px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}

        {/* <!-- Footer Start --> */}
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5 border-start-0 border-end-0" style={{border: '1px solid', borderColor: 'rgb(255, 255, 255, 0.08)'}}>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="footer-item">
                            <a href="#accueil">
                                 <img src="img/logo.png" alt="Logo"  className="footer-logo"/> 
                            </a>
                            {/* <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing...</p> */}
                            {/* <div className="d-flex">
                                <a href="#" className="bg-primary d-flex rounded align-items-center py-2 px-3 me-2">
                                    <i className="fas fa-apple-alt text-white"></i>
                                    <div className="ms-3">
                                        <small className="text-white">Download on the</small>
                                        <h6 className="text-white">App Store</h6>
                                    </div>
                                </a>
                                <a href="#" className="bg-dark d-flex rounded align-items-center py-2 px-3 ms-2">
                                    <i className="fas fa-play text-primar"></i>
                                    <div className="ms-3">
                                        <small className="text-white">Get it on</small>
                                        <h6 className="text-white">Google Play</h6>
                                    </div>
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-2">
                        <div className="footer-item">
                            {/* <h4 className="text-white mb-4">Quick Links</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Feature</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Attractions</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Tickets</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Blog</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Contact us</a> */}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item">
                            {/* <h4 className="text-white mb-4">Support</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Privacy Policy</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Disclaimer</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Support</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> FAQ</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Help</a> */}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-map-marker-alt text-primar me-3"></i>
                                <p className="text-white mb-0">123 Street New York.USA</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-envelope text-primar me-3"></i>
                                <p className="text-white mb-0">info@example.com</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-phone-alt text-primar me-3"></i>
                                <p className="text-white mb-0">(+012) 3456 7890</p>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <i className="fab fa-firefox-browser text-primar me-3"></i>
                                <p className="text-white mb-0">Yoursite@ex.com</p>
                            </div>
                            <div className="d-flex">
                                {/* <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f text-white"></i></a>
                                <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-twitter text-white"></i></a>
                                <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-instagram text-white"></i></a>
                                <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="#"><i className="fab fa-linkedin-in text-white"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}
        
        

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   

    </div>
  )
}
