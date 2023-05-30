import Loading from "@components/commons/loading";
import { useGetPosts } from "@hooks/posts";
import blueArrowImage from '@assets/images/btn-arrow-blue.png'
// import rightImage from '@assets/images/right.png'
import leftImage from '@assets/images/left.png'
import 'react-slideshow-image/dist/styles.css';
import { CategoryModel } from "@services/categoryService";
import { useGetCategorys } from "@hooks/category";
import { useState } from "react";
import CustomButton from "@components/commons/button";
import { useNavigate } from "react-router-dom";

export default function PostSection() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const { isLoading, data = [] } = useGetCategorys();

    return (
        <section className="px-10 lg:px-24 xl:px-64 py-10 relative">
            {isLoading ? <Loading /> :
                <>
                    <div className="absolute bottom-0 top-0 left-5 xl:left-44 flex items-center">
                        <button onClick={() => setIndex(prev => prev != 0 ? prev - 1 : prev)} className="p-3 bg-blue-200 rounded-lg">
                            <img className="w-2 h-2" src={leftImage} />
                        </button>
                    </div>
                    {data.length !== 0 && <CategorizedPosts category={data[index]} />}
                    <div className="absolute bottom-0 top-0 right-5 xl:right-44 flex items-center">
                        <button onClick={() => setIndex(prev => prev !== data.length - 1 ? prev + 1 : prev)} className="p-3 bg-blue-200 rounded-lg">
                            <img className="w-2 h-2 rotate-180" src={leftImage} />
                        </button>
                    </div>
                </>
            }
            <div className="w-full flex mt-10 justify-center">
                <CustomButton onClick={() => navigate('/blogs')} label="Load More" type="red" />
            </div>
        </section>
    )
}

interface CategorizedPostsProps {
    category: CategoryModel;
}

export function CategorizedPosts({ category }: CategorizedPostsProps) {

    const navigate = useNavigate();
    const { isLoading, data } = useGetPosts({
        skip: 0,
        take: 3,
        filter: JSON.stringify({
            categoryId: category.id,
        }),
        orderBy: JSON.stringify({
            id: 'desc'
        })
    });

    return (
        <div className="flex text-xl font-bold flex-col items-center space-y-5">
            <span>{category.name}</span>
            {isLoading ? <Loading /> : data && data.response.list.length !== 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 md:gap-8'>
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
                                <button onClick={() => navigate(`blogs/${item.id}`)} className="active:bg active:bg-sky-300 text-xs rounded-full hover:shadow-lg hover:bg-sky-200 hover:shadow-blue-200/50 px-4 py-2 space-x-2 flex items-center">
                                    <span className='text-sky-900'>Read More</span>
                                    <img className='w-4' src={blueArrowImage} />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div> : <div className="font-bold text-md">No Post Yet</div>}
        </div>
    )
}