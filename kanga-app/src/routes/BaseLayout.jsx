import { Link, Outlet, ScrollRestoration } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BaseLayout() {
    return (
        <div>
            <Navbar />
            <main>
                <ScrollRestoration />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}