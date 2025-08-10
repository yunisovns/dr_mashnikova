import img1 from "@images/BeforeAfterImages/1.jpg";
import img2 from "@images/BeforeAfterImages/2.jpg";
import img3 from "@images/BeforeAfterImages/3.jpg";
import img4 from "@images/BeforeAfterImages/4.jpg";
import img5 from "@images/BeforeAfterImages/5.jpg";
import img6 from "@images/BeforeAfterImages/6.jpg";
import img7 from "@images/BeforeAfterImages/7.jpg";
import img8 from "@images/BeforeAfterImages/8.jpg";

type Slide = {
  image: string;
  caption?: string;
};

export const slides: Slide[] = [
  {
    image: img1,
    caption: "результат 1",
  },
  {
    image: img2,
    caption: "результат 2",
  },
  {
    image: img3,
    caption: "результат 3",
  },
  {
    image: img4,
    caption: "результат 4",
  },
  {
    image: img5,
    caption: "результат 5",
  },
  {
    image: img6,
    caption: "результат 6",
  },
  {
    image: img7,
    caption: "результат 7",
  },
  {
    image: img8,
    caption: "результат 8",
  },
];