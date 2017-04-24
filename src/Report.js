import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const Report = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {

    return (
      <li>
        <Button
          bsStyle="info"
          bsSize="large"
          onClick={this.open}
        >
          Report a White Crime!
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Report a 'White Crime'</Modal.Title>
          </Modal.Header>
          <Modal.Body>

						<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvDwjj23DjM1xkCyR8DyXHkIUlB05UNJOGlEQHuZk1gvDcbQ/viewform?embedded=true#start=embed" width="100%" height="400px" frameborder="0" marginheight="0" marginwidth="0"></iframe>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </li>
    );
  }
});

export default Report;
