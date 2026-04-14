import FadeIn from "@/components/FadeIn";
import { MessageCircle } from "lucide-react";

export default function RSVP() {
  return (
    <FadeIn>
          <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] flex flex-col">
      <div className="w-full font-bold text-4xl text-center mt-10">RSVP</div>
      <div className="w-full items-center text-[#D4AF37] justify-center flex flex-col">
        <svg
          width="250"
          height="70"
          viewBox="0 0 900 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {/* <!-- base tiara sweep --> */}
            <path d="M90 190 C180 178, 250 148, 330 116 C375 98, 414 88, 450 88 C486 88, 525 98, 570 116 C650 148, 720 178, 810 190" />

            {/* <!-- secondary base --> */}
            <path d="M120 198 C205 184, 282 154, 350 128 C390 112, 420 106, 450 106 C480 106, 510 112, 550 128 C618 154, 695 184, 780 198" />

            {/* <!-- center jewel flower --> */}
            <circle cx="450" cy="78" r="10" />
            <path d="M450 40 C458 54, 458 68, 450 78 C442 68, 442 54, 450 40Z" />
            <path d="M488 78 C474 86, 460 86, 450 78 C460 70, 474 70, 488 78Z" />
            <path d="M450 116 C442 102, 442 88, 450 78 C458 88, 458 102, 450 116Z" />
            <path d="M412 78 C426 70, 440 70, 450 78 C440 86, 426 86, 412 78Z" />
            <path d="M477 51 C476 66, 468 75, 450 78 C453 61, 462 53, 477 51Z" />
            <path d="M423 51 C438 53, 447 61, 450 78 C432 75, 424 66, 423 51Z" />

            {/* <!-- center crown peak --> */}
            <path d="M450 106 C450 83, 450 59, 450 34" />
            <path d="M440 43 L450 34 L460 43" />

            {/* <!-- inner left flourish --> */}
            <path d="M370 132 C355 116, 345 100, 348 83 C351 67, 367 59, 380 65 C393 71, 397 88, 389 99 C381 109, 366 110, 356 102" />
            <path d="M328 150 C311 139, 300 125, 302 109 C304 96, 316 88, 327 92 C338 96, 344 108, 339 118 C334 128, 321 131, 311 126" />

            {/* <!-- inner right flourish --> */}
            <path d="M530 132 C545 116, 555 100, 552 83 C549 67, 533 59, 520 65 C507 71, 503 88, 511 99 C519 109, 534 110, 544 102" />
            <path d="M572 150 C589 139, 600 125, 598 109 C596 96, 584 88, 573 92 C562 96, 556 108, 561 118 C566 128, 579 131, 589 126" />

            {/* <!-- left leaf cluster --> */}
            <path d="M286 149 C298 132, 314 123, 334 121 C323 138, 307 147, 286 149Z" />
            <path d="M260 164 C271 148, 286 140, 304 140 C294 155, 280 164, 260 164Z" />
            <path d="M238 177 C248 163, 260 156, 276 157 C267 170, 255 177, 238 177Z" />

            {/* <!-- right leaf cluster --> */}
            <path d="M614 149 C602 132, 586 123, 566 121 C577 138, 593 147, 614 149Z" />
            <path d="M640 164 C629 148, 614 140, 596 140 C606 155, 620 164, 640 164Z" />
            <path d="M662 177 C652 163, 640 156, 624 157 C633 170, 645 177, 662 177Z" />

            {/* <!-- outer rose buds --> */}
            <g>
              <circle cx="210" cy="173" r="7" />
              <path d="M210 154 C218 160, 219 168, 210 173 C201 168, 202 160, 210 154Z" />
              <path d="M226 173 C220 178, 214 178, 210 173 C214 168, 220 168, 226 173Z" />
              <path d="M210 192 C202 186, 201 178, 210 173 C219 178, 218 186, 210 192Z" />
              <path d="M194 173 C200 168, 206 168, 210 173 C206 178, 200 178, 194 173Z" />
            </g>

            <g>
              <circle cx="690" cy="173" r="7" />
              <path d="M690 154 C698 160, 699 168, 690 173 C681 168, 682 160, 690 154Z" />
              <path d="M706 173 C700 178, 694 178, 690 173 C694 168, 700 168, 706 173Z" />
              <path d="M690 192 C682 186, 681 178, 690 173 C699 178, 698 186, 690 192Z" />
              <path d="M674 173 C680 168, 686 168, 690 173 C686 178, 680 178, 674 173Z" />
            </g>

            {/* <!-- intermediate floral accents --> */}
            <g>
              <circle cx="315" cy="134" r="5.5" />
              <path d="M315 118 C321 123, 321 129, 315 134 C309 129, 309 123, 315 118Z" />
              <path d="M327 134 C323 138, 319 138, 315 134 C319 130, 323 130, 327 134Z" />
              <path d="M315 146 C309 141, 309 135, 315 134 C321 135, 321 141, 315 146Z" />
              <path d="M303 134 C307 130, 311 130, 315 134 C311 138, 307 138, 303 134Z" />
            </g>

            <g>
              <circle cx="585" cy="134" r="5.5" />
              <path d="M585 118 C591 123, 591 129, 585 134 C579 129, 579 123, 585 118Z" />
              <path d="M597 134 C593 138, 589 138, 585 134 C589 130, 593 130, 597 134Z" />
              <path d="M585 146 C579 141, 579 135, 585 134 C591 135, 591 141, 585 146Z" />
              <path d="M573 134 C577 130, 581 130, 585 134 C581 138, 577 138, 573 134Z" />
            </g>

            {/* <!-- hanging jewel drops --> */}
            <path d="M390 121 C390 137, 385 149, 378 156" />
            <circle cx="376" cy="160" r="4" />

            <path d="M510 121 C510 137, 515 149, 522 156" />
            <circle cx="524" cy="160" r="4" />

            <path d="M450 116 C450 138, 450 153, 450 166" />
            <path d="M442 174 L450 182 L458 174" />
            <circle cx="450" cy="188" r="4.5" />

            {/* <!-- outer trailing vines --> */}
            <path d="M175 181 C158 179, 143 172, 132 160 C121 148, 120 134, 130 128 C141 122, 154 128, 157 140 C160 150, 153 158, 144 160" />
            <path d="M725 181 C742 179, 757 172, 768 160 C779 148, 780 134, 770 128 C759 122, 746 128, 743 140 C740 150, 747 158, 756 160" />
          </g>
        </svg>
      </div>
      <div className="w-full text-center">
        we can't wait to celebrate with you!
      </div>

      <div className="flex-1 flex justify-center items-center text-center">
        <div className="flex-col">
          <div className="text-3xl font-bold mb-6">GET IN TOUCH</div>
          <div>John Doe</div>
          <div className="flex items-center gap-2 justify-center">
            <MessageCircle />
            +2341234567890
          </div>
        </div>
      </div>
    </div>
    </FadeIn>

  );
}
