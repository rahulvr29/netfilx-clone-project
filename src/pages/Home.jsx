import React from 'react'
import { Footer, Main, Row } from '../components'
import requests from '../requestKey'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID='1' title='Up Coming Movies & Shows' fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title='Top Rated Movies & Shows' fetchURL={requests.requestTopRated} />
      <Row rowID='3' title='Popular Movies & Shows ' fetchURL={requests.requestPopular} />
      <Row rowID='4' title='Trending Movies & Shows' fetchURL={requests.requestTrending} />
      <Row rowID='5' title='Horror Movies & Shows' fetchURL={requests.requestHorror} />
      <Footer/>
    </div>
  )
}

export default Home