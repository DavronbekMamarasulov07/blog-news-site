import { useState } from "react";
import useSearchParamsHook from "../../hooks/useQueryParams";

const Hero = () => {
  // Removed unused searchQuery state
  const { setParam, removeParam , getParam} = useSearchParamsHook();
  const [stateButton, setStateButton] = useState(false);
  
  const searchQuery = getParam("search") || "";
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    const searchQuery = query.trim().toLowerCase();
    if (searchQuery.length > 0) {
      setParam("search", searchQuery);
      setStateButton(true);
    } else {
      removeParam("search");
      setStateButton(false);
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gray-900 text-white pt-30 md:pt-32 "
      style={{
        backgroundImage: `radial-gradient(circle at 85% 1%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 96%,transparent 96%, transparent 100%),
                          radial-gradient(circle at 14% 15%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 1%,transparent 1%, transparent 100%),
                          radial-gradient(circle at 60% 90%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 20%,transparent 20%, transparent 100%),
                          radial-gradient(circle at 79% 7%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 78%,transparent 78%, transparent 100%),
                          radial-gradient(circle at 55% 65%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 52%,transparent 52%, transparent 100%),
                          linear-gradient(135deg, rgb(37, 56, 222), rgb(96, 189, 244))`,
        paddingBottom: stateButton ? "0" : "5rem",
        transition: "padding-bottom 0.5s ease-in-out",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Discover the Latest in Tech
          </h1>
          <p className="text-base md:text-2xl text-gray-300 mb-8">
            Stay informed with cutting-edge insights and industry trends
          </p>
          <div
            style={{ marginBottom: stateButton ? "0" : "2rem" }}
            className="w-full max-w-[400px] mx-auto flex justify-center mb-12 "
          >
            <input
              type="text"
              onChange={(e) => handleSearch(e)}
              value={searchQuery}
              className="border-none w-full focus:outline-none py-2 px-4 bg-[#ffffff7b] text-white rounded-lg  placeholder:text-sm placeholder:text-white"
              placeholder="Search for articles..."
            />
          </div>
          <a
            href="#blog"
            style={{ transform: stateButton ? "scale(0)" : "scale(1)" }}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition duration-500"
          >
            Read Articles
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero