import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import letter from "../assets/Hero-letter.png";

export default function Hero({ onNext }) {
  const hero = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".badge", { y: -20, opacity: 0, duration: 0.7 });
      gsap.from(".title", { y: 32, opacity: 0, duration: 0.8, delay: 0.12 });
      gsap.from(".subtitle", { y: 28, opacity: 0, duration: 0.8, delay: 0.26 });
      gsap.from(".letter", { scale: 0.72, opacity: 0, duration: 0.9, ease: "back.out(1.5)", delay: 0.42 });
      gsap.to(".letter", { y: -10, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.2 });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={hero} className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#fff8fc] px-5 py-10 sm:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff8fc_0%,#fff5fb_50%,#f1ecff_100%)]" />
      <div className="dot-bg absolute inset-0" />
      <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-pink-200/35 blur-[100px]" />
      <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-violet-200/35 blur-[100px]" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <div className="badge rounded-full border border-pink-200 bg-white/80 px-4 py-2 shadow-[0_8px_20px_rgba(161,102,130,0.13)] backdrop-blur-md sm:px-5">
          <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#a76a83] sm:text-[11px] sm:tracking-[3px]">💗 Happy Girlfriend&apos;s Day</p>
        </div>
        <h1 className="title heading-font mt-6 text-[48px] font-bold leading-[0.9] tracking-[-0.04em] text-[#28151f] sm:text-[72px]">hi, my love <span className="text-pink-400">♡</span></h1>
        <p className="subtitle script-font mt-4 text-[27px] leading-[1.05] text-[#73616c] sm:mt-5 sm:text-[38px]">I made this so you&apos;ll always remember —<br />you are deeply loved.</p>
        <img src={letter} alt="A love letter" className="letter mt-4 w-[190px] select-none drop-shadow-[0_20px_40px_rgba(255,132,180,0.30)] sm:mt-5 sm:w-[280px]" />
        <button type="button" onClick={onNext} className="mt-4 rounded-full bg-[linear-gradient(90deg,#f28aae_0%,#ec779d_100%)] px-8 py-3 text-[12px] font-semibold text-white shadow-[0_10px_22px_rgba(228,108,153,0.28)] transition hover:scale-105 active:scale-95 sm:mt-5">Click Here 💌</button>
      </div>
    </section>
  );
}
