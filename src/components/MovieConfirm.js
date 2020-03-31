import React from 'react'
import styles from './styles'
import {connect} from 'react-redux'
import {updateMovieList} from '../redux/moviesReducer'

const MovieConfirm = props => {

  // {title: props.title, poster: props.poster, rating: props.rating}
  //{title: title, poster:poster, rating: rating }
  //{props.title: props.title}
  const confirmMovie = () => {
    const {title, poster, rating} = props
    props.updateMovieList({title, poster, rating})
    props.history.push('/list')
  }
 
  console.log(props)
  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`${props.title} - ${props.rating}`}</p>
      <img src={`${props.poster}`} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}
const mapStateToProps = (store) => {
  const {title, poster, rating} = store.moviesReducer
  return {title, poster, rating}
}
export default connect(mapStateToProps, {updateMovieList})(MovieConfirm)
