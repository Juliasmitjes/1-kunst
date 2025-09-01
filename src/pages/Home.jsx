'use client'

import { useRef, useEffect, useState } from "react";
import { useOutletContext } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { RiArrowRightSLine , RiArrowLeftSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import products from '../data/products'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from '../styles/home.module.css';

const Home = () => {
  const { setShowContactForm } = useOutletContext();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

 
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);


  const treeCategories = ['Winterbomen', 'Zomerbomen'];
  const treeProducts = products.filter(product => treeCategories.includes(product.category));


  return (
    <>
      <div className="bg-blue">
      
        <div className="relative h-[630px] overflow-hidden rounded-md max-w-7xl mx-auto">
          <img
            className="w-full h-full object-cover"
            src={`${process.env.PUBLIC_URL}/images/linnen.jpg`}
            alt="Vrouw schildert kunstwerk"
          />

          <HashLink smooth to="#lichtsculpturen-section">
            <div className="absolute top-0 right-0 w-1/2 h-full backdrop-blur-sm bg-white/10 flex items-center justify-start cursor-pointer">
              <div className="bg-white/60 h-[250px] w-[450px] p-6 flex flex-col text-center justify-center items-center  hover:bg-white/80 transition">
                <p className="text-2xl font-nunito font-bold text-gray-500">
                  Bekijk mijn handgemaakte
                </p>
                <div className={styles.header}>
                  <h1 className="text-balance text-5xl text-peach mt-2">Lichtsculpturen</h1>
                </div>
              </div>
            </div>
          </HashLink>
        </div>

        
        <div className="bg-banana p-10 rounded-lg mt-3 max-w-7xl mx-auto">
          <div className={styles.header}>
            <h1 className="text-balance text-6xl text-peach">Een hart vol kleur</h1>
          </div>

          <div className={styles.text}>
            <p className="mt-8 pb-10 pr-6 max-w-3xl">
              Na het overlijden van mijn opa stond zijn doos pastelkrijt bij ons thuis. Ik mocht er
              alleen naar kijken, want pastelkrijt was niet geschikt voor handjes van een zesjarige.
              Ik begreep dat, maar vond het ook jammer. Die doos met prachtige kleuren had een
              magische aantrekkingskracht.
              <br />
              <br />
              Die magie is er nog steeds. Ik geniet nu zo van mijn kleurrijke schatten. Soms ga ik
              aan de slag met een tekening. Soms kijk ik alleen maar en maak ik proefstrookjes van
              kleurencombinaties. De mogelijkheden zijn eindeloos. Na een avond met mijn krijtjes,
              ben ik gelukkig, ik slaap daarna met een hart vol kleur.
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setShowContactForm(true)}
              className="rounded-md bg-peach px-4 py-2 text-xl font-nunito font-bold text-white hover:bg-sky transition"
            >
              Meer informatie
            </button>

            <Link
              to="/bomen"
              className="inline-flex items-center font-bold gap-2 bg-white/30 hover:text-white backdrop-blur-sm text-peach border border-peach hover:border-sky px-4 py-2 rounded-md text-xl font-nunito hover:bg-sky/50 transition"
            >
              Producten <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>

      
        <section id="lichtsculpturen-section">
          <div className="max-w-7xl mx-auto mt-3 bg-peach text-left p-4 pl-10 rounded-lg">
            <div className={styles.header}>
              <h1 className="pt-3 pb-6 tracking-tight text-balance text-6xl text-white">
                Lichtsculpturen
              </h1>
            </div>

            <div className="relative mx-auto pb-10">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={false}
                loop={false}
                spaceBetween={30}
                initialSlide={0}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 0,
                  modifier: 0,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                onSwiper={setSwiperInstance}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2.5,
                  },
                  1280: {
                    slidesPerView: 3.5,
                  },
                }}
                className="swiper_container"
              >
                <SwiperSlide>
                  <NavLink to="/#">
                    <div className="relative group">
                      <img
                        className="h-[500px] w-full object-cover"
                        src={`${process.env.PUBLIC_URL}/images/boom1.jpg`}
                        alt="slide_image"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white/80 text-gray-500 font-nunito font-bold text-xl flex items-center justify-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                        Bekijk
                      </div>
                    </div>
                  </NavLink>
                 <div className="mt-4">
                    {treeProducts[0] && (
                      <p className="text-xl font-bold font-nunito text-gray-800">{treeProducts[0].name}</p>
                    )}
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <NavLink to="/#">
                    <div className="relative group">
                      <img
                        className="h-[500px] w-full object-cover"
                        src={`${process.env.PUBLIC_URL}/images/boom2.jpg`}
                        alt="slide_image"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white/80 text-gray-500 font-nunito font-bold text-xl flex items-center justify-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                        Bekijk
                      </div>
                    </div>
                  </NavLink>
                  <div className="mt-4">
                    {treeProducts[1] && (
                      <p className="text-xl font-bold font-nunito text-gray-800">{treeProducts[1].name}</p>
                    )}
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <NavLink to="/#">
                    <div className="relative group">
                      <img
                        className="h-[500px] w-full object-cover"
                        src={`${process.env.PUBLIC_URL}/images/boom3.jpg`}
                        alt="slide_image"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white/80 text-gray-500 font-nunito font-bold text-xl flex items-center justify-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                        Bekijk
                      </div>
                    </div>
                  </NavLink>
                   <div className="mt-4">
                    {treeProducts[2] && (
                      <p className="text-xl font-bold font-nunito text-gray-800">{treeProducts[2].name}</p>
                    )}
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <NavLink to="/#">
                    <div className="relative group">
                      <img
                        className="h-[500px] w-full object-cover"
                        src={`${process.env.PUBLIC_URL}/images/boom1.jpg`}
                        alt="slide_image"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white/80 text-gray-500 font-nunito font-bold text-xl flex items-center justify-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                        Bekijk
                      </div>
                    </div>
                  </NavLink>
                   <div className="mt-4">
                    {treeProducts[3] && (
                      <p className="text-xl font-bold font-nunito text-gray-800">{treeProducts[3].name}</p>
                    )}
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <NavLink to="/#">
                    <div className="relative group">
                      <img
                        className="h-[500px] w-full object-cover"
                        src={`${process.env.PUBLIC_URL}/images/boom2.jpg`}
                        alt="slide_image"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white/80 text-gray-500 font-nunito font-bold text-xl flex items-center justify-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                        Bekijk
                      </div>
                    </div>
                  </NavLink>
                   <div className="mt-4">
                    {treeProducts[4] && (
                      <p className="text-xl font-bold font-nunito text-gray-800">{treeProducts[4].name}</p>
                    )}
                  </div>
                </SwiperSlide>
              </Swiper>

              <div
                ref={prevRef}
                className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition">
                  <RiArrowLeftSLine  />
                </div>
              </div>

              <div
                ref={nextRef}
                className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition">
                  <RiArrowRightSLine />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schilderijen */}
        <div className="max-w-7xl mx-auto mt-3 bg-banana text-left p-4 pl-10 rounded-lg">
          <div className={styles.header}>
            <h1 className="pt-3 pb-3 tracking-tight text-balance text-6xl text-peach">
              Schilderijen
            </h1>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
