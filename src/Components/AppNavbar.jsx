import { Link } from "react-router-dom";

const AppNavbar = ({ products, carts, setToken }) => {
  return (
    <div
      className="d-flex justify-content-center gap-3"
      style={{ margin: "20px 0" }}
    >
      <Link to={"home"}>
        <button className="btn btn-primary nav-btn fw-bold">Home</button>
      </Link>
      <Link to={"calculator"}>
        <button className="btn btn-primary nav-btn fw-bold">Calculator</button>
      </Link>
      <Link to={"animation"}>
        <button className="btn btn-primary nav-btn fw-bold">Animation</button>
      </Link>
      <Link to={"components"}>
        <button className="btn btn-primary nav-btn fw-bold">Components</button>
      </Link>
      <Link to={"forwardtohome"}>
        <button className="btn btn-danger nav-btn fw-bold">
          ForwardToHome
        </button>
      </Link>
      <Link to={"todos"}>
        <button className="btn btn-primary nav-btn fw-bold">Todos</button>
      </Link>
      <Link to={"products"}>
        <button className="btn btn-primary nav-btn fw-bold">
          Products({products.length})
        </button>
      </Link>
      <Link to={"carts"}>
        <button className="btn btn-primary nav-btn fw-bold position-relative">
          Carts
          {carts.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {carts.length < 10 ? carts.length : "9+"}
            <span class="visually-hidden">unread messages</span>
          </span>
          )}
        </button>
      </Link>
        <button className="btn btn-outline-danger nav-btn fw-bold" onClick={() => {setToken('')}}>
          Log out
        </button>
    </div>
  );
};

export default AppNavbar; // เปลี่ยนชื่อเป็น AppNavbar ให้ตรง
