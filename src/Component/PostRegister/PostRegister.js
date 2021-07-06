import React, {useState} from 'react'
import Post from '../Post/Post.js'
import api from '../API/API'
import './PostRegister.css'

function PostRegister(props) {

    const [TITLE, setTITLE] = useState('')  
    const [CONTENT, setCONTENT] = useState('')

    const handleSend = async () => {
        console.log(TITLE, CONTENT);
        await api.post(TITLE, CONTENT)
        props.history.push('/postList')
    }

    return (
        <div>
            <Post/>
            <div className="PostRegister">
                <div className='title'>글 작성하기</div>
                <input className='postTitle' type='text' placeholder='제목'
                    onChange={
                        function(e){
                            setTITLE(e.target.value)
                        }
                    }
                />
                <input className='postContent' type='text' placeholder='내용'
                    onChange={
                        function(e){
                            setCONTENT(e.target.value)
                        }
                    }
                />
                <a className='submitBtn' onClick={
                    handleSend
                }>제출</a>
            </div>
        </div>
    )
}

export default PostRegister
