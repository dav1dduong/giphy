import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import { getGifById } from "../services/GiphyServices";
import "./Details.css";
import { useParams } from "react-router-dom";
import Result from "./Result";

const Details = () => {
  const [gif, setGif] = useState<Gif | null>(null);
  const idImLookingFor: string = useParams().zebra!;

  useEffect(() => {
    getGifById(idImLookingFor).then((res) => setGif(res.data));
  }, []);
  return (
    <div className="Details">
      {gif ? <Result singleGif={gif} /> : <p>Gif is Null</p>}
    </div>
  );
};

export default Details;
