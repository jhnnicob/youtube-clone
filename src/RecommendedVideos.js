import React from 'react'
import './RecommendedVideos.css';
import VideoCard from './components/VideoCard'
import videos from './api'; 

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
             {
                videos.map((video, index) => (
                    <VideoCard 
                        tumbnail={video.tumbnail} 
                        title={video.title} 
                        channel={video.channel} 
                        views={video.views}
                        timestamp={video.timestamp} 
                        channelImage={video.channelImage}
                    />
                ))
            }
        </div>
    )
}

export default RecommendedVideos
