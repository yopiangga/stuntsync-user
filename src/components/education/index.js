import iconLove from "src/assets/icon/love.svg";
import iconEye from "src/assets/icon/eye.svg";
import iconComment from "src/assets/icon/comment.svg";
import iconPlayVideo from "src/assets/icon/play-video.svg";
import { FiArrowUpRight, FiSearch, FiVideo } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import youtubeThumbnail from "youtube-thumbnail";

export function SearchComponent() {
  return (
    <div className="flex items-center justify-center relative">
      <FiSearch size={20} className="absolute left-4" />
      <input
        type="text"
        className="w-full rounded-lg border-2 py-3 px-4 pl-12 f-p1-r outline-none"
        placeholder="Search article"
      />
    </div>
  );
}

export function CountsComponent({ video, article }) {
  return (
    <div className="flex gap-4 text-blue-main">
      <div className="text-center flex items-center gap-2">
        <div className="rounded-full bg-blue-secondary p-2 flex justify-center items-center">
          <FiVideo size={16} />
        </div>
        <p className="f-p2-r">{article} Articles</p>
      </div>
      <div className="text-center flex items-center gap-2">
        <div className="rounded-full bg-blue-secondary p-2 flex justify-center items-center">
          <FiVideo size={16} />
        </div>
        <p className="f-p2-r">{video} Videos</p>
      </div>
    </div>
  );
}

export function MainArticleCard({ article }) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white rounded-xl shadow-s1 overflow-hidden relative">
      <img className="object-cover w-full h-64" src={article?.image} />
      <div className="absolute bottom-0 w-full bg-white grid grid-cols-12 py-4 px-4 gap-4">
        <div className="col-span-10">
          <p className="f-p1-sb">{article?.title}</p>
        </div>
        <button
          onClick={() => {
            navigate("/detail-article/" + article?.id);
          }}
          className="w-10 h-10 rounded-lg bg-blue-secondary text-blue-main flex justify-center items-center"
        >
          <FiArrowUpRight size={24} />
        </button>
      </div>
    </div>
  );
}

export function ArticlesComponent({ articles }) {
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      {articles.map((article, index) => {
        // if (index === 0) return;
        return <ArticleCard key={index} article={article} />;
      })}
    </div>
  );
}

export function ArticleCard({ article }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/detail-article/" + article?.id);
      }}
      className="w-full bg-white rounded-xl shadow-s1 p-4 flex flex-col justify-between text-left"
    >
      {/* <div className="bg-blue-secondary py-1 px-3 text-blue-main rounded-full w-fit">
          <p className="f-p2-r">Wellness</p>
        </div> */}
      <p className="f-p2-m mt-2 line-clamp-3">{article?.title}</p>
      <div className="mt-2">
        <PostAction />
      </div>
    </button>
  );
}

export function VideosComponent({ videos }) {
  return (
    <div className="w-full grid grid-cols-1 gap-2">
      {videos.map((video, index) => {
        return <VideoCard key={index} video={video} />;
      })}
    </div>
  );
}

export function VideoCard({ video }) {
  const navigate = useNavigate();
  const thumbnail = youtubeThumbnail(video?.url);

  return (
    <button
      onClick={() => {
        navigate("/detail-video/" + video?.id);
      }}
      className="w-full bg-white rounded-xl shadow-s1 p-4 gap-4 grid grid-cols-12 text-left"
    >
      <div className="col-span-3 rounded-xl overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={thumbnail?.default?.url}
        />
      </div>
      <div className="col-span-9 flex flex-col justify-between h-full">
        <div className="grow">
          <p className="f-p2-m line-clamp-2">{video?.title}</p>
          <p className="f-p2-r line-clamp-1">{video?.desc}</p>
        </div>
        <div className="mt-2">
          <PostAction />
        </div>
      </div>
    </button>
  );
}

export function PostAction() {
  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-1">
        <img className="w-4 h-4" src={iconLove} />
        <p className="text-xs">100</p>
      </div>
      <div className="flex items-center gap-1">
        <img className="w-4 h-4" src={iconEye} />
        <p className="text-xs">25k</p>
      </div>
      <div className="flex items-center gap-1">
        <img className="w-4 h-4" src={iconComment} />
        <p className="text-xs">32</p>
      </div>
    </div>
  );
}
