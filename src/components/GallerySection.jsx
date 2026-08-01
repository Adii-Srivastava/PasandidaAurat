import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import nirjhara1 from "../assets/Nirjhara1.jpeg";
import nirjhara2 from "../assets/Nirjhara2.jpeg";
import nirjhara3 from "../assets/Nirjhara3.jpeg";
import nirjhara4 from "../assets/Nirjhara4.jpeg";
import nirjhara5 from "../assets/Nirjhara5.jpeg";
import nirjhara6 from "../assets/Nirjhara6.jpeg";
import nirjhara7 from "../assets/Nirjhara7.jpeg";
import nirjhara8 from "../assets/Nirjhara8.jpeg";

const pictures = [
  { image: nirjhara1, caption: "this is the face I think about all day." },
  { image: nirjhara2, caption: "the sun looks at you the way I do." },
  { image: nirjhara3, caption: "every little moment with you feels like magic." },
  { image: nirjhara4, caption: "Brown suits you. everything suits you, actually." },
  { image: nirjhara5, caption: "my favourite view will always be you." },
  { image: nirjhara6, caption: "you make ordinary days feel beautiful." },
  { image: nirjhara7, caption: "a little piece of my heart, in every picture." },
  { image: nirjhara8, caption: "forever collecting moments with my favourite girl." },
];

export default function GallerySection({ onNext }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("next");

  const move = (nextIndex) => {
    setDirection(nextIndex > active || (active === pictures.length - 1 && nextIndex === 0) ? "next" : "previous");
    setActive(nextIndex);
  };

  const previous = () => move((active - 1 + pictures.length) % pictures.length);
  const next = () => move((active + 1) % pictures.length);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const imageNumber = String(active + 1).padStart(2, "0");
  const total = String(pictures.length).padStart(2, "0");

  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#efe7ff] px-5 py-10 sm:px-8 sm:py-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f3e8ff_0%,#eee5ff_53%,#dfe4ff_100%)]" />
      <div className="dot-bg absolute inset-0 opacity-70" />

      <div className="relative z-10 flex w-full max-w-[430px] flex-col items-center text-center">
        <p className="script-font text-[24px] leading-none text-[#79657b] sm:text-[28px]">my favourite pictures of you</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-[0_8px_18px_rgba(117,80,142,0.10)]">
          <span className="text-[11px] text-[#ef96bd]">♥</span>
          <span className="text-[10px] font-semibold uppercase tracking-[2.2px] text-[#927a9b]">my favourite girl</span>
        </div>

        <h2 className="heading-font mt-5 text-[39px] font-bold leading-[0.88] tracking-[-0.035em] text-[#211525] sm:mt-6 sm:text-[48px]">
          every version of you,<br />my favourite
        </h2>
        <p className="mt-3 text-[12px] text-[#796d82] sm:text-[13px]">every picture reminds me how lucky I am ♡</p>

        <div className="relative mt-7 w-[min(100%,320px)] sm:mt-8 sm:w-[340px]">
          <span className="absolute -left-2 -top-2 z-20 text-[22px] sm:-left-3 sm:text-[25px]">🌸</span>
          <span className="absolute -right-3 -top-5 z-20 text-[22px] sm:-right-5">🌷</span>
          <div className="absolute left-1/2 top-[-7px] z-20 h-[19px] w-[62px] -translate-x-1/2 rotate-[-2deg] rounded-sm bg-[repeating-linear-gradient(135deg,#e4d7ff_0_5px,#faf7ff_5px_10px)] opacity-95" />

          <button type="button" aria-label="Previous picture" onClick={previous} className="absolute left-[-14px] top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[10px] text-[#907b9b] shadow-[0_6px_13px_rgba(96,68,120,0.14)] transition hover:scale-105 active:scale-95 sm:left-[-18px] sm:h-10 sm:w-10">
            <FaArrowLeft />
          </button>
          <button type="button" aria-label="Next picture" onClick={next} className="absolute right-[-14px] top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[10px] text-[#907b9b] shadow-[0_6px_13px_rgba(96,68,120,0.14)] transition hover:scale-105 active:scale-95 sm:right-[-18px] sm:h-10 sm:w-10">
            <FaArrowRight />
          </button>

          <div className="rounded-[23px] bg-white p-5 pb-4 shadow-[0_18px_30px_rgba(112,81,145,0.19)] sm:rounded-[25px] sm:p-6 sm:pb-4">
            <div className="relative aspect-[0.82] w-full overflow-hidden bg-[#f6eff1]">
              <img
                key={active}
                src={pictures[active].image}
                alt={`Nirjhara ${active + 1}`}
                className={`h-full w-full object-cover ${direction === "next" ? "animate-[galleryIn_350ms_ease-out]" : "animate-[galleryBack_350ms_ease-out]"}`}
              />
            </div>
            <p className="mt-4 text-[10px] font-bold tracking-[3px] text-[#9a88a4]">{imageNumber} / {total}</p>
            <p className="script-font mt-1.5 min-h-[40px] px-1 text-[20px] leading-[1.05] text-[#79647d] sm:text-[22px]">{pictures[active].caption}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 sm:mt-6">
          {pictures.map((picture, index) => (
            <button key={picture.image} type="button" aria-label={`Show picture ${index + 1}`} aria-current={index === active ? "true" : undefined} onClick={() => move(index)} className={`h-10 w-9 overflow-hidden rounded-[11px] border-2 bg-white p-0.5 shadow-sm transition sm:h-11 sm:w-10 ${index === active ? "scale-110 border-[#b683e3]" : "border-white/80 opacity-75 hover:opacity-100"}`}>
              <img src={picture.image} alt="" className="h-full w-full rounded-[7px] object-cover" />
            </button>
          ))}
        </div>

        <div className="mt-7 sm:mt-8">
          <p className="text-[9px] font-medium uppercase tracking-[3px] text-[#a08ca8]">up next ↓</p>
          <p className="script-font mt-2 text-[22px] leading-tight text-[#79647d] sm:text-[25px]">next — a letter I wrote for you →</p>
        </div>
        <button type="button" onClick={onNext ?? next} className="mt-4 w-full rounded-full bg-[linear-gradient(90deg,#9053db_0%,#d05bc3_100%)] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.3px] text-white shadow-[0_11px_22px_rgba(148,73,194,0.24)] transition hover:scale-[1.02] active:scale-[0.98] sm:mt-5">
          Read My Letter
        </button>
      </div>
    </section>
  );
}
