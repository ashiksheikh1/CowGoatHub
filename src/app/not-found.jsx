import Link from 'next/link';


const NotFound = () => {
    return (
        <div>
            <h2 className='text-3xl text-red font-bold'>this page is not available</h2>
           <Link href="/"><button className='btn btn-primary'>Back To Home</button></Link>
        </div>
    );
};

export default NotFound;