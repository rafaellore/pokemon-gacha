'use client'

import { useState } from 'react';
import { PokemonCard } from "@/actions/get-cards";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper/modules";
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';

import './cards.css';
import { HoloCard } from '../TestingHolo/TestingHolo';

export default function Cards({ cards }: { cards: PokemonCard[] }) {
  const [showSwiper, setShowSwiper] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleClick = () => {
    setAnimationTriggered(true);
    setTimeout(() => {
      setShowSwiper(true);
    }, 500);
  };



  return (
    <div className={"relative w-[420px] h-[474px]"}>
      {!showSwiper && (
        <Tooltip title="Click to open" placement="top">
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 cursor-pointer shadow-lg"
            onClick={handleClick}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: animationTriggered ? 0 : 1, scale: animationTriggered ? 1.7 : 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image alt="Booster Pack" src="/assets/pokemon-booster.png" width={420} height={474} />
          </motion.div>
        </Tooltip>
      )}

      {showSwiper && (
        <Swiper
          effect={'cards'}
          modules={[EffectCards]}
          grabCursor={true}
          className="!shadow-none"
        >
          {cards.map((card) => {
            console.log(card)

            const regex = /\bRare\b/;
            const str = "This is a Rare example.";
            const IsRare = regex.test(card.rarity)


            return (
              <SwiperSlide key={card.id} className='!shadow-none rounded-2xl w-[380px]'>
                <HoloCard
                  height={520}
                  width={380}
                  rarity={IsRare ? 'Rare' : card.rarity}
                  showSparkles={card.rarity === 'Common' ? false : true}
                >
                  <Image
                    src={card.images.large}
                    height={474}
                    width={380}
                    alt='card'
                    blurDataURL='/assets/pokemon-booster.png'
                  />
                </HoloCard>
              </SwiperSlide>)
          })}
        </Swiper>

      )}


    </div>
  );
}


