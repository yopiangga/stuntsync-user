import { HeaderSection } from "src/components/header/header-section";
import { NavbarDefaultComponent } from "src/components/navbar";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";

import { useNavigate } from "react-router-dom";
import { ArticleServices } from "src/services/ArticleServices";
import { VideoServices } from "src/services/VideoServices";
import { useEffect, useState } from "react";
import {
  ArticlesComponent,
  CountsComponent,
  MainArticleCard,
  SearchComponent,
  VideosComponent,
} from "src/components/education";

export function EducationPage() {
  const navigate = useNavigate();
  const articleServices = new ArticleServices();
  const videoServices = new VideoServices();

  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchArticle();
    fetchVideo();
  }, []);

  async function fetchArticle() {
    const res = await articleServices.AllArticle();
    setArticles(res.data);
  }

  async function fetchVideo() {
    const res = await videoServices.AllVideo();
    setVideos(res.data);
  }

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="Education" type="dark" />

      <div className="w-11/12 mt-6">
        <div>
          <SearchComponent />
        </div>

        <div className="mt-4">
          <CountsComponent video={videos.length} article={articles.length} />
        </div>

        <div className="mt-6">
          <HeaderSection label="Featured Articles" />
        </div>

        {articles.length > 0 && (
          <div className="mt-4">
            <MainArticleCard article={articles[0]} />
          </div>
        )}

        {articles.length > 0 && (
          <div className="mt-4">
            <ArticlesComponent articles={articles} />
          </div>
        )}

        <div className="mt-4">
          <button
            onClick={() => {
              navigate("/article");
            }}
            className="f-p2-r bg-blue-main text-white py-1 px-3 rounded-lg"
          >
            More Article
          </button>
        </div>

        <div className="mt-6">
          <HeaderSection label="Short Videos" />
        </div>

        <div className="mt-4">
          <VideosComponent videos={videos} />
        </div>

        <div className="mt-4">
          <button
            onClick={() => {
              navigate("/video");
            }}
            className="f-p2-r bg-blue-main text-white py-1 px-3 rounded-lg"
          >
            More Video
          </button>
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
