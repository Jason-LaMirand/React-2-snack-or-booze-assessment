import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

// This component shows the menu for either snacks or drinks.
function Menu({ snacks, drinks }) {
  let items;
  let link;
  if (snacks) {
    items = snacks;
    link = 'Snacks';
  }
  else {
    items = drinks;
    link = 'Drinks'
  }

  // We create a card with the menu items.
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {link} Menu
          </CardTitle>
          <CardText>
            See all of our {link}!
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${link}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
