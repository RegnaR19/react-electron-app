// основная страница видео

const VideoPage = () => {
   return (
      <>
         <iframe
            src="https://www.youtube.com/embed/I1hLZ2OchZ8"
            style={{ border: 0, height: '380px' }}
            width={'100%'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
         />
         <iframe
            width={'100%'} style={{ border: 0, height: '380px' }}
            src="https://www.youtube.com/embed/6iiPsHj6F3E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
         picture-in-picture; web-share" allowFullScreen></iframe>
      </>
   );
}

export default VideoPage;