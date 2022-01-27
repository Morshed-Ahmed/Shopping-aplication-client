import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BannerImage from '../../../image/Group 6.png';
import Divider from '@mui/material/Divider';


const ShopStyle = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    /* const cata = products.category;
    console.log(cata) */

    const filteredProducts = products.filter(pt => pt.category === "clothes" && pt.pro === "show")
    console.log(filteredProducts)
    return (
        <Container sx={{ marginTop: '60px', marginBottom: '50px' }}>
            <Typography sx={{
                maxWidth: '400px', margin: 'auto', fontWeight: "bold", fontFamily: "Mulish",
                fontSize: 'calc(2rem + 1vw)',
            }}>
                Shop your style
            </Typography>
            <hr style={{ width: '50%' }} />

            <Divider style={{ color: 'red' }}>Shop your style</Divider>
            <p style={{ textAlign: 'center', marginTop: '40px', marginBottom: '50px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Vitae gravida cursus adipiscing
                viverra at tortor, egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies. <br />
                Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.</p>

            <Grid sx={{ margin: 'auto', width: '100%', height: '100$' }} container spacing={2}>

                {
                    filteredProducts.map(product => <Grid key={product.key} sx={{ maxWidth: '296px', height: '542px' }} item xs={6} sm={6} md={3}>
                        <Card >
                            <CardActionArea>

                                <CardMedia
                                    component="img"
                                    height="457px"
                                    image={product.image}
                                    alt="green iguana"
                                />
                                <CardContent>

                                    <Typography variant="body2" color="#000000">
                                        {product.productName} <br />
                                        {product.productPrice}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    )

                }

            </Grid>
        </Container>
    );
};

export default ShopStyle;