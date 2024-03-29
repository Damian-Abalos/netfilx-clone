
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(''); // Estado para el mensaje de error
  const { signUp } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password.length < 6) {
        setPasswordError('La contraseña debe tener al menos 6 caracteres'); // Establece el mensaje de error
        return; // Evita continuar con el registro
      }
      // Restablece el mensaje de error si la contraseña es válida
      setPasswordError('');
      signUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Registrarse</h1>
              <form
                id='myForm'
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  id='password'
                  placeholder='Contraseña'
                  autoComplete='current-password'
                />
                <p id="passwordError">{passwordError}</p>
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                  Registrarse
                </button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>¿Necesitas ayuda?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>
                    ¿Ya tiene cuenta?
                  </span>{' '}
                  <Link className=' pl-1' to='/login'>Inicia sesión</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
