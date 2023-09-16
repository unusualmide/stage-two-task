function VideoPlayer({videoKey}) {
  return (
    <div className="hidden sm:block">
          <iframe
          width="1030"
          height="449"
        src={`https://www.youtube-nocookie.com/embed/${videoKey}`}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoPlayer
