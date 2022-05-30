import React from 'react'
import Product from '../Product/Product.component'
import './Home.styles.css'
const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className='home__image'
                    src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg" alt="amazon Banner" />

                <div className="home__row">
                    <Product
                        id='a12ddww34'
                        title="The Lean Startup: How Today' s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={14.60}
                        image='https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY218_.jpg'
                        rating={3} />
                    <Product
                        id='b5wwwaaa678'
                        title='
The $100 Startup: Reinvent the Way You Make a Living, Do What You Love, and Create a New Future'
                        price={13.99}
                        image='https://m.media-amazon.com/images/I/81CIfme48HL._AC_UY218_.jpg'
                        rating={5} />
                </div>
                <div className="home__row">

                    <Product
                        id='c910tyu11'
                        title='Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black' price={73.38}
                        image='https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL320_.jpg'
                        rating={5} />
                    <Product
                        id='d21ghjkl314'
                        title='Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)' price={130.60}
                        image='https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX679_.jpg'
                        rating={3} />
                    <Product
                        id='e156hjkl;617'
                        title='HP 15-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (15-dy2024nr, Natural silver)'
                        price={520.99}
                        image='https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_UL320_.jpg'
                        rating={5} />

                </div>
                <div className="home__row">
                    <Product
                        id='f15ghjkl6617'
                        title='TCL 65-inch 6-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 65R635, 2021 Model'
                        price={2120.99}
                        image='https://m.media-amazon.com/images/I/91CXxVtVkAL._AC_UY218_.jpg'
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home