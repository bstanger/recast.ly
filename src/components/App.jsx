class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentPlayerVideo: null
    };
  }

  /// SEARCH /////////////////////////////////

  componentDidMount() {
    this.searchYouTube();
    this.searchYouTube = _.debounce(this.searchYouTube, 500);
  }

  searchYouTube(query) {
    var searchObj = {
      key: this.props.apiKey,
      query: query || 'dogs catching food',
      max: 5
    };
    var setVideosCB = (videos) => {
      this.setState({
        videoList: videos,
        currentPlayerVideo: videos[0]
      });
    };
    this.props.searchYouTube(searchObj, setVideosCB);
  }

  /// EVENTS /////////////////////////////////

  enterSearchQuery(query) {
    this.searchYouTube(query);
  }

  selectVideo(selectedVideo) {
    this.setState ({
      currentPlayerVideo: selectedVideo
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search keyUpFn={this.enterSearchQuery.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentPlayerVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} selectVideo={this.selectVideo.bind(this)} appState={this.state}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

