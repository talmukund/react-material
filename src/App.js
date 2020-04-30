import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './components/header';
import Products from './components/cards';

import { getProductDetails } from './_service'

class App extends Component {
  state = {
    products: [],
    offset: 0,
    limit: 10
  }

  componentDidMount(){
    this.fetchMore();
  }

  fetchMore = ()=>{
    const { offset, limit} = this.state
    getProductDetails({offset, limit})
    .then(data=>this.setState({products: data, offset: limit, limit: 2*limit}));
  }

  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
             <NavBar />
           </TypoGraphy>
          </Toolbar>        
        </AppBar>
        <Products products={this.state.products} fetchMore={this.fetchMore}/>
      </div>
    );
  }
}
export default App;