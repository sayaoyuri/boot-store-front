import axios from "axios";

export const server = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});


export const publicPaths = ['/', '/sign-in', '/sign-up', '/cart'];
