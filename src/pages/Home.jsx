'use client'

import { useOutletContext } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import styles from '../styles/home.module.css'
import { useEffect } from "react";


const Home = () => {

  const { setShowContactForm } = useOutletContext();

  useEffect(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("translate-y-20");
        entry.target.classList.add("-1translate-y-6");
        observer.unobserve(entry.target); 
      }
    });
  });

  const target = document.getElementById("textDiscover");
  if (target) {
    observer.observe(target);
  }

  return () => observer.disconnect();
  }, []); 

  return (
    <>
   <div className="bg-blue">
      {/* Afbeelding met overlay */}
      <div className="relative h-[630px] overflow-hidden rounded-md max-w-7xl mx-auto">
        <img
          className="w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/images/linnen.jpg`}
          alt="Vrouw schildert kunstwerk"
        />

        {/* Rechterhelft blur + tekst */}
        <div className="absolute top-0 right-0 w-1/2 h-full backdrop-blur-sm bg-white/10 flex items-center justify-start">
          <div className="bg-white/60 h-[130px] w-[330px] p-6 flex text-center justify-center items-center ">
            <p className="text-2xl font-pangaia text-peach ">Een hart vol kleur</p>
          </div>
        </div>
      </div>

      {/* Tekstsectie los van afbeelding */}
      <div className="bg-banana p-10 rounded-lg mt-10 max-w-7xl mx-auto">
        <div className={styles.header}>
          <h1 className="text-balance text-6xl text-peach">Een hart vol kleur</h1>
        </div>

        <div className={styles.text}>
          <p className="mt-8 pb-10 pr-6 max-w-3xl">
            Na het overlijden van mijn opa stond zijn doos pastelkrijt bij ons thuis. Ik mocht er alleen naar kijken, want pastelkrijt was niet geschikt voor handjes van een zesjarige. Ik begreep dat, maar vond het ook jammer. Die doos met prachtige kleuren had een magische aantrekkingskracht.
            <br /><br />
            Die magie is er nog steeds. Ik geniet nu zo van mijn kleurrijke schatten. Soms ga ik aan de slag met een tekening. Soms kijk ik alleen maar en maak ik proefstrookjes van kleurencombinaties. De mogelijkheden zijn eindeloos. Na een avond met mijn krijtjes, ben ik gelukkig, ik slaap daarna met een hart vol kleur.
          </p>
       </div>
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
              to="/bomen"
              className="inline-flex items-center gap-2 bg-white/30 hover:text-white backdrop-blur-sm text-peach border border-peach hover:border-sky px-4 py-2 rounded-md text-xl font-nunito hover:bg-sky/50 transition"
            >
              Producten <ArrowRightIcon className="w-5 h-5" />
            </Link>

            </div>            
          </div>

          
       
        <div className="max-w-7xl mx-auto mt-3">
          <img
            className="w-full h-full object-cover max-h-[330px] rounded-lg brightness-110 transition"
            src={`${process.env.PUBLIC_URL}/images/painting.jpg`} 
            alt="Schilderij"
          />            
        </div>

      <div  className="max-w-7xl mx-auto mt-3 bg-peach text-left p-4 pl-10 rounded-lg">
        <div className={styles.header}>
          <h1 id="textDiscover" className="pt-3 pb-3 tracking-tight text-balance text-6xl text-white transition transform translate-y-20 duration-1000">
          Ontdek Onze Bomen
          </h1> 
        </div>
      </div>


     <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch mt-3">
        <div className="relative group max-h-[630px] overflow-hidden rounded-md">
          <Link to="/bomen">
            <img
              className="w-full h-full object-cover brightness-125 group-hover:scale-125 transition duration-300"
              src={`${process.env.PUBLIC_URL}/images/boom1.jpg`}
              alt="Bomen"
            />
            <div className="absolute inset-0 bg-banana bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex items-center font-bold justify-center">
              {/* <span className="text-peach border-solid text-4xl font-nunito opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Bekijk producten
              </span> */}
            </div>
          </Link>
        </div>

        <div className="relative group max-h-[630px] overflow-hidden rounded-md">
          
            <img
              className="w-full h-full object-cover brightness-125"
              src={`${process.env.PUBLIC_URL}/images/boom2.jpg`}
              alt="Bomen"
            />
            {/* <div className="absolute inset-0 bg-banana opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-peach text-xl font-nunito">Bekijk zomerbomen</span>
            </div> */}

        </div>
      </div>  

        
    </>
  );
};

export default Home;