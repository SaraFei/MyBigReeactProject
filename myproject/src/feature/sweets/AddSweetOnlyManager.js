import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Joi from 'joi';
import { AddSweetToSever } from './SweetsApi';
import { addSweetToClient } from './sweetSlice';

//mui 
import { TextField, Button, Grid } from '@mui/material';
import { DatePicker } from '@mui/lab';




const schema = Joi.object({
    sweetName: Joi.string().pattern(new RegExp(/[A-Za-zא-ת]+/)).required("שם הוא שדה חובה").message("שם מורכב מאותיות בלבד"),
    sweetPrice: Joi.number().min(1).required("מחיר הוא שדה חובה").message("מחיר חייב להיות גדול מ1 "),
    sweetMenueFactureDate: Joi.date(),
    sweetAmount: Joi.number(),
    imgSweet: Joi.string()
});

const AddSweetOnlyManager = () => {
    let admin = useSelector(state => state.userState.currentUser);
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const validatedData = await schema.validateAsync(data);
            let newSweet = AddSweetToSever(data, admin.token);
            addSweetToClient(newSweet);
            console.log(validatedData);
        } catch (error) {
            console.error(error.details);
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={12} sm={6}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="שם הממתק"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ width: '200px' }}
                                        error={!!errors.name}
                                        helperText={errors.name ? errors.name.message : ''}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="price"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="מחיר"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ width: '200px' }}
                                        error={!!errors.price}
                                        helperText={errors.price ? errors.price.message : ''}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="sweetMenueFactureDate"
                                control={control}
                                defaultValue={null}
                                render={({ field }) => (
                                    <DatePicker
                                        {...field}
                                        label="Sweet Menu Manufacture Date"
                                        inputVariant="outlined"
                                        fullWidth
                                        sx={{ width: '200px' }}
                                        error={!!errors.sweetMenueFactureDate}
                                        helperText={errors.sweetMenueFactureDate ? errors.sweetMenueFactureDate.message : ''}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="amount"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="כמות"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ width: '200px' }}
                                        error={!!errors.amount}
                                        helperText={errors.amount ? errors.amount.message : ''}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="img"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="ניתוב לתמונה"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ width: '200px' }}
                                        error={!!errors.img}
                                        helperText={errors.img ? errors.img.message : ''}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                הוסף ממתק
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default AddSweetOnlyManager;
