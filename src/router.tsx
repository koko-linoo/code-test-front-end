import { createBrowserRouter } from 'react-router-dom'
import PublicLayout from './layouts/public'
import DashboardLayout from './layouts/dashboard'
import HomePage from './pages/public/home'
import PostsPage from './pages/public/posts'
import CategoriesPage from './pages/public/categories'
import TagsPage from './pages/public/tags'

export const router = createBrowserRouter([
    {
        path: '',
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'blogs',
                element: <PostsPage />
            },
            {
                path: 'categories',
                element: <CategoriesPage />
            },
            {
                path: 'tags',
                element: <TagsPage />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: 'dashboard'
            },
            {
                path: 'blogs',
                element: 'layout'
            },
            {
                path: 'categories',
                element: 'layout'
            },
            {
                path: 'tags',
                element: 'layout'
            },
        ]
    }
])