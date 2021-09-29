import { useEffect, useState } from "react";
import Front from "./Images/Front.jpeg";
import Angle from "./Images/Angle.jpeg";
import Rear from "./Images/Rear.jpeg";
const list = [
  {
    id: 1,
    name: "Front",
    url: Front
  },
  {
    id: 2,
    name: "Angle",
    url: Angle
  },
  {
    id: 3,
    name: "Rear",
    url: Rear
  }
];
export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (list) {
      setCurrentImage(list[0].url);
    }
  }, []);

  const Images = list.map((item) => (
    <div className="w-1/3 float-left object-center p-2">
      <img
        tabIndex="0"
        src={item.url}
        alt="kemper"
        className="box-border border border-gray-200 hover:border-gray-400 active:border-gray-400 focus:outline-none 
        focus:ring-2 focus:ring-gray-400 focus:border-gray-700 rounded-lg cursor-pointer"
        key={item.id}
        onClick={() => {
          setCurrentImage(item.url);
        }}
      />
    </div>
  ));

  return (
    <div className="">
      <img
        className="box-border border border-gray-200 rounded-lg cursor-pointer p-5"
        src={currentImage}
        alt="Kemper"
      />
      <div>{Images}</div>
    </div>
  );
}
