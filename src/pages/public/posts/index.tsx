import { PostsContent } from './posts';
import BlogFrame from './components/BlogFrame';
import CustomButton from '@components/commons/button';

export default function PostsPage() {
    return (
        <section >
            <BlogFrame>
                <PostsContent />
            </BlogFrame>
            <footer className='w-full bg-blue-50 h-60 flex flex-col items-center justify-center space-y-5'>
                <span className='text-2xl'>
                    Have Questions or Need to
                </span>
                <span className='text-2xl'>
                    Book a Consultation?
                </span>
                <CustomButton type='red' label={'Contact us Now'} />
            </footer>
        </section>
    )
}