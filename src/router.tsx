import { createBrowserRouter } from 'react-router-dom'
import PublicLayout from './layouts/public'
import DashboardLayout from './layouts/dashboard'
import HomePage from './pages/public/home'
import PostsPublicPage from './pages/public/posts'
import TagsPage, { TagDetail, CreateTag, UpdateTag } from './pages/dashboard/tags'
import PostsPage, { PostDetail, CreatePost, UpdatePost } from './pages/dashboard/posts'
import CategoriesPage, { CategoryDetail, CreateCategory, UpdateCategory } from './pages/dashboard/category'
import PostPublicDetail from '@pages/public/posts/detail'
import Login from '@pages/dashboard/login'

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
                element: <PostsPublicPage />
            },
            {
                path: 'blogs/:id',
                element: <PostPublicDetail />
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
                path: 'posts',
                element: <PostsPage />
            },
            {
                path: 'posts/:id',
                element: <PostDetail />
            },
            {
                path: 'posts/create',
                element: <CreatePost />
            },
            {
                path: 'posts/:id/update',
                element: <UpdatePost />
            },
            {
                path: 'category',
                element: <CategoriesPage />
            },
            {
                path: 'category/:id',
                element: <CategoryDetail />
            },
            {
                path: 'category/create',
                element: <CreateCategory />
            },
            {
                path: 'category/:id/update',
                element: <UpdateCategory />
            },
            {
                path: 'tags',
                element: <TagsPage />
            },
            {
                path: 'tags/:id',
                element: <TagDetail />
            },
            {
                path: 'tags/create',
                element: <CreateTag />
            },
            {
                path: 'tags/:id/update',
                element: <UpdateTag />
            },

        ]
    },
    {
        path: 'login',
        element: <Login />
    }
])