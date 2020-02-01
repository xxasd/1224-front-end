import React, { useEffect } from 'react'

const HomeView = (props: any) => {

    useEffect(() => {
        console.log(props.location.state);
    })

    return (
        <div>
            <a href="/">返回Home</a>
        </div>
    )
}

export default HomeView;