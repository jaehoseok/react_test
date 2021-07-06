import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

import api from '../API/API'

function Login(props) {

    const [ID, setID] = useState('')
    const [PASSWORD, setPASSWORD] = useState('')

    const handleSend = async () => {
        let res = await api.login(ID, PASSWORD)
        console.log(res);
        window.sessionStorage.setItem('userToken', res.data.token)
        if(res.status===200){
            props.history.push('/postList')
        }
    }

    return (
        <div className="Login">
            <div className="loginTitle">로그인</div>

            <input type="text" placeholder="ID를 입력하세요."
                onChange={function(e){
                    setID(e.target.value)
                }
            }/>

            <input type="password" placeholder="PASSWORD를 입력하세요."
                onChange={function(e){
                    setPASSWORD(e.target.value)
                }}
            />

            <div className="loginBtn" onClick={handleSend}>
                로그인
            </div>

            <div className="register-box">
                <Link className="registerBtn" to='/register'>회원가입</Link>
            </div>
        </div>
    )
}

export default Login
