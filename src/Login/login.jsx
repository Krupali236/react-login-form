import { useState } from 'react'
import '../Login/login.css';
import bg from '../assets/bg/1.jpg'

const Login = () => {
    const [value, setValue] = useState({})
    const [error, setError] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value,
        }))
        console.log(value, "value")
    }
    const handleValid = (value) => {
        const alphabetRegex = /^[a-zA-Z]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        const errors = {}
        if (!value?.username || !alphabetRegex.test(value.username)) {
            errors.username = 'Please enter username';
        }
        if (!value?.password || !passwordRegex.test(value.password)) {
            errors.password = 'please enter password';
        }
        setError(errors)
        console.log(errors, "errors")
        console.log(Object.keys(errors), " Object.keys(errors)")
        return Object.keys(errors).length === 0;
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const isValidForm = handleValid(value)
        console.log(isValidForm, "isValidForm")
        if (isValidForm) {
            console.log("value", value)
            alert("Submitted Successfully");
            setValue({})
        }
    }
    return (
        <>
            <div className="container:md rounded-2xl ">
                <div className="grid grid-cols-3 gap-0">
                    <div className='w-full'>
                        <img src={bg} alt="bg" className='rounded-s-2xl h-full' />
                    </div>
                    <div className='col-span-2 bg-white rounded-e-2xl'>
                        <form className='font-sans py-5' onSubmit={handleOnSubmit}>
                            <h3 className='font-medium text-3xl w-96 mx-auto text-center my-9'>Login into account</h3>
                            <div className='my-6'>
                                <input type="text" name='username' value={value?.username || ""} placeholder='username' className={error?.username ? 'w-96 p-3 border-2  border-red-600 rounded-2xl' : 'w-96 p-3 border-2 border-slate-400 rounded-2xl'} onChange={(e) => { handleChange(e) }} />
                                {error?.username && (<div className='text-red-600'>{error?.username}</div>)}
                            </div>
                            <div className='my-6'>
                                <input type="password" name='password' value={value?.password || ""} placeholder='password' className={error?.password ? 'w-96 p-3 border-2  border-red-600 rounded-2xl' : 'w-96 p-3 border-2 border-slate-400 rounded-2xl'} onChange={(e) => { handleChange(e) }} />
                                {error?.password && (<div className='text-red-600'>{error?.password}</div>)}
                            </div>
                            <div className='my-6'>
                                <button type='submit' className='button bg-blue-600 text-white w-96 rounded-2xl'>Login</button>
                            </div>
                            <div className='my-3'>
                                <a href="#" className='text-blue-600'>Forgot Password?</a>
                            </div>
                            <div className='my-3'>
                                <h4 className='font-bold my-2'>Or Login With</h4>
                                <button className='bg-blue-600 text-white me-5'>Facebook</button>
                                <button className='bg-red-700 text-white me-5'>Google</button>
                                <button className='bg-sky-500 text-white'>Twitter</button>
                            </div>
                            <div className='my-3'>
                                <h4 className='font-medium'> Don&apos;t have an account? <a className='text-blue-600'>Register here</a></h4>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login