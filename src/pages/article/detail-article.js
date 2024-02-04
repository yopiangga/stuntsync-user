import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavbarDefaultComponent } from "src/components/navbar";
import { ArticleServices } from "src/services/ArticleServices";

export function DetailArticlePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const articleServices = new ArticleServices();

  const [article, setArticle] = useState();

  useEffect(() => {
    fetchArticle();
  }, []);

  async function fetchArticle() {
    const res = await articleServices.DetailArticle({ id});
    setArticle(res.data);
  }

  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent
        title="Detail Article"
        type="dark"
        leftIcon={"FiArrowLeft"}
        handleLeft={() => {
          navigate("/article");
        }}
      />

      <div className="w-11/12 mt-6">
        <div>
          <img
            src={article?.image}
            alt="Article"
            className="w-full"
          />
        </div>

        <div className="mt-4">
          <h2 className="f-h2">
            {
              article?.title
            }
          </h2>
          <p className="f-p2-r mt-2">{
            new Date(article?.createdAt).toDateString()
          }</p>
        </div>

        <div className="mt-4">
          <p className="f-p1-r text-justify">
            {
              article?.content
            }
          </p>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}
