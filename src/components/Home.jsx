/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import json from '../data.json'
// import Formation from './Formation'
// import { Button } from '@chakra-ui/button';
// import { ArrowCircleRightIcon } from '@heroicons/react/solid';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import Team from './Team';
import { Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Fade';

function Home() {
    return (
        <>
        <section className=" bg-banner bg-no-repeat bg-cover bg-blend-overlay bg-top min-h-screen">
  <div className="min-h-screen px-10 mx-auto flex py-10 md:flex-row flex-col items-center bg-gray-300 opacity-70">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="sm:text-5xl mb-4 font-semibold font-lora text-black">
        <Fade left>
            Bienvenue chez Kari's beauty center
        </Fade>
        </h1>
      
      <Fade left cascade>
        <p className="mb-8 leading-relaxed font-lora text-gray-900">
            CK ESTHETIK se veut un centre d’excellence au service de sa clientèle, c’est dans cette optique qu’il vous
propose une gamme très variée de soins du corps et visage ainsi que des soins des mains et des pieds, des
massages, pour un public masculin et féminin, maquillage et bien d’autres prestations.
      </p>  
      </Fade>  

      <div className="flex justify-center">
        <Link to="/formations" className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none transition  hover:bg-pink-400 rounded text-lg font-lora">DECOUVRIR NOS FORMATIONS</Link>
      </div>
    </div>
    <div style={{clipPath: "polygon(50% 0%, 100% 0, 100% 100%, 47% 100%, 0 48%)"}} className="bg-white w-1/2 flex items-center justify-end">
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
          <p className="mb-4 font-medium tracking-tight text-gray-900 xl:mb-6">Professionnelle de renommée internationale des métiers de l’esthétique, Mme CHIRARA Karina, après avoir 
obtenu avec brio son diplôme professionnel d’esthétique en France, y a démarré son activité. Celle-ci a acquis 
auprès de centres internationaux, notamment dans la région de Messine, puis au Grand-duché de Luxembourg 
une expérience qu’elle met depuis belle lurette à la disposition de sa clientèle et de son équipe hautement 
qualifiée et dotée d’une technicité d’excellence qui satisferont vos besoins selon le concept : « Des 
compétences au service d’une éthique ».</p>
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
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg object-cover" src="image3.jpg" alt="featureimage" /></div>
    </div>
  </div>
</section>
{/* <section className="my-3 font-lora h-96">
<Carousel className="h-full" autoPlay infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
                <div>
                    <img src="soin_visage.jpg" className="object-cover rounded-lg" />
                    <p className="legend text-3xl font-semibold">Soins de visage</p>
                </div>
                <div>
                    <img src="massage.jpg" className="object-cover object-bottom rounded-lg" />
                    <p className="legend text-3xl font-semibold">Massage de Corp</p>
                </div>
                <div>
                    <img src="image3.jpg" className="object-cover rounded-lg" />
                    <p className="legend text-3xl font-semibold">Manicure</p>
                </div>
                <div>
                    <img src="pedicure.jpg" className="object-cover object-bottom rounded-lg"/>
                    <p className="legend text-3xl font-semibold">Pédicure</p>
                </div>
            </Carousel>
</section> */}
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
