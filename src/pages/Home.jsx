// TODO: Сделать глобальный стейт, который будет хранить информацию о пользователе
// TODO: Страница Home должна быть доступна только авторизованным пользователям
// TODO: Страница отправки пароля на почту, логина, регистрации не должны быть доступны авторизованным пользователям
// TODO: Страница отправки пароля на почту не должна использовать глобальный стейт

// TODO: Сделать страницу TodoList (список задач) доступную только авторизованным пользователям
// TODO: Сделать кнопку которая будет добавлять новую задачу в список (состояние)
// TODO: Сделать страницу Todo (задача) доступную только авторизованным пользователям
// TODO: На странице Todo должны быть коментарии пользователей с jsonplaceholder под определенный айдишник Todo
// const link = 'https://jsonplaceholder.typicode.com/comments' + id

import {useSelector} from "react-redux";

export const Home = () => {
    const user = useSelector(state => state.user);

    return (
        <div>
          <h1 className='text-white text-5xl mb-3'>Hello, {user.name}!</h1>
          <p>Welcome to your first challenge with redux toolkit!</p>
          <nav>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3'
                      onClick={() => navigate('/login')}>Go to Login
              </button>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ml-3'
                      onClick={() => navigate('/register')}>Go to Registration
              </button>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ml-3'
                      onClick={() => navigate('/email')}>Go to Recovery
              </button>
          </nav>
        </div>
    );
}