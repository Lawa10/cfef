import React , {useEffect, useRef, useState} from 'react'
import './Home.css'
import { useAnimationFrame } from "framer-motion"
import emailjs from 'emailjs-com';

export default function Home() {
    const [showImg, setshowImg] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        numero: '', // Add numero to formData
        message: ''
      });
      const handleSubmit = (e) => {

        e.preventDefault();
        // Send email via EmailJS
        emailjs.sendForm('', '', e.target, '')
          .then((result) => {
            console.log(result.text);
            alert('Message envoyé avec succès !');
          }, (error) => {
            console.log(error.text);
            alert('Échec de l\'envoi du message. Veuillez réessayer.');
          });
      };
  useEffect(()=>{
   const timer = setTimeout(() =>{
    setshowImg(false);
   }, 3000)
   return () => clearTimeout (timer)
  }, []);

  return (
    <>
     {
        showImg ? (
            <div  className="loading-container">
            <img src="./img/loading.svg" alt="" style={{justifyContent: 'center'}} />
    
        </div>
        ):(
            <div>
      
         
         {/* home start */}

             {/* <!-- Navbar & Hero Start --> */}
     
        {/* <!-- Navbar & Hero End --> */}

        <div className="hero_area">
    {/* <!-- header section strats --> */}
    <div className="hero_bg_box">
      <img src="./img/accueil.jpg" alt=""/>
    </div>

    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_link-container">
            <a href="" className="contact_link1">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Bacodjicoroni Golf 
              </span>
            </a>
            <a href="" className="contact_link2">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Tell : +223 78 84 84 82
              </span>
            </a>
            <a href="" className="contact_link3">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                odenou@cfes-mali.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <span>
              <img src="./img/logo.png" alt="" srcset="" style={{width:'50px', height:'50px'}} />
              </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>

            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">Accueil <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#propos">A propos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#service"> Services </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#formation"> Formations </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projet">Projets</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    {/* <!-- end header section --> */}
    {/* <!-- slider section --> */}
    <section className=" slider_section ">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                    Cabinet de Formation  <br/>
                      <span>
                      et d’Etudes Statistiques
                      </span>
                    </h1>
                    <p>
                    Éclairer l'avenir par la formation et l'expertise statistique.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Contact </a>
                      <a href="" className="btn-2">Formations</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                    Cabinet de Formation  <br/>
                      <span>
                      et d’Etudes Statistiques
                      </span>
                    </h1>
                    <p>
                    Éclairer l'avenir par la formation et l'expertise statistique.
                    </p>
                
                    <div className="btn-box">
                      <a href="" className="btn-1"> Contact </a>
                      <a href="" className="btn-2">Formations</a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Building your visions <br/>
                      <span>
                        Creating reality
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Read more </a>
                      <a href="" className="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="container idicator_container">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
        </div> */}
      </div>
    </section>
    {/* <!-- end slider section --> */}
    </div>

    {/* <div className="wrapper">
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
    </div> */}


 

        {/* <!-- propos Start --> */}
        <div className="container-fluid about py-5" id='propos'>
            <div className="container py-5">
                <div className="row g-7 align-items-center" >
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
                            <img src="img/about.png" alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team Start --> */}
            <div className="container-fluid service pb-5" id="equipe">
    <div className="container pb-5">
        <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="card">
                    <img src="img/oscar.jpg" alt="Job Visa" className="card-image" />
                    <div className="card-text">Oscar Denou</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="card">
                    <img src="img/ndiaye.jpg" alt="Job Visa" className="card-image" />
                    <div className="card-text">Abdrahamane N'diaye</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div className="card">
                    <img src="img/younouss.jpg" alt="Job Visa" className="card-image" />
                    <div className="card-text">Younouss Bore</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.8s">
                <div className="card">
                    <img src="img/bane.jpg" alt="Job Visa" className="card-image" />
                    <div className="card-text">Moussa Bane</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="1s">
                <div className="card">
                    <img src="img/zeinab.jpg" alt="Job Visa" className="card-image" />
                    <div className="card-text">Zeynab Djenepo</div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="1.2s">
                <div className="card">
                    <img src="img/mina.jpg" alt="Job Visa" className="card-image" />
                    <div className="card-text">Aminata Kone</div>
                </div>
            </div>
        </div>
    </div>
             </div>

        {/* <!-- Team End --> */}
        </div>

   <br />
   <br />
   <br />     

        {/* <!-- About End --> */}


        {/* <!-- Services Start --> */}
        <div className="container-fluid service pb-5" id='service' style={{marginTop:'-80px'}}>
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
        <div className="container-fluid service overflow-hidden pt-5" style={{marginTop:'-80px'}} id='formation'>
            <div className="container py-5">
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                   
                    <h1 className="mb-0 text-orange">Formations</h1>
                    <p className="mb-0">Le cabinet CFES propose des formations en </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-8 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                    <img src="img/offer-1.jpg" className="img-flui w-150 rounded" alt="Image"/>
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0">Statistique</a>
                                        </div>
                                      
                                    </div>
                                    <div className="service-content pb-4">
                                        <div className="px-4">
                                           
                                            <p className="mb-4">Cette formation couvre les bases et techniques avancées de la statistique descriptive et multidimensionnelle, ainsi que les méthodes d'échantillonnage et l'économétrie. Elle est idéale pour les personnes souhaitant bénéficier des compétences analytiques solides, indispensables dans de nombreux domaines professionnels.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                    <img src="img/offer-2.jpg" className="img-flui w-100 rounded" alt="Image"/>
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0" style={{fontSize:'14px'}}>Logiciels de conception des outils de collecte</a>
                                        </div>

                                    </div>
                                    <div className="service-content pb-4">
                                        {/* <a href="#"><h4 className="text-white mb-4 py-3">Business Visa</h4></a> */}
                                        <div className="px-4">
                                            <p className="mb-4">Cette formation est centrale sur l'utilisation des outils comme Kobocollect , CSPro , et la programmation avec xlsform . Ces logiciels permettent de concevoir des formulaires numériques pour la collecte de données sur le terrain, une compétence essentielle pour les études de marché et la recherche.</p>
                                            {/* <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                    <img src="img/analyse.jpeg" className="img-flui w-100 rounded" alt="Image"/>
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0" >Logiciels d'analyse statistique</a>
                                        </div>
                                      
                                    </div>
                                    <div className="service-content pb-4">
                                        {/* <a href="#"><h4 className="text-white mb-4 py-3">Diplometic Visa</h4></a> */}
                                        <div className="px-4">
                                            <p className="mb-4">Apprenez à maîtriser des outils comme R , STATA , et SPSS , qui sont parmi les plus utilisés pour l'analyse des données statistiques. Ces compétences sont cruciales pour interpréter des données complexes dans différents contextes (recherche, entreprise, etc.)..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                    <img src="img/offer-3.jpg" className="img-flui w-100 rounded" alt="Image"/>
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0">Visualisation des donnee</a>
                                        </div>

                                    </div>
                                    <div className="service-content pb-4">
                                        {/* <a href="#"><h4 className="text-white mb-4 py-3">Students Visa</h4></a> */}
                                        <div className="px-4">
                                            <p className="mb-4">La visualisation des données devient de plus en plus importante pour la communication des résultats d'analyse. Dans cette formation, vous apprendrez à utiliser des logiciels comme Tableau et Power BI pour créer des rapports et des tableaux de bord interactifs et compréhensibles.</p>
                                            {/* <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                    <img src="img/db.jpeg" className="img-flui w-100 rounded" alt="Image"/>
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0">Bases de données</a>
                                        </div>
                                   
                                
                                    </div>
                                    <div className="service-content pb-4">
                                        <div className="px-4">
                                            <p className="mb-4">Une formation essentielle pour ceux qui souhaitent gérer des bases de données de manière efficace. Vous apprendrez à utiliser des outils comme ACCESS , VBA , et à maîtriser des langages de gestion de bases de données comme SQL et MySQL , vous permettant ainsi de créer et gérer des systèmes de stockage de données.</p>
                                            {/* <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                    <img src="img/offer-5.jpeg" className="img-flui w-100 rounded" alt="Image"/>
                                </div>
                                
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0">La suite Microsoft</a>
                                        </div>
                                  
                                    </div>
                                   
                                    <div className="service-content pb-4">
                                        {/* <a href="#"><h4 className="text-white mb-4 py-3">La suite Microsoft</h4></a> */}
                                        <div className="px-4">
                                            <p className="mb-4">Familiarisez-vous avec les outils de la suite Microsoft Office (Word, Excel, PowerPoint) pour une utilisation efficace dans un contexte professionnel. Ce module vous aidera à améliorer votre productivité et à maîtriser des fonctions avancées, notamment pour les présentations et la gestion de données.</p>
                                            {/* <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a> */}
                                        </div>
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
                    <h1 className="display-5 mb-0 text-orange">Projets</h1>
                    <br />
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
                    <h1 className="display-5 mb-0 text-orange">Contact</h1>
                </div>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-xl-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            
                            <div className="bg-ligh p-5 rounded h-100 wow fadeInUp" data-wow-delay="0.2s">
                               
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="text"  value={formData.name} className="form-control border-0" id="name" placeholder="Your Name"/>
                                                <label for="name">Nom</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="email"  value={formData.email} className="form-control border-0" id="email" placeholder="Your Email"/>
                                                <label for="email">Mail</label>
                                            </div>
                                        </div>
                                      
                                       
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0"  value={formData.message} placeholder="Leave a message here" id="message" style={{height: '160px'}}></textarea>
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
  <div className="rounded h-100" style={{ maxWidth: '100%' }}>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3893.7528927120115!2d-8.027122424929836!3d12.598530787683574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDM1JzU0LjciTiA4wrAwMScyOC40Ilc!5e0!3m2!1sfr!2sml!4v1731402727309!5m2!1sfr!2sml" 
      width="100%" 
      height="400" 
      style={{ border: '0', maxWidth: '100%' }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>

                    
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}

        {/* <!-- Footer Start --> */}
        <footer className="container-fluid footer_section">
    <p>
      &copy; <span id="currentYear"></span> All Rights Reserved. Design by
      <a href="https://html.design/"> AIS-Mali</a>
    </p>
  </footer>
        {/* <!-- Footer End --> */}
        
        

        {/* <!-- Back to Top --> */}

    </div>
        )
    }
    
    </>
   
  )
}
