import React from 'react'
import {Link} from 'react-router-dom';
import './Post.css';

function Post() {
    return (
        <div className="Post">
            <div className="header">
                <div className="bin"></div>
                <Link className="title" to='/postList'>게시판</Link>
                <div className='logoutBtn'>로그아웃</div>
            </div>

            <div className='post-box'>
                <Link className='postBtn' to='/postRegister'>글쓰기</Link>
            </div>
        </div>
    )
}

export default Post
