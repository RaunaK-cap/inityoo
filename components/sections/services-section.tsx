"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  image?: string;
};

const services: Service[] = [
  {
    title: "Web Development",
    description: "Scalable modern websites built.",
    image: "/webdev2.jpg",
  },
  {
    title: "Mobile Apps",
    description: "Native seamless user experiences.",
    image: "mobileapp2.jpg",
  },
  {
    title: "App Revamps",
    description: "Modernize optimize digital assets.",
    image:
      "https://cdn.dribbble.com/userupload/15482034/file/original-d5820530309ce0b00a6fded7d80feae7.png?resize=1600x1200&vertical=center",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive designs users love.",
    image:
      "https://cdn.dribbble.com/userupload/17402714/file/original-6d32be8a63486860f02b167daecc967e.png?resize=2048x1536&vertical=center",
  },
  {
    title: "SEO Services",
    description: "Comprehensive ranking growth strategies.",
    image: "/SEO.jpg",
  },
  {
    title: "AI Automation",
    description: "Streamline workflows boost productivity.",
    image: "/Automation.jpg",
  },
  {
    title: "AI Integration",
    description: "Cutting-edge features integrated.",
    image: "/AI_integration4.jpg",
  },
  {
    title: "Scaling Infrastructure",
    description: "Scaling production grade infrastructure for Apps & website ",
    image: "/Scaling.jpg",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-60, 60], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="h-full w-full" style={{ perspective: 1000 }}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative flex flex-col rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden backdrop-blur-sm h-[420px]"
      >
        <div className="relative  h-full w-full m-1 rounded-xl overflow-hidden">
          <Image
            src={service.image ?? "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover  group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="absolute inset-0 p-5 z-20 flex flex-col justify-between">
          <div className="flex justify-end ">
            <ArrowUpRight className="w-8 h-10  text-2xl text-white/70 opacity-70" />
          </div>
          <div className="space-y-2">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3">
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function HorizontalScroll() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const interval = setInterval(() => {
      const cardWidth = container.firstElementChild?.clientWidth ?? 300;

      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 20
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={ref}
        className="
          flex gap-8 px-6 overflow-x-auto hide-scrollbar 
          snap-x snap-mandatory cursor-grab active:cursor-grabbing
        "
        style={{ scrollBehavior: "smooth" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="snap-start shrink-0 w-[260px] md:w-[300px]"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServicesVideos() {
  const videos = [
    {
      id: 1,
      src: "https://cdn.dribbble.com/userupload/15482036/file/original-5575c9ed3096256d12836d1181c688a5.mp4",
      title: "App Revamps",
    },
    {
      id: 2,
      src: "https://cdn.dribbble.com/userupload/45147949/file/d845c4804cb73ce480f70090070fd667.mp4",
      title: "AI + Automation ",
    },
    {
      id: 3,
      src: "https://cdn.dribbble.com/userupload/16879772/file/original-4ffd0024c47dac27f7c6e01ab93222d3.mp4",
      title: "App Development ",
    },
  ];

  return (
    <section className="py-5 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center md:text-left text-xl md:text-xl [font-family:var(--font-pixel)] tracking-tight mb-10">
          How Our <span className="text-yellow-400">Services Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
          <div className="relative group md:col-span-1 rounded-2xl overflow-hidden bg-white/5 border border-white/10 h-[380px] md:h-[520px]">
            <video
              src={videos[0].src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-[0.55]"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-2xl md:text-sm font-bold text-white drop-shadow-lg">
                {videos[0].title}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 w-full gap-5">
            <div className="relative group rounded-xl overflow-hidden bg-white/5 border border-white/10 h-[260px] md:h-[520px]">
              <video
                src={videos[1].src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-[0.55]"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xl md:text-sm font-semibold text-white drop-shadow-lg">
                  {videos[1].title}
                </p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden bg-white/5 border border-white/10 h-[260px] md:h-[520px]">
              <video
                src={videos[2].src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-[0.55]"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xl md:text-sm font-semibold text-white drop-shadow-lg">
                  {videos[2].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStack() {
  return (
    <div className="md:hidden flex flex-col gap-8 px-6 py-8">
      {services.map((service, index) => (
        <div key={index} className="w-full max-w-[400px] mx-auto">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-56">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-4xl tracking-tighter [font-family:var(--font-pixel)]">
            Digital <span className="text-yellow-400 ">Solutions</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl space-y-2 leading-relaxed">
            Comprehensive digital services engineered for performance.
          </p>
        </div>
        <div className="hidden md:block">
          <HorizontalScroll />
        </div>
        <MobileStack />
        <ServicesVideos />
      </div>
    </section>
  );
}
