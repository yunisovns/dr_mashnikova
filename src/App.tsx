import { AboutMe } from "@components/AboutMe/AboutMe";
import Header from "@components/Header/Header";
import { Services } from "@components/Services/Services";
import {Contacts} from "@components/Contacts/Contacts.tsx";
import { ReviewsCarousel } from "@components/ReviewsCarousel/ReviewsCarousel";
import { BeforeAfterCarousel } from "@components/BeforeAfterCarousel/BeforeAfterCarousel";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Services />
      <BeforeAfterCarousel />
      <ReviewsCarousel />
      <Contacts />
    </>
  );
}

export default App;
