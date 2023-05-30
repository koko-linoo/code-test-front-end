import Loading from "@components/commons/loading";
import { useGetPost } from "@hooks/posts";
import { useParams } from "react-router-dom"
import BlogFrame from "./components/BlogFrame";
import RelatedPosts from "./components/RelatedPosts";

export default function PostDetail() {
    const { id } = useParams();

    const { isLoading, data } = useGetPost(parseInt(id!));

    return (
        <div>
            <BlogFrame>
                {isLoading ? <Loading /> : (
                    <div className="flex flex-col space-y-5">
                        <span className="font-bold text-2xl">
                            {data?.title}
                        </span>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center space-x-5">
                                <div className="rounded-full w-10 h-10 bg-blue-200" />
                                <div>{data?.user?.username}</div>
                            </div>
                            <span>
                                {(new Date(data?.createdAt ?? "")).toDateString()}
                            </span>
                        </div>

                        <div className="bg-cover bg-center h-96 w-full bg-red-200 rounded flex items-center justify-center" style={{ backgroundImage: `url(${data?.imageUrl ?? "https://fastly.picsum.photos/id/11/300/300.jpg?hmac=CziSEzrosHahJDUqPHiKx6cnAZh9zlU1VM2T52T5an8"})` }} />
                        <p>{data?.content}</p>
                        {data?.benefit && (
                            <div className="flex flex-col space-y-5">
                                <span className="text-l font-bold">Benefit</span>
                                <p>{data?.benefit}</p>
                            </div>
                        )}
                    </div>
                )}
            </BlogFrame>
            <RelatedPosts itemId={parseInt(id!)} categoryId={data?.categoryId} />
        </div>
    )
}