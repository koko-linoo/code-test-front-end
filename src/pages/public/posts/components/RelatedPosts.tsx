import { useGetPosts } from "@hooks/posts";
import PostGridItem from "./PostGridItem";
import Loading from "@components/commons/loading";

interface RelatedPostsProps {
    itemId: number;
    categoryId?: number;
}

export default function RelatedPosts({ itemId, categoryId }: RelatedPostsProps) {

    const { isLoading, data } = useGetPosts({
        skip: 0,
        take: 3,
        filter: JSON.stringify({
            categoryId,
            id: {
                not: itemId,
            }
        }),
        orderBy: JSON.stringify({
            id: 'desc'
        })
    });

    if (isLoading) return (
        <div className='px-10 lg:px-24 xl:px-64 py-10 bg-blue-50 flex flex-col space-y-10 items-center '>
            <Loading />
        </div >
    );

    if (!categoryId) return null

    return (
        <div className='px-10 lg:px-24 xl:px-64 py-10 bg-blue-50 flex flex-col space-y-10 items-center '>
            <span>Related Posts</span>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {data?.response.list.map((item, index) => {
                    return (
                        <PostGridItem key={index} item={item} />
                    )
                })}
            </div>
        </div>
    )
}