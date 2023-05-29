import blueArrowImage from '@assets/images/btn-arrow-blue.png'
import Loading from '@components/commons/loading';
import { useGetPosts } from '@hooks/posts';
import whiteArrowImage from '@assets/images/btn-arrow-white.png'
import { useSearchParams } from 'react-router-dom';

export function PostsContent() {

    const [params, setSearchParam] = useSearchParams();

    const { isLoading, data } = useGetPosts({
        skip: 0,
        take: parseInt(params.get('page') ?? '1') * 6,
        orderBy: JSON.stringify({
            id: 'desc'
        })
    });

    const onClick = () => setSearchParam(prev => {
        let current = parseInt(prev.get('page') ?? '1') + 1
        return "page=" + current;
    })

    return (
        <div className="basis-2/3 flex flex-col items-center">
            {isLoading ? <Loading /> :
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        {data?.response.list.map((item, index) => {
                            const date = new Date(item.createdAt);
                            return (
                                <div key={index} className="shadow-md rounded flex flex-col">
                                    <div className="bg-cover bg-center h-60 bg-red-200 rounded flex items-center justify-center" style={{ backgroundImage: `url(${item.imageUrl ?? "https://fastly.picsum.photos/id/11/300/300.jpg?hmac=CziSEzrosHahJDUqPHiKx6cnAZh9zlU1VM2T52T5an8"})` }} />
                                    <div className="p-5 space-y-3">
                                        <div className="font-bold leading-6">
                                            {item.title}
                                        </div>
                                        <div className="flex justify-between items-center space-x-2">
                                            <div className="w-10 h-10 rounded-full bg-sky-200" />
                                            <div className="flex-1 text-sm">{item.user.username}</div>
                                            <div className="text-xs">
                                                {date.toDateString()}
                                            </div>
                                        </div>
                                        <div className="text-xs font-extralight leading-6">
                                            {item.content}
                                        </div>
                                        <button className="active:bg active:bg-sky-300 text-xs rounded-full hover:shadow-lg hover:bg-sky-200 hover:shadow-blue-200/50 px-4 py-2 space-x-2 flex items-center">
                                            <span className='text-sky-900'>Read More</span>
                                            <img className='w-4' src={blueArrowImage} />
                                        </button>
                                    </div>
                                </div>
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