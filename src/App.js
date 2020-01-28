import React from 'react'
import { AMP } from './ampLibrary'
const { Carousel, FitText, Image } = AMP

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <hr />
        <Carousel>
        {this.props.story.storyElements.map(el => {
          <div>
            <Image
              src={el.src}
              alt={el.altText}
              width="500"
              layout="responsive"
            />
            <FitText width="500" height="150">{el.caption}</FitText>
          </div>
        })}
        </Carousel>
        <hr />
        <h1>Footer</h1>
      </div>
    )
  }
}

export default App
