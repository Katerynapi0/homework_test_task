import {useInput} from "../hooks/useInput.jsx";
import {useState} from "react";

export default function SendEmail(setEmail) {
    const email = useInput('');
    const [error, setError] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        if (!email.value) {
            return setError('Please enter your email.');
        }

        setEmail(email.value);
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full p-6 shadow dark:border md:mt-0 sm:max-w-md dark:border-gray-700 sm:p-8">
                    <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Forgot your password?
                    </h1>
                    <p className="font-light text-gray-500 dark:text-gray-400">Don't fret! Just type in your email
                        and
                        we will send you a code to reset your password!</p>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" name="email" id="email"
                                   value={email.value}
                                   onChange={email.onChange}
                                   className='bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                   placeholder="name@company.com" />
                                {error ? <p className="text-sm text-red-500">{error}</p> : null}
                        </div>
                        <button type="submit"
                                onClick={submitHandler}
                                className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">Reset
                            password
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}