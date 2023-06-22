import Date from '@/components/Date';

interface PostHeaderProps {
  title: string;
  coverImage: string;
  date: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, coverImage, date }) => {
  return (
    <div className='mt-[1.5em] mb-[1.5em]'>
      <h1 className='text-4xl pb-1'>{title}</h1>
      {/* <p className='text-base text-slate-400'>{date}</p> */}
      <Date className='inline-block min-w-[8em]' dateString={date} />
    </div>
  );
};

export default PostHeader;