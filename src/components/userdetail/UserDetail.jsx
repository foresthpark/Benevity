import React from "react"
import {connect} from 'react-redux'
import {requestUser} from './actions'
import Loading from "../loading/Loading";
import UserMovies from "../cards/UserMovies";
import "../css/moviecard.css"

const mapStateToProps = (state) => {
  return {
    isPendingUser: state.requestUser.isPendingUser,
    userMovies: state.requestUser.userMovies,
    error: state.requestUser.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestUser: (id) => dispatch(requestUser(id)),
  }
};

class UserDetail extends React.Component {

  componentDidMount() {
    this.props.onRequestUser(this.props.userId)
  }
    

  render(){

    return this.props.isPendingUser ? <Loading/> :
    (
      <UserMovies 
        userMovies={this.props.userMovies}
        clicker={this.props.getMovieDetail}
        userName={this.props.userName}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)