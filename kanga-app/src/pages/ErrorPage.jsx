import { useRouteError } from "react-router-dom";

export default function ErrorPage(props) {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>We couldn't find that page.</p>
            <i>{error.statusText || error.message}</i>
        </div>
    );
}
