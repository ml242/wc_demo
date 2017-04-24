import React from 'react';
import {Nav} from 'react-bootstrap';

import Donate from './Donate';
import Report from './Report';
import Why from './Why';

const Links = React.createClass({
	render() {
		return(
					<Nav bsStyle="pills">
	          <Report />
	          <Why />
	          <Donate />
        	</Nav>
      )
    }	
});

export default Links;