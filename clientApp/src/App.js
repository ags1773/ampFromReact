import React, { Fragment } from 'react'
import * as quintypeAmp from '../../bundle.js'
const {Amp} = quintypeAmp
const {StoryElements, atoms} = Amp
const { Carousel, FitText, Image, Youtube, Title } = atoms
const { AmpBlurb, AmpBlockQuote } = StoryElements


class App extends React.Component {
  render() {
    return (
      <Fragment>
        <AmpBlurb>
          this is a <em>blurb</em>
          <a href="google.com">link</a>
          <p>i am a paragraph</p>
        </AmpBlurb>
        <AmpBlockQuote>
          This is a <p>Blockwuote!!</p>
        </AmpBlockQuote>
        <Title>This is my CUSTOM AMP page</Title>
        <h1>Header</h1>
        <hr />
        <Carousel
          layout="responsive"
          height="450"
          width="500"
          type="slides"
        >
        {this.props.story.storyElements.map((el, idx) => {
          return (
            <div key={idx}>
              <Image
                src={el.src}
                alt={el.altText}
                width="500"
                height="300"
                layout="fixed"
              />
              <FitText width="500" height="150">{el.caption}</FitText>
            </div>
          )
        })}
        </Carousel>
        <Youtube
          data-videoid="2jLTSzf-5p4"
          layout="responsive"
          width="480"
          height="270"
        >
          <Image
            src="http://i3.ytimg.com/vi/2jLTSzf-5p4/maxresdefault.jpg"
            placeholder
            layout="fill">
          </Image>
        </Youtube>
        <hr />
        <h1>Footer</h1>
      </Fragment>
    )
  }
}

export default App
