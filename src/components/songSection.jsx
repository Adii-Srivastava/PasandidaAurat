import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import song from "../assets/Kaise Mujhe.mp3";

const formatTime = (time) => {
  if (!Number.isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default function SongSection({ onNext }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggleSong = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f1e9ff] px-5 py-10 sm:px-8 sm:py-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4e8ff_0%,#eee6ff_52%,#dfe4ff_100%)]" />
      <div className="dot-bg absolute inset-0 opacity-70" />

      <div className="relative z-10 flex w-full max-w-[430px] flex-col items-center text-center">
        <p className="script-font text-[25px] leading-none text-[#79657b] sm:text-[29px]">our song</p>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-[0_8px_18px_rgba(117,80,142,0.10)]">
          <span className="text-[11px] text-[#ef96bd]">♥</span>
          <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#927a9b]">Press play</span>
        </div>

        <h2 className="heading-font mt-5 max-w-[410px] text-[38px] font-bold leading-[0.88] tracking-[-0.035em] text-[#211525] sm:mt-6 sm:text-[46px]">
          this song always brings<br className="hidden sm:block" /> me back to you
        </h2>

        <p className="mt-3 text-[12px] text-[#796d82] sm:text-[13px]">press play, close your eyes — I&apos;ll be there too.</p>

        <div className="mt-7 w-full rounded-[19px] bg-white/90 px-4 py-3.5 text-left shadow-[0_16px_28px_rgba(112,81,145,0.16)] sm:mt-8 sm:px-5">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffd9e8] text-[23px] shadow-inner">💌</div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[16px] font-bold leading-none text-[#332638]">Kaise Mujhe</h3>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[2px] text-[#9e8da6]">our song ♡</p>
            </div>
            <button
              type="button"
              aria-label={playing ? "Pause song" : "Play song"}
              onClick={toggleSong}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8052d6] pl-0.5 text-[12px] text-white shadow-[0_6px_12px_rgba(105,66,188,0.32)] transition hover:scale-105 active:scale-95"
            >
              {playing ? <FaPause /> : <FaPlay />}
            </button>
          </div>
          <div className="mt-3.5 h-[3px] overflow-hidden rounded-full bg-[#eee9f2]">
            <div className="h-full rounded-full bg-[#b690ea] transition-[width] duration-150" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-[#86788c]">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <p className="script-font mt-5 text-[22px] leading-tight text-[#7d6885] sm:mt-6 sm:text-[25px]">I&apos;ll be humming this until I see you again ♡</p>

        <div className="mt-7 sm:mt-8">
          <p className="text-[9px] font-medium uppercase tracking-[3px] text-[#a08ca8]">up next ↓</p>
          <p className="script-font mt-2 text-[22px] leading-tight text-[#79647d] sm:text-[25px]">next — a few of my favourite you →</p>
        </div>

        <button type="button" onClick={onNext} className="mt-4 w-full rounded-full bg-[linear-gradient(90deg,#9053db_0%,#d05bc3_100%)] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.3px] text-white shadow-[0_11px_22px_rgba(148,73,194,0.24)] transition hover:scale-[1.02] active:scale-[0.98] sm:mt-5">
          See your pictures →
        </button>
      </div>

      <audio ref={audioRef} src={song} onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)} onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)} onEnded={() => setPlaying(false)} />
    </section>
  );
}
