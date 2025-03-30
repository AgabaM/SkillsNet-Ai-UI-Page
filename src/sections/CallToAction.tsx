'use client'
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";
import Button from "@/components/Button";
import Orbit from "@/components/Orbit";
import underlineImage from '@/assets/images/underline.svg?url';
import Planet from "@/components/Planet";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const useMousePosition = () => {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);
  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);

  useMotionValueEvent(clientX, 'change', (latest) => {
      console.log('clientX', latest);
  });

  useEffect(() => {
      const handleResize = () => {
          setInnerWidth(window.innerWidth);
          setInnerHeight(window.innerHeight);
      };

      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
          clientX.set(e.clientX);
          clientY.set(e.clientY);
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { xProgress, yProgress, innerWidth, innerHeight };
};

export const CallToAction = () => {

   const { xProgress, yProgress, innerWidth, innerHeight } = useMousePosition();
  
      const sectionRef = useRef(null);
      useScroll({
          target: sectionRef,
          offset: ['end start', 'start end'],
      });
  

      const springX = useSpring(xProgress);
      const springY = useSpring(yProgress);
  
      // Calculate numeric pixel values
      const translateLargeXValue = useTransform(springX, [0, 1], [-0.01 * innerWidth, 0.01 * innerWidth]);
      const translateLargeYValue = useTransform(springY, [0, 1], [-0.01 * innerHeight, 0.01 * innerHeight]);
      const translateMediumXValue = useTransform(springX, [0, 1], [-0.02 * innerWidth, 0.02 * innerWidth]);
      const translateMediumYValue = useTransform(springY, [0, 1], [-0.02 * innerHeight, 0.02 * innerHeight]);
      const translateSmallXValue = useTransform(springX, [0, 1], [-0.03 * innerWidth, 0.03 * innerWidth]);
      const translateSmallYValue = useTransform(springY, [0, 1], [-0.03 * innerHeight, 0.03 * innerHeight]);
  return(
   <section id="CallToAction" className="">
    <div className="container">
     <SectionBorder borderTop>
      <SectionContent className="relative isolate">
      {
      <div>
        <div className='absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-950)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]'></div>
          <div className='absolute inset-0 -z-10'>
            <Orbit className='size-[200px] absolute-center' />
            <Orbit className='size-[350px] absolute-center' />
            <Orbit className='size-[500px] absolute-center' />
            <Orbit className='size-[650px] absolute-center' />
            <Orbit className='size-[800px] absolute-center' />
          </div> 
      </div>}

      <div className="absolute-center -z-10">

        {/**planets */}
        <motion.div style={{ x: translateMediumXValue, y: translateMediumYValue }}>
      <Planet 
      size="md"
      color="fuchsia" 
            className='translate-x-[250px] -translate-y-[40px] -rotate-135'
      />
      </motion.div>
      
      <motion.div style={{ x: translateLargeXValue, y: translateLargeYValue }}>
      <Planet 
      size="lg"
      color="teal" 
      className='-translate-x-[250px] translate-y-[280px] rotate-45'
      />
       </motion.div>


     <motion.div style={{ x: translateLargeXValue, y: translateLargeYValue }}>
      <Planet 
      size="lg"
      color="violet" 
      className='-translate-x-[200px] -translate-y-[90px] rotate-135'
      />
       </motion.div>
 
     <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
     <Planet 
      size="xxs"
      color="violet" 
      className='-translate-x-[10px] -translate-y-[120px] -rotate-180'
      />
       </motion.div>

      <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
      <Planet 
      size="sm"
      color="yellow" 
      className='-translate-x-[500px] translate-y-[50px] rotate-90'
      />
       </motion.div>

      <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
      <Planet 
      size="sm"
      color="Stone" 
      className='-translate-x-[400px] -translate-y-[200px] rotate-135'
      />
       </motion.div>


       <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
      <Planet 
      size="xxs"
      color="Stone" 
      className='-translate-x-[450px] -translate-y-[-180px] rotate-45'
      />
       </motion.div>

      <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
      <Planet 
      size="xxs"
      color="fuchsia" 
      className='-translate-x-[250px] -translate-y-[-200px] rotate-45'
      />
       </motion.div>

      <motion.div style={{ x: translateLargeXValue, y: translateLargeYValue }}>
      <Planet 
      size="lg"
      color="yellow" 
      className='-translate-x-[40px] -translate-y-[-170px] rotate-0'
      />
       </motion.div>

      <motion.div style={{ x: translateMediumXValue, y: translateMediumYValue }}>
      <Planet 
      size="md"
      color="pink" 
      className='translate-x-[500px] -translate-y-[100px] -rotate-90'
       />
        </motion.div>

      <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
      <Planet 
      size="sm"
      color="violet" 
      className='translate-x-[200px] -translate-y-[-100px] -rotate-45'
       />
        </motion.div>

      <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
      <Planet 
      size="xs"
      color="fuchsia" 
      className='translate-x-[400px] -translate-y-[-00px] -rotate-45'
       />
        </motion.div>

       <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
      <Planet 
      size="xs"
      color="orange" 
      className='translate-x-[450px] -translate-y-[360px] -rotate-135'
      />
       </motion.div>

      <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
      <Planet 
      size="xs"
      color="yellow" 
      className='translate-x-[200px] -translate-y-[230px] -rotate-135'
      />
       </motion.div>

<     motion.div style={{ x: translateLargeXValue, y: translateLargeYValue }}>
      <Planet 
      size="lg"
      color="fuchsia" 
      className='-translate-x-[175px] -translate-y-[240px] rotate-135'
      />
       </motion.div>

     
      </div>
          <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center leading-tight">Join this AI Revolution with <br></br>
          <span className='relative'>
       <span> SkillsNet</span>
         <span className='absolute w-full left-0  top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]'
        style={{
          maskImage: `url(${underlineImage.src})`,
          maskSize: 'contain',
          maskPosition: 'center',
          maskRepeat: 'no-repeat',
        }}
        ></span>
         </span>
            </h2>
          <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
            Experience the transformative power of AI with SkilsNet. Boost your 
            productivity and streanline your workflow with our innovative AI
            chat platform.
          </p>
          <div className="flex justify-center mt-10">
          <Button variants="secondary">Get Started</Button>
          </div>
      </SectionContent>
     </SectionBorder>
    </div>
    </section>
  )
};

export default CallToAction;
