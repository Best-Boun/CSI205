import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import "./Carts.css";

function Carts({ carts, setCarts }) {
  return (
    <div className="carts-constainer">
      <div className="carts-items">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img
                variant="top"
                src={`https://picsum.photos/200?random=${cart.id}`}
              />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setCarts(carts.filter((c) =>  c.id !== cart.id));
                  }}
                >
                  Remove from Carts
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>

        <h4> Products:&nbsp;
  <Badge bg="danger">{carts.length} items</Badge>
  - Total Price:&nbsp;
  <Badge bg="success">
    ${carts.reduce((prev, cart) => prev + cart.price, 0).toFixed(2)}
  </Badge></h4>
        <button className="btn btn-warning fw-bold">Checkout &nbsp;<i class="bi bi-credit-card"></i></button>
    </div>
  );
}

export default Carts;
