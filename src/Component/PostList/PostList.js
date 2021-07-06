import React, {useEffect, useState} from 'react'
import Post from '../Post/Post'

import './PostList.css'

import api from '../API/API'
import { Link } from 'react-router-dom'

function PostList() {


    const [LIST, setLIST] = useState([])

    let list = [];
    let data;

    const postInfo = () => {

    }

    useEffect(async () => {
        data = await api.postList()

        if(data!=null){
            list = data.map((post) => 
                <Link className="words" key={post.postToken} to={`/postDetail/${post.postToken}`}>
                    제목 : {post.title}
                </Link>
            )
        }
        setLIST(list)
    }, [data])

    return (
        <div>
            <Post/>
            <div className='PostList'>
                {LIST}
            </div>
        </div>
    )
}

export default PostList
