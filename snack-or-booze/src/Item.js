import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// This component shows the details of a single item.
function Item({ items, cantFind }) {
  const { id } = useParams();

  let item = items.find(item => item.id === id);
  if (!item) return <Redirect to={cantFind} />;

  // We can assume that the item exists, because of the Redirect above. We create a card with the item's details.
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
