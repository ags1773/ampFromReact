const express = require('express')
const app = express()
const {ampifyStory} = require('./dist/ampStoryPageBundle')

app.get('/', (req, res) => {
  res.status(301).redirect('/amp/story')
})

app.get('/amp/story', (req, res) => {
  const story = {
    storyElements: [
      {
        src:"https://images.unsplash.com/photo-1580156212925-e8c98610f696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        altText: "alt text 1111",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        src:"https://images.unsplash.com/photo-1580151820161-f73b132afdff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        altText: "alt text 2222",
        caption: "Donec dictum mollis risus a viverra. Aliquam vel ornare leo, ut ultricies erat."
      },
      {
        src:"https://images.unsplash.com/photo-1580142541272-4f6b7e815563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        altText: "alt text 3333",
        caption: "Duis eu felis ut tortor tempus tincidunt at quis arcu."
      }
    ]
  }

  res.status(200).send(ampifyStory(story))
})
app.listen(3000, () => console.log("App runnint on port 3000"))
