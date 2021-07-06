import React, {useEffect} from 'react'
import Post from '../Post/Post'

import './PostList.css'

import api from '../API/API'
import PostForm from '../PostForm/PostForm';

function PostList() {

    let list = [];
    let data=0;

    useEffect(async () => {
        data = await api.postList()

        if(data!=null){
            for(let i=0; i<data.length; i++){
                list.push(
                    // <div>
                    //     <a key={data[i].postToken} className='words'>{data[i].title}</a>
                    // </div>
                    "dddd"
                )
            }
        }
        console.log(list);
    }, [])

    return (
        <div>
            <Post/>
            <div className='PostList'>
                {list}
            </div>
        </div>
    )
}

export default PostList
