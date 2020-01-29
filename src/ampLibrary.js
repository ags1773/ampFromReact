import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { headStart, headEndBodyStart, bodyEnd } from './ampBoilerplate'

const scriptMap = {
  carousel: `<script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"></script>`,
  fitText: `<script async custom-element="amp-fit-text" src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"></script>`
}
const scriptsAccumulator = [] // should contain custom scripts of all the components that are used
const scriptMapKeys = Object.keys(scriptMap)

const accumulateComponentScript = componentName => {
  if (scriptMapKeys.includes(componentName) && !scriptsAccumulator.includes(scriptMap.componentName)) {
    scriptsAccumulator.push(scriptMap.componentName)
  }
}


const renderToString = (reactComponent) => {
  // put scripts from 'scriptsAccumulator' in head
  // check if layout can be rendered (i.e. if title and stuff is present), else throw error
  let str = ''
  try {
    // const check = checkLayout()
    // if (check instanceof Error) throw check

    str += headStart
    // figure out how to put meta and title here, add it to str
    str += scriptsAccumulator.join('')
    str += headEndBodyStart
    str += ReactDOMServer.renderToStaticMarkup(reactComponent)
    str += bodyEnd

    return str

  } catch(e) { 
    console.log("something broke")
    console.error(e)
   }
}

// const checkLayout = () => {
//   // this should perform checks to decide whether the layout (i.e. stuff inside the accumulator) is fit for
//   // rendering into an amp page or not, else it should return an error object with a proper message
//   return accumulator.title ? null : new Error('Title is mandatory. It is not set')
// }

const Image = props => {
  return <amp-img {...props}>{props.children}</amp-img>
}

const Carousel = props => {
  accumulateComponentScript('carousel')
  return <amp-carousel {...props}>{props.children}</amp-carousel>
}

const FitText = props => {
  accumulateComponentScript('fitText')
  return <amp-fit-text {...props}>{props.children}</amp-fit-text>
}

const AMP = {Image,Carousel,FitText}
export {AMP, renderToString}