// Import React
import React, { Component } from 'react'
// import { pure } from 'recompose'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  //  Fill,
  Heading,
  Image,
  //  Layout,
  // Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  // Text,
} from 'spectacle'

// Import code presentation component
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Import custom component
// import Interactive from '../assets/interactive'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')
require('../assets/css/presentation-styles.css')

const urls = {
  adamTwitter: 'https://twitter.com/adamrecvlohe',
  adamGitHub: 'https://github.com/arecvlohe',
  counterDataFlow: 'https://glebbahmutov.com/draw-cycle/',
  futureDeclaredInVar: 'https://www.youtube.com/watch?v=BfZpr0USIi4',
  joshTwitter: 'https://twitter.com/_joshburgess',
  joshGitHub: 'https://github.com/joshburgess',
  problemsWithReactRedux: 'http://staltz.com/some-problems-with-react-redux.html',
  suncoastJs: 'http://www.meetup.com/suncoast-js/',
  suncoastJsTwitter: 'https://twitter.com/@suncoastjs',
}

const images = {
  cycleComponent: require('../assets/img/cycle-component.png').replace('/', ''),
  cycleLogo: require('../assets/img/cycle-logo.png').replace('/', ''),
  cyclePatternDiagram: require('../assets/img/cycle-pattern-diagram.png').replace('/', ''),
  cycleTitleScreen: require('../assets/img/cycle-title-screen.png').replace('/', ''),
  everythingStream: require('../assets/img/everything-stream.jpg').replace('/', ''),
  humanComputerDiagram01: require('../assets/img/human-computer-diagram-01.png').replace('/', ''),
  humanComputerDiagram02: require('../assets/img/human-computer-diagram-02.png').replace('/', ''),
  interesting: require('../assets/img/interesting.jpg').replace('/', ''),
  mainDomDiagram: require('../assets/img/main-dom-diagram.png').replace('/', ''),
  mindBlown: require('../assets/img/mind-blown.gif').replace('/', ''),
  modelViewIntent: require('../assets/img/model-view-intent.jpg').replace('/', ''),
  staltz: require('../assets/img/staltz.jpg').replace('/', ''),
  yoda: require('../assets/img/yoda.jpg').replace('/', ''),
}

preloader(images)

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
  listItemNoBulletPoint: {
    listStyleType: 'none',
  },
}

const references = `
  ## Lite reads

  -  [**Learning Observable By Building Observable**](https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87#.nme5giluq)
  -  [**Hot vs Cold Observables**](https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339#.7aen7c7nm)
  -  [**RxJS 5**](https://github.com/ReactiveX/rxjs)
  -  [**Rx Marbles**](http://rxmarbles.com/)
`

const follow = `
  ## Follow!

  - [@BenLesh](https://twitter.com/benlesh?lang=en)
  - [@AndreStaltz](https://twitter.com/andrestaltz)
  - [@MattPodwysocki](https://twitter.com/mattpodwysocki)
`

