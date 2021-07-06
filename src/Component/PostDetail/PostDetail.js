import React, {useState, useEffect} from 'react'
import Post from '../Post/Post'

import api from '../API/API'

import './PostDetail.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function PostDetail(props) {
    const [POST, setPOST] = useState([])

    useEffect(async () => {
        let data = await api.postDetail(props.match.params.key)
        setPOST(data)
    }, [])

    const handleDelete = () => {
        api.postDelete(props.match.params.key)
        props.history.push('/postList')
    }

    return (
        <div>
            <Post/>
            <div className='postDetail'>
                <div className='detailTitle'>제목 : {POST.title}</div>
                <div className='detailDate'>{POST.date}</div>
                <div className='detailContent'>{POST.content}</div>

                <div className='btn-box'>
                    <p className="deleteBtn" onClick={handleDelete}>삭제</p>
                    <Link className='listBtn' to='/postList'>목록</Link>
                </div>
            </div>
        </div>
    )
}

export default PostDetail
