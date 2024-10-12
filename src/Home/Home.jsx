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
                        <a href="index.html" className="nav-item nav-link active">Accueil</a>
                        <a href="about.html" className="nav-item nav-link">A Propos</a>
                        <a href="service.html" className="nav-item nav-link">Services</a>
                        <a href="service.html" className="nav-item nav-link">Formation</a>
                        <a href="blog.html" className="nav-item nav-link">Projets</a>
                        {/* <a href="contact.html" className="nav-item nav-link"></a> */}
                    </div>
                    <a href="#" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Contact</a>
                </div>
            </nav>

           
        </div>
        {/* <!-- Navbar & Hero End --> */}

    <div className='home'>
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
                   
                    <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Contact</a>
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

        {/* <!-- Abvout Start --> */}
        <div className="container-fluid about py-5">
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
                                            <p>Le bureau d’étude CFES dispose d’une équipe capitalisant plusieurs années d’expériences en matière d’enquête au Mali et à l’international. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="d-flex">
                                        <div><i className="bi bi-bookmark-heart-fill fa-3x text-color"></i></div>
                                        <div className="ms-4">
                                            <h4>Expertise</h4>
                                            <p>Les membres de l’équipe sont issus des grandes écoles de statistique et d’informatique et ayant aussi travaillé pour des ONG internationales, Agences des Nations unies et projets/programmes de développement rural et/ou local.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#" className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0">Decouvrer nos Equipes</a>
                                </div>
                                {/* <div className="col-sm-6">
                                    <div className="d-flex">
                                        <i className="fas fa-phone-alt fa-2x text-primary me-4"></i>
                                        <div>
                                            <h4>Call Us</h4>
                                            <p className="mb-0 fs-5" style={{letterSpacing: '1px'}}>+01234567890</p>
                                        </div>
                                    </div>
                                </div> */}
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
        <div className="container-fluid team pb-5">
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
        <div className="container-fluid service pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <h1 className="display-5 mb-4 text-orange">Nos Services</h1>
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
                                {/* <a href="#" className="h4 d-inline-block mb-4"> Strategy Consulting</a> */}
                                <p className="mb-4">Conception et conduite des enquêtes quantitatives et qualitatives.
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
                                {/* <a href="#" className="h4 d-inline-block mb-4">Financial Advisory</a> */}
                                <p className="mb-4">
                                Traitement et l’analyse des données d’enquêtes quantitatives et qualitatives .

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
                                {/* <a href="#" className="h4 d-inline-block mb-4">Managements</a> */}
                                <p className="mb-4">Rédaction des rapports d’enquêtes
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
                                {/* <a href="#" className="h4 d-inline-block mb-4">Supply Optimization</a> */}
                                <p className="mb-4">Suivi et évaluation de projets
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
                                {/* <a href="#" className="h4 d-inline-block mb-4">Hr Consulting</a> */}
                                <p className="mb-4">Conception des bases de données 
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
                                {/* <a href="#" className="h4 d-inline-block mb-4">Marketing Consulting</a> */}
                                <p className="mb-4">Systèmes d’Information Géographiques (SIG).
                                </p>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Services End --> */}

       


        {/* <!-- Offer Start --> */}
        <div className="container-fluid offer-section pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px'}}>
                    <h4 className="text-primary">Our Offer</h4>
                    <h1 className="display-5 mb-4">Benefits We offer</h1>
                    <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                    </p>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="nav nav-pills bg-light rounded p-5">
                            <a className="accordion-link p-4 active mb-4" data-bs-toggle="pill" href="#collapseOne">
                                <h5 className="mb-0">Lending money for investment of your new projects</h5>
                            </a>
                            <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseTwo">
                                <h5 className="mb-0">Lending money for investment of your new projects</h5>
                            </a>
                            <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseThree">
                                <h5 className="mb-0">Mobile payment is more flexible and easy for all investors</h5>
                            </a>
                            <a className="accordion-link p-4 mb-0" data-bs-toggle="pill" href="#collapseFour">
                                <h5 className="mb-0">all transaction is kept free for the member of pro traders</h5>
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
                                        <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
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
                                        <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
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
                                        <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
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
                                        <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
                                        </p>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Offer End --> */}

       


        {/* <!-- FAQs Start --> */}
        <div className="container-fluid faq-section pb-5">
            <div className="container pb-5 overflow-hidden">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <h4 className="text-primary">FAQs</h4>
                    <h1 className="display-5 mb-4">Frequently Asked Questions</h1>
                    <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                    </p>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="accordion accordion-flush bg-light rounded p-5" id="accordionFlushSection">
                            <div className="accordion-item rounded-top">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What Does This Tool Do?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What Are The Disadvantages Of Online Trading?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Is Online Trading Safe?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    What Is Online Trading, And How Dose It Work?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    Which App Is Best For Online Trading?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item rounded-bottom">
                                <h2 className="accordion-header" id="flush-headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    How To Create A Trading Account?
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushSection">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="bg-primary rounded">
                            <img src="img/about-2.png" className="img-fluid w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- FAQs End --> */}


        
       

        {/* <!-- Footer Start --> */}
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5 border-start-0 border-end-0" style={{border: '1px solid', borderColor: 'rgb(255, 255, 255, 0.08)'}}>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="footer-item">
                            <a href="index.html" className="p-0">
                                <h4 className="text-white"><i className="fas fa-search-dollar me-3"></i>Stocker</h4>
                                {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                            </a>
                            <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                            <div className="d-flex">
                                <a href="#" className="bg-primary d-flex rounded align-items-center py-2 px-3 me-2">
                                    <i className="fas fa-apple-alt text-white"></i>
                                    <div className="ms-3">
                                        <small className="text-white">Download on the</small>
                                        <h6 className="text-white">App Store</h6>
                                    </div>
                                </a>
                                <a href="#" className="bg-dark d-flex rounded align-items-center py-2 px-3 ms-2">
                                    <i className="fas fa-play text-primary"></i>
                                    <div className="ms-3">
                                        <small className="text-white">Get it on</small>
                                        <h6 className="text-white">Google Play</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-2">
                        <div className="footer-item">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Feature</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Attractions</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Tickets</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Blog</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Contact us</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item">
                            <h4 className="text-white mb-4">Support</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Privacy Policy</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Disclaimer</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Support</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> FAQ</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Help</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-map-marker-alt text-primary me-3"></i>
                                <p className="text-white mb-0">123 Street New York.USA</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-envelope text-primary me-3"></i>
                                <p className="text-white mb-0">info@example.com</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-phone-alt text-primary me-3"></i>
                                <p className="text-white mb-0">(+012) 3456 7890</p>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <i className="fab fa-firefox-browser text-primary me-3"></i>
                                <p className="text-white mb-0">Yoursite@ex.com</p>
                            </div>
                            <div className="d-flex">
                                <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f text-white"></i></a>
                                <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-twitter text-white"></i></a>
                                <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-instagram text-white"></i></a>
                                <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="#"><i className="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}
        
        {/* <!-- Copyright Start --> */}
        <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-body"><a href="#" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-body">
                      
                        Designed By <a className="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom text-white" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Copyright End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   

    </div>
  )
}
