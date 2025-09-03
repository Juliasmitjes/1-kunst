import styles from '../styles/home.module.css'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from "react";


const Gallery = () => {
    const [open, setOpen] = useState(false);

  return (
    <>

      <div className='bg-blue'>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">      
          <div className="bg-banana p-4 pl-10 rounded-lg max-h-[670px] overflow-hidden" >

            <div className={styles.header}>
            <h1 className="pt-24 text-balance leading-snug text-6xl text-peach">
              Veelzijdig en bevlogen
            </h1> 
            </div>

            <div className={styles.text}>
            <p className="mt-8 pb-10 pr-6">
           Ik ben gek op het leven en vind ook veel leuk: getallen, taal, kinderen, kunst. Soms is het lastig kiezen. Gelukkig hoeft niet alles tegelijk. Mijn leven is een avontuurlijke reis van accountant, moeder én kunstenaar. Hoe heerlijk! Vorm kleur en creativiteit. Met hart en handen en altijd met passie.
            <br /><br />
            Ik maak pasteltekeningen en lichtsculpturen.
            </p>              
            </div>  
            <div className='mb-20'>
              <Link
              to="/bomen"
              className="inline-flex items-center rounded-md bg-peach px-4 py-2 text-xl font-nunito font-bold text-white hover:bg-sky transition"
            >
              Nieuwsgierig? Kijk hier  <ArrowRightIcon className="w-5 h-5" />
            </Link> 
            </div>           
          </div>
          <div className="max-h-[670px] overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover"
              src={`${process.env.PUBLIC_URL}/images/test-image-woman-painting.jpeg`}
              alt="Vrouw schildert kunstwerk"
            />
          </div>
        </div>

        <div  className="max-w-7xl mx-auto mt-3 bg-peach text-left p-4 pl-10 rounded-lg">
        <div className={styles.header}>
          <h1 id="textDiscover" className="pt-20 pb-3 tracking-tight text-balance text-6xl text-white">
          Schoonheid is overal 
          </h1> 
          <h1 className="pt-3 pb-20 tracking-tight text-balance text-3xl text-white ">
            "Als je het wilt en kunt zien, is er schoonheid in vrijwel alle wezens en dingen." </h1>
        </div>
      </div>
      <div className="h-80 aspect-[36/9] mx-auto mt-3 max-w-7xl">
        <img
          src={`${process.env.PUBLIC_URL}/images/bos.jpg`}
          alt=""
          className="w-full h-full object-cover rounded-lg brightness-110"
        />
      </div>

      <div className='bg-blue pt-3'>

       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">

        <div className="bg-banana p-4 pl-10 rounded-lg max-h-[700px] overflow-hidden" >
            <div className={styles.text}>
            <p className="mt-14 pb-10 pr-6 text-peach font-pangaia text-2xl">
            Van groene joekel tot verdord skelet</p>  
            <p className='text-gray-500 mb-24'>
             Kerst het feest van licht, goud en glitters én van kerstbomen. Bij ons thuis altijd twee stuks, Nordmannen, een kleintje in de voorkamer en een grote joekel in de achterkamer. Bos in huis, dennengeur, het groen,  zo fijn, maar ook het trieste vooruitzicht: over een paar weken de bomen afgedankt bij het vuil als verdorde skeletten. 
            </p>                     
            </div>              
          </div>

           <div className="bg-banana p-4 pl-10 rounded-lg max-h-[700px] overflow-hidden" >
            <div className={styles.text}>
            <p className="mt-14 pb-10 pr-6 text-peach font-pangaia text-2xl">
            Zullen we eens zonder boom?</p>  
            <p className='text-gray-500'>
            ‘Zullen we eens zonder boom?’, probeerde ik. Protest bij man en kinderen.  ‘Er zijn alternatieven, zoals een kunstboom.’ ‘Nee mam, hartstikke kitsch en zo’n nepboom is ook niet duurzaam’. Daarmee was ik het met ze eens. ‘Een constructie van steigerhout dan?’ ‘Lelijk, mam’. ‘Of een moderne minimalistische variant?’.  ‘Zo’n kaal ding, dan kunnen we beter helemaal niets doen.’ En ook daarin gaf ik ze gelijk. En toch liet het me niet los. 
            </p>                     
            </div>              
          </div>   

          <div className="bg-peach p-4 pl-10 rounded-lg max-h-[700px] overflow-hidden" >
            <div className={styles.text}>
            <p className="mt-14 pb-10 pr-6 text-white font-pangaia text-2xl">
            Uitdaging</p>  
            <p className='text-white pb-24'>
             Ik dacht aan de glinsterende kiezels in mijn jeugd. Er is zoveel schoonheid.  Het moet mogelijk zijn om een beter alternatief te bedenken. Ik ga het proberen! Ik zei tegen man en kinderen, ‘ik  ga de uitdaging aan.  Ik bedenk een feestelijke lichtbron als alternatief voor een boom: eenvoudig, minimaal materiaalgebruik (duurzaam) én met een wow-effect. Het beeld tekende zich in mijn hoofd af, maar de weg ernaartoe was een tocht met hobbels over constructies ontdekkingen over fournituren, lijmen, papiersoorten en stoffen... 
            </p>                     
            </div>              
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid items-stretch mt-3">      
        <div className="bg-banana p-4 pl-10 rounded-lg overflow-hidden" >
          <div className={styles.header}>
            <h1 className="pt-24 text-balance pb-10 text-6xl text-peach">
              Uiteindelijk is het gelukt
            </h1> 
          </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch mt-3">
        <div className="relative group max-h-[630px] overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover brightness-125 group-hover:scale-125 transition duration-300"
              src={`${process.env.PUBLIC_URL}/images/boom1.jpg`}
              alt="Bomen"
            />
        </div>

        <div className="relative group max-h-[630px] overflow-hidden rounded-md"> 
          <img
            className="w-full h-full object-cover brightness-125 group-hover:scale-125 transition duration-300"
            src={`${process.env.PUBLIC_URL}/images/boom2.jpg`}
            alt="Bomen"
          />
        </div>
      </div>  

       <div className="max-w-7xl mx-auto gap-3 items-stretch mt-3">
        <div className="relative group max-h-[1500px] overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover brightness-125 group-hover:scale-125 transition duration-300"
              src={`${process.env.PUBLIC_URL}/images/boom1.jpg`}
              alt="Bomen"
            />
        </div>
      </div>
     </div>
   </div>

   <div className="max-w-7xl mx-auto mt-3 bg-peach text-left px-10 py-24 rounded-lg">
    <div className={styles.header}>
      <div className="grid grid-cols-3 gap-6">
        <h1 id="textDiscover" className="col-span-2 tracking-tight text-balance text-6xl text-white">
          Bekijk lichtsculpturen
        </h1>

            <Link
              to="/bomen"
              className="max-w-xl inline-flex items-center gap-2 bg-sky/100 backdrop-blur-sm text-white border border-sky hover:border-peach px-4 py-4 rounded-md font-nunito hover:bg-sky/30 transition font-bold text-2xl"
            >
              Galerij <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>       
        </div>
      </div>
 

    <div className="max-w-7xl mx-auto mt-3 bg-banana p-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-pangaia font-semibold text-peach mb-6">
        Ik hoor graag van je! 
      </h2>
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Naam"
          className="font-nunito w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-peach text-xl"
        />
        <input
          type="email"
          placeholder="Email"
          className="font-nunito w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-peach text-xl"
        />
        <textarea
          placeholder="Bericht"
          rows="5"
          className="font-nunito w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-peach text-xl"
        />
        <button
          type="submit"
          className="font-nunito bg-sky text-white rounded px-6 py-3 font-bold hover:bg-sky/80 transition text-xl"
        >
          Verstuur
        </button>
      </form>
    </div>
    
    </div>
 
    </>
  )
};

export default Gallery;