const imagUrl = '';

const channelAvatar =({}) =>{
    return(
        <div className = "channels.avatar-container">
            <img src={url || imagUrl} width='100%' height='100%' alt="Default avatar"/>

        </div>
    )
}

export const channelCard =({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) =>{
    const handleNavigate = () =>{
        navigateToChannelHandler(id)
    }

    return(
        <div className="channels-card" onClick={handleNavigate}>
            <channelAvatar url={avatarUrl}/>
            <span className="channels-car-title">{title}</span>
            <span className="channels-car-title">{username}</span>
            <span className="channels-car-title" style={{color:isOnline ? 'green':'red'}}>{title}
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    )
}
