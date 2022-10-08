import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from '../components/Home';
import Books from '../components/Books';
import About from '../components/About';
import ErrorPage from '../components/ErrorPage';
import BookDetails from "../components/BookDetails";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/books',
                loader : () => fetch('https://api.itbook.store/1.0/new'),
                element : <Books></Books>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/book/:id',
                loader : ({params}) =>{
                    return  fetch(`https://api.itbook.store/1.0/books/${params.id}`)
                } ,
                element : <BookDetails></BookDetails>
            }
        ]
    }
])