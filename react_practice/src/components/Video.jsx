import './Video.css'

function Video({title, channel="Coder Dost", views, time}) {

    let verified = true;
    let channelJSX = <div className='channel'>{channel} ✅</div>


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