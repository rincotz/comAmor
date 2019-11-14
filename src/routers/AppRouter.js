import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage/HomePage';
import About from '../components/About';
import HelpPage from '../components/HelpPage';
import EditMealPage from '../containers/EditMealPage/EditMealPage';
import Footer from '../components/Footer/Footer';
import AddMealPage from '../containers/AddMealPage/AddMealPage'
import AddPartnerPage from "../containers/AddPartnerPage/AddPartnerPage";
import MealList from "../containers/MealList/MealList";
import EditPartnerPage from "../containers/EditPartnerPage/EditPartnerPage";
import Header from '../components/Header/Header'

const AppRouter = () => (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/cozinhando' component={AddMealPage} />
          <Route path='/cadastro' component={AddPartnerPage} />
          <Route path='/refeicoes' component={MealList} />
          <Route path='/cozinhando/porque' component={NotFoundPage} />
          <Route path='/cozinhando/hospitalidade' component={NotFoundPage} />
          <Route path='/cozinhando/responsabilidade' component={NotFoundPage} />
          <Route path='/edit/:id' component={EditMealPage} />
          <Route path='/users/:uid' component={EditPartnerPage} />
          <Route path='/sobre' component={About} />
          <Route path='/carreiras' component={NotFoundPage} />
          <Route path='/ajuda' component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Route path="/" component={Footer} />
      </Fragment>
    </BrowserRouter>
);

export default AppRouter;
