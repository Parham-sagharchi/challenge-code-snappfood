import { BASE_URL } from './config'

interface Route {
    path: string;
    url: string;
}

export const Landing: Route = {
    path: "/",
    url: `${BASE_URL}/`,
};

export const Restaurant: Route = {
    path: "/restaurant",
    url: `${BASE_URL}/restaurant`,
};
