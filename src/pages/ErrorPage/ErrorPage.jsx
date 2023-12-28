import "./ErrorPage.css";
import errorImg from "../../img/error404.svg";

const ErrorPage = () => {
  return (
    <div className="container">
      <img src={errorImg} />
    </div>
  );
};

export default ErrorPage;
