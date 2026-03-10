import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../data/articlesData";


const NewsArticles = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-3 gap-10">

        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden">

            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <p className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <CalendarDays size={16} />
                {article.date}
              </p>

              <p className="text-gray-700 mb-6">
                {article.shortText}
              </p>

              <Link
                to={`/article/${article.id}`}
                className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
              >
                Read More
              </Link>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default NewsArticles;