const PostHeader = ({title, coverImage, date}) => {
    return (
        <div className='mt-[1.5em] mb-[1.5em]'>
            <h1 className='text-4xl pb-1'>{title}</h1>
            <p className='text-base text-slate-400'>{date}</p>
        </div>
    )
}

export default PostHeader
