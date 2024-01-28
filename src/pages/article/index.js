import { FiArrowUpRight, FiSearch, FiVideo } from "react-icons/fi";
import { HeaderSection } from "src/components/header/header-section";
import { NavbarDefaultComponent } from "src/components/navbar";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";
import iconLove from "src/assets/icon/love.svg";
import iconEye from "src/assets/icon/eye.svg";
import iconComment from "src/assets/icon/comment.svg";
import iconPlayVideo from "src/assets/icon/play-video.svg";

export function ArticlePage() {
  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="Articles" />

      <div className="w-11/12 mt-6">
        <div>
          <SearchComponent />
        </div>

        <div className="mt-4">
          <CountsComponent />
        </div>

        <div className="mt-6">
          <HeaderSection label="Featured Articles" />
        </div>

        <div className="mt-4">
          <MainArticleCard />
        </div>

        <div className="mt-4">
          <ArticlesComponent />
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

function CountsComponent() {
  return (
    <div className="flex gap-4 text-blue-main">
      <div className="text-center flex items-center gap-2">
        <div className="rounded-full bg-blue-secondary p-2 flex justify-center items-center">
          <FiVideo size={16} />
        </div>
        <p className="f-p2-r">100 Articles</p>
      </div>
      <div className="text-center flex items-center gap-2">
        <div className="rounded-full bg-blue-secondary p-2 flex justify-center items-center">
          <FiVideo size={16} />
        </div>
        <p className="f-p2-r">50 Videos</p>
      </div>
    </div>
  );
}

function MainArticleCard() {
  return (
    <div className="w-full bg-white rounded-xl shadow-s1 overflow-hidden relative">
      <img
        className="object-cover w-full h-64"
        src="https://st4.depositphotos.com/14431644/22076/i/450/depositphotos_220767694-stock-photo-handwriting-text-writing-example-concept.jpg"
      />
      <div className="absolute bottom-0 w-full bg-white grid grid-cols-12 py-4 px-4 gap-4">
        <div className="col-span-10">
          <p className="f-p1-sb">
            Unlocking the Power of Play: A Guide for Parents
          </p>
        </div>
        <div className="w-10 h-10 rounded-lg bg-blue-secondary text-blue-main flex justify-center items-center">
          <FiArrowUpRight size={24} />
        </div>
      </div>
    </div>
  );
}

function ArticlesComponent() {
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      <ArticleCard />
      <ArticleCard />
    </div>
  );
}

function ArticleCard() {
  return (
    <div className="w-full bg-white rounded-xl shadow-s1 p-4 flex flex-col">
      <div className="bg-blue-secondary py-1 px-3 text-blue-main rounded-full w-fit">
        <p className="f-p2-r">Wellness</p>
      </div>
      <p className="f-p2-m mt-2">
        Smart Snacking for Little Ones: Nutritious Choices
      </p>
      <div className="mt-2">
        <PostAction />
      </div>
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
  return (
    <div className="w-full bg-white rounded-xl shadow-s1 p-4 gap-4 grid grid-cols-12">
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
    </div>
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
