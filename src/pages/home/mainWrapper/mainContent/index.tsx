import React from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'
import './index.scss'

const input = '# This is a header\n\n```javascript\nfunction(){\n\tconsole.log(123)\n}\n```';

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

const output = marked(input);

const MainContent : React.FC = () => {

    return (
        <div className="main-container">
            <div dangerouslySetInnerHTML={{ __html: output}}></div>            
        </div>
    )
}

export default MainContent;