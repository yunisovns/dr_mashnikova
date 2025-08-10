import { AboutMe } from "@components/AboutMe/AboutMe";
import { BeforeAfterCarousel } from "@components/BeforeAfterCarousel/BeforeAfterCarousel";
import { Contacts } from "@components/Contacts/Contacts.tsx";
import { Header } from "@components/Header/Header";
import { ReviewsCarousel } from "@components/ReviewsCarousel/ReviewsCarousel.tsx";
import { Services } from "@components/Services/Services";

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
