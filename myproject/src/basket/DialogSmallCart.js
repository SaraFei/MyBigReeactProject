import { useSelector } from 'react-redux';


//mui dialog 
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import SmallCart from './SmallCart';





const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const DialogSmallCart = ({ setIsClick, isClick }) => {

    let basketArr = useSelector(state => state.basketState.basketProductArr);

    let totalAmount = 0;
    Math.floor(parseInt(totalAmount));
    for (let i = 0; i < basketArr.length; i++) {
        totalAmount += basketArr[i].product.sweetPrice * basketArr[i].amount;

    }

    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setIsClick(false);
    };

    return (
        <React.Fragment>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    עגלת קניות
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={
                        handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <ul>
                            {basketArr.map(item => {
                                return <li key={item.product._id}>
                                    <SmallCart singleBasketItem={item.product} amount={item.amount} />
                                </li>
                            })}
                        </ul>
                    </Typography>


                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        לתשלום
                    </Button>
                    סהכ עבור כל המוצרים בעגלה:{Math.round(parseInt(totalAmount))}
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}


export default DialogSmallCart;