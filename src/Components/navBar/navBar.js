import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



import Button from '@mui/material/Button';
import shoppingLogo from './shoppingLogoResize.png'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.body2,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    margin: theme.spacing(1, 'auto'),
    textAlign: 'center',
    color: theme.palette.secondary.main,
}));

function FormRow() {
    return (

        <React.Fragment>


            <Grid item xs={1}>

                <Button color='secondary'>
                    <Item>Airforces</Item>
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

        </React.Fragment>

    );
    }


export default function NestedGrid() {
    return (
        <Box backgroundColor="#333333" sx={{ flexGrow: 4 }}>
            <Grid container rowSpacing={5} spacing={4}>
                <Grid item justifyContent='flex-end'>

                    <img src={shoppingLogo} />
                </Grid>
                
                    <FormRow justifyContent="flex-end" />
                    </Grid>
                        
        </Box>
    );
};