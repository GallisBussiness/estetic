/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
 import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import  Zoom  from 'react-reveal/Zoom';

function Home() {
    return (
        <>
  <section className="text-white font-lora bg-black">
  <div className="container px-10 py-10 mx-auto flex flex-wrap justify-center">
    <div className="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mb-8 mr-10 flex flex-col items-center justify-center">
    <img src="Logo_k.jpg" alt="centre de beauté" className="rounded-lg h-48 w-48 mb-4" />
      <h1 className="font-semibold text-5xl text-white">CK Esthetik</h1>
      <p className="leading-relaxed mt-4 text-lg text-white">CK Esthetik
CENTRE DE FORMATION
AUX MÉTIERS DE LA BEAUTÉ</p>
    </div>
    <div className="lg:w-3/6 md:w-1/2 rounded-lg p-4 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
     <div className="flex items-center">
     <img src="CILS.jpg" alt="centre de beauté" className="rounded-lg h-48 w-72" />
     </div>
     <div className="flex items-center justify-center">
     <img src="soin_visage.webp" alt="centre de beauté" className="rounded-lg h-48 w-72 ml-24" />
     </div>
    </div>
  </div>
</section>
<section className="py-20 text-gray-700 bg-white bg font-lora">
  <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
  <div className="w-full">
  <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading text-gray-900">Qui somme nous ?</h2>
     <div className="flex flex-col md:flex-row items-center justify-between">
      <Zoom>
        <img src="carina.jpeg" alt="centre de beauté" className="rounded-lg h-72 w-72 mb-4 object-contain mx-6" />
      </Zoom>
     
     <p className="mb-4 font-normal tracking-tight text-gray-900 xl:mb-6">
            Professionnelle de renommée internationale des métiers de l’esthétique,
 Mme CHIRARA Karina, Titulaire d’un CAP et d’un BP ESTHETIQUE-COSMETIQUE de l’école de VICHY,
 Riche de 25 années d’expériences,  en tant qu’esthéticienne spécialisée en audit d’institut et en tant que formatrice aux métiers de la beauté, aujourd’hui elle souhaite transmettre son savoir , sa passion et apporter son expertise aux professionnels de notre noble métier.
Ayant déjà eu l'occasion de gérer de ré organisé plusieurs instituts et spa, , notamment dans la région de la Lorraine en France , puis au Grand-duché de Luxembourg , du Bénin , de Dakar…..
Une expérience qu’elle met à la disposition de sa clientèle et de son équipe hautement qualifiée et dotée d’une technicité d’excellence qui satisferont vos besoins selon le concept
« Des compétences au service d’une éthique ».
</p>
     </div>
     <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Un centre de bien-être </span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Des formations Personnalisées</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Accompagement pour la creation d'un institue de beauté</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Possibilité de stage en entreprise</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Entrainement sur des modèles réels</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Audit d'institut de beauté</span>
            </li>
          </ul>        </div>
  </div>
</section>
<section className="my-3 font-lora container mx-auto mx-15">
 <div className="flex flex-col md:flex-row items-center justify-center">
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-60 flex flex-col items-center justify-center">
     <hr className="w-10 h-1 bg-white" />
      <h1 className="text-2xl font-bold">SOINS VISAGES</h1>
      <Link to="/prestations?q=soin-visage" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Consulter nos tarifs</Link>
   </div>
   <div className="bg-gray-500 h-60 w-60">
     <img src="soin_visage.webp" alt="soin visage" className="h-full w-full rounded-full object-cover" />
   </div>
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-60 flex flex-col items-center justify-center">
     <hr className="w-10 h-1 bg-white" />
      <h1 className="text-2xl font-bold">SOINS CORPS <br/> MASSAGES</h1>
      <Link to="/prestations?q=soin-corps" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Consulter nos tarifs</Link>
   </div>
   <div className="bg-white h-60 w-60">
     <img src="massage.jpg" alt="massage" className="h-full w-full rounded-full object-cover" />
   </div>
 </div>
 <div className="flex flex-col md:flex-row items-center justify-center">
 <div className="bg-white h-60 w-60">
     <img src="makup.jpg" alt="make-up" className="h-full w-full rounded-full object-cover" />
   </div>
 <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-60 flex flex-col items-center justify-center">
     <hr className="w-10 h-1 bg-white" />
      <h1 className="text-2xl font-bold">MAQUILLAGE</h1>
      <Link to="/prestations?q=maquillage" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Consulter nos tarifs</Link>
   </div>
   <div className="bg-white h-60 w-60">
     <img src="rituel.jpg" alt="rituel" className="h-full w-full rounded-full object-cover" />
   </div>
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-60 flex flex-col items-center justify-center">
     <hr className="w-10 h-1 bg-white" />
      <h1 className="text-2xl font-bold">RITUELS</h1>
      <Link to="/prestations?q=rituel" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Consulter nos tarifs</Link>
   </div>
 </div>
 <div className="flex flex-col md:flex-row items-center justify-center">
 <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-60 flex flex-col items-center justify-center">
     <hr className="w-10 h-1 bg-white" />
      <h1 className="text-2xl font-bold">EPILATIONS</h1>
      <Link to="/prestations?q=epilation" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Consulter nos tarifs</Link>
   </div>
   <div className="bg-white h-60 w-60">
     <img src="EPILATION.jpg" alt="epilation" className="h-full w-full rounded-full object-cover" />
   </div>
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-60 flex flex-col items-center justify-center">
     <hr className="w-10 h-1 bg-white" />
      <h1 className="text-2xl font-bold">SOINS MAINS ET <br/> PIEDS</h1>
      <Link to="/prestations?q=pedicure-manicure" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Consulter nos tarifs</Link>
   </div>
   <div className="bg-white h-60 w-60">
     <img src="onglerie.jpg" alt="pedicure manicure" className="h-full w-full rounded-full object-cover" />
   </div>
 </div>
</section>
 <section className="my-3 font-lora container mx-auto mx-15">
<Carousel autoPlay infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
                <div className="mx-auto w-4/5">
                    <img src="bannerd1.jpg" className="w-full h-110 object-contain rounded-lg" />
                </div>
                <div className="mx-auto w-4/5">
                    <img src="bannerd2.jpg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-4/5">
                    <img src="bannerd3.jpg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-4/5">
                    <img src="bannerd4.jpg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-4/5">
                    <img src="bannerd5.jpg" className="w-full h-110 object-cover rounded-lg" />
                </div>
            </Carousel>
</section> 
        </>
    )
}

export default Home
