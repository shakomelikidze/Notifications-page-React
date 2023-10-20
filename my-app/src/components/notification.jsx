import React, { useState } from 'react'
import data from '../../data.json'

export default function Notification() {

  const [userData, setUserData] = useState(data);
  const markAsRead = () => {
    const clone = userData.map(item => {
      return { ...item, read: true };
    });
    setUserData(clone);
  };
  const handleSingleClick = (index) => {
    const clone = [...userData];
    clone[index].read = true;
    setUserData(clone);
  }
      
  return (
    <div className='container'>
      <header>
        <h1 className='notification-h1'>
          Notification 
          <span className='unreads-number'> 
           {userData.filter(item => !item.read).length}
          </span> 
        </h1>
        <p onClick={markAsRead} className='notification-p'>
          Mark all as read
        </p>
      </header>
      <div>
        {userData.map((item, index) =>{
          return(
            <div 
              onClick={() => handleSingleClick(index)}
              className='notification-box'
              style={{
                borderRadius: 20,
                padding: 10,
                backgroundColor: item.read 
                ? ''
                : 'rgb(187 212 237 / 41%)',
                cursor: item.read ? 'default' : 'pointer'
              }}
            >
              <img style={{width: 45, height: 45}} src={`./images/avatar-${item.author
                .replace(" ","-")
                .toLocaleLowerCase()}.webp`}
              />
              <div>
                <p>
                  <span class="author">{item.author}</span> {''}
                  <span className='type'>{item.type}</span> {''}
                  <span>{item.content.includes(".webp") ? (
                    <img className='content-img' src={item.content} />
                  ) : (
                    <span className={
                      item.type == 'has joind your group' ||
                      item.type == 'left the group' 
                      ? 'Chess-Club-style'
                      : 'content'
                    }>
                      {item.content}
                    </span>
                  )}
                  {
                  item.content.length > 40
                  ? console.log('evrika')
                  : console.log('afrikaaaaaaa')
                  } 
                  </span>
                </p>
                <span className='time'>{item.time}</span>
              </div>
            </div>
          ) 
        })}
      </div>
    </div>

  )
}
