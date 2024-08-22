import '../assets/css/global.css';

export default function Loading() {
    return (
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
            <div className="loader"></div>
            <h1>Loading...</h1>
        </div>
    );
}