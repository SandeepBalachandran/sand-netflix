import React, { useState } from 'react'
import Main from '../components/Main'
import { Row } from '../components/Row'
import requests from '../Requests'

function home() {
  const [movie, setMovie] = useState('');
  const getSelected = (item, id) => setMovie(item)
  return (
    <>
      <Main movieSelected={movie} />
      <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming}  onMovieClick={getSelected} />
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}  onMovieClick={getSelected} />
      <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}  onMovieClick={getSelected} />
      <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}  onMovieClick={getSelected} />
      <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}  onMovieClick={getSelected} />
    </>

  )
}

export default home