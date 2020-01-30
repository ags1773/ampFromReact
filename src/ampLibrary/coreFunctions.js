import ReactDOMServer from 'react-dom/server'
import { headStart, headEndBodyStart, bodyEnd } from './boilerplate'
import { Helmet } from "react-helmet";

// const checkLayout = () => {
//   // this should perform checks to decide whether the layout (i.e. stuff inside the accumulator) is fit for
//   // rendering into an amp page or not, else it should return an error object with a proper message
//   return accumulator.title ? null : new Error('Title is mandatory. It is not set')
// }

export const renderToString = (reactComponent) => {
  // check if layout can be rendered (i.e. if title and stuff is present), else throw error
  let str = ''
  try {
    // const check = checkLayout()
    // if (check instanceof Error) throw check
    const helmet = Helmet.renderStatic()
    const title = helmet.title.toString()
    const ampScripts = helmet.script.toString()
    const componentHtml = ReactDOMServer.renderToStaticMarkup(reactComponent)

    str += headStart
    str += title
    str += ampScripts
    str += headEndBodyStart
    str += componentHtml
    str += bodyEnd
    return str

  } catch(e) { 
    console.log("something broke")
    console.error(e)
   }
}
