import React, { useContext } from 'react'
import marked from 'marked'
import { ThemeContext } from '../../../../store/theme'
import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'
import './index.scss'

const input = '# This is a header\n\n```javascript\nfunction(){\n\tconsole.log(123)\n}\n```';

marked.setOptions({
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
});

const output = marked(input);

const MainContent : React.FC = () => {
    // 主题
    const { state } = useContext(ThemeContext);
    const { theme } = state;

    return (
        <div className="main-container">
            <div 
                className={theme==="light"?'':'markdown-dark'} 
                dangerouslySetInnerHTML={{ __html: output}}></div>            
        </div>
    )
}

export default MainContent;