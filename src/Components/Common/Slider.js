import { useEffect } from 'react';
const $ = jQuery;

const Slider = ({ attributes, id }) => {
    const { slides } = attributes;

    useEffect(() => {
        $(document).ready(function () {
            $(`#${id} .slickSlider`).slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });
        });
    }, [])


    return <div className="slickSlider">
        {slides.map((slide, index) => <Slide key={index} slide={slide} index={index} />)}
    </div>
}
export default Slider;

const Slide = ({ slide }) => {
    const { image, caption } = slide;
    return <div className="slide" style={{ height: '300px' }}>
        {image && <img src={image} alt={caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        {caption && <p>{caption}</p>}
    </div>
}