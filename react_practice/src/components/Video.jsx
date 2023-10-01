import './Video.css'

function Video({title, channel="Coder Dost", views, time, verified}) {

    let channelJSX;
    if(verified){
        channelJSX = <div className='channel'>{channel} ✅</div>
    } else {
        channelJSX = <div className='channel'>{channel}</div>
    }


  return (
    <>
        <div className='container'>
            <div className='pic'>
                <img src='https://picsum.photos/id/1/160/90' alt='Dhanjyoti Rabha' />
            </div>
            <div className='title'>{title}</div>
            {channelJSX}
            <div className='views'>
                {views} views <span>.</span> {time}
            </div>
        </div>
    </>
  )
}

export default Video