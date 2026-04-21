"use client";

import { motion } from "framer-motion";

const purple = "#d483ff";
const red = "#ff6b6b";
const black = "#000000";

export default function NovlNestOutro() {
  return (
    <div className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-black p-6">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      <svg
        viewBox="0 0 1024 1024"
        className="h-[350px] w-[400px] overflow-visible"
        fill="none"
      >
        {/* closed book */}
        <motion.g
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.35, delay: 0.85 }}
        >
          <motion.path
            d="M300 640 Q512 590 724 640 L724 700 Q512 650 300 700 Z"
            fill={purple}
            style={{
              filter: "drop-shadow(0 0 14px rgba(212,131,255,0.25))",
            }}
          />
          <path
            d="M512 605 L512 715"
            stroke="#f5ddff"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.45"
          />
        </motion.g>



        {/* glow burst */}
        <motion.circle
          cx="512"
          cy="505"
          r="78"
          fill={purple}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0.3, 1.3, 1.7] }}
          transition={{ duration: 1, delay: 1.05, ease: "easeOut" }}
          style={{ filter: "blur(20px)" }}
        />

        {/* flower logo */}
        <motion.g
          initial={{ opacity: 0, scale: 0.72, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: -10 }}
          transition={{ duration: 0.75, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            filter: "drop-shadow(0 0 12px rgba(212,131,255,0.35))",
          }}
        >
          {/* top petal */}
          <motion.ellipse
            cx="512"
            cy="410"
            rx="78"
            ry="100"
            fill={purple}
            initial={{ scaleY: 0, originY: "100%" }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.45, delay: 1.35 }}
          />

          {/* left petal */}
                  <motion.ellipse
            cx="405"
            cy="470"
            rx="80"
            ry="110"
            fill={black}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.45, delay: 1.65 }}
          />
          <motion.ellipse
            cx="405"
            cy="470"
            rx="72"
            ry="100"
            fill={purple}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.45, delay: 1.45 }}
          />

          {/* right petal */}
                  <motion.ellipse
            cx="619"
            cy="470"
            rx="86"
            ry="110"
            fill={black}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.45, delay: 1.65 }}
          />

          <motion.ellipse
            cx="619"
            cy="470"
            rx="72"
            ry="100"
            fill={purple}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.45, delay: 1.55 }}
          />
          

          {/* front center petal */}
        <motion.ellipse
            cx="512"
            cy="525"
            rx="86"
            ry="110"
            fill={black}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.45, delay: 1.65 }}
          />

          <motion.ellipse
            cx="512"
            cy="525"
            rx="78"
            ry="100"
            fill={purple}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.45, delay: 1.65 }}
          />

                    <motion.path
            d="M498 646 L512 662 L526 646 L512 632 Z"
            fill={purple}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: 1.8 }}
          />

          {/* center split / shadow line feeling */}
          {/* <motion.path
            d="M512 380 Q570 390 605 455 Q620 485 620 560 Q620 610 590 645"
            stroke="black"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          />

          <motion.path
            d="M512 380 Q454 390 419 455 Q404 485 404 560 Q404 610 434 645"
            stroke="black"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          /> */}
        </motion.g>


                {/* opening pages - old fuller book shape */}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.7 }}
        >
          {/* bottom outer left */}
          <motion.path
            d="M23 558 L41 612 L101 607 L174 607 L261 613 L335 625 L382 637 L439 661 L481 689 L510 716 L481 672 L448 641 L413 617 L334 584 L267 568 L184 558 L103 555 L23 558 Z"
            fill={purple}
            initial={{ rotate: 0, originX: "50%", originY: "70%" }}
            animate={{ rotate: -4, x: -6 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* bottom outer right */}
          <motion.path
            d="M1005 559 L956 554 L840 556 L759 567 L681 588 L620 614 L583 638 L538 682 L517 716 L542 692 L588 661 L635 640 L677 628 L767 613 L852 607 L939 607 L1005 609 L1005 559 Z"
            fill={purple}
            initial={{ rotate: 0, originX: "50%", originY: "70%" }}
            animate={{ rotate: 4, x: 6 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* inner left */}
          <motion.path
            d="M125 458 L138 512 L197 518 L267 530 L305 539 L360 557 L419 584 L447 601 L472 622 L496 648 L481 619 L458 590 L421 556 L380 529 L317 501 L243 478 L182 464 L125 458 Z"
            fill={purple}
            initial={{ rotate: 0, originX: "50%", originY: "68%" }}
            animate={{ rotate: -8, x: -4 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* inner right */}
          <motion.path
            d="M902 456 L836 464 L773 479 L705 502 L647 529 L603 558 L573 585 L547 617 L529 651 L555 623 L586 598 L631 572 L659 560 L731 536 L769 527 L842 518 L890 518 L902 456 Z"
            fill={purple}
            initial={{ rotate: 0, originX: "50%", originY: "68%" }}
            animate={{ rotate: 8, x: 4 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.g>
      </svg>
      

    </div>
  );
}