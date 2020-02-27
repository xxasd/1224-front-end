import React, { useState } from 'react'
import marked from 'marked'
import { Button, message } from 'antd'

import { articleCreate } from '@/request/api'

import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'
import './index.scss'

marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
})

/**
 * 新建文章
 * @param {String} title    [文章标题]
 * @param {String} content  [文章内容] 
 */
interface IArticleCreate {
    title: string,
    content: string,
    logo?: string
}

const ArticleCreateView: React.FC = () => {
    // 初始化标题
    const [inputTitle, setTitle] = useState("")
    // 初始化input内容
    const [inputArea, setInputArea] = useState("")
    // markdown内容
    const [output, setOutput] = useState("");
    // 新增按钮loading状态
    const [showLoading, setShowLoading ] = useState(false);

    // 修改标题内容
    const inputTitleChange = ({ target: { value } }: any) => {
        setTitle(value);
    }

    // 修改textarea内容
    const inputTextAreaChange = ({ target: { value } }: any) => {
        setInputArea(value);
        setOutput(marked(value));
    }

    // 新建文章
    const createArticle = async () => {
        if (!inputTitle) {
            message.error("title is required")
            return
        }
        if (!inputArea) {
            message.error("content is required")
            return
        }
        const articleCreateQuery: IArticleCreate = {
            title: inputTitle,
            content: inputArea
        }

        setShowLoading(true)

        try {
            await articleCreate(articleCreateQuery);
            setShowLoading(false)
        } catch (error) {
            setShowLoading(false)
        }
    }

    return (
        <div className="article-create-panel">
            <div className="article-create-title">
                <input
                    placeholder="请输入标题"
                    value={inputTitle}
                    onChange={inputTitleChange}
                />
                <Button
                    loading={showLoading}
                    className="create-btn"
                    type="primary"
                    icon="bulb"
                    onClick={createArticle}
                >
                    create
                </Button>
            </div>
            <div className="article-panel">
                <textarea
                    placeholder="请输入内容"
                    className="article-markdown article-item"
                    value={inputArea}
                    onChange={inputTextAreaChange}
                />
                <div
                    className="article-preview article-item"
                    dangerouslySetInnerHTML={{ __html: output }}
                />
            </div>
        </div>
    )
}

export default ArticleCreateView