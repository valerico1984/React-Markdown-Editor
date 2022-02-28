import './App.css';
import React, {Component} from 'react';
import {Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {marked} from 'marked'


const markdownInitial= `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

const renderer= new marked.Renderer()
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};


marked.setOptions({
  renderer,
  breaks: true,
  gfm: true,
  })

class MarkdownContainer extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        code: markdownInitial
        
      }

      this.handleChange=this.handleChange.bind(this)
    }

    handleChange(code){
      this.setState({code})
    }
   render() {
      return (
        <div className="container">
          <Editor code={this.state.code}
                  onChange={this.handleChange}/>
          <Preview html={this.state.code}/>

        </div>
      )
    }
  }
  
const Editor =(props)=>{
  return(

  <Row>
    
  <section id="editor_container">
   <div className="toolbar"><i className="fa free-code-camp"></i>"Editor"</div>
    <textarea id="editor" onChange={(e)=>{props.onChange(e.target.value)}} type="text">{props.code}</textarea>
    </section>
</Row>)
}

const Preview=(props)=>{
  return(
    
    <Row>
    <section id="preview_container">
      <div className="toolbar"><i className="fa free-code-camp"></i>"Preview"</div>
  
        
      <div dangerouslySetInnerHTML={{__html:marked(props.html,{renderer: renderer})}} id="preview" />

  
    </section>

</Row>
)
}





export default function App() {



  return(
<>
    <MarkdownContainer/>
    
   
</>
  )
  
}