const operators = `
  - Observables behave similarly to arrays in JS
  - Many of the operators in RxJS may look familiar
  - Example: map, concat, every, scan
`
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
            <List style={styles.listItemTitle}>
              <ListItem>
                For <a target='_blank' href={urls.suncoastJs}>Suncoast.js</a>,&nbsp;
                Twitter: <a target='_blank' href={urls.suncoastJsTwitter}>@suncoastjs</a>
              </ListItem>
            </List>
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
            <List style={styles.listItemTitle}>
              <ListItem>
                Twitter: <a target='_blank' href={urls.adamTwitter}>@arecvlohe</a>,&nbsp;
                GitHub: <a target='_blank' href={urls.adamGithub}>@adamrecvlohe</a>
              </ListItem>
            </List>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading size={1} textColor='primary'>History</Heading>
            <Heading textColor='primary'>&&</Heading>
            <Heading size={1} textColor='primary'>Background</Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
               Rx People & Companies
            </Heading>
            <List>
              <Appear>
                <ListItem textColor='primary'>RxJS stands for Reactive Extensions for JavaScript</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor='primary'>Reactive Extensions originated at Microsoft (<b>Rx.NET</b>)</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor='primary'>Rx was created by <b>Erik Meijer</b> (@headinthebox), a programming language icon who has also worked on <b>LINQ</b>, <b>RxJava</b> (Netflix), <b>streams in Dart</b> (Google), & <b>Hack</b> (Facebook)</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor='primary'>RxJS by <b>Matt Podwysocki</b> (@mattpodwysocki) of Microsoft</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor='primary'>Recently rewritten by <b>Ben Lesh</b> (@benlesh) of Netflix as RxJS 5</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
               The Concept of Rx
            </Heading>
            <List>
              <Appear>
                <ListItem textColor='primary'>Similar to C#'s LINQ and functions like map, filter, & reduce in JS, but with two main differences:</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor='primary'>1. <b>Push-based</b> instead of pull-based</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor='primary'>2. <b>Asynchronous</b> instead of synchronous</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>What is reactive programming?</Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <BlockQuote textColor='primary'>
              <Quote>
                Reactive programming is programming with asynchronous data streams.
              </Quote>
              <Cite textColor='primary'>Andre Staltz</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgColor='tertiary'>
            <BlockQuote>
              <Quote textColor='primary'>
                When you iterate over an array you are pulling values out. Reactive programming is about pushing values.
              </Quote>
              <Cite textColor='primary'>Erik Meijer</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>What creates these values and how are they pushed?</Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>The Observable</Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <BlockQuote>
              <Quote>Observable is just a function that takes an observer and returns a function.</Quote>
              <Cite textColor='primary'>Ben Lesh</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>Coding Time!</Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='js'
            code={require('raw!../assets/code_slides/observable.example')}
            ranges={[
              { loc: [0, 29], title: `Let's create an observable` },
              { loc: [0, 5], note: 'Create a function that takes an observer' },
              { loc: [6, 11], note: 'Create an observer object that has next, error, and complete functions' },
              { loc: [12, 18], note: `Let's now produce some values` },
              { loc: [19, 24], note: 'And we can tell our observer how we will compute/transform those values' },
              { loc: [25, 29], note: 'If we call our function...' },
            ]}
          />
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>Observables and Operators</Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <Markdown source={operators} />
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>Let me preface</Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <CodePane
              lang='js'
              source={require('raw!../assets/code_slides/operators.example')} />
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>Coding Time!</Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='js'
            code={require('raw!../assets/code_slides/counter.example')}
            ranges={[
              { loc: [0, 41], title: `A counter in RxJS` },
              { loc: [3, 15], note: 'Boilerplate' },
              { loc: [16, 18] },
              { loc: [19, 22] },
              { loc: [23, 26] },
              { loc: [27, 29] },
              { loc: [30, 32] },
              { loc: [33, 39] },
            ]}
          />
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>Hot vs Cold</Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <Quote>
              When your observable creates the producer, your observable is cold. When your producer is created outside of a subscription your observable is hot.
            </Quote>
            <Cite textColor='primary'>Ben Lesh</Cite>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>Let's make it hot!</Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>Coding Time!</Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='js'
            code={require('raw!../assets/code_slides/bgcolor.example')}
            ranges={[
              { loc: [0, 26], title: `Change bgColor in RxJS` },
              { loc: [3, 9], note: 'Boilerplate' },
              { loc: [10, 12] },
              { loc: [13, 17] },
              { loc: [18, 26] },
            ]}
          />
          <Slide bgColor='tertiary'>
            <Image src={images.yoda} margin='-80px auto 0 -120px' />
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading textColor='primary'>References</Heading>
          </Slide>
          <Slide bgColor='tertiary'>
            <Markdown source={references} />
          </Slide>
          <Slide bgColor='tertiary'>
            <Markdown source={follow} />
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
            <List style={styles.listItemTitle}>
              <ListItem>
                Twitter: <a target='_blank' href={urls.joshTwitter}>@_joshburgess</a>,&nbsp;
                GitHub: <a target='_blank' href={urls.joshGitHub}>@joshburgess</a>
              </ListItem>
            </List>
          </Slide>
          <Slide bgColor='tertiary'>
            <Image src={images.cycleLogo} margin='0 auto' height={500} />
          </Slide>
          <Slide bgColor='primary'>
            <Image src={images.staltz} margin='0 auto 0 -100px' height={500} />
          </Slide>
          <Slide bgColor='tertiary'>
            <BlockQuote>
              <Quote textColor='primary'>
                React/Redux is an inferior paradigm compared to Cycle or Elm.
              </Quote>
              <Cite textColor='primary'>André Staltz</Cite><br />
              <List style={styles.listItemNoBulletPoint}>
                <Appear>
                  <ListItem>
                    Blog Post: <a
                      size={1}
                      fit
                      href={urls.problemsWithReactRedux}
                    >
                    Some Problems with React/Redux
                    </a>
                  </ListItem>
                </Appear>
              </List>
            </BlockQuote>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Core Points Made
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Too much boilerplate & manual wiring up of events
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Not functional enough, OOP concepts & imperative method calls
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  No clear interface/gate for handling I/O & effects
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor='tertiary'>
            <Image src={images.interesting} margin='0 auto 0 auto' height={400} />
          </Slide>
          <Slide bgColor='tertiary'>
            <Image src={images.cycleTitleScreen} margin='-80px auto 0 -120px' />
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Functional?
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Clean & declarative code without classes, "this" context, etc.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  App architecutre composed of pure functions
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Side effects are isolated in "drivers"
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Reactive?
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  All about data flow & state change propagation
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  100% built on reactive streams (Observables)
                </ListItem>
              </Appear>
              <ListItem style={{ visibility: 'hidden' }}>
                <a href={urls.futureDeclaredInVar}>
                  The Whole Future Declared in a Var
                </a>
              </ListItem>
            </List>
          </Slide>
          <Slide bgColor='primary'>
            <Image src={images.everythingStream} margin='-60px auto 0 -60px' height={700} />
          </Slide>
          <Slide bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Reactive?
            </Heading>
            <List>
              <ListItem>
                All about data flow & state change propagation
              </ListItem>
              <ListItem>
                100% built on reactive streams (Observables)
              </ListItem>
              <Appear>
                <ListItem>
                  <a href={urls.futureDeclaredInVar}>
                    The Whole Future Declared in a Var
                  </a>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor='tertiary'>
            <Image src={images.mindBlown} margin='0 auto' height={400} />
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
          <CodeSlide
            transition={[]}
            lang='js'
            code={require('raw!../assets/code_slides/cycle-counter.example')}
            ranges={[
              { loc: [0, 29], title: `Building a Counter in Cycle.js` },
              { loc: [0, 5], note: 'Import your stream library of choice, its run function, hyperscript helpers, & the DOM driver' },
              { loc: [6, 13], note: 'Define the main function, create a merged stream of increments & decrements' },
              { loc: [13, 14], note: `Track the total count by folding over that stream & accumulating the result` },
              { loc: [14, 24], note: 'Create virtual DOM elements to render' },
              { loc: [25, 28], note: 'Call run, passing it our main function & DOM driver' },
            ]}
          />
          <Slide bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Counter Data Flow Visualiztion
            </Heading>
            <List style={styles.listItemTitle}>
              <ListItem>
                <a target='_blank' href={urls.counterDataFlow}>Click here to see how data flows through the counter app</a>
              </ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}

export default Presentation
