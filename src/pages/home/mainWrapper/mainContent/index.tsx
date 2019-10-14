import React, { useEffect } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import './index.scss'

const input = '```javascript\nfunction(){\n\tconsole.log(123)\n}\n```';
const output = marked(input);

const MainContent : React.FC = () => {

    useEffect(() => {
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
          });
    });

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: output}}></div>            
        </div>
    )
}

export default MainContent;