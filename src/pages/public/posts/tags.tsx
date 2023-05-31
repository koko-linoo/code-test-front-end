import { useGetTags } from "@hooks/tags";

export default function TagSideBar() {

    const { isLoading, data } = useGetTags();

    return (
        <div className='shadow rounded w-full'>
            <div className='bg-slate-50 text-sm px-5 py-3 w-full'>Tags</div>
            <div className='bg-white text-xs px-5 py-3 w-full flex flex-wrap'>
                {isLoading ? <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
                    : data?.response?.list.map((cat, index) => {
                        return (
                            <div key={`${cat.name} ${index}`} className="flex justify-between bg-slate-100 p-2 m-1 rounded-lg border-solid shadow-sm">
                                <span className="font-extralight text-xs">
                                    {cat.name}
                                </span>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}