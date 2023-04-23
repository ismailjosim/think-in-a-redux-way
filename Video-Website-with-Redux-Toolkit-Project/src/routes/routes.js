import ErrorPage from '../Layouts/ErrorPage';
import Main from '../Layouts/Main'
import Home from '../Pages/Home';
import VideoPage from '../Pages/VideoPage';

const { createBrowserRouter } = require('react-router-dom');

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/video/:id',
                element: <VideoPage />
            },
        ]
    }
])

export default routes;
