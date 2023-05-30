import Loading from "@components/commons/loading";
import { useGetPosts } from "@hooks/posts"
import { useNavigate } from "react-router-dom";

export default function RecentSideBar() {
    const navigate = useNavigate();

    const { isLoading, data } = useGetPosts({
        skip: 0,
        take: 4,
        orderBy: JSON.stringify({
            id: 'desc'
        })
    });

    function convertMsToTime(milliseconds: number): string {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        if (hours >= 24) return hours % 24 + "days ago"

        return hours + " hr ago"
    }

    function getTime(endDate: Date): string {
        return convertMsToTime(Math.round(Number(Date.now()) - Number(endDate)));
    }

    return (
        <div className='shadow rounded w-full flex flex-col'>
            <div className='bg-slate-50 text-sm px-5 py-3 w-full'>Recent Posts</div>
            <div className='bg-white text-xs px-5 py-3 w-full space-y-3'>
                {isLoading ? <Loading /> :
                    data?.response.list.map((post, index) => (
                        <div onClick={() => navigate(`/blogs/${post.id}`)} className="hover:bg-slate-100 p-2 rounded hover:cursor-pointer space-x-5 flex" key={index}>
                            <div className="w-1/4  h-12 w-12 bg-blue-200 rounded bg-cover bg-center bg-red-200 rounded flex items-center justify-center" style={{ backgroundImage: `url(${post.imageUrl ?? "https://fastly.picsum.photos/id/11/300/300.jpg?hmac=CziSEzrosHahJDUqPHiKx6cnAZh9zlU1VM2T52T5an8"})` }} />
                            <div className="w-3/4 flex flex-col justify-between">
                                <span className="text-xs font-normal">{post.title}</span>
                                <span className="text-xs font-extralight">{getTime(new Date(post.createdAt))}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
