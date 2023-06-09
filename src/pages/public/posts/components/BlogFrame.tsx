import bgImage from '@assets/images/blog-header.png';
import CategorySideBar from '../categories';
import TagSideBar from '../tags';
import RecentSideBar from '../recent';
import { SearchField } from '@components/commons/search';
import { useParams } from 'react-router-dom';

interface BlogFrameProps {
    children: React.ReactNode;
}

export default function BlogFrame({ children }: BlogFrameProps) {
    const param = useParams()
    return (
        <section >
            <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className='bg-cover h-32 bg-center p-5 text-white flex flex-col space-y-5 items-center justify-center'
            >
                <span>Blog</span>
                <span className='text-sm'><span className='text-slate-400'>Home</span> &gt; Blog</span>
            </div>
            <div className='h-28 text-2xl bg-white text-bold flex items-center justify-center'>
                {param.id ? "" : "Latest News"}
            </div>
            <section className='px-10 lg:px-24 xl:px-64 mb-5 flex flex-col flex-col-reverse lg:flex-row lg:space-x-10'>
                <div className='basis-2/3 flex w-full h-full flex-col'>
                    {children}
                </div>
                <div className='basis-1/3 flex flex-col space-y-5 border-solid mb-10'>
                    <SearchField />

                    <CategorySideBar />

                    <RecentSideBar />

                    <TagSideBar />

                    <div className='shadow rounded p-5 bg-gradient-to-b from-cyan-600 to-blue-600 text-white space-y-5 flex flex-col items-center'>
                        <div className='text-xl text-center'>Subscribe to KBZ Money Alerts</div>
                        <input
                            type="text"
                            className='border text-center text-black px-5 py-2 bg-slate-50 text-xs rounded w-full'
                            placeholder='Email Address'
                        />
                        <button className='rounded text-xs p-2 bg-sky-500'>
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </section>
            <footer>

            </footer>
        </section>
    )
}