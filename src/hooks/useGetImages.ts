import { useEffect, useState } from "react";

export interface UrlParams {
  size: string,
  limit: number,
  type: string
};

const buildUrl = ({ size, limit, type }: UrlParams): string =>
  `https://api.thecatapi.com/v1/images/search?size=${size}&limit=${limit}&mime_types=${type}`;

const useGetImages = () => {
  const [images, setImages] = useState([]);

  const params: UrlParams = {
    size: "small",
    limit: 6,
    type: "gif",
  };

  const url = buildUrl(params);

  const fetchPics = async () => {
    await fetch(url)
      .then(data => data.json())
      .then(data => setImages(data));
  };

  useEffect(() => {
    fetchPics();
  }, []);

  return images;
};

export default useGetImages;