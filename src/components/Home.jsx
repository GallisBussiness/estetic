/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import json from '../data.json'
// import Formation from './Formation'
// import { Button } from '@chakra-ui/button';
// import { ArrowCircleRightIcon } from '@heroicons/react/solid';
 import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import Team from './Team';
import { Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Fade';

function Home() {
    return (
        <>
        <section className=" bg-banner bg-no-repeat bg-cover bg-center h-120">
  <div className="h-120 px-10 mx-auto flex py-10 md:flex-row flex-col items-center bg-gray-900 opacity-70">
    <div className="lg:flex-grow w-1/2 md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="sm:text-5xl mb-4 font-bold font-lora text-white">
        <Fade left>
            Bienvenue chez Kari's beauty center
        </Fade>
        </h1>
      
      <Fade left cascade>
        <p className="mb-8 leading-relaxed font-lora text-lg font-bold text-white text-justify">
            CK ESTHETIK se veut un centre d’excellence au service de sa clientèle, c’est dans cette optique qu’il vous
propose <br /> une gamme très variée de soins du corps et visage ainsi que des soins des mains et des pieds, des
massages,<br /> pour un public masculin et féminin, maquillage et bien d’autres prestations.
      </p>  
      </Fade>  

      <div className="flex justify-center">
        <Link to="/formations" className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none transition  hover:bg-pink-800 rounded text-lg font-lora">DECOUVRIR NOS FORMATIONS</Link>
      </div>
    </div>
    <div style={{clipPath: "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)"}} className="bg-white w-1/2 md:w-3/5 lg:w-1/5 flex items-center justify-end">
       <Zoom top>
      <img src="logosansbg.png" alt="illustration banner" className="mb-10" />
    </Zoom>
    </div>
   
  </div>
</section>
<section className="py-20 text-gray-700 bg-white bg font-lora">
  <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading text-gray-900">Qui somme nous ?</h2>
          <p className="mb-4 font-normal tracking-tight text-gray-900 xl:mb-6">Professionnelle de renommée internationale des métiers de l’esthétique,
 Mme CHIRARA Karina, Titulaire d’un CAP et d’un BP ESTHETIQUE-COSMETIQUE de l’école de VICHY,
 Riche de 25 années d’expériences,  en tant qu’esthéticienne spécialisée en audit d’institut et en tant que formatrice aux métiers de la beauté, aujourd’hui elle souhaite transmettre son savoir , sa passion et apporter son expertise aux professionnels de notre noble métier.
Ayant déjà eu l'occasion de gérer de ré organisé plusieurs instituts et spa, , notamment dans la région de la Lorraine en France , puis au Grand-duché de Luxembourg , du Bénin , de Dakar…..
Une expérience qu’elle met à la disposition de sa clientèle et de son équipe hautement qualifiée et dotée d’une technicité d’excellence qui satisferont vos besoins selon le concept
« Des compétences au service d’une éthique ».
</p>
     <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              <span className="font-medium text-gray-800">Une large gamme de services estetics </span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              <span className="font-medium text-gray-800">Des formations Professionnelles et techniques de beauté</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              <span className="font-medium text-gray-800">Accompagement pour la creation d'un institue de beauté</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              <span className="font-medium text-gray-800">Possibilité de stage en entreprise</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              <span className="font-medium text-gray-800">Entrainement sur des modèles réels</span>
            </li>
          </ul>
          <Link to="/qui-sommes-nous" className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none transition  hover:bg-pink-800 rounded text-lg font-lora">EN SAVOIR PLUS</Link>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg object-cover" src="team3.jpeg" alt="featureimage" /></div>
    </div>
  </div>
</section>
 <section className="my-3 font-lora container mx-auto mx-15">
<Carousel autoPlay infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
                <div className="mx-auto w-4/5">
                    <img src="image1.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-4/5">
                    <img src="image2.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-4/5">
                    <img src="image3.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-4/5">
                    <img src="image4.jpeg" className="w-full h-110 object-cover object-top rounded-lg"/>
                </div>
            </Carousel>
</section> 
{/* <section className="container mx-auto px-10 my-4">
  <h1 className="text-3xl font-bold font-lora my-2 text-center uppercase shadow-lg p-2 bg-gradient-to-r from-pink-700 to-blue-700 rounded-lg text-white">Top Formations</h1>
  <div className="grid grid-cols-12 gap-3">
   
      {json.data.formations.slice(0,4).map((data,index) => (
         <div key={index} className="col-span-12 md:col-span-3">
    <Formation formation={data} />
    </div>
  ))}
    
  </div>
  
<div className="flex items-center justify-end">
 <Link to="/formations">
 <Button className="font-lora" rightIcon={<ArrowCircleRightIcon className="h-6 w-6"/>} colorScheme="pink" >voir toutes les formations offertes</Button>
 </Link>
</div>
</section> */}

{/* <section className="container mx-auto px-10 my-10">
  <h1 className="text-3xl font-bold font-lora my-2 text-center uppercase shadow-lg p-2 bg-gradient-to-r from-blue-700 to-pink-700 rounded-lg text-white">Top Services</h1>
  <div className="grid grid-cols-12 gap-3">
   
      {json.data.formations.slice(0,4).map((data,index) => (
         <div key={index} className="col-span-12 md:col-span-3">
        <Formation formation={data} />
    </div>
  ))}
    
  </div>
<div className="flex items-center justify-end">
 <Button className="font-lora" rightIcon={<ArrowCircleRightIcon className="h-6 w-6"/>} colorScheme="blue" >voir toutes les services offertes</Button>
</div>
</section> */}
{/* <Team /> */}
        </>
    )
}

export default Home
