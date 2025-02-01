import style from './style.module.css'
import { useState, useEffect, Fragment } from 'react';
import success from '../../images/succes.png'
import {Link , useParams} from 'react-router-dom'


const EmailVerify = () =>{
    const [validUrl , setValidUrl] = useState(false)
    const param = useParams()
    useEffect(()=>{
        const verifyEmailUrl = async () => { 
            try {
                const url = `http://localhost:3000/api/users/${param.id}/verify/${param.token}`
                const {data} = await axios.get(url)
                console.log(data);
                setValidUrl(true)
            } catch (error) {
                console.log(error);
                setValidUrl(false)
            }
        }
        verifyEmailUrl()
    },[param])
    return(
        <Fragment>
            {validUrl ? (
                <div className={style.container}>
                    <img src={success} alt="success_img" className={style.success_img}/>
                    <h1>Email Verified Successfully</h1>
                    <Link to="/login"/>
                    <button className={style.green_btn}>Login</button>
                </div>
            ) : (
                <h1>404 Not Found </h1>
            )}
        </Fragment>
    )

}

export default EmailVerify;