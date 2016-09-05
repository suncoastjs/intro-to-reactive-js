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
  Image,
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

const images = {
  cyclePatternDiagram: require('../assets/img/cycle-pattern-diagram.png').replace('/', ''),
  cycleTitleScreen: require('../assets/img/cycle-title-screen.png').replace('/', ''),
  humanComputerDiagram01: require('../assets/img/human-computer-diagram-01.png').replace('/', ''),
  humanComputerDiagram02: require('../assets/img/human-computer-diagram-02.png').replace('/', ''),
  mainDomDiagram: require('../assets/img/main-dom-diagram.png').replace('/', ''),
}

const theme = createTheme({
  primary: '#58D3D8',
  secondary: '#FFF',
  tertiary: '#24242D',
  quaternary: '#C6FC93',
})

const styles = {
  listItemTitle: {
    listStyleType: 'none',
    textAlign: 'center',
  },
}

class Presentation extends Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom']} transitionDuration={500}>
          <Slide bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Introduction to Reactive
            </Heading>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Programming in JavaScript
            </Heading>
            <Appear>
              <List>
                <ListItem style={styles.listItemTitle}>
                  For <a target='_blank' href={urls.suncoastJs}>Suncoast.js</a>,&nbsp;
                  Twitter: <a target='_blank' href={urls.suncoastJsTwitter}>@suncoastjs</a>
                </ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Part 1
            </Heading>
          </Slide>
          <Slide bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Introduction to
            </Heading>
            <Heading size={1} caps fit textColor='quaternary' textFont='primary'>
              &nbsp;&nbsp;RxJS&nbsp;&nbsp;
            </Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              By Adam Recvlohe
            </Heading>
            <Appear>
              <List>
                <ListItem style={styles.listItemTitle}>
                  Twitter: <a target='_blank' href={urls.adamTwitter}>@arecvlohe</a>,&nbsp;
                  GitHub: <a target='_blank' href={urls.adamGithub}>@adamrecvlohe</a>
                </ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Part 2
            </Heading>
          </Slide>
          <Slide bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Introduction to
            </Heading>
            <Heading size={1} caps fit textColor='quaternary' textFont='primary'>
              Cycle.js
            </Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              By Josh Burgess
            </Heading>
            <Appear>
              <List>
                <ListItem style={styles.listItemTitle}>
                  Twitter: <a target='_blank' href={urls.joshTwitter}>@_joshburgess</a>,&nbsp;
                  GitHub: <a target='_blank' href={urls.joshGitHub}>@joshburgess</a>
                </ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide bgColor='tertiary'>
            <Image src={images.cycleTitleScreen} margin='-80px auto 0 -120px' />
          </Slide>
          <Slide bgColor='secondary'>
            <Image src={images.cyclePatternDiagram} margin='-50px auto 0 -50px' />
          </Slide>
          <Slide bgColor='secondary'>
            <Image src={images.humanComputerDiagram01} margin='-120px auto 0' />
          </Slide>
          <Slide bgColor='secondary'>
            <Image src={images.humanComputerDiagram02} margin='-50px auto 0 -170px' />
          </Slide>
          <Slide bgColor='secondary'>
            <Image src={images.mainDomDiagram} margin='-110px auto 0 -100px' />
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}

export default Presentation
