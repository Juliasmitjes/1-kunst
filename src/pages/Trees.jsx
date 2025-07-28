'use client'

import styles from '../styles/home.module.css'
import products from '../data/products' 

const Trees = () => {
  return (
    <div  className="max-w-7xl mx-auto pt-24 bg-peach text-left p-4 pl-10 rounded-lg">
        <div className={styles.header}>
          <h1 id="textDiscover" className="pt-3 pb-3 tracking-tight text-balance text-6xl text-banana">
          Schoonheid Is Overal
          </h1> 
        </div>

        <div className={styles.text}>
          <p className="mt-8 pb-10 pr-6 text-white max-w-3xl">
          Als dromerig meisje had ik oog voor de schoonheid van het alledaagse: de schittering van kiezels, de ruwe bast van een oude boom vol knoesten, het gracieuze van een naaktslak… In een tuincentrum koop ik vaak een lelijk plantje. ‘Kom maar kleintje, ik zoek een mooie plek voor je en zal je laten stralen.’   
          <br /><br />
          Als je het wilt en kunt zien, is er schoonheid in vrijwel alle wezens en dingen.  
          </p>              
        </div>  

        <div className="grid mx-auto grid-cols-4 gap-3 items-stretch mt-3">
          {products.map((product, index) => (
            <img
              key={index}
              className="w-full h-full object-cover brightness-110"
              src={product.src}
              alt={product.alt}
            />
          ))}
        </div>




        

      </div>
  )
}

export default Trees