// Import React
import React, { Component } from 'react'
// import { pure } from 'recompose'

// Import Spectacle Core tags
import {
  Appear,
  // BlockQuote,
  // Cite,
  //  CodePane,
  Deck,
  //  Fill,
  Heading,
  // Image,
  //  Layout,
  //  Link,
  ListItem,
  List,
  //  Markdown,
  // Quote,
  Slide,
  Spectacle,
  // Text,
} from 'spectacle'

// Import code presentation component
// import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
// import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Import custom component
// import Interactive from '../assets/interactive'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')
require('../assets/css/presentation-styles.css')

// const images = {
//
// }

// preloader(images)

const urls = {
  adamTwitter: 'https://twitter.com/adamrecvlohe',
  adamGitHub: 'https://github.com/arecvlohe',
  joshTwitter: 'https://twitter.com/_joshburgess',
  joshGitHub: 'https://github.com/joshburgess',
  suncoastJs: 'http://www.meetup.com/suncoast-js/',
  suncoastJsTwitter: 'https://twitter.com/@suncoastjs',
}

const theme = createTheme({
  primary: '#58D3D8',
  secondary: '#FFF',
  tertiary: '#000',
})

class Presentation extends Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'spin']} transitionDuration={500}>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Intro to Reactive
            </Heading>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Programming in JS
            </Heading>
            <Appear>
              <List>
                <ListItem>
                  For <a target='_blank' href={urls.suncoastJs}>Suncoast.js</a>,&nbsp;
                  Twitter: <a target='_blank' href={urls.suncoastJsTwitter}>@suncoastjs</a>
                </ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Part 1: Intro to RxJS
            </Heading>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              By Adam Recvlohe
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Twitter: <a target='_blank' href={urls.adamTwitter}>@arecvlohe</a>,&nbsp;
                  GitHub: <a target='_blank' href={urls.adamGithub}>@adamrecvlohe</a>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Part 2: Intro to Cycle.js
            </Heading>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              By Josh Burgess
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Twitter: <a target='_blank' href={urls.joshTwitter}>@_joshburgess</a>,&nbsp;
                  GitHub: <a target='_blank' href={urls.joshGitHub}>@joshburgess</a>
                </ListItem>
              </Appear>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}

export default Presentation
