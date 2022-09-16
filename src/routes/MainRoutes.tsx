import { useRoutes } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Photos } from '../Pages/Photos';
import { Photo } from '../Pages/Photo';

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/album/:id', element: <Photos /> },
        { path: '/photo/:id', element: <Photo /> }
    ]);
}
