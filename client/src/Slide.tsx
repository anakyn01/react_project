import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap';

const Slide = () => {
    return(
        <Carousel data-bs-them="dark">

            <Carousel.Item>
                <img 
                className='d-block w-100'
                src="img/1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>jordan</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className='d-block w-100'
                src="img/2.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                    <h5>second slide label</h5>
                    <p>jordan</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className='d-block w-100'
                src="img/3.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>second slide label</h5>
                    <p>jordan</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}
export default Slide;