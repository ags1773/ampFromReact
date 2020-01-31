import React from 'react'
import App from './App.js'
import * as quintypeAmp from '../../ampLibrary/dist/ampBundle' // will come from NPM

const {renderToString} = quintypeAmp

export function ampifyStory(story) {
  return renderToString(<App story={story} />)
}
