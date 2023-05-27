import React from 'react'
import style from './layout.module.css'
import Metric from '../../Images/Auth/Metric.png'
import Chart from '../../Images/Auth/Chart.png'
import Sum from '../../Images/Auth/Sum.png'
import logo from '../../Images/logo.svg'

const AuthLayout = ({title,children,subtitle}) => {
  return (
    <div className={style["auth--layout"]}>
           <div className={style["left-side"]}>

            <div className= {style["img-container"]}>
              <img src={Sum} className={style["sum"]}alt='sum' />
              <img src={Chart} className={style["chart"]} alt='chart' />
               <img src={Metric} className={style["metric"]} alt='metric'/>  </div>
            <div><h1 className={style["left-title"]}>Make safe and easy decisions</h1>
                <p className={style["left-subtitle"]}>Get insight for credit decision with an in-depth analysis in just one click</p>
            </div>
           </div>
                   
              

                <div className={style["right-side"]}>
                 <img src={logo}  className={style["logo"]} alt='logo'/>
                   <div className={style["right-style"]}>
                   <h1>{title}</h1>
                    <p>{subtitle}</p>
                  {children}

                   </div>
                   

                </div>
   
        </div>
  )
}

export default AuthLayout