import React, {useState} from 'react'
import './Register.css'

import api from '../API/API'

function Register(props) {

    const [ID, setID] = useState('')
    const [PASSWORD, setPASSWORD] = useState('')
    const [NAME, setNAME] = useState('')

    const handleSend = async () => {
        await api.register(ID, PASSWORD, NAME)
        props.history.push('/')
    }

    return (
        <div className="register">
            <div className="registerTitle">회원가입</div>

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

            <input type="text" placeholder="이름을 입력하세요."
                onChange={function(e){
                    setNAME(e.target.value)
                }}
            />

            <div className="loginBtn" onClick={handleSend}>
                회원가입
            </div>
        </div>
    )
}

export default Register
