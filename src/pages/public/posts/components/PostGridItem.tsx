import { PostModel } from "@services/postService";
import { useNavigate } from "react-router-dom";
import blueArrowImage from '@assets/images/btn-arrow-blue.png'

interface PostGridItemProps {
    item: PostModel;
}

export default function PostGridItem({ item }: PostGridItemProps) {
    const date = new Date(item.createdAt);
    const navigate = useNavigate();

    return (
        <div className="shadow-md rounded flex flex-col">
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
                <button onClick={() => navigate(`/blogs/${item?.id}`)} className="active:bg active:bg-sky-300 text-xs rounded-full hover:shadow-lg hover:bg-sky-200 hover:shadow-blue-200/50 px-4 py-2 space-x-2 flex items-center">
                    <span className='text-sky-900'>Read More</span>
                    <img className='w-4' src={blueArrowImage} />
                </button>
            </div>
        </div>
    )
}