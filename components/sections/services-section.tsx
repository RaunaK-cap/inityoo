"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  image?: string;
};

const services: Service[] = [
  {
    title: "AI Automation",
    description: "Streamline workflows boost productivity.",
    image: "/artificial-intelligence-neural-network-glowing-nod.jpg",
  },
  {
    title: "Web Development",
    description: "Scalable modern websites built.",
    image: "/modern-web-development-code-abstract-digital-inter.jpg",
  },
  {
    title: "Mobile Apps",
    description: "Native seamless user experiences.",
    image: "/mobile-app-interface-hologram-futuristic-smartphon.jpg",
  },
  {
    title: "AI Integration",
    description: "Cutting-edge features integrated.",
    image: "/ai-integration-energy-flow-digital-circuit-board-g.jpg",
  },
  {
    title: "CRM & ERP",
    description: "Custom enterprise systems tailored.",
    image: "/big-data-visualization-database-server-room-abstra.jpg",
  },
  {
    title: "App Revamps",
    description: "Modernize optimize digital assets.",
    image: "/digital-transformation-refresh-upgrade-abstract-te.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive designs users love.",
    image: "/ui-ux-design-abstract-shapes-colorful-gradients-mo.jpg",
  },
  {
    title: "SEO Services",
    description: "Comprehensive ranking growth strategies.",
    image: "/search-engine-optimization-magnifying-glass-digita.jpg",
  },
];

function ParallaxRow({
  items,
  direction,
  scrollYProgress,
}: {
  items: Service[];
  direction: "left" | "right";
  scrollYProgress: MotionValue<number>;
}) {
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["-30%", "30%"] : ["30%", "-30%"]
  );

  return (
    <div className="w-full overflow-hidden mb-8 hidden md:block">
      <motion.div
        style={{ x }}
        className={`flex gap-6 w-max px-4 ${
          direction === "right" ? "ml-auto" : ""
        }`}
      >
        {items.map((service, index) => (
          <div
            key={index}
            className="w-[260px] md:w-[300px] aspect-4/5 shrink-0"
          >
            <ServiceCard service={service} index={index} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function MobileParallaxStack({ items }: { items: Service[] }) {
  return (
    <div className="flex flex-col gap-8 md:hidden px-4 py-8">
      {items.map((service, index) => (
        <MobileParallaxItem key={index} service={service} index={index} />
      ))}
    </div>
  );
}

function MobileParallaxItem({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: itemProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const baseRange = index % 2 === 0 ? [30, -10] : [-30, 10];

  const y = useTransform(
    itemProgress,
    [0, 0.5, 1],
    [baseRange[0], 0, baseRange[1]]
  );
  const opacity = useTransform(
    itemProgress,
    [0, 0.25, 0.75, 1],
    [0.35, 1, 1, 0.45]
  );
  const scale = useTransform(itemProgress, [0, 0.5, 1], [0.985, 1, 0.99]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale, willChange: "transform, opacity" }}
      className="w-full aspect-4/5 max-w-[340px] mx-auto"
    >
      <div className="h-full w-full">
        <ServiceCardMobileInner service={service} />
      </div>
    </motion.div>
  );
}

function ServiceCardMobileInner({ service }: { service: Service }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-100, 100], [12, -12]);
  const rotateY = useTransform(mouseX, [-100, 100], [-12, 12]);

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
    <div className="h-full w-full" style={{ perspective: 900 }}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative flex flex-col h-full rounded-xl border border-white/8 bg-black/30 backdrop-blur-sm overflow-hidden transition-all duration-500"
      >
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={service.image ?? "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ opacity: 0.9 }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        </div>

        <div className="relative  flex flex-col p-4 z-20">
          <div className="flex justify-between items-start ">
            <div></div>
            <ArrowUpRight className="w-4 h-4 text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>

          <div className="mt-1.5 space-y-1">
            <h3 className="text-lg font-bold text-white">{service.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index?: number }) {
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
        className="group relative flex flex-col h-full rounded-xl bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden backdrop-blur-sm"
      >
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={service.image ?? "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover opacity-90 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-black/90" />
        </div>

        <div className="relative h-full flex flex-col p-5 z-20">
          <div className="flex justify-between items-start mb-auto">
            <div></div>
            <ArrowUpRight className="w-4 h-4 text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>

          <div className="mt-8 space-y-2">
            <h3 className="text-md font-bold text-white">{service.title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ServicesSection() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: mounted ? ref : undefined,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3, 6);
  const thirdRow = services.slice(6, 9);

  return (
    <section
      ref={ref}
      id="services"
      className="py-24 md:py-32 bg-black text-white "
    >
      <div className="container mx-auto px-6 md:px-60 relative z-10">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-4xl [font-family:var(--font-pixel)] tracking-tighter mb-4">
            Digital <span className="text-yellow-400">Solutions</span>
          </h2>
          <p className="text-md text-zinc-400 max-w-xl leading-relaxed">
            Comprehensive digital services engineered for performance.
          </p>
        </div>

        <div className="hidden md:flex flex-col gap-8 -mx-6 md:mx-14">
          <ParallaxRow
            items={firstRow}
            direction="left"
            scrollYProgress={scrollYProgress}
          />
          <ParallaxRow
            items={secondRow}
            direction="right"
            scrollYProgress={scrollYProgress}
          />
          <ParallaxRow
            items={thirdRow}
            direction="left"
            scrollYProgress={scrollYProgress}
          />
        </div>

        <MobileParallaxStack items={services} />
      </div>
    </section>
  );
}
