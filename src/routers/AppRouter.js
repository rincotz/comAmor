import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import About from '../components/About';
import HelpPage from '../components/HelpPage';
import EditMealPage from '../components/EditMealPage';
import Footer from '../components/Footer';
import AddMealPage from '../components/AddMealPage'
import AddPartnerPage from "../components/AddPartnerPage";
import MealList from "../components/MealList";
import EditPartnerPage from "../components/EditPartnerPage";

const AppRouter = () => (
    <BrowserRouter>
      <div>
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
      </div>
    </BrowserRouter>
);

export default AppRouter;
