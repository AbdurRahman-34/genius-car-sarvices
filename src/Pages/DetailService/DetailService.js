import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const DetailService = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Service Detals {id}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <Button>Proceed Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default DetailService;
