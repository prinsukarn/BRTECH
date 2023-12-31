import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export const Header = (props) => {
  return (
    <>
      {/* <div className="container header">
        <div className="row header-top">
          <div className="d-flex flex-row-reverse">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              &nbsp;<a href=" tel:+977-9840032254">+977-9840032254</a>
            </div>
            <div className="p-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              &nbsp;&nbsp;
              <a href="mailto:brownricetechnology@gmail.com">
                brownricetechnology@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container-fluid header">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <Link to="/">
                <img src={logo} width={200} />
              </Link>
            </a>

            <button
              className="navbar-toggler m-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav justify-content-between">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    <Link to="/">
                      <button className="btn btn-link">Home</button>
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <button className="btn btn-link">Services</button>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    <button className="btn btn-link">About Us</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to="/contact">
                      <button className="btn btn-link">Contact</button>
                    </Link>
                  </a>
                </li>
                <li className="nav-item blog-btn">
                  <a className="nav-link" href="#">
                    <button className="btn btn-primary">Blog</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
