import { Container, Grid, Typography } from '@mui/material';
import { Carousel } from 'react-carousel-minimal';
import React from 'react';

const ClothesProDtls = () => {

    const data = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
            caption: "Scotland"
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
            caption: "San Francisco"
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
            caption: "Darjeeling"
        }
    ];


    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item md={8} sm={12}>
                    <div style={{ textAlign: "center" }}>
                        <div style={{
                            padding: "0 20px"
                        }}>
                            <Carousel
                                data={data}
                                time={2000}
                                width="850px"
                                height="400px"
                                captionStyle={captionStyle}
                                radius="10px"
                                slideNumber={true}
                                slideNumberStyle={slideNumberStyle}
                                captionPosition="bottom"
                                automatic={true}
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="darkgrey"
                                slideImageFit="cover"
                                thumbnails={true}
                                thumbnailWidth="100px"
                                style={{
                                    textAlign: "center",
                                    maxWidth: "850px",
                                    maxHeight: "500px",
                                    margin: "40px auto",
                                }}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} sm={12}>
                    <Typography style={{ textAlign: 'left', marginTop: '35px' }}>
                        Description
                    </Typography>
                    <p style={{ textAlign: 'left' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente earum cum minima consectetur veniam voluptatum et, suscipit animi maxime. Sequi explicabo ipsa sint ipsam eius dolorem a voluptates vel dolorum. Incidunt doloribus est ducimus tenetur consectetur temporibus sed iste odio. Illum exercitationem debitis soluta quas officia ea facilis at, qui et nesciunt officiis ut praesentium ad
                    </p>



                    <hr />

                    <div>
                        <Typography style={{ textAlign: 'left', marginTop: '35px' }}>
                            Select size
                        </Typography>
                        <div style={{ /* display: 'flex',  *//* justifyContent: 'space-between'  */ }}>

                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>32</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>33</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>34</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>35</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>36</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>37</button> <br />
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>38</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>39</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>40</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>41</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>42</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>43</button> <br />
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>44</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>45</button>
                            <button style={{ padding: '10px', borderRadius: '5px', margin: '10px' }}>46</button>
                         

                        </div>
                           
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ClothesProDtls;








