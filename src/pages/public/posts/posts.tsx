import Loading from '@components/commons/loading';
import { useGetPosts } from '@hooks/posts';
import whiteArrowImage from '@assets/images/btn-arrow-white.png'
import { useSearchParams } from 'react-router-dom';
import PostGridItem from './components/PostGridItem';

export function PostsContent() {

    const [params, setSearchParam] = useSearchParams();

    let category = params.get('category') ? { name: params.get('category') } : undefined;
    let title = params.get('title') ? { contains: params.get('title') } : undefined;

    const { isLoading, data } = useGetPosts({
        skip: 0,
        take: parseInt(params.get('page') ?? '1') * 6,
        filter: JSON.stringify({
            title,
            category,
        }),
        orderBy: JSON.stringify({
            id: 'desc'
        })
    });

    const onClick = () => setSearchParam(prev => {
        let current = parseInt(prev.get('page') ?? '1') + 1
        let title = prev.get('title');
        let category = prev.get('category');

        let search = "page=" + current;
        if (category) search += "&category=" + category;
        if (title) search += "&title=" + title;

        return search;
    })

    return (
        <div className="basis-2/3 flex flex-col items-center justify-center h-full">
            {category || title ? <span className='my-5 flex flex-col md:my-0 border md:mb-5 w-full p-3 '>
                {category ? <>
                    <span className='md:my-0 w-full p-3 '>
                        Search Title - {category.name}
                    </span>
                    {title && <hr />}
                </> : null}
                {title ? <span className='md:my-0 w-full p-3 '>
                    Search Title - {title.contains}
                </span> : null}
            </span> : null}
            {isLoading ? <div className='h-full py-5'><Loading /></div> :
                (data && data?.response.list.length == 0) ? <div className='flex-1 py-36 w-full flex items-center justify-center'>No Record</div> : <>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8'>
                        {data?.response.list.map((item, index) => {
                            return (
                                <PostGridItem key={index} item={item} />
                            )
                        })}
                    </div>
                    {data?.response.list.length !== data?.response.total ?
                        <button
                            onClick={onClick}
                            className='mt-5 shadow text-white text-xs px-4 py-2 bg-blue-800 hover:bg-blue-500 hover:shadow-blue-500/50 shadow-blue-800/50 rounded-full flex items-center space-x-2'>
                            <span>Load More</span>
                            <img src={whiteArrowImage} className='w-4' />
                        </button> : null}
                </>
            }
        </div>
    )
}