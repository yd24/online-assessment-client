import { useRouteError } from "react-router-dom";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ErrorPage(props) {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center p-[200px] gap-10">
                <h1 className="text-7xl">Oops!</h1>
                <div className="flex flex-col items-center gap-5">
                    <p className="text-4xl">Something went wrong!</p>
                    <em className="text-2xl">{`Error Code: ${error.status} ${error.statusText}`}</em>
                </div>
            </div>
            <Footer />
        </>
    );
}
