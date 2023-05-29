export default function ContactSection() {
    return (
        <section className="px-10 lg:px-24 xl:px-64 py-10 md:justify-between contact-bg flex flex-col md:flex-row items-center md:space-y-0 space-y-5 text-center md:text-left">
            <span className="font-bold text-2xl md:w-1/3">
                Subscribe Newslatter & get
                KB7 Money Alerts
            </span>
            <div className="space-x-5 md:space-y-0 space-y-5">
                <input
                    className="px-3 w-64 text-white font-normal py-2 text-xs bg-transparent border rounded-md"
                    type="text"
                    placeholder="Email Address"
                />
                <button className="border btn-text rounded-md px-4 py-2 text-xs bg-white">
                    Subscribe
                </button>
            </div>
        </section>
    )
}