import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { newsDrawerState } from './actions'
import { useDispatch, useSelector } from 'react-redux';

import Home from './pages/Home';
import NewsDetailDrawer from './components/NewsDetailDrawer'
import ResponsiveDrawer from './components/ResponsiveDrawer'

export default function App() {

  const dispatch = useDispatch();

  const isNewsDrawer = useSelector(state => state.newsDrawerState)

  const closeNewsDrawer = () => {
    if (isNewsDrawer === true)
      dispatch(newsDrawerState(false))
  };

  const rooterContent = (
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:category">
            <Home />
          </Route>
    </Switch>
  );
  return (
    <Router>
      <div onClick={closeNewsDrawer} style={{display: 'flex'}}>
        <ResponsiveDrawer content={rooterContent}></ResponsiveDrawer>
        <NewsDetailDrawer/>  
      </div>
    </Router>
  );
}