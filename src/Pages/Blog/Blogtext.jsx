import React from 'react'
import FilledBtn from '../../components/Button/FilledBtn'
import styles from "./Blog.css";

const Blogtext = () => {
  return (
    <div>
        <h4>Coming Soon</h4>
        <h2>Get Notified We<br/> Our Blog Launches</h2>
        
        <div>
            <input type='text'/>
            <FilledBtn title={"Notify Me"}/>
        </div>

        <p>We would not spam you, don’t worry.</p>
    </div>
  )
}

export default Blogtext