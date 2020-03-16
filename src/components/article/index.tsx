import React, { useEffect, useState } from 'react'
import { Avatar } from 'antd'
import { UserOutlined, HeartOutlined, EyeOutlined } from '@ant-design/icons';
import { articleListApi } from '@/request/api'
import './index.scss'

interface articleListProps {
    userInfo: {
        nickname: string,
        avatar: string
    },
    article: {
        id: number,
        title: string,
        content: string,
        uuid: string,
        logo: string,
        likes: number,
        reading: number,
        created_at: string,
        updated_at: string,
    }
}

const ArticleListComponent: React.FC = () => {

    const [articleList, setArticleList] = useState([]);

    useEffect(() => {
        getArticleList();
    }, []);

    // 获取文章列表
    const getArticleList = async () => {
        const res = await articleListApi();
        const { data } = res;
        setArticleList(data)
    }

    return (
        <div className="home-panel">
            <div className="article-panel">
                {articleList && articleList.map((item: articleListProps, index: number) => {
                    return (
                        <div 
                            className="article-item" 
                            key={index}
                        >
                            <div className="user-panel">
                                <div className="user-avatar">
                                    {
                                        item.userInfo.avatar 
                                        ?  <img
                                                src={item.userInfo.avatar}
                                                alt={item.userInfo.nickname}
                                            />
                                        : <Avatar 
                                            size="large" 
                                            icon={<UserOutlined />} 
                                            />
                                    }
                                </div>
                                <div className="user-info">
                                    <div className="user-nickname">{item.userInfo.nickname}</div>
                                    <div className="create-time">{item.article.created_at}</div>
                                </div>
                            </div>
                            <div className="article-info">
                                <div className="article-title">{item.article.title}</div>
                                <div className="article-content">{item.article.content}</div>
                            </div>
                            <div className="like-reading-panel">
                                <div className="like-reading-item">
                                    <HeartOutlined />
                                    <span>{item.article.likes}</span>
                                </div>
                                <div className="like-reading-item">
                                    <EyeOutlined />
                                    <span>{item.article.reading}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ArticleListComponent;