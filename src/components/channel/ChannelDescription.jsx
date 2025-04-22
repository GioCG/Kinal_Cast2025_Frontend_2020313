import { getChannels } from "../../services";
import { usefollowChannel, useUserDetails } from "../../shared/hooks";

const followChannel = ({channelId,getChannels}) =>{
    const { followChannel} = usefollowChannel();

    const handleFollowChannel = () =>{
        followChannel(channelId, getChannels)
    }

    return<button onClick={handleFollowChannel} className="channel-follow-button">followChannel</button>
}

export const ChannelDescription = ({
    username,
    title,
    description,
    channelId,
    getChannels
}) =>{
    const {isLogged} = useUserDetails();

    return(
        <div className="channel-description-container">
            <span className="channel-description-title">
                {username}
                <span>
                    {isLogged && (
                        <followButton
                            className='channel-follow-button'
                            channelId={channelId}
                            getChannels={getChannels}
                        />
                    )}
                </span>
            </span>
            <span className="channel-description-title">{title}</span>
            <div className="channel-descprition-box">
                <spa className="channel-descprition">{desction}</spa>
            </div>
        </div>
    )
}