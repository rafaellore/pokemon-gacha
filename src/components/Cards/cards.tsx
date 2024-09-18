'use client'

import { useState } from 'react';
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';

import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { PokemonCard } from "@/actions/get-cards";
import { HoloCard } from '../TestingHolo/TestingHolo';
import { motion } from 'framer-motion';
import './cards.css';


export default function Cards({ cards }: { cards: PokemonCard[] }) {
  const [showSwiper, setShowSwiper] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    setAnimationTriggered(true);
    setTimeout(() => {
      setShowSwiper(true);
    }, 500);
  };

  const handleSlideChange = (swiper: any) => {
    if (swiper.activeIndex === swiper.slides.length - 1) {
      setShowButton(true);
    };
  }

  const goBack = () => {
    window.history.back();
  };

  const reloadPage = () => {
    window.location.reload()
  };

  return (
    <div className={"relative w-[440px] h-[474px] margin-auto"}>
      {!showSwiper && (
        <Tooltip title="Click to open" placement="top">
          <motion.div
            className="absolute top-0 left-0 w-[440px] h-[474px] flex items-center justify-center cursor-pointer shadow-lg mt-10"
            onClick={handleClick}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: animationTriggered ? 0 : 1, scale: animationTriggered ? 1.7 : 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image alt="Booster Pack" src="/assets/pokemon-booster.png" width={440} height={474} />
          </motion.div>
        </Tooltip>
      )}

      {showSwiper && (
        <>
          <Swiper
            effect={'cards'}
            modules={[EffectCards]}
            grabCursor={true}
            className="!shadow-none"
            onSlideChange={handleSlideChange}
          >
            {cards.map((card) => {
              const regex = /\bRare\b/;
              const IsRare = regex.test(card.rarity);

              return (
                <SwiperSlide key={card.id} className='rounded-2xl !w-[440px] p-[28px]'>
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
                      placeholder='blur'
                    />
                  </HoloCard>
                </SwiperSlide>)
            })}
          </Swiper>
        </>
      )}

      {showButton && (
        <div className="w-full flex gap-4">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={goBack}
          >
            <ArrowBackIcon />
          </Button>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={reloadPage}
          >
            <RotateLeftIcon />
          </Button>
        </div>
      )}
    </div>
  );
}
