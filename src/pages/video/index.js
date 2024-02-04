import { HeaderSection } from "src/components/header/header-section";
import { NavbarDefaultComponent } from "src/components/navbar";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";
import { useNavigate } from "react-router-dom";
import { VideoServices } from "src/services/VideoServices";
import { useEffect, useState } from "react";
import { ArticlesComponent, CountsComponent, MainArticleCard, SearchComponent, VideosComponent } from "src/components/education";

export function VideoPage() {
  const navigate = useNavigate();
  const videoServices = new VideoServices();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  async function fetchVideo() {
    const res = await videoServices.AllVideo();
    setVideos(res.data);
  }

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="Videos" type="dark" />

      <div className="w-11/12 mt-6">
        <div>
          <SearchComponent />
        </div>

        <div className="mt-6">
          <HeaderSection label="Short Videos" />
        </div>

        <div className="mt-4">
          <VideosComponent videos={videos} />
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="fixed bottom-0 w-full">
        <BottomNavbarComponent />
      </div>
    </div>
  );
}