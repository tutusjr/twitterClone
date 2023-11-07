
export default function Post ({ post }) {
    return(
        <div className="px-4 gap-3 border-b border-[color:var(--background-third)] flex">
        <img src={post.account.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
        <div className="flex-1">
            <header>
                <div className="leading-5">
                    <a href="#" className="hover:underline flex items-center font-bold">
                    {post.account.fullName}
                    {post.account?.verified && (
                        <svg viewBox="0 0 16 16" className="w-3 h-3 ml-1">
                            <path
                                fillRule="evenodd"
                                d="M5.5 11.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0-4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0-4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
                            />
                        </svg>
                        )}
                    </a>
                </div>
            </header>
        </div>
        </div>
    )
}