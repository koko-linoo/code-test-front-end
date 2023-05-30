import Loading from "@components/commons/loading";
import { useGetCategorys } from "@hooks/category"
import { useSearchParams } from "react-router-dom";

export default function CategorySideBar() {

    const { isLoading, data } = useGetCategorys();

    const [search, setSearchParam] = useSearchParams();

    const onClick = (name?: string) => setSearchParam(prev => {
        let current = prev.get('page') ?? '1';
        let category = prev.get('category');

        let title = prev.get('title');

        let search = "page=" + current;

        if (title) search += "&title=" + title;

        if (name && category !== name) search += "&category=" + name;

        return search;
    })

    const active = "flex justify-between bg-blue-200 shadow hover:cursor-pointer shadow-blue-200 p-2";
    const unactive = "flex justify-between hover:bg-blue-50 hover:cursor-pointer hover:shadow hover:shadow-blue-50 p-2";

    return (
        <div className='shadow rounded w-full'>
            <div className='bg-slate-50 text-sm px-5 py-3 w-full'>Categories</div>
            <div className='bg-white text-xs p-5 w-full space-y-1'>
                {
                    isLoading ? <Loading />
                        : data?.map((cat, index) => {
                            return (
                                <div
                                    onClick={() => onClick(cat.name)} key={`${cat.name} ${index}`}
                                    className={`${search.get('category') === cat.name ? active : unactive}`}
                                >
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