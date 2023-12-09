import HomeComponent from "../Pages/HomeComponent";

const AGraphsVisulization = () => {
  return (
    <section className="container p-4 text-start mt-3 border-top">
      <HomeComponent />

      <section>
        Regard{" "}
        <code>
          <a
            target="_blank"
            rel="noreferrer" 
            className="text-decoration-none"
            href="https://github.com/mrwilbroad"
          >
            mrwilbroad
          </a>
          <a
            target="_blank"
            rel="noreferrer" 
            className="text-decoration-none mx-3"
            href="https://github.com/mrwilbroad/react-data-visualizaion"
          >
             //all source code available
          </a>
        
        </code>
      </section>
    </section>
  );
};

export default AGraphsVisulization;
