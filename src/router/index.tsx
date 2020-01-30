import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexPages from '@/pages/index'
import Home from '@/pages/home'
import Detail from '@/pages/detail'

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