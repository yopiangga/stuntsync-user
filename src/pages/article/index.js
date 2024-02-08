import { HeaderSection } from "src/components/header/header-section";
import { NavbarDefaultComponent } from "src/components/navbar";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleServices } from "src/services/ArticleServices";
import {
  ArticlesComponent,
  CountsComponent,
  MainArticleCard,
  SearchComponent,
  VideosComponent,
} from "src/components/education";

export function ArticlePage() {
  const navigate = useNavigate();

  const articleServices = new ArticleServices();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticle();
  }, []);

  async function fetchArticle() {
    const res = await articleServices.AllArticle();
    setArticles(res.data);
  }

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="Articles" type="dark" />

      <div className="w-11/12 mt-6">
        <div>
          <SearchComponent />
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
