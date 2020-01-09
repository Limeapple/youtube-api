import React from 'react';
import {Grid} from "@material-ui/core"
import youtube from './api/Youtube';
import Searchbar from './components/Searchbar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import YoutubeComment from './api/YoutubeComment'


class App extends React.Component {
  state={
    videos:[],
    selectedVideo:null,
  }
componentDidMount(){
  this.handleSubmit('cat videos')
}
  onVideoSelect=(video)=>{
    this.setState({selectedVideo:video})
  }

  handleSubmit= async (searchTerm)=>{
    const response = await youtube.get('search', {
      params:{
        part: 'snippet',
        maxResults:10,
        key: 'AIzaSyCr6NEoUerW-r397MtKIGj6LeSd8_Vsoq4',
        q: searchTerm
      }});
      this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})
  }
  handleComment= async (searchTerm)=>{
    const response = await YoutubeComment.get('search', {
      params:{
        part: 'snippet',
        key: 'AIzaSyCr6NEoUerW-r397MtKIGj6LeSd8_Vsoq4',
        q: searchTerm
      }});
      this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})
      console.log(response);
  }
  render(){
    const { selectedVideo, videos } = this.state;
  return (
    <div>
    <Searchbar style={{width:"50vw"}}onFormSubmit={this.handleSubmit}/>
    <div style={container}>
      <div>
          <VideoDetail video={selectedVideo}/>
      </div>
          <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
        </div>
    </div>
  );
}
}
const container={
  display:'flex',
}

export default App;
