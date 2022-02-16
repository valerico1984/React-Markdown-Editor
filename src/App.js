import './App.css';
import React, {Component} from 'react';
import {Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {marked} from 'marked'


const markdownInitial= ("# (GitHub-Flavored) Markdown Editor\n\nHi! I\'m Valeria and I\'m testing the editor. Change the text to see what happens.\n\n## Look, a list!\n\n* Fruit\n* Bread\n* Milk\n\n## And here\'s some code!\n\n```javascript\n\n$(document).ready(function(){\n\t$(\'div\').html(\'I am a div.\');\n});\n\n```\n\n## Look, an Image!\n\n![dog](https://media.istockphoto.com/photos/active-dog-running-across-an-open-field-picture-id1283131612?k=20&m=1283131612&s=612x612&w=0&h=BucGnyUieY1kQbTMCVx54yOfbrQIJCoOpcW07F1dZcQ=)\n\n.")

const renderer= new marked.Renderer()

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
   <div className="toolbar"><i class="fa free-code-camp"></i>"Editor"</div>
    <textarea id="editor" onChange={(e)=>{props.onChange(e.target.value)}} type="text">{props.code}</textarea>
    </section>
</Row>)
}

const Preview=(props)=>{
  return(
    
    <Row>
    <section id="preview_container">
      <div className="toolbar"><i class="fa free-code-camp"></i>"Preview"</div>
  
       <div id="preview">
  
      <div dangerouslySetInnerHTML={{__html:marked(props.html,{sanitize: true})}} />

   </div>
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

