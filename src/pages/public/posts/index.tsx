import bgImage from '@assets/images/blog-header.png';
import CategorySideBar from './categories';
import TagSideBar from './tags';
import RecentSideBar from './recent';
import { PostsContent } from './posts';

export default function PostsPage() {
    return (
        <section >
            <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className='bg-cover h-32 bg-center p-5 text-white flex items-center justify-center'
            >
                Blog
            </div>
            <div className='h-28 text-2xl bg-white text-bold flex items-center justify-center'>
                Latest News
            </div>
            <section className='px-10 lg:px-24 xl:px-64 mb-5 flex flex-col flex-col-reverse lg:flex-row lg:space-x-10'>
                <PostsContent />
                <div className='basis-1/3 flex flex-col space-y-5 border-solid mb-10'>
                    <input
                        className='border px-5 py-3 bg-slate-50 text-xs rounded w-full'
                        placeholder='Search here'
                    />

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