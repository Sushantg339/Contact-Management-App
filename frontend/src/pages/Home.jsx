import ContactDisplay from "../components/ContactDisplay";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div className="min-h-screen w-full  bg-gray-100 flex items-center justify-center px-5">
      <div className="w-full h-screen py-5 md:py-0 max-w-6xl flex flex-col md:flex-row gap-8 items-stretch">
        <ContactForm />
        <ContactDisplay />
      </div>
    </div>
  );
};

export default Home;
