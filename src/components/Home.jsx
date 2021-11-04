import React from 'react'

function Home() {
    return (
        <>
        <section className="text-gray-600">
  <div className="container mx-auto flex px-24 py-10 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="sm:text-5xl mb-4 font-semibold font-lora text-gray-900">Bienvenue chez Karis beauty center</h1>
      <p className="mb-8 leading-relaxed font-lora"> CK ESTHETIK se veut un centre d’excellence au service de sa clientèle, c’est dans cette optique qu’il vous
propose une gamme très variée de soins du corps et visage ainsi que des soins des mains et des pieds, des
massages, pour un public masculin et féminin, maquillage et bien d’autres prestations. </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 rounded text-lg font-lora">DECOUVRIR NOS FORMATIONS</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-blacks bg-cover bg-right" style={{clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)'}}>
        <div className="w-96 h-96"></div>
    </div>
  </div>
</section>
        </>
    )
}

export default Home
