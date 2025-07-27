'use client'

import { useOutletContext } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import styles from '../styles/home.module.css'


const Home = () => {

  const { setShowContactForm } = useOutletContext()

  return (
    <>
      <div className="bg-banana text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 pt-6 items-center">      
          <div>

            <div className={styles.header}>
            <h1 className="pt-24 tracking-tight text-balance text-6xl">
              Schoonheid is overal
            </h1> 
            </div>

            <div className={styles.text}>
            <p className="mt-8 pb-10 pr-6">
            Als dromerig meisje had ik oog voor de schoonheid van het alledaagse: de schittering van kiezels, de ruwe bast van een oude boom vol knoesten, het gracieuze van een naaktslak… In een tuincentrum koop ik vaak een lelijk plantje. ‘Kom maar kleintje, ik zoek een mooie plek voor je en zal je laten stralen.’
            <br /><br />
            Als je het wilt en kunt zien, is er schoonheid in vrijwel alle wezens en dingen.
            </p>              
            </div>   
          

            <div className="flex space-x-4">

            <button
              type="button"
              onClick={() => setShowContactForm(true)}
              className="rounded-md bg-peach px-4 py-2 text-xl font-nunito text-white hover:bg-sky transition"
            >
              Meer informatie
            </button>


           <Link
              to="/gallerij"
              className="inline-flex items-center gap-2 bg-white/30 hover:text-white backdrop-blur-sm text-peach border border-peach hover:border-sky px-4 py-2 rounded-md text-xl font-nunito hover:bg-sky/50 transition"
            >
              Gallerij <ArrowRightIcon className="w-5 h-5" />
            </Link>

            </div>            
          </div>
          <div>
            <img
              className="pt-24 w-full rounded-lg"
              src="/images/test-image-woman-painting.jpg"
              alt="Vrouw schildert kunstwerk"
            />
          </div>
          </div>

          <div className={styles.header}>
          <h1 className="mx-auto pt-24 tracking-tight text-balance">
          Van groene joekel tot verdord skelet 
          </h1>
          </div>
          
          <div className={styles.text}>
          <p className="max-w-4xl mx-auto mt-6 text-align-left">  
          Kerst het feest van licht, goud en glitters én van kerstbomen. Bij ons thuis altijd twee stuks, Nordmannen, een kleintje in de voorkamer en een grote joekel in de achterkamer. Bos in huis, dennengeur, het groen,  zo fijn, maar ook het trieste vooruitzicht: over een paar weken de bomen afgedankt bij het vuil als verdorde skeletten. 
          </p>
          </div>
      



 
     

    </div>

    </>
  );
};

export default Home;