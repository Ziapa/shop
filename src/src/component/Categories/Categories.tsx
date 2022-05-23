import React from 'react';

export const Categories: React.FC<any> = () => (
  <div className="categories">
    <ul>
      <li className="active">Все</li>
      <li>Мясные</li>
      <li>Вегетарианская</li>
      <li>Гриль</li>
      <li>Острые</li>
      <li>Закрытые</li>
    </ul>
  </div>
);
