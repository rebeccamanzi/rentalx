/* eslint-disable import/prefer-default-export */
import { Router } from 'express';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  // chama o construtor
  const category = new Category();
  
  // atribui as propriedades ao objeto
  Object.assign(category, {
      name,
      description,
      created_at: new Date()
  }) 

  categories.push(category);

  return response.status(201).json(category);
});

export { categoriesRoutes };
