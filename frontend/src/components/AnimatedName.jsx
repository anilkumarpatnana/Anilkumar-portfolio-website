import { motion } from "framer-motion";

/**
 * AnimatedName — cascade-in on load + bright hover sweep across letters.
 * Letters split with framer-motion stagger; sweep uses a moving gradient mask.
 */
export default function AnimatedName() {
  const firstLine = "ANIL KUMAR";
  const secondLine = "PATNANA.";

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.045, delayChildren: 0.15 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 60, rotateX: -90 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const renderLetters = (str, className) =>
    Array.from(str).map((ch, i) => (
      <motion.span
        key={`${str}-${i}`}
        variants={letter}
        className={`inline-block ${className}`}
        style={{ transformOrigin: "50% 100%" }}
      >
        {ch === " " ? "\u00A0" : ch}
      </motion.span>
    ));

  return (
    <motion.h1
      data-testid="hero-name"
      variants={container}
      initial="hidden"
      animate="show"
      className="font-bold tracking-tighter leading-[0.85] mb-6 group select-none"
    >
      <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl relative">
        <span className="anim-name-row anim-name-row--solid">
          {renderLetters(firstLine, "text-[#F8FAFC]")}
        </span>
        {/* Sweep highlight layer (revealed on hover) */}
        <span aria-hidden="true" className="anim-name-sweep">
          {renderLetters(firstLine, "")}
        </span>
      </span>
      <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl relative">
        <span className="anim-name-row anim-name-row--gradient">
          {renderLetters(secondLine, "name-shimmer")}
        </span>
        <span aria-hidden="true" className="anim-name-sweep anim-name-sweep--bright">
          {renderLetters(secondLine, "")}
        </span>
      </span>
    </motion.h1>
  );
}
