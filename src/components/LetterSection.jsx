export default function LetterSection({ onNext }) {
  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#efe7ff] px-5 py-10 sm:px-8 sm:py-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f3e8ff_0%,#eee5ff_53%,#dfe4ff_100%)]" />
      <div className="dot-bg absolute inset-0 opacity-70" />

      <div className="relative z-10 flex w-full max-w-[390px] flex-col items-center text-center">
        <p className="script-font text-[25px] leading-none text-[#79657b] sm:text-[29px]">
          a letter for you
        </p>

        <article className="mt-3 w-full rounded-[23px] bg-[#fffafd] px-5 py-7 text-left shadow-[0_18px_30px_rgba(112,81,145,0.18)] sm:mt-4 sm:rounded-[25px] sm:px-6 sm:py-8">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[2.6px] text-[#97819c]">
            &#9825; a letter, just for you &#9825;
          </p>
          <h1 className="script-font mt-3 text-center text-[31px] leading-none text-[#84638d] sm:text-[35px]">
            my Pasandida Aurat,
          </h1>

          <div className="my-5 flex items-center gap-2 text-[#b49ab8]">
            <span className="text-[11px]">&#10047;</span>
            <div className="flex-1 border-t border-dashed border-[#cdb9cf]" />
            <span className="text-[11px]">&#10047;</span>
          </div>

          <div className="space-y-4 text-[13px] leading-[1.55] text-[#665b68] sm:text-[14px]">
            <p>
              Hieeeee💗 my pasandida aurat, Girlfriend day h aaj, tum meri
              Girlfriend nhi ho usase badh kr ho you are my only pasandida aurat
              in this world. Bchaaa aapko nh ptaa aap kya ho mere liyee , wo
              gaana haina " Jara kabhi meri nazar se khud ko dekh bhi " bs ye
              samajh jao tum. Tum ho to aisa lgta hai sab kuch mumkin hai , puri
              duniyaa jeet sakta hu. Kuch aaye kuch jaaye farak nh padta kyunki
              tum ho mere pass. Tumhe duniyaa ki wo saari khushiya dena chahta
              hu jiski haqdaar sirf aur sirf tum ho. Wo hasi wo muskurahat sab
              ka sab sirf aur sirf tumhare chehre pe dekhna chahta hu mai. Pta
              hai mujhe bchaa aapke bahut sapne hai , bahut kuch Krna h aapko
              life me apne liye and ghar waalo ke liye , mummy papa ka dekhbhaal
              krnaa hai , Babu ko achee se settle krnaa hai sab ptaa h mujhe and
              bhgwaan se YHI duaa mangta hu daily ki bhgwaan bahut mehnat kr rhi
              h wo usko kabhi haarne mat dena. Mai hu tumhare saath , tumhara
              har sapna mera bhi hai , mai wo har cheez tumko hasil krte hue
              dekhna chahta hu jiske sapna hai tumhe and tumse jaada mai khush
              hounga us time pe jab tum ye sab haasil krogi. And haa abhi etna
              kabil nh bnaa hu but mai kosis kr rha hu daily mai kaise tumhare
              kaabil banu. Aur ek din Mai jarur tumhare kaabil ban jaungaa.
            </p>
            {/* <div className="grid grid-cols-3 gap-2.5 py-0.5">
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-white text-[47px] shadow-[0_5px_13px_rgba(149,113,162,0.08)]">&#128054;</div>
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-white text-[44px] shadow-[0_5px_13px_rgba(149,113,162,0.08)]">&#128049;</div>
              <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-white shadow-[0_5px_13px_rgba(149,113,162,0.08)]"><span className="text-[35px] leading-none">&#128144;</span><span className="script-font -mt-0.5 text-center text-[11px] leading-none text-[#6d5a70]">I love you<br />the most</span></div>
            </div> */}
            {/* <p>thank you for being patient with me — for the late-night talks, the bad jokes I make you sit through, and the way you notice when I need a hug before I do.</p> */}
            <p>
              I hope today feels soft. I hope you feel a little bit of how much
              you&apos;re loved. and on the days I forget to say it out loud —
              please remember, I still choose you. every single time.
            </p>
          </div>

          <div className="mt-5 flex items-center gap-2 text-[#ef8eb7]">
            <span className="text-[12px]">&#9829;</span>
            <div className="flex-1 border-t border-dashed border-[#e6bad0]" />
          </div>
          <p className="script-font mt-5 text-[25px] leading-none text-[#8a678f]">
            yours, always.
          </p>
          <p className="mt-1 text-[9px] font-bold uppercase tracking-[2px] text-[#a68daa]">
            — Adityaaa
          </p>
        </article>

        <div className="mt-7 text-center sm:mt-8">
          <p className="text-[9px] font-medium uppercase tracking-[3px] text-[#a08ca8]">
            up next &#8595;
          </p>
          <p className="script-font mt-2 text-[22px] leading-tight text-[#79647d] sm:text-[25px]">
            next — one small secret &#8594;
          </p>
        </div>
        <button
          type="button"
          onClick={onNext}
          className="mt-4 w-full rounded-full bg-[linear-gradient(90deg,#9053db_0%,#d05bc3_100%)] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.3px] text-white shadow-[0_11px_22px_rgba(148,73,194,0.24)] transition hover:scale-[1.02] active:scale-[0.98] sm:mt-5"
        >
          One small secret &#8594;
        </button>
      </div>
    </section>
  );
}
