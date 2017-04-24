import React from 'react';
import {Modal, Button} from 'react-bootstrap';


const Why = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  componentDidMount(){
    this.open();
  },

  render() {

    return (
      <li>

        <Button
          bsStyle="info"
          bsSize="large"
          onClick={this.open}
        >
          Why We Made this
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>          
              Why We Made this - Crime is Crime & Donald Trump
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Whether a crime was committed by a member of any race or group, it's simply crime.</p> 
            <p>Unfortunately, some people like to divide crime statistics in a way so as to sow fear and to divide us.</p>
            <p>This is especially evident when a pundits discuss "Black Crime", or when a fake news site wants to filter events as a 'Jew Problem'.
            </p>
            <p>Recently we noticed President Trump has ordered the Counter-Extremism 
            department to focus solely on <a href="http://www.reuters.com/article/us-usa-trump-extremists-program-exclusiv-idUSKBN15G5VO">Muslim Terrorists</a>. This ignores the terrible reality of 
            violent crime committed by radicalized white criminals, among others.</p>

            <p>We hope that this site will put a spotlight on the fact that we have a lot to worry about with demonizing any particular group by satirizing our "white crime problem". 
            Hopefully you will find this work illuminating, and with your help we can continue to spread awareness with regards to the multifaceted problem of crime that affects us all.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </li>
    );
  }
});

export default Why;
