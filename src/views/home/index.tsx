import React, { useEffect, useState } from 'react'

import { articleListApi } from '@/request/api'
import './index.scss'

interface articleListProps {
    id: number
    uuid: string
    title: string
    logo: string
    content: string
    likes: number
    reading: number
    status: number
    created_at: string
    updated_at: string
    createdAt: string
    updatedAt: string
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
        console.log(data);
        setArticleList(data)
    }

    return (
        <div>
            {articleList && articleList.map((item: articleListProps, index: number) => {
                return (
                    <div key={index}>
                        <div>{item.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default HomeView;