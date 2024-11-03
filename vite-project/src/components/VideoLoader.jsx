function VideoLoader({videoId, height, width}) {
    return (
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; '
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen       
        ></iframe>
      );
    
}
export default VideoLoader