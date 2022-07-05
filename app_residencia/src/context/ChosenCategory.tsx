import React, { createContext, useState } from 'react';
import { CategoriaType } from '../models/CategoriaType';
import Categoria from '../pages/Categoria';


export const ChosenCategoryContext = createContext({});


export const ChosenCategoryProvider = ({ children }) => {
  const [chosenCategory, setChosenCategory] = useState<CategoriaType>();
  return (
    <ChosenCategoryContext.Provider
      value={{
        chosenCategory,
        setChosenCategory
      }}>
      {children}
    </ChosenCategoryContext.Provider>
  );
};