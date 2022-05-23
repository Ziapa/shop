import './src/scss/app.scss';
import React from 'react';

import { Categories } from './src/component/Categories/Categories';
import { Header } from './src/component/Header/Header';
import { PizzaBlock } from './src/component/PizzaBlock/PizzaBlock';
import { Sort } from './src/component/Sort/Sort';

const App: React.FC<any> = () => (
  <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
        </div>
      </div>
    </div>
  </div>
);

export default App;
