import { FiArrowUpRight, FiSearch, FiVideo } from "react-icons/fi";
import { HeaderSection } from "src/components/header/header-section";
import { NavbarDefaultComponent } from "src/components/navbar";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";
import iconLove from "src/assets/icon/love.svg";
import iconEye from "src/assets/icon/eye.svg";
import iconComment from "src/assets/icon/comment.svg";
import iconPlayVideo from "src/assets/icon/play-video.svg";
import { useNavigate } from "react-router-dom";

export function VideoPage() {
  const navigate = useNavigate();

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
          <VideosComponent />
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

function SearchComponent() {
  return (
    <div className="flex items-center justify-center">
      <FiSearch size={20} className="absolute left-8" />
      <input
        type="text"
        className="w-full rounded-lg border-2 py-3 px-4 pl-12 f-p1-r outline-none"
        placeholder="Search article"
      />
    </div>
  );
}

function VideosComponent() {
  return (
    <div className="w-full grid grid-cols-1 gap-2">
      <VideoCard />
      <VideoCard />
    </div>
  );
}

function VideoCard() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/detail-video/1");
      }}
      className="w-full bg-white rounded-xl shadow-s1 p-4 gap-4 grid grid-cols-12 text-left"
    >
      <div className="col-span-3 rounded-xl overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="https://st4.depositphotos.com/14431644/22076/i/450/depositphotos_220767694-stock-photo-handwriting-text-writing-example-concept.jpg"
        />
      </div>
      <div className="col-span-9">
        <p className="f-p2-m">
          Smart Snacking for Little Ones: Nutritious Choices
        </p>
        <div className="mt-2">
          <PostAction />
        </div>
      </div>
    </button>
  );
}

function PostAction() {
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
