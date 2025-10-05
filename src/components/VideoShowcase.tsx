const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      title: "Product Innovation",
      poster: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      title: "Customer Success",
      poster: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 3,
      title: "Behind the Scenes",
      poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Watch Us in Action</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how we bring visions to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-2xl glass hover-lift"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <video
                className="w-full aspect-video object-cover"
                poster={video.poster}
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                <source src={video.url} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold gradient-text">
                    {video.title}
                  </h3>
                </div>
              </div>

              {/* Play indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass flex items-center justify-center group-hover:scale-0 transition-transform duration-300">
                <div className="w-0 h-0 border-l-8 border-l-foreground border-y-6 border-y-transparent ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
