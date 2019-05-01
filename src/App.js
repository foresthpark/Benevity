import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from "./components/NavBar"
import MovieDetail from './components/MovieDetail'
import {requestMovies, getMovieDetail} from './actions'
import "./components/css/moviecard.css"
import "./App.css"
import MaterialUiCarousel from "./components/carousel/MaterialUiCarousel"
import NowPlaying from "./components/cards/NowPlaying";
import TopRated from "./components/cards/TopRated"
import Upcoming from "./components/cards/Upcoming"

const mapStateToProps = (state) => {
  return {
    isPending: state.requestMovies.isPending,
    movies: state.requestMovies.movies,
    error: state.requestMovies.error,
    MovieDetail: state.getMovieDetail.MovieDetail,
    renderDetail: state.getMovieDetail.renderDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestMovies: () => dispatch(requestMovies()),
    onGetMovieDetail: (event) => dispatch(getMovieDetail(event.currentTarget.id)),
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestMovies()
  }


  render() {
    console.log('render', this.props.renderDetail)
    const {movies, isPending, onGetMovieDetail, renderDetail} = this.props

    return isPending ? <Loading/> :
      (
        <div className="App">
          <NavBar/>
          {renderDetail === false &&
          <div className="mainpagecarousel">
            <MaterialUiCarousel movies={movies[0]} head={"Hello?"}/>
            <MaterialUiCarousel movies={movies[1]} head={"Is it me..."}/>
            <MaterialUiCarousel movies={movies[2]} head={"You're looking for??"}/>

            <TopRated movies={movies[0]} getMovieDetail={onGetMovieDetail} head={"Top Rated"}/>
            <Upcoming movies={movies[1]} getMovieDetail={onGetMovieDetail} head={"Upcoming"}/>
            <NowPlaying movies={movies[2]} getMovieDetail={onGetMovieDetail} head={"Now Playing"}/>
          </div>
          }

          {renderDetail === true &&
          <MovieDetail/>
          }
        </div>
      )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
