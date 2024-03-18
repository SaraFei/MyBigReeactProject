import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginInServer } from './UserApi';
import { useDispatch } from 'react-redux';
import { saveUserLoginInState } from './userSlice';
import { Link,useNavigate} from 'react-router-dom';

const Login = () => {
    let dispatch = useDispatch();
    let navigate=useNavigate();
    let [moveToAddUser, setMoveToAddUser] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await loginInServer(data);
            dispatch(saveUserLoginInState(response.data))
            console.log('User logged in successfully:', response);
            setTimeout(()=>{navigate('/allSweets')},2000)
            // Handle successful login, e.g., redirect user to dashboard
        } catch (error) {
            if (error.isJoi) {
                error.details.forEach(err => {
                    console.error(err.message);
                });
            } else {
                if (error.response.request.status === 404 && error.response.data.type === "no such user") {
                    console.log(error)
                    setMoveToAddUser(true);
                    
                }
                console.error('Failed to log in:', error);
            }

        }
    };

    return (
        <>
            התחברות
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="userPwd">סיסמה </label>
                    <input type="text" id="userPwd" {...register('userPwd', { required: { value: true, message: 'userPwd is required' } })} />
                    {errors.userName && <p>{errors.userName.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">מייל</label>
                    <input type="email" id="email" {...register('email', {
                        required: { value: true, message: 'מייל הינו שדה חובה' }, pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                            , message: "מייל לא תקין"
                        }
                    })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <button type="submit">היכנס</button>

            </form>
            {moveToAddUser && <div> <h2>שכחת שם משתמש או סיסמה?</h2> <Link to={'/signUp'} >
                <button>הרשמה לאתר</button>
            </Link></div>
            }
        </>
    );
};

export default Login;
