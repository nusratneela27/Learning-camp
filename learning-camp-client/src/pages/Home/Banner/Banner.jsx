import './Banner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='md:px-32 pt-16'>
            <Slider {...settings}>
                <div className='banner1 text-white ps-16'>
                    <h1 className='font w-1/2'>Learn New Languages and Move Forward</h1>
                    <h2 className='text-2xl w-1/2 p'>Get access  from the experts and connect with a community of native speakers to help you master words faster.</h2>
                    <button className="btn btn-outline btn-access border-0 border-b-4 bg-gradient-to-r from-slate-500 via-slate-400 to-amber-100 mt-4 text-black">Get Started</button>
                </div>
                <div className='banner2 text-white ps-16'>
                    <h1 className='font w-1/2'>Learn New Languages and Move Forward</h1>
                    <h2 className='text-2xl w-1/2 p'>Get access  from the experts and connect with a community of native speakers to help you master words faster.</h2>
                    <button className="btn btn-outline btn-access border-0 border-b-4 bg-gradient-to-r from-slate-500 via-slate-400 to-amber-100 mt-4 text-black">Get Started</button>
                </div>
            </Slider >
        </div >
    );
};

export default Banner;