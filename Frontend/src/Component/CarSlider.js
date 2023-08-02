import React, { useEffect } from 'react'
import img1 from '../asset/imgs/1.png'
import img2 from '../asset/imgs/2.png'
import img3 from '../asset/imgs/9.png'
import img4 from '../asset/imgs/4.png'
import img5 from '../asset/imgs/5.png'
import img6 from '../asset/imgs/6.png'
import img7 from '../asset/imgs/7.png'
import img8 from '../asset/imgs/8.png'
import { Link, useNavigate } from 'react-router-dom'

function CarSlider() {

    return (

        <>
            <div class="container cursorwidth" >
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators mt-5 pt-5 "
                        style={{ color: '#fcf6ba' }}
                    >

                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1" style={{

                            backgroundColor: "linear-gradient(#bf953f, #333333)",
                            color: '#fcf6ba'
                        }}></button>
                        <button type="button" style={{

                            backgroundColor: "linear-gradient(#bf953f, #333333)",
                        }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" style={{

                            backgroundColor: "linear-gradient(#bf953f, #333333)",
                        }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        < button type="button" style={{

                            backgroundColor: "linear-gradient(#bf953f, #333333)",
                        }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" ></button >
                        < button type="button" style={{

                            backgroundColor: "linear-gradient(#bf953f, #333333)",
                        }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" ></button >
                        < button type="button" style={{

                            backgroundColor: "linear-gradient(#bf953f, #333333)",
                        }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6" ></button >
                        < button type="button" style={{

                            backgroundColor: "linear-gradient(#bf953f, #333333)",
                        }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7" ></button >
                        < button type="button" style={{

                            backgroundColor: "linear-gradient(#bf953f, #333333)",
                        }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8" ></button >

                    </div>
                    < div class="carousel-inner" >
                        <div class="carousel-item cimages active">
                            <Link to="/images"> <img src={img1} class=" cimg  d-block img-fluid mx-auto" alt="..." /></Link>
                            <h1 className='mx-auto text-white text-center '>
                                2019 Mercedes Benz S Class
                            </h1>
                        </div>
                        <div class="carousel-item cimages">
                            <Link to="/images"> <img src={img2} class="cimg d-block img-fluid mx-auto" alt="..." /></Link>
                            <h1 className='mx-auto text-white text-center '>
                                2021 Chevrolet Suburban
                            </h1>
                        </div>
                        <div class="carousel-item cimages">
                            <Link to="/images"> <img src={img3} class="cimg  d-block img-fluid mx-auto" alt="..." /></Link>
                            <h1 className='mx-auto text-white text-center '>
                                2021 Chevrolet Suburban
                            </h1>
                        </div>
                        <div class="carousel-item cimages">
                            <Link to="/images"> <img src={img4} class="cimg d-block img-fluid mx-auto" alt="..." /></Link>
                            <h1 className='mx-auto text-white text-center '>
                                2019 Mercedes Benz Limo Sprinter
                            </h1>
                        </div>
                        <div class="carousel-item cimages">
                            <Link to="/images"> <img src={img5} class="cimg d-block img-fluid mx-auto" alt="..." /></Link>
                            <h1 className='mx-auto text-white text-center '>
                                2019 Mercedes Benz Limo Sprinter
                            </h1>
                        </div>
                        <div class="carousel-item cimages">
                            < Link to="/images"> <img src={img6} class="cimg d-block img-fluid mx-auto" alt="..." /></Link>
                            <h1 className='mx-auto text-white text-center '>
                                2023 Cadillac Escalade
                            </h1>
                        </div>
                        <div class="carousel-item cimages">
                            <Link to="/images"> <img src={img7} class="cimg d-block img-fluid mx-auto" alt="..." /></Link>
                            <h1 className='mx-auto text-white text-center '>
                                2018 Grech 25 Passenger Bus
                            </h1>
                        </div>
                        <div class="carousel-item cimages">
                            <Link to="/images"> <img src={img8} class="cimg d-block img-fluid mx-auto" alt="..." /></Link>
                            <h1 className='mx-auto text-white text-center '>
                                This is dumy text
                            </h1>
                        </div>
                    </div >
                    <button className="carousel-control-prev arobtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon  " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next arobtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>

    )
}

export default CarSlider







