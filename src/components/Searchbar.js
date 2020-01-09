import React, {useState} from 'react'
import { Paper, TextField} from '@material-ui/core'
class Searchbar extends React.Component {
state={
  searchTerm:''
}
 handleChange=(e)=>{
    this.setState({searchTerm:e.target.value})
  }
  handleSubmit=(e)=>{
    const {searchTerm} =this.state
    const {onFormSubmit} = this.props
    onFormSubmit(searchTerm);
    e.preventDefault()
  }
  render(){
  return(
    <div  style={{display:'flex', justifyContent:"center"}}>
    <Paper style={{width:"85vw", marginTop:5}}>
      <form onSubmit={this.handleSubmit} >
        <TextField fullWidth label=" Search..." onChange={this.handleChange}/>
      </form>
    </Paper>
    </div>
  )
}
}
export default Searchbar
