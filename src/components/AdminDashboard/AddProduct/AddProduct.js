import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, ListSubheader, MenuItem, Paper, Select, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AddProduct = () => {


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div>
            <Typography sx={{ fontSize: 'bold', marginBlockEnd: 3 }}>Add Product</Typography>
            <Paper>
                <Grid sx={{ padding: 4 }} container spacing={2}>
                    <Grid /* sx={{ border: 1 }} */ item xs={4}>
                        hi
                    </Grid>
                    <Grid sx={{ /* border: 1, */ padding: 4 }} item xs={8}>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <InputLabel sx={{ paddingBlockEnd: 2 }} >
                                    PRODUCT NAME
                                </InputLabel>

                                <TextField
                                    id="outlined-number"
                                    sx={{ width: '100%' }}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>

                                <InputLabel sx={{ paddingBlockEnd: 2 }} >
                                    SELECT CATEGORIES
                                </InputLabel>
                                <FormControl sx={{ minWidth: '100%' }}>
                                    <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
                                    <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                                        <option aria-label="None" value="" />
                                        <optgroup label="Category 1">
                                            <option value={1}>Option 1</option>
                                            <option value={2}>Option 2</option>
                                        </optgroup>
                                        <optgroup label="Category 2">
                                            <option value={3}>Option 3</option>
                                            <option value={4}>Option 4</option>
                                        </optgroup>
                                    </Select>
                                </FormControl>

                            </Grid>
                        </Grid>

                        <InputLabel sx={{ paddingBlockEnd: 2, paddingTop: 5 }} >
                            SLUG
                        </InputLabel>

                        <TextField
                            id="outlined-number"
                            sx={{ width: '100%' }}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />


                        <InputLabel sx={{ paddingBlockEnd: 2, paddingTop: 5 }} >
                            SHORT DESCRIPTION
                        </InputLabel>

                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}

                            style={{ width: '100%', height: 100 }}
                        />

                        <Box>

                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <InputLabel sx={{ paddingBlockEnd: 0, paddingTop: 4 }} >
                                        Color
                                    </InputLabel>

                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ width: 25, height: 25, backgroundColor: 'black', borderRadius: 1, marginTop: 2, marginLeft: 2 }}></Box>
                                        <Box sx={{ width: 25, height: 25, backgroundColor: 'black', borderRadius: 1, marginTop: 2, marginLeft: 2 }}></Box>
                                        <Box sx={{ width: 25, height: 25, backgroundColor: 'black', borderRadius: 1, marginTop: 2, marginLeft: 2 }}></Box>
                                        <Box sx={{ width: 25, height: 25, backgroundColor: 'black', borderRadius: 1, marginTop: 2, marginLeft: 2 }}></Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={8}>
                                    <InputLabel sx={{ paddingBlockEnd: 0, paddingTop: 4 }} >
                                        Size
                                    </InputLabel>
                                    <FormControl component="fieldset">

                                        <FormGroup aria-label="position" row>

                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox />}
                                                label="S"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox />}
                                                label="M"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox />}
                                                label="L"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox />}
                                                label="XL"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel

                                                value="end"
                                                control={<Checkbox />}
                                                label="XXL"
                                                labelPlacement="end"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>

                        </Box>


                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <InputLabel sx={{ paddingBlockEnd: 2, paddingTop: 5 }} >
                                    PRICE (In USD)
                                </InputLabel>

                                <TextField
                                    id="outlined-number"
                                    sx={{ width: '100%' }}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel sx={{ paddingBlockEnd: 2, paddingTop: 5 }} >
                                    QUANTITY
                                </InputLabel>

                                <TextField
                                    id="outlined-number"
                                    sx={{ width: '100%' }}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>


                        </Grid>

                        <InputLabel sx={{ paddingBlockEnd: 2, paddingTop: 5 }} >
                            FULL DETAIL
                        </InputLabel>

                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}

                            style={{ width: '100%', height: 150 }}
                        />

                        <InputLabel sx={{ paddingBlockEnd: 2, paddingTop: 5 }} >
                            PRODUCT TAG
                        </InputLabel>

                        <TextField
                            id="outlined-number"
                            sx={{ width: '100%' }}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <Button sx={{ marginTop: 5 }} variant="contained" size="medium">
                            Submit
                        </Button>

                    </Grid>

                </Grid>
            </Paper>
        </div>
    );
};

export default AddProduct;