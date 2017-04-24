import React from 'react';
import {Modal, Button } from 'react-bootstrap';

const Donate = React.createClass({
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
          Donate
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Donate</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Like this site? Consider donating.</p>

            <p>I hope to put up more anti-Trump projects soon but services cost money, education costs money, life costs money.</p>
            <p>Without begging too much, let's just say that I would appreciate it if you could spare a buck or two, if you felt like it. But mostly, thank you for visiting!</p>

            <p>Thanks in advance.</p>

						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
							<input type="hidden" name="cmd" value="_donations" />
							<input type="hidden" name="business" value="info@whitecrimes.fyi" />
							<input type="hidden" name="lc" value="US" />
							<input type="hidden" name="item_name" value="WhiteCrimes.FYI" />
							<input type="hidden" name="no_note" value="0" />
							<input type="hidden" name="currency_code" value="USD" />
							<input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest" />
							<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
							<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
						</form>



          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </li>
    );
  }
});

export default Donate;
