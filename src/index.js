import React from 'react'
import App from './App.js'
import { renderToString } from './ampLibrary'

export function ampifyStory(story) {
  return renderToString(<App story={story} />)
}
