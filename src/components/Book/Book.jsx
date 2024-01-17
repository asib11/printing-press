import BookImage from "./BookImage";
import img1 from '/services/book/book design.jpg'
import img2 from '/services/book/Gramya-Ayurveda-Kerala-Professional-Branding-Brochure-Design.jpg'

const Book = () => {
    const images = [img1,img2]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Book</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <BookImage key={i} image = {image}></BookImage>)
            }
            </div>
        </div>
    );
};

export default Book;