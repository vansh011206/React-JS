import React, { useEffect, useState } from "react";

const ACCESS_KEY = "YOUR_UNSPLASH_API_KEY";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    const perPage = page * 10; // page 1 = 10, page 2 = 20, page 3 = 30

    try {
      const res = await fetch(
        `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&per_page=${perPage}`
      );
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Image Gallery</h1>

      {/* Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage(1)}>Page 1</button>
        <button onClick={() => setPage(2)}>Page 2</button>
        <button onClick={() => setPage(3)}>Page 3</button>
      </div>

      {/* Images */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {images.map((img) => (
          <img
            key={img.id}
            src={img.urls.small}
            alt="gallery"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;