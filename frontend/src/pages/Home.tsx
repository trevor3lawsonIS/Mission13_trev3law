import joelImage from "../media/JoelHiltonHeadshot.jpg";

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="display-4">The Joel Hilton Film Collection</h1>

        <img
          src={joelImage}
          alt="Joel Hilton"
        />
        <br></br>
        <br></br>
        <p>
          This site has both a link to Joel's podcast, along with his list of
          every movie he has watched!
        </p>
      </div>
    </div>
  );
};

export default Home;
