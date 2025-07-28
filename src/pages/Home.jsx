'use client'

import { useOutletContext } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import styles from '../styles/home.module.css'
import { useEffect, useRef } from "react";


const Home = () => {

  const { setShowContactForm } = useOutletContext();

  useEffect(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("translate-y-20");
        entry.target.classList.add("-1translate-y-6");
        observer.unobserve(entry.target); // Eenmalige actie
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">      
          <div className="bg-banana p-4 pl-10 rounded-lg max-h-[630px] overflow-hidden" >

            <div className={styles.header}>
            <h1 className="pt-24 tracking-tight text-balance text-6xl text-peach">
              Moeder Accountant Kunstenaar 
            </h1> 
            </div>

            <div className={styles.text}>
            <p className="mt-8 pb-10 pr-6">
            Ik ben gek op het leven en vind ook veel leuk: getallen, taal, kinderen, kunst, … Soms is het lastig kiezen. Gelukkig hoeft ook niet alles tegelijk. Mijn leven is een avontuurlijke reis van accountant/controller, moeder en, nu de kinderen zijn uitgevlogen, als kunstenaar. Hoe heerlijk! Vorm kleur en creativiteit. Met hart en handen. 
            <br /><br />
            Stiekem heb ik altijd een ambacht willen uitoefenen. 
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

          <div className="max-h-[630px] overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover"
              src="/images/test-image-woman-painting.jpg"
              alt="Vrouw schildert kunstwerk"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-3">
          <img
            className="w-full h-full object-cover max-h-[330px] rounded-lg brightness-110 transition"
            src="/images/painting.jpg" 
            alt="Schilderij"
          />            
        </div>

      <div  className="max-w-7xl mx-auto mt-3 bg-peach text-left p-4 pl-10 rounded-lg">
        <div className={styles.header}>
          <h1 id="textDiscover" className="pt-10 tracking-tight text-balance text-6xl text-white transition transform translate-y-20 duration-500">
          Ontdek Onze Bomen
          </h1> 
        </div>
      </div>
    </>
  );
};

export default Home;