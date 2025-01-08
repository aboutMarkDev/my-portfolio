import { motion, useAnimation } from "motion/react";

export const TypewritingEffect = ({
  text,
  className,
  filter = true,
  duration = 0.05,
}: {
  text: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const controls = useAnimation();
  const letters = text.split("");

  const typewritingVariants = {
    hidden: { opacity: 0, filter: filter ? "blur(10px)" : "none" },
    visible: (i: number) => ({
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
      transition: {
        delay: i * duration,
        duration: 0.3,
      },
    }),
  };

  return (
    <div className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={typewritingVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};
