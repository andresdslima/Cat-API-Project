import { useEffect, useState } from "react";

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const useGetImages = () => {
  const [images, setImages] = useState([]);
  
  const buildUrl = () => {
    let url = new URL(BASE_URL);

    url.search = new URLSearchParams({
      size: 'small',
      limit: 5,
      mime_types: "gif",
    });

    return url;
  };

  const fetchPics = () => {
    fetch(buildUrl())
      .then(data => data.json())
      .then(data => setImages(data));
  };

  useEffect(() => {
    fetchPics();
  }, []);

  return images;
};

export default useGetImages;