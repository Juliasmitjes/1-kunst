'use client'

import styles from '../styles/home.module.css'

import React from 'react'

const Trees = () => {
  return (
    <div  className="max-w-7xl mx-auto pt-24 bg-banana text-left p-4 pl-10 rounded-lg">
        <div className={styles.header}>
          <h1 id="textDiscover" className="pt-3 pb-3 tracking-tight text-balance text-6xl text-peach">
          Schoonheid Is Overal
          </h1> 
        </div>

        <div className={styles.text}>
          <p className="mt-8 pb-10 pr-6">
          Als dromerig meisje had ik oog voor de schoonheid van het alledaagse: de schittering van kiezels, de ruwe bast van een oude boom vol knoesten, het gracieuze van een naaktslak… In een tuincentrum koop ik vaak een lelijk plantje. ‘Kom maar kleintje, ik zoek een mooie plek voor je en zal je laten stralen.’   
          <br /><br />
          Als je het wilt en kunt zien, is er schoonheid in vrijwel alle wezens en dingen.  
          </p>              
        </div>   

        

      </div>
  )
}

export default Trees