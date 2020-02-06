import React from 'react'
import App from './App.js'
import * as quintypeAmp from '../../bundle.js' // will come from NPM

const {renderToString} = quintypeAmp

export function ampifyStory(story) {
  return renderToString(<App story={story} />)
}
