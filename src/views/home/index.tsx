import React, { useEffect, useState } from 'react'

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
        uuid: string,
        logo: string,
        likes: number,
        reading: number,
        created_at: string,
        updated_at: string,
    }
}

const HomeView: React.FC = () => {

    const [articleList, setArticleList] = useState();

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
                        <div className="article-item" key={index}>
                            <div className="article-">{item.article.title}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeView;