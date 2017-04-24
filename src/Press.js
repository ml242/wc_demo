// TODO Add native sort instead of underscore

// Sort and sanitize some function data better

// Replace React.createClass() with the newer ".extends method"

// News was used before defined warning.


import React from 'react';
import _ from 'underscore';
import {Table} from 'react-bootstrap'
import './press.css'
import axios from 'axios';
import PressItem from './PressItem';

var thisStyle = {
  "lineHeight": "normal",
  "border": 0,
  "padding": ".5em",
  "width": "100%"
}


function Error() {
    return (
      <div className="error">
        Search Term not found
      </div>
    );
}


const Press = React.createClass({
  url: 'https://spreadsheets.google.com/feeds/list/1cc_5z2mAjbZ6fKvbvmp5BD_Z3apMAZP56IErqhR61ZA/1/public/values?alt=json',
  getInitialState() {
    return { 
            data: [],
            filteredData: [],
            search: '',
            termFound: true 
           };
  },

  handleType(){

    var newArr = _.sortBy(this.state.data, function(item){
      return item["gsx$typeofcrime"]["$t"]
    })

   
    // check the first index of our state against the array we just sorted and reverse it if needed
    if (newArr[0]['gsx$typeofcrime']["$t"] === this.state.data[0]['gsx$typeofcrime']["$t"]){
        newArr = newArr.reverse() ;
    }

    this.setState({data: newArr});


  },


  handleLocation(){   
    
    var newArr = _.sortBy(this.state.data, function(item){
      return item["gsx$whatstatedidthecrimeoccurin"]["$t"]
    })

    
    if (newArr[0]['gsx$whatstatedidthecrimeoccurin']["$t"] === this.state.data[0]['gsx$whatstatedidthecrimeoccurin']["$t"]){
        newArr = newArr.reverse();
    } 
       
    this.setState({data: newArr});

  },

  handleDate(){        
    
    var newArr = _.sortBy(this.state.data, function(item){
      return (new Date(item['gsx$whendidthecrimeoccur']["$t"]).getTime() )
    });

    if (newArr[0]['gsx$whendidthecrimeoccur']["$t"] === this.state.data[0]['gsx$whendidthecrimeoccur']["$t"]){
         newArr = newArr.reverse();
    }
    
    this.setState({data: newArr});
        
  },

  handleHeadline(){
    
    var newArr = _.sortBy(this.state.data, function(item){

      // TODO Data is not sanitized, first character could be a non-letter. Should return the sort by first letter instead.
      
      return item["gsx$whatistheheadlineofthearticle"]["$t"].toLowerCase();
    })

    if (newArr[0]['gsx$whatistheheadlineofthearticle']["$t"] === this.state.data[0]['gsx$whatistheheadlineofthearticle']["$t"]){
         newArr = newArr.reverse();
    } 
    
    this.setState({data: newArr});

  },

  handleSearch(event){

    // Keep track of input from the user in the app's state
    this.setState({search: event.target.value});
    var searchTerm = this.state.search;

    var newArr = _.sortBy(this.state.data, function(item){
      return item["gsx$whatistheheadlineofthearticle"]["$t"]
    })

    if (searchTerm.length > 1 ){    
      
      var searchArray = newArr.filter(function(item){ 
          return item["gsx$whatistheheadlineofthearticle"]["$t"].indexOf(searchTerm.toLowerCase()) > -1 
      });
      
      if (searchArray.length > 0) {
        this.setState({filteredData: searchArray})  
      } else {
        // If the search term is not found, change the state to show an error message
        this.setState({termFound: false})
      }
    } else {
      this.setState({
        filteredData: [],
        data: newArr,
        termFound: true
      })
    }

  },

  componentDidMount(){
    console.log(this.url)
    axios.get(this.url)
    .then(res => {
        var newArr = _.sortBy(res.data.feed.entry, function(item){
          return - (new Date(item['gsx$whendidthecrimeoccur.$t']).getTime() )
        });
        this.setState({data: newArr})
      });
  },

  render() {
    
      // watch for changes to see if anything is happening with the data store 
      if (this.state.filteredData.length > 0){
        news = this.state.filteredData;
      } else {
        var news = this.state.data;
      }
    
    return (
        <span>
        
            <input style={thisStyle} type="text" placeholder="Search" value={this.state.search} onChange={this.handleSearch} />
            {this.state.termFound ? null : <Error />}
          
          
          <Table striped bordered condensed hover responsive>
            <thead className="thead-inverse">
              <tr>
                <th onClick={this.handleType}>Type of Crime &#x21F3;</th>
                <th onClick={this.handleLocation}>State &#x21F3;</th>
                <th onClick={this.handleDate}>Date &#x21F3;</th>
                <th onClick={this.handleHeadline}>Headline &#x21F3;</th>
              </tr>
            </thead>
            <tbody>
                {
                  news.map(( dataItem, index ) => (
                    <PressItem key={index} approved={dataItem.gsx$approved.$t} type={dataItem.gsx$typeofcrime.$t} where={dataItem.gsx$whatstatedidthecrimeoccurin.$t} date={dataItem.gsx$whendidthecrimeoccur.$t} src={dataItem.gsx$whatisthelinkofthearticlejustpaste.$t} headline={dataItem.gsx$whatistheheadlineofthearticle.$t} />
                  ))
                }
            </tbody>  
          </Table>
        </span>
    ); 
  }
});

export default Press;