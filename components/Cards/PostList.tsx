import React from 'react';
import PostCard from './PostCard';
import { postProps } from '@/types/types';

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!res.ok){
        throw new Error("falide ro fatch deta")
    }

    return res.json();
}

const PostList = async () => {

    const date = await getData();
    return (
        <div className=' grid grid-cols-2 w-full'>
            {date.map((post:postProps) =>(
                <PostCard key={post.id}  {...post}/>
            ))}
        </div>
    );
};

export default PostList;