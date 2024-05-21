import { Fragment, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

export const Router = ({ ROUTES, PRESERVED } : {ROUTES: Record<string, any>, PRESERVED: Record<string, any>}) => {


    console.log("Routes:::", ROUTES);

    // Add preserved routes like _app.tsx and 404.tsx.
    // TODO: add the default routes to the template, and write docs on the same.


    const routes = Object.keys(ROUTES).map((route) => {
        const path = route
            .replace(/\/src\/pages|index|\.tsx$/g, '')
            .replace(/\[\.{3}.+\]/, '*')
            .replace(/\[(.+)\]/, ':$1');

        // @ts-ignore
        return { path, component: ROUTES[route].default };
    });

    const preserved = Object.keys(PRESERVED).reduce((preserved, file) => {
        const key = file.replace(/\/src\/pages\/|\.tsx$/g, '');
        // @ts-ignore
        return { ...preserved, [key]: PRESERVED[file].default };
    }, {});


    console.log(routes);
    // Sorry for the weak types. I'm still learning TS.
    // @ts-ignore
    const App = preserved?.['_app'] || Fragment;
    // @ts-ignore
    const NotFound = preserved?.['404'] || Fragment;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map(({ path, component: Component = Fragment }) => {
                    console.log(path, Component);
                    return <Route key={path} path={path} element={<Component />} />
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};