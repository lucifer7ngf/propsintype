import { postProps } from '@/types/types';
import React from 'react';

const PostCard = (props: postProps) => {
    return (
        <div className='postCard bg-slate-500 p-4 m-4 '>
            <h2 className='text-xl text-center mb-2 font-bold'>{props.title}</h2>
            <p className=' font-thin text-sm text-gray-200'>{props.body}</p>
        </div>
    );
};

export default PostCard;