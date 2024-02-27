


const Home = () => {


    const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData (e.currentTarget);
        const name = form.get("name") as string
        const companyName = form.get("companyName") as string
        const email = form.get("email") as string
        const phone = form.get("phone") as string
        console.log(name, companyName, email, phone)

        // e.currentTarget.reset();
    }
    return (
        <div className="max-w-xl mx-auto text-center border-2 shadow-2xl p-5">
            <h2 className="text-3xl font-bold">Book a meeting</h2>
            <div className="space-y-5"> 
                <form onSubmit={handleBooking} className=" ">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Your Name</span>
                        </div>
                        <input name="name" type="text" placeholder="Your name" required className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Company Name (optional)</span>
                        </div>
                        <input name="companyName" type="text" placeholder="company name" required className="input input-bordered w-full" />
                    </label>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input name="email" required type="text" className="grow" placeholder="Your Email" />
                        </label>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Phone number (optional)</span>
                        </div>
                        <input name="phone" type="text" placeholder=" " required className="input input-bordered w-full" />
                    </label>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Book Meeting</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;