import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import shoppingLogo from './shoppingLogoResize.png'

<<<<<<< HEAD


=======
>>>>>>> 54f38112d06673b9055cc7df974cd288bf9bb9a6
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fca311',
    textAlign: 'center',
    color: '#14213D',
    width:'100px',
    height:'20px',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    position: 'center',
    justifyContent: 'center'
}));


function FormRow() {
    return (
        <React.Fragment>
            <Grid item xs={1}>
                <Button >
                    <Item>Airforce</Item>
                </Button>
            </Grid>
            <Grid item xs={1}>
                <Button>
                    <Item>Jordan</Item>
                </Button>
            </Grid>
            <Grid item xs={1}>
                <Button>
                    <Item>Yeezy</Item>
                </Button>
            </Grid>
            <Grid item xs={1}>
                <Button>
                    <Item>Designer</Item>
                </Button>
            </Grid>

            <Grid item xs={1}>
                <Button>
                    <Item>Login</Item>
                </Button>
            </Grid>
            <Grid item xs={1}>
                <Button>
                    <Item>SignUp</Item>
                </Button>
            </Grid>
        </React.Fragment>
    );
}


export default function NestedGrid() {
    return (
        <Box backgroundColor="black" sx={{ flexGrow: 6, height: '200px' }}>
            <Grid container rowSpacing={5} spacing={4}>
                <Grid item justifyContent='flex-start'>
                    {/* <img src={shoppingLogo} alt='logo' /> */}
                </Grid>
                <h1 className="card-header bg-light text-light p-2" style={{ fontSize: "50px", color:'white', display:'center' }}>S. A. S. S</h1>
                <FormRow justifyContent="flex-end" />
            </Grid>
        </Box>
    );
};