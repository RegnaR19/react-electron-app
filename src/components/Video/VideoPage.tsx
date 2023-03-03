// основная страница видео

const VideoPage = () => {
   return (
      <div>
         <iframe
            src="https://www.youtube.com/embed/I1hLZ2OchZ8"
            style={{ border: 0, height: '380px' }}
            width={'100%'}
            allow="accelerometer; autoplay; clipboard-write;"
            allowFullScreen
         />
         <iframe
            width={'100%'} style={{ border: 0, height: '380px' }}
            src="https://www.youtube.com/embed/lBPqob1QYL4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; 
         picture-in-picture; web-share" allowFullScreen></iframe>
         <iframe
            width={'100%'} style={{ border: 0, height: '380px' }}
            src="https://www.youtube.com/embed/fXuOaxrXYqw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
         picture-in-picture; web-share" allowFullScreen></iframe>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/1LnQN0b8Feo" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
   );
}

export default VideoPage;