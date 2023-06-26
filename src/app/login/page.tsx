export default function LoginScreen() {

    

    return (
        <main>
            <section className="flex justify-center items-center min-h-screen bg-slate-50">
                <div className="w-full sm:w-2/4 md:w-2/4 lg:w-2/5 xl:w-1/3 p-4 sm:p-8 md:p-12 lg:p-16 bg-white shadow-lg rounded-3xl">
                    <div className="flex justify-center mb-8">
                        <img className="h-12" src="/assets/logo.jpg" alt="" />
                    </div>
                    <h2 className="text-center text-3xl md:text-4xl font-semibold mb-4">Sign in</h2>
                    <p className="text-center text-sm text-black mb-4">
                        You can sign in via your email or Gmail account
                    </p>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email-input"
                        className="w-full text-xs px-4 py-2 border border-gray-300 rounded-md mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password-input"
                        className="w-full text-xs px-4 py-2 border border-gray-300 rounded-md mb-4"
                    />
                    <button className="w-full h-8 font-bold text-xs rounded-md bg-zinc-500 text-white mb-4">
                        Sign in
                    </button>
                    <div className="flex justify-between text-xs">
                        <a href="https://app.popupsmart.com/register" className="hover:text-blue-500">
                            Not a member? Register
                        </a>
                        <a href="https://app.popupsmart.com/forgot-password" className=" hover:text-blue-500">
                            Forgot password?
                        </a>
                    </div>
                    <button className="w-full h-8 font-bold text-xs rounded-md mt-5 bg-blue-500 text-white">
                        Sign in with Google
                    </button>
                </div>
            </section>
        </main>
    );
}
