import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import FeedPage from './FeedPage';
import LoginPage from './LoginPage';
import PostDetailsPage from './PostDetailsPage';
import SignUpPage from './SignUpPage';


const Router = (props) => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}> 
                    <LoginPage/>
                </Route>

                <Route path={'/signup'}>
                    <SignUpPage/>
                </Route>

                <Route path={'/feed'}>
                    <FeedPage/>
                </Route>

                <Route path={'/post/:postId'}>
                    <PostDetailsPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )    
}

export default Router;