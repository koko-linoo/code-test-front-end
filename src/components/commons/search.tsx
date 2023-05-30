import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";


export function SearchField() {
    const [searchPost, setSearchPost] = useState('')

    const [_, setSearchParam] = useSearchParams();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setSearchParam(prev => {
                let current = prev.get('page') ?? '1';
                let category = prev.get('category');

                let search = "page=" + current;
                if (category) search += "&category=" + category;
                if (searchPost) search += "&title=" + searchPost;

                return search;
            })
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchPost])

    return (
        <input
            className='border px-5 py-3 bg-slate-50 text-xs rounded w-full'
            placeholder='Search here'
            onChange={(e) => setSearchPost(e.target.value)}
        />
    )
}