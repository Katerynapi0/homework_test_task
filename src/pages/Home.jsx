import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// TODO: Сделать глобальный стейт, который будет хранить информацию о пользователе
// TODO: Страница Home должна быть доступна только авторизованным пользователям
// TODO: Страница отправки пароля на почту, логина, регистрации не должны быть доступны авторизованным пользователям
// TODO: Страница отправки пароля на почту не должна использовать глобальный стейт

export const Home = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    if (!user) {
        navigate('/login');
    }

  return (
      <div>
          <h1 className='text-white text-5xl mb-3'>Hello, {}!</h1>
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