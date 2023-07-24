import { Request, Response } from 'express';
import User from '../models/User';

export const novoUsuario = async (req: Request, res: Response) => {
  let firstName = req.body.firstName as string;
  let lastName = req.body.lastName as string;
  let email = req.body.email as string;
  let age = req.body.age as number;
  let interests = req.body.interests.split(',');

  let newUser = new User();
  newUser.name = { firstName: firstName, lastName: lastName };
  newUser.email = email;
  newUser.age = age;
  newUser.interests = interests;

  let saveNewUser = await newUser.save();
  console.log(saveNewUser);
  res.redirect('/');
};

export const buscaUsuario = async (req: Request, res: Response) => {
  let firstName = req.body.firstName as string;
  let usersSearch = await User.findOne({ firstName });

  res.render('pages/home', {usersSearch} );
  res.redirect('/');
};
