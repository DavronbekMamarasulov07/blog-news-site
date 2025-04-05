import Article from "../../types";
import { format, parseISO } from "date-fns";
const Card = ({ post }: { post: Article }) => {
  
  const parsedDate = parseISO(post.publishedAt);

  const formatted = format(parsedDate, "dd.MM.yyyy HH:mm");

 


  return (
    <article
      data-aos="fade-up"
      data-aos-once="true"
      className="max-w-md mx-auto flex flex-col  bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200"
    >
      <img
        className="w-full h-48 object-cover"
        src={post.urlToImage}
        alt="Business Insider article thumbnail"
        loading="lazy"
      />
      <div className="px-6 py-4 flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-600">
            {post.author}
          </span>
          <span className="text-xs text-gray-500">{formatted}</span>
        </div>
        <h2 className="font-bold text-xl mb-2 text-gray-900">
          {post.title}
        </h2>
        <p className="text-gray-700 text-sm mb-3">
          {post.description}
        </p>
        <p className="text-gray-600 text-xs mb-4">
          {post.content}
        </p>
        
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-2 px-4 bg-black text-white rounded hover:bg-zinc-800 transition duration-300"
        >
          Read Article
        </a>
      </div>
    </article>
  );
}

export default Card