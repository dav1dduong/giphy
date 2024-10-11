import Gif from "../models/Gif";
import { GiphyResponse } from "../models/GiphyResponse";
import Result from "./Result";
import "./ResultList.css";
interface Props {
  arrayOfGifs: Gif[];
}
const ResultList = ({ arrayOfGifs }: Props) => {
  return (
    <div className="ResultList">
      <h2>Results</h2>
      {arrayOfGifs.map((gif: Gif, i) => (
        <Result singleGif={gif} key={gif.id + i} />
      ))}
    </div>
  );
};

export default ResultList;
