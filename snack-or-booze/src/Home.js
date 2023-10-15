import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

// Shows the home page of the app. It is the first page that the user sees.
function Home(snacks, drinks) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <p>
              There are {snacks.length} snacks and {drinks.length} drinks.
            </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
