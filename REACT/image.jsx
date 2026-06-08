import React, { useEffect, useState } from "react";

function Carousel({ images }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  function nextSlide() {

    setCurrentIndex((prevIndex) => {

      return prevIndex === images.length - 1
        ? 0
        : prevIndex + 1;
    });
  }

  function prevSlide() {

    setCurrentIndex((prevIndex) => {

      return prevIndex === 0
        ? images.length - 1
        : prevIndex - 1;
    });
  }

  useEffect(() => {

    if (isPaused) return;

    const interval = setInterval(() => {

      nextSlide();

    }, 3000);

    return () => clearInterval(interval);

  }, [isPaused]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        width: "500px",
        margin: "20px auto",
        textAlign: "center"
      }}
    >

      <img
        src={images[currentIndex]}
        alt="carousel"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover"
        }}
      />

      <div style={{ marginTop: "10px" }}>

        <button onClick={prevSlide}>
          Previous
        </button>

        <button
          onClick={nextSlide}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>

      </div>

    </div>
  );
}

function App() {

  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1020/600/300"
  ];

  return (
    <div>

      <h2 style={{ textAlign: "center" }}>
        Image Carousel
      </h2>

      <Carousel images={images} />

    </div>
  );
}

export default App;
