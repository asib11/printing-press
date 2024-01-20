import BookImage from "./BookImage";


const Book = () => {
    const images = []
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Stamp</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <BookImage key={i} image = {image}></BookImage>)
            }
            </div>
        </div>
    );
};

export default Book;