import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginInServer } from './UserApi';
import { useDispatch } from 'react-redux';
import { saveUserLoginInState } from './userSlice';
import { Link, useNavigate } from 'react-router-dom';

//mui

import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

const Login = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [moveToAddUser, setMoveToAddUser] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await loginInServer(data);
            dispatch(saveUserLoginInState(response.data))
            console.log('User logged in successfully:', response);
            setTimeout(() => { navigate('/allSweets') }, 2000)
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

    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="http://localhost:3000/allSweets">
                    Sweetime
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                התחברות
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://cdn.cashcow.co.il/media-gallery/CcWCVwRicaw=/F-_%D7%90%D7%AA%D7%A8%D7%99-%D7%A7%D7%A9%D7%A7%D7%90%D7%95_%D7%9E%D7%99-%D7%93%D7%95%D7%9C%D7%A1%D7%94_%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%91%D7%90%D7%A0%D7%A8-%D7%A8%D7%A7%D7%A2_%D7%91%D7%90%D7%A0%D7%A8-%D7%A6%D7%A8-%D7%9E%D7%97%D7%A9%D7%91-%D7%AA%D7%96%D7%9E%D7%95%D7%9F-%D7%9B%D7%9E%D7%95-%D7%91%D7%A0%D7%99%D7%99%D7%93.gif)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
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
                   </Grid>
            </>
            );
};

  export default Login;


// 
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// ;
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// 
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//
// import { createTheme, ThemeProvider } from '@mui/material/styles';






//   return (
//     <ThemeProvider theme={defaultTheme}>

//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               התחבר
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="מייל"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="userPwd"
//                 label="סיסמה"
//                 type="password"
//                 id="userPwd"
//                 autoComplete="current-password"
//               />
//              
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 היכנס
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     שכחת סיסמה?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link to={'/signUp'} variant="body2">
//                     {"אין לך חשבון עדיין, הירשם כאן"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//    
//     </ThemeProvider>
//   );
// }
// export default Login;