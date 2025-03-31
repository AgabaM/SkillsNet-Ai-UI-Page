'use client';
import React from "react";
import robotImg from '@/assets/images/robot.jpg';
import underlineImage from '@/assets/images/underline.svg?url';
import Loader from '@/assets/images/loader-animated.svg';
import Image from 'next/image';
import Button from '@/components/Button';
import Orbit from '@/components/Orbit';
import Planet from '@/components/Planet';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
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
        const handleMouseMove = (e: MouseEvent): void => {
            clientX.set(e.clientX);
            clientY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);

         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clientX, clientY]);

    return { xProgress, yProgress, innerWidth, innerHeight };
};

const Hero = () => {
    const { xProgress, yProgress, innerWidth, innerHeight } = useMousePosition();

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['end start', 'start end'],
    });

    const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const springX = useSpring(xProgress);
    const springY = useSpring(yProgress);

    // Calculate numeric pixel values
    const translateLargeXValue = useTransform(springX, [0, 1], [-0.01 * innerWidth, 0.01 * innerWidth]);
    const translateLargeYValue = useTransform(springY, [0, 1], [-0.01 * innerHeight, 0.01 * innerHeight]);
    const translateMediumXValue = useTransform(springX, [0, 1], [-0.02 * innerWidth, 0.02 * innerWidth]);
    const translateMediumYValue = useTransform(springY, [0, 1], [-0.02 * innerHeight, 0.02 * innerHeight]);
    const translateSmallXValue = useTransform(springX, [0, 1], [-0.03 * innerWidth, 0.03 * innerWidth]);
    const translateSmallYValue = useTransform(springY, [0, 1], [-0.03 * innerHeight, 0.03 * innerHeight]);

    return (
        <section id="Hero" ref={sectionRef}>
            <div className="container">
                <SectionBorder>
                    <SectionContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_90%,transparent)]">
                        <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-950)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute-center">
                                <Orbit className="size-[350px]" />
                            </div>
                            <div className="absolute-center">
                                <Orbit className="size-[600px]" />
                            </div>
                            <div className="absolute-center">
                                <Orbit className="size-[850px]" />
                            </div>
                            <div className="absolute-center">
                                <Orbit className="size-[1100px]" />
                            </div>
                            <div className="absolute-center">
                                <Orbit className="size-[1350px]" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
                            Unlock the future of AI Conversations with
                            <span className="relative">
                                <span>SkillsNet</span>
                                <span
                                    className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                                    style={{
                                        maskImage: `url(${underlineImage.src})`,
                                        maskSize: 'contain',
                                        maskPosition: 'center',
                                        maskRepeat: 'no-repeat',
                                    }}
                                ></span>
                            </span>
                        </h1>
                        <p className="text-center text-xl md:text-xl lg:text-2xl mt-8 md:mx-16 lg:mx-40">
                            Harness the power of AI with SkillsNet. Elevate your productivity and streamline your workflow with our cutting-edge AI Chat
                        </p>
                        <div className="flex justify-center">
                            <Button variants="secondary" className="mt-10">
                                Start Chatting...
                            </Button>
                        </div>
                        <div className="relative isolate max-w-5xl mx-auto">
                            <div className="absolute left-1/2 top-0 -z-10">
                                <motion.div style={{ x: translateMediumXValue, y: translateMediumYValue }}>
                                    <Planet size="md" color="fuchsia"   className='-translate-x-[450px] -translate-y-[76px] rotate-135 '/>
                                </motion.div>
                                <motion.div style={{ x: translateLargeXValue, y: translateLargeYValue }}>
                                    <Planet size="lg" color="teal"  className='-translate-x-[200px] -translate-y-[96px] rotate-135 '/>
                                </motion.div>
                                <motion.div style={{ x: translateLargeXValue, y: translateLargeYValue }}>
                                    <Planet size="lg" color="violet"  className='-translate-x-[-270px] -translate-y-[150px] -rotate-135'/>
                                </motion.div>
                                <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
                                    <Planet size="sm" color="yellow"       className='-translate-y-[500px] -translate-x-[430px] rotate-135 '/>
                                </motion.div>
                                <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
                                    <Planet size="md" color="pink"       className='-translate-y-[600px] -translate-x-[240px] rotate-180'/>
                                </motion.div>
                                <motion.div style={{ x: translateMediumXValue, y: translateMediumYValue }}>
                                    <Planet size="md" color="pink"  className='-translate-y-[342px] translate-x-[488px] -rotate-135 '/>
                                </motion.div>
                                <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
                                    <Planet size="sm" color="fuchsia"       className='translate-x-[350px] -translate-y-[650px] rotate-180 '/>
                                </motion.div>
                                <motion.div style={{ x: translateSmallXValue, y: translateSmallYValue }}>
                                    <Planet size="sm" color="yellow"  className='translate-x-[480px] -translate-y-[640px] -rotate-135 '/>
                                </motion.div>
                            </div>
                            <div className="absolute top-0 left-0 z-10 top-[30%] -translate-x-10 hidden lg:block">
                                <motion.div
                                    className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                                    style={{ y: transformedY }}
                                >
                                    <div>Can you generate an incredible frontend dev video tutorial?</div>
                                    <div className="text-right text-gray-400 text-sm font-semibold">1m ago</div>
                                </motion.div>
                            </div>
                            <div className="absolute top-0 right-0 z-10 top-[50%] translate-x-10 hidden lg:block">
                                <motion.div
                                    className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                                    style={{ y: transformedY }}
                                >
                                    <div>
                                        <strong>Brainwave:</strong> I created one based on videos from Mosh Labs!
                                    </div>
                                    <div className="text-right text-gray-400 text-sm font-semibold">Just now</div>
                                </motion.div>
                            </div>
                            <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative flex">
                                {<Image src={robotImg} alt="Robot image" />}
                                <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xs sm-mx-2 px-4">
                                    <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                                        <Loader className="text-violet-400" />
                                        <div className="font-semibold text-xl text-gray-100">
                                            Ai is generating
                                            <span className="animate-cursor-blink"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionContent>
                </SectionBorder>
            </div>
        </section>
    );
};

export default Hero;