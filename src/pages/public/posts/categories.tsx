import Loading from "@components/commons/loading";
import { useGetCategorys } from "@hooks/category"

export default function CategorySideBar() {

    const { isLoading, data } = useGetCategorys();

    return (
        <div className='shadow rounded w-full'>
            <div className='bg-slate-50 text-sm px-5 py-3 w-full'>Categories</div>
            <div className='bg-white text-xs p-5 w-full space-y-5'>
                {
                    isLoading ? <Loading />
                        : data?.map((cat, index) => {
                            return (
                                <div key={`${cat.name} ${index}`} className="flex justify-between">
                                    <span className="font-extralight text-xs">
                                        {cat.name}
                                    </span>
                                    <span>
                                        {cat.posts.length}
                                    </span>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}