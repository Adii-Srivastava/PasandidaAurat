import { useCallback, useEffect, useRef, useState } from "react";

function ScratchCard() {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const drawingRef = useRef(false);
  const [revealed, setRevealed] = useState(false);

  const paintCover = useCallback(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;
    if (!canvas || !card) return;

    const rect = card.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * scale);
    canvas.height = Math.round(rect.height * scale);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const context = canvas.getContext("2d");
    context.setTransform(scale, 0, 0, scale, 0, 0);
    const gradient = context.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#d9b2ef");
    gradient.addColorStop(0.48, "#f1c6e6");
    gradient.addColorStop(1, "#f29db9");
    context.fillStyle = gradient;
    context.fillRect(0, 0, rect.width, rect.height);
    context.fillStyle = "rgba(255,255,255,.25)";
    for (let index = 0; index < 20; index += 1) {
      context.beginPath();
      context.arc(Math.random() * rect.width, Math.random() * rect.height, 1.1, 0, Math.PI * 2);
      context.fill();
    }
    setRevealed(false);
  }, []);

  useEffect(() => {
    paintCover();
    const observer = new ResizeObserver(paintCover);
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [paintCover]);

  const scratch = (event) => {
    if (!drawingRef.current || revealed) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const context = canvas.getContext("2d");
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 22, 0, Math.PI * 2);
    context.fill();
  };

  const finishScratch = () => {
    drawingRef.current = false;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    for (let index = 3; index < pixels.length; index += 64) {
      if (pixels[index] === 0) cleared += 1;
    }
    if (cleared / (pixels.length / 64) > 0.45) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      setRevealed(true);
    }
  };

  return (
    <div ref={cardRef} className="relative mt-7 h-[108px] w-full overflow-hidden rounded-[20px] shadow-[0_16px_24px_rgba(146,91,171,0.19)] sm:mt-8 sm:h-[118px]">
      <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(110deg,#f5e8ff_0%,#fffdfd_50%,#ffe7f0_100%)] px-5 text-center">
        <div className="rounded-full bg-white/80 px-6 py-4 shadow-[0_4px_10px_rgba(176,125,167,0.10)]">
          <p className="script-font text-[30px] leading-none text-[#8c648e] sm:text-[34px]">I love you, always <span className="not-italic text-[#ee75ad]">&#9829;</span></p>
        </div>
      </div>
      <canvas ref={canvasRef} aria-label="Scratch to reveal the secret message" onPointerDown={(event) => { drawingRef.current = true; event.currentTarget.setPointerCapture(event.pointerId); scratch(event); }} onPointerMove={scratch} onPointerUp={finishScratch} onPointerCancel={finishScratch} className={`absolute inset-0 touch-none cursor-crosshair transition-opacity duration-500 ${revealed ? "pointer-events-none opacity-0" : ""}`} />
      {!revealed && <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[2px] text-white/80">scratch here</span>}
    </div>
  );
}

export default function SecretSection() {
  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#efe7ff] px-5 py-10 sm:px-8 sm:py-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f3e8ff_0%,#eee5ff_53%,#dfe4ff_100%)]" />
      <div className="dot-bg absolute inset-0 opacity-70" />

      <div className="relative z-10 flex w-full max-w-[390px] flex-col items-center text-center">
        <p className="script-font text-[25px] leading-none text-[#79657b] sm:text-[29px]">just between us</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-[0_8px_18px_rgba(117,80,142,0.10)]">
          <span className="text-[11px] text-[#ef96bd]">&#9829;</span><span className="text-[10px] font-semibold uppercase tracking-[2.2px] text-[#927a9b]">a small secret</span>
        </div>
        <h1 className="heading-font mt-5 text-[42px] font-bold leading-[0.88] tracking-[-0.035em] text-[#211525] sm:mt-6 sm:text-[50px]">scratch this — softly</h1>
        <p className="mt-3 text-[12px] text-[#796d82] sm:text-[13px]">something I mean with my whole heart. use your finger.</p>

        <ScratchCard />
        <p className="script-font mt-5 text-[22px] leading-tight text-[#79647d] sm:mt-6 sm:text-[25px]">if you smiled — that was the whole point &#9825;</p>

        {/* <div className="mt-8 sm:mt-10">
          <p className="text-[9px] font-medium uppercase tracking-[3px] text-[#a08ca8]">one last thing &#10022;</p>
          <p className="script-font mt-2 text-[22px] leading-tight text-[#79647d] sm:text-[25px]">made with all my love &#9829;</p>
        </div>
        <button type="button" onClick={() => window.location.reload()} className="mt-4 w-full rounded-full bg-[linear-gradient(90deg,#9053db_0%,#d05bc3_100%)] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.3px] text-white shadow-[0_11px_22px_rgba(148,73,194,0.24)] transition hover:scale-[1.02] active:scale-[0.98] sm:mt-5">One last thing &#8594;</button> */}
      </div>
    </section>
  );
}
