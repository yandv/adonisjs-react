/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
]

Route.group(() => {
  Route.get('/users', async ({ response }: HttpContextContract) => {
    return response.json(users)
  })
  Route.get('/cep/estados', async ({ response }: HttpContextContract) => {
    return response.json(['Rio de Janeiro', 'São Paulo', 'Brasília', 'Minas Gerais'])
  })
}).prefix('/api/v1')


Route.get('/home', async ({ view }: HttpContextContract) => {
  return view.render('app', { render: 'home' })
})

Route.get('*', async ({ view }: HttpContextContract) => {
  return view.render('app', { render: 'not-found' })
})
