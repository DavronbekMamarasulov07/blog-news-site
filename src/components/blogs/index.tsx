import { useEffect, useState } from "react";
import useSearchParamsHook from "../../hooks/useQueryParams";
import Article from "../../types";
import Card from "../card";

const Blogs = ({
  data,
  loadingPage,
}: {
  data: Article[];
  loadingPage: boolean;
  }) => {
  
  const {getParam} = useSearchParamsHook();
  const search = getParam("search" );
  const [stateTitle, setStateTitle] = useState(false);



  useEffect(() => {
    if (search) {
        setStateTitle(true);
    } else {
        setStateTitle(false);
      }
  }, [search])
  

  const filterData = data.filter((item) =>
    item.author?.toLowerCase().includes(search || "")
  );


  


  return (
    <div>
      {loadingPage ? (
        <div className="flex flex-col justify-center items-center w-full min-h-[70vh] md:min-h-[100vh]">
          <p className="text-xl font-medium text-center text-gray-400 my-8 ">
            Loading...
          </p>
          <div className="loader"></div>
        </div>
      ) : (
        <section
          id="blog"
          style={{ paddingTop: stateTitle ? "0" : "6rem" }}
          className="transition duration-1000 pb-12"
        >
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              style={{
                transform: stateTitle ? "scale(0)" : "scale(1)",
                marginBottom: stateTitle ? "0" : "3rem",
              }}
              className="text-3xl font-bold text-center mb-8 md:mb-12 transition duration-400 "
            >
              {loadingPage ? "Fake Data" : "Latest Articles"}
            </h2>
            {filterData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {data.map((post, index) => (
                  <Card key={index} post={post} />
                ))}
              </div>
            ) : (
              

              <div className="flex flex-col justify-center items-center w-full min-h-[70vh] md:min-h-[50vh]">
                <p className="text-xl font-medium text-center text-gray-400 my-8 ">
                  Loading...
                </p>
                <div className="loader"></div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Blogs