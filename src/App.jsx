import { Nav } from "./components";
import {
  CustomerReview,
  Hero,
  PopularProducts,
  Services,
  SignUp,
  SpecialOffer,
  SuperQuality,
} from "./sections";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="container ">
        <Hero />
      </section>
      <section className="container ">
        <PopularProducts />
      </section>
      <section className="container ">
        <SuperQuality />
      </section>
      <section className="container ">
        <Services />
      </section>
      <section className="container ">
        <SpecialOffer />
      </section>
      <section className=" bg-pale-blue">
        <CustomerReview />
      </section>
      <section className=" container">
        <SignUp />
      </section>
      <section className="  bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
