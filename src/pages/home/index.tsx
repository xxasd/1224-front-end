import React from 'react'
import NavBar from './navBar'
import MainWrapper from './mainWrapper'

const Home: React.FC = () => {
    return (
        <div className="home">
            <NavBar />
            <MainWrapper />
        </div>
    )
}

export default Home;