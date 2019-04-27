import React, { Component } from 'react'
import * as ReactDOM from "react-dom";
 
import { GraphFileBrowser } from '@microsoft/file-browser';

class OneDrive extends React.Component {
    getAuthenticationToken() {
      return Promise.resolve('.zE47[As?J=qq7ZZyk6:y6YEMv]hzuUU');
    }
    render() {
      return (
        <GraphFileBrowser 
          getAuthenticationToken={this.getAuthenticationToken}
         />
      );
    }
  }
  export default OneDrive