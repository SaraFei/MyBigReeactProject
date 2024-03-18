import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addUserToServer } from './UserApi';
import { useDispatch } from 'react-redux';
import { saveUserLoginInState } from './userSlice';
import { Link, useHistory, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    let navigate = useNavigate();


    const onSubmit = async (data) => {
        try {
            const response = await addUserToServer(data);
            dispatch(saveUserLoginInState(response.data));
            console.log('User registered successfully:', response);
            setTimeout(() => { navigate('/allSweets') }, 2000);
        } catch (error) {
            if (error.response.request.status === 409 && error.response.data.type === "add user error") {
                console.log("יש משתמש עם אימייל זהה");
            }
            else if (error.response.request.status === 403 && error.response.data.type === "validate error") {
                console.log("אחד מהשדות שהזנת לא מולאו כראוי");
            }
            else {
                console.error('Failed to register:', error);
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <>
            <h2>רישום לאתר</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="userName"> שם</label>
                <input type="text" id="userName" {...register('userName', { required: 'Name is required' })} />
                {errors.userName && <p>{errors.userName.message}</p>}

                <label htmlFor="userPwd">סיסמה</label>
                <input type="password" id="userPwd" {...register('userPwd', { required: 'Password is required' })} />
                {errors.userPwd && <p>{errors.userPwd.message}</p>}

                <label htmlFor="email">מייל</label>
                <input type="email" id="email" {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Please enterEmail is not valid'
                    }
                })} />
                {errors.email && <p>{errors.email.message}</p>}

                <button type="submit">הרשם</button>
            </form>
            <Link to="/login">Already have an account? Log in here</Link>
        </>
    );
};

export default SignUp;
