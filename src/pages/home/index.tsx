import React, { useEffect } from 'react'
import NavBar from './navBar'
import MainWrapper from './mainWrapper'
import Test from './test'
import http from 'axios'
// import { get } from '../../api/axios'

const Home: React.FC = () => {
    // const [data, setData] = useState(0);

    useEffect(() => {
        // get('/', {}, res => {
        //     console.log(res);
        // },err=>{
        //     console.log(err)
        // })
        http.get('/aa', {}).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
      });
    return (
        <div className="home">
            <NavBar />
            <MainWrapper />
            <Test children={0} />
        </div>
    )
}

export default Home;