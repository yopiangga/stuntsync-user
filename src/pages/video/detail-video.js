import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadComponent from "src/components/load";
import { NavbarDefaultComponent } from "src/components/navbar";
import { VideoServices } from "src/services/VideoServices";
import YouTube from "react-youtube";

export function DetailVideoPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const videoServices = new VideoServices();

  const [video, setVideo] = useState();

  useEffect(() => {
    fetchVideo();
  }, []);

  async function fetchVideo() {
    const res = await videoServices.DetailVideo({ id });
    setVideo(res.data);
  }

  if (video == null) {
    return <LoadComponent />;
  }

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent
        title="Detail Video"
        type="dark"
        leftIcon={"FiArrowLeft"}
        handleLeft={() => {
          navigate("/video");
        }}
      />

      <div className="w-11/12 mt-6">
        <div>
          {/* <img src={video?.image} alt="Video" className="w-full" /> */}
          <YouTube
            videoId={video?.url.split("v=")[1].split("&")[0]}
            opts={{
              height: "280",
              width: "100%",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
        </div>

        <div className="mt-4">
          <h2 className="f-h2">{video?.title}</h2>
          <p className="f-p2-r mt-2">
            {new Date(video?.createdAt).toDateString()}
          </p>
        </div>

        <div className="mt-4">
          <p className="f-p1-r text-justify">{video?.desc}</p>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}
