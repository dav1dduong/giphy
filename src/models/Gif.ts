export default interface Gif {
  id: string;
  url: string;
  username: string;
  title: string;
  images: Image;
  alt_text: string;
}
interface Image {
  original: Original;
}
interface Original {
  url: string;
}
