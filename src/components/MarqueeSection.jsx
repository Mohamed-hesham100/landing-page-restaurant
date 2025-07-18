// import Marquee from "react-fast-marquee";

// const MarqueeSection = () => {
//   return (
//     <div className="w-full py-4 bg-black overflow-hidden border-y border-neutral-800">
//       <Marquee direction="left" speed={40} gradient={false}>
//         {[
//           "New York",
//           "London",
//           "Paris",
//           "Cairo",
//           "Dubai",
//           "Tokyo",
//           "Rome",
//           "Barcelona",
//           "Athens",
//         ].map((city, index) => (
//           <span
//             key={index}
//             className="mx-12 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8a6b45] via-[#d6bc98] to-[#9b784e] bg-clip-text text-transparent uppercase tracking-wide whitespace-nowrap"
//           >
//             {city}
//           </span>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default MarqueeSection;


import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const MarqueeSection = () => {
  const cities = [
    "New York",
    "London",
    "Paris",
    "Cairo",
    "Dubai",
    "Tokyo",
    "Rome",
    "Barcelona",
    "Athens",
  ];

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: (i) => (i % 2 === 0 ? -100 : 100), // يتحرك من أعلى أو أسفل حسب الترتيب
      x: (i) => (i % 3 === 0 ? -100 : 100), // يتحرك من اليمين أو اليسار حسب الترتيب
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full py-4 bg-black overflow-hidden border-y border-neutral-800">
      <Marquee direction="left" speed={40} gradient={false}>
        {cities.map((city, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
            className="mx-12 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8a6b45] via-[#d6bc98] to-[#9b784e] bg-clip-text text-transparent uppercase tracking-wide whitespace-nowrap"
          >
            {city}
          </motion.span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
