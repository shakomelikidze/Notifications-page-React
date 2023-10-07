import React, { useState } from 'react'
import data from '../../data.json'

export default function Notification() {
    const [userData, setUserData] = useState(data);
  return (
    <div className='container'>
        <header>
            <h1 className='notification-h1'>
                Notification 
                <span className='unreads-number'> 3 </span> 
            </h1>
            <p className='notification-p'>
                Mark all as read
            </p>
        </header>
        <div>
            {userData.map((item) =>{
                return(
                    <div className='notification-box'>
                        <img style={{width: 45, height: 45}} src={`./images/avatar-${item.author
                            .replace(" ","-")
                            .toLocaleLowerCase()}.webp`}
                        />
                        <div>
                            <p>
                            <span>{item.author}</span>
                            {' '}    
                            <span>{item.type}</span>    
                            {' '} 
                            {item.content.includes(".webp") ? (
                                <img src={item.content} />
                            ) : (
                                <span
                                    className={`${
                                        item.type == 'left the group' ||
                                        item.type == 'has joined your group'
                                            ? "text-[#0A327B]"
                                            : ''
                                    }`}
                                >{item.content}</span>
                            )
                            }
                            </p> 
                            <p>{item.time}</p>
                        </div>
                    </div>

                ) 
            })}
        </div>
    </div>

  )
}
