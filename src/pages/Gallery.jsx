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
          <div className="bg-banana p-4 pl-10 rounded-lg max-h-[630px] overflow-hidden" >

            <div className={styles.header}>
            <h1 className="pt-24 text-balance text-6xl text-peach">
              Moeder Accountant Kunstenaar 
            </h1> 
            </div>

            <div className={styles.text}>
            <p className="mt-8 pb-20 pr-6">
            Ik ben gek op het leven en vind ook veel leuk: getallen, taal, kinderen, kunst, … Soms is het lastig kiezen. Gelukkig hoeft ook niet alles tegelijk. Mijn leven is een avontuurlijke reis van accountant/controller, moeder en, nu de kinderen zijn uitgevlogen, als kunstenaar. Hoe heerlijk! Vorm kleur en creativiteit. Met hart en handen. 
            <br /><br />
            Stiekem heb ik altijd een ambacht willen uitoefenen. 
            </p>              
            </div>   
            <div className="flex space-x-4">

            {/* <button
              type="button"
              onClick={() => setShowContactForm(true)}
              className="rounded-md bg-peach font-bold px-4 py-2 text-xl font-nunito text-white hover:bg-sky transition"
            >
              Contact
            </button>


           <Link
              to="/bomen"
              className="inline-flex items-center gap-2 bg-white/30 hover:text-white backdrop-blur-sm text-peach border border-peach hover:border-sky px-4 py-2 rounded-md text-xl font-nunito hover:bg-sky/50 transition font-bold"
            >
              Galerij <ArrowRightIcon className="w-5 h-5" />
            </Link> */}

            </div>            
          </div>
          <div className="max-h-[630px] overflow-hidden rounded-md">
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

      <div
        className={`bg-banana p-4 pl-10 rounded-lg overflow-hidden transition-all duration-500 ${
          open ? "max-h-[630px]" : "max-h-[300px]"
        }`}
            >
              <div className={styles.text}>
                <p className="mt-8 pb-10 pr-6">
                  Van groene joekel tot verdord skelet
                </p>
                <p>
                  Kerst het feest van licht, goud en glitters én van kerstbomen. Bij
                  ons thuis altijd twee stuks...
                  {open && (
                    <>
                      {" "}
                      Nordmannen, een kleintje in de voorkamer en een grote joekel in
                      de achterkamer. Bos in huis, dennengeur, het groen, zo fijn, maar
                      ook het trieste vooruitzicht: over een paar weken de bomen
                      afgedankt bij het vuil als verdorde skeletten.
                    </>
                  )}
                </p>
                <button
                  onClick={() => setOpen(!open)}
                  className="mt-4 text-green-700 hover:text-green-900 transition"
                >
                  {open ? "▲ Minder" : "▼ Meer"}
                </button>
              </div>
            </div>

            <div
        className={`bg-banana p-4 pl-10 rounded-lg overflow-hidden transition-all duration-500 ${
          open ? "max-h-[630px]" : "max-h-[300px]"
        }`}
            >
              <div className={styles.text}>
                <p className="mt-8 pb-10 pr-6">
                   Zullen we eens zonder boom?
                </p>
                <p>
                  ‘Zullen we eens zonder boom?’, probeerde ik. Protest bij man en kinderen...
                  {open && (
                    <>
                      {" "}
                     ‘Er zijn alternatieven, zoals een kunstboom.’ ‘Nee mam, hartstikke kitsch en zo’n nepboom is ook niet duurzaam’. Daarmee was ik het met ze eens. ‘Een constructie van steigerhout dan?’ ‘Lelijk, mam’. ‘Of een moderne minimalistische variant?’.  ‘Zo’n kaal ding, dan kunnen we beter helemaal niets doen.’ En ook daarin gaf ik ze gelijk. En toch liet het me niet los. 
                    </>
                  )}
                </p>
                <button
                  onClick={() => setOpen(!open)}
                  className="mt-4 text-green-700 hover:text-green-900 transition"
                >
                  {open ? "▲ Minder" : "▼ Meer"}
                </button>
              </div>
            </div>
   

          <div className="bg-peach p-4 pl-10 rounded-lg max-h-[630px] overflow-hidden" >
            <div className={styles.text}>
            <p className="mt-8 pb-10 pr-6 text-white">
            Uitdaging</p>  
            <p className='text-white'>
             Ik dacht aan de glinsterende kiezels in mijn jeugd. Er is zoveel schoonheid.  Het moet mogelijk zijn om een beter alternatief te bedenken. Ik ga het proberen! Ik zei tegen man en kinderen, ‘ik  ga de uitdaging aan.  Ik bedenk een feestelijke lichtbron als alternatief voor een boom: eenvoudig, minimaal materiaalgebruik (duurzaam) én met een wow-effect. Het beeld tekende zich in mijn hoofd af, maar de weg ernaartoe was een tocht met hobbels over constructies ontdekkingen over fournituren, lijmen, papiersoorten en stoffen. Uiteindelijk is het gelukt! 
            </p>                     
            </div>              
          </div>
        
        </div>
      </div>
      </div>
    </>
  )
};

export default Gallery;