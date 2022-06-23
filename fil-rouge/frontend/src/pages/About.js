import React from 'react'
import Layout from '../layout/Layout'


const About = () => {
  return (
<Layout>
<div className=" h-max w-full flex justify-center items-center rounded p-12 ">
  <div className="grid md:grid-cols-2 grid-cols-1 shadow-2xl bg-white xl:w-4/5 md:w-full md:h-4/5 h-full w-96 text-center text-sm rounded-sm overflow-hidden rounded-xl">
    <img className="h-full" src={require('../assets/aboutTof.jpg')}/>

    <div className="bg-my-color text-white w-full h-screen flex justify-center items-center px-3 text-center">
      <div className="px-8 text-gray-100 lg:text-lg overflow-hidden	">
        
        <p className="lg:text-md font-bold h-full text-black mb-12 font-bold text-3xl text-gray-700">
            Fatima zahra sadki
        </p>
        <p className="md:mb-10 mb-5 lg:text-md text-sm text-black text-gray-700">
        
           Artiste peintre marocaine née en 1986. l'artiste découvre la peinture dès son enfance grace à son père qui lui encourage d'aller loin dans ces passions et ces réalisations de la peinture abstraite .
           Elle réalise des oeuvres contemporaines avec un style abstrait exceptionnel et spontanée afin exprimer ses émotions sur la toile, tout en laissant une belle impression chez le spectateur pleins de vie, d'évasion et  d'imagination. 
          Artiste sensible fasciner par la nature et les couleurs la joie de vivre et toutes les émotions possible de cet univers... 
          Artistes spontanée, sa peinture abstraite est pleine de vie et de couleurs ainsi que la création profonde qui regroupe le rêve, l'illusion et la réalité !
          Productive, amoureuse de ces créations qui deviennent comme une addiction elle partage son imagination et échange son regard du monde non figuratif ..
          son travail offre une énergie immense, palpable au premier regard..
        </p>

      </div>
    </div>
  </div>
</div>
</Layout>

  )
}

export default About