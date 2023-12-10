import HomeComponent from "../Pages/HomeComponent";

const AGraphsVisulization = () => {
  return (
    <section className="text-start mt-3">
      <HomeComponent />

      <small>
        Regard {" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
          href="https://github.com/mrwilbroad"
        >
          mrwilbroad{" "}{new Date().getFullYear()} 
        </a>
      </small>
    </section>
  );
};

export default AGraphsVisulization;
