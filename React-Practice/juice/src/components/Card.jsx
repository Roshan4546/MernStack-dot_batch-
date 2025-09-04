import mangoImg from "../assets/mangoImg.png";
import mangoImg2 from "../assets/mangoImg2.png";
import orangeImg from "../assets/orangeImg.png";
import appleImg from "../assets/appleImg.png";
import pineappleImg from "../assets/pineappleImg.png";
import grapeImg from "../assets/grapeImg.png";
import lycheeImg from "../assets/lycheeImg.png";
import strawberryImg from "../assets/strawberryImg.png";
import peachImg from "../assets/peachImg.png";
import lemonImg from "../assets/lemonImg.png";
import watermelonImg from "../assets/watermelonImg.png";
import cranberryImg from "../assets/cranberryImg.png";
import coconutImg from "../assets/coconutImg.png";
import guavaImg from "../assets/guavaImg.png";
import carrotOrangeImg from "../assets/carrotOrangeImg.png";
import kiwiImg from "../assets/kiwiImg.png";
import jamunImg from "../assets/jamunImg.png";
import pomegranateImg from "../assets/pomegranateImg.png";
import mixedFruitImg from "../assets/mixedFruitImg.png";

const imageMap = {
    Mango: mangoImg,
    Mango1: mangoImg2,
    Orange: orangeImg,
    Apple: appleImg,
    Pineapple: pineappleImg,
    Grape: grapeImg,
    Lychee: lycheeImg,
    Strawberry: strawberryImg,
    Peach: peachImg,
    Lemon: lemonImg,
    Watermelon: watermelonImg,
    Cranberry: cranberryImg,
    "Coconut Water": coconutImg,
    Guava: guavaImg,
    "Carrot-Orange": carrotOrangeImg,
    Kiwi: kiwiImg,
    Jamun: jamunImg,
    Pomegranate: pomegranateImg,
    "Mixed Fruit": mixedFruitImg,
};


function Card({ juice }) {
    return (
        <div className="border rounded-xl shadow-md p-4 text-center bg-gray-50">
            <img
                src={imageMap[juice.flavour] || mangoImg} // fallback
                alt={juice.name}
                className="w-32 h-32 object-contain mx-auto mb-3"
            />
            <h2 className="text-xl font-bold text-amber-600">{juice.name}</h2>
            <p>{juice.flavour}</p>
            <p>{juice.size}</p>
            <p className="font-semibold">₹{juice.price}</p>
            <p
                className={`text-sm ${juice.isAvailable ? "text-green-600" : "text-red-500"
                    }`}
            >
                {juice.isAvailable ? "Available" : "Out of Stock"}
            </p>
        </div>
    );
}

export default Card;
