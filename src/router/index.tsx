import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexPages from '@/views/index'
import Home from '@/views/home'
import Detail from '@/views/detail'

const BasicRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexPages}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/detail" component={Detail}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default BasicRoute;