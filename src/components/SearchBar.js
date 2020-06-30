import React from 'react';

import {TextField, Paper} from '@material-ui/core';

class SearchBar extends React.Component{
state= {
searchTerm: '',
}



handleSubmit= (event)=> {
const { searchTerm } = this.state;
const { onFormSubmit } = this.props;

onFormSubmit(searchTerm);

event.preventDefault();
}

render(){
return (
<Paper elevation={6} style={{padding:'25px'}}>
<form onSubmit={this.handleSubmit}>
<TextField fullWidth label="search..." onChange={(event)=> this.setState({searchTerm: event.target.value})} />
</form>
</Paper>
)
}
}

export default SearchBar;
