import { useState } from "react";
import Hero from "./components/Hero";
import SongSection from "./components/SongSection";
import GallerySection from "./components/GallerySection";
import LetterSection from "./components/LetterSection";
import SecretSection from "./components/SecretSection";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      {page === 1 && <Hero onNext={() => setPage(2)} />}

      {page === 2 && (
        <SongSection onNext={() => setPage(3)} />
      )}

      {page === 3 && <GallerySection onNext={() => setPage(4)} />}

      {page === 4 && <LetterSection onNext={() => setPage(5)} />}

      {page === 5 && <SecretSection />}
    </>
  );
}

export default App;
