import React from 'react';

const PressItem = React.createClass({
  render() {
    return  this.props.approved === 'y'
                ?   <tr key={this.props.index}>
                        <td className='inline'>{this.props.type}</td>
                        <td className='inline'>{this.props.where}</td>          
                        <td className='inline'>{this.props.date}</td>          
                        <td className='inline '><a href={this.props.src}>{this.props.headline}</a></td>
                    </tr>
                :   null
  }
}); 
export default PressItem;