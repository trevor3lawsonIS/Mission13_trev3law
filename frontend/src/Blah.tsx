import styles from "./Blah.module.css";

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img
            src="./logo192.png"
            alt="companyLogo"
          ></img>
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.title}</h1>
        </div>
      </div>
      <br></br>
      <div className="row">
        <h2>{props.test}</h2>
      </div>
    </>
  );
}

export default TopBanner;
