import React, { useState } from 'react'
import marked from 'marked'

import { Button } from 'antd'

import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'
import './index.scss'

marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
})

const ArticleCreateView: React.FC = () => {
    // 初始化标题
    const [inputTitle, setTitle] = useState("")
    // 初始化input内容
    const [inputArea, setInputArea] = useState("")
    // markdown内容
    const [output, setOutput] = useState("");

    // 修改textarea内容
    function inputOnChange({ target: { value } }: any) {
        setInputArea(value);
        setOutput(marked(value));
        console.log(output);
    }

    return (
        <div className="article-create-panel">
            <div className="article-create-title">
                <input placeholder="请输入标题" />
                <Button
                    className="create-btn"
                    type="primary"
                    icon="bulb"
                >
                    create
                </Button>
            </div>
            <div className="article-panel">
                <textarea placeholder="请输入内容" className="article-markdown article-item" value={inputArea} onChange={inputOnChange} />
                <div className="article-preview article-item" dangerouslySetInnerHTML={{ __html: output }}></div>
            </div>
        </div>
    )
}

export default ArticleCreateView