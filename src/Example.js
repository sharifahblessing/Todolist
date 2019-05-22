import React from "react";
import PropTypes from "prop-types";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const Example = props => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content. Make a list
          </CardText>
          <Button>Make Your Order</Button>
        </Card>
      </Col>
    </Row>
  );
};

Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string
};

export default Example;
