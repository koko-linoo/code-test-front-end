import Loading from "@components/commons/loading";
import { useGetPosts } from "@hooks/posts";
// import rightImage from '@assets/images/right.png'
import leftImage from '@assets/images/left.png'
import 'react-slideshow-image/dist/styles.css';
import { CategoryModel } from "@services/categoryService";
import { useGetCategorys } from "@hooks/category";
import { useState } from "react";
import CustomButton from "@components/commons/button";
import { useNavigate } from "react-router-dom";
import PostGridItem from "@pages/public/posts/components/PostGridItem";

export default function PostSection() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const { isLoading, data } = useGetCategorys();

    return (
        <section className="px-10 lg:px-24 xl:px-64 py-10 relative">
            {isLoading ? <Loading /> :
                <>
                    <div className="absolute bottom-0 top-0 left-5 xl:left-44 flex items-center">
                        <button onClick={() => setIndex(prev => prev != 0 ? prev - 1 : prev)} className="p-3 bg-blue-200 rounded-lg">
                            <img className="w-2 h-2" src={leftImage} />
                        </button>
                    </div>
                    {data && data?.response.list.length !== 0 && <CategorizedPosts category={data?.response.list[index]!} />}
                    <div className="absolute bottom-0 top-0 right-5 xl:right-44 flex items-center">
                        <button onClick={() => setIndex(prev => prev !== data!.response.list.length - 1 ? prev + 1 : prev)} className="p-3 bg-blue-200 rounded-lg">
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
                    return (
                        <PostGridItem item={item} key={index} />
                    )
                })}
            </div> : <div className="font-bold text-md">No Post Yet</div>}
        </div>
    )
}