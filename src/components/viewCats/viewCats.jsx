import { useEffect, useState } from "react";
import {
  getCatDetailsAxios,
  getCatDetailsFetchAPI,
  getCatDetailsFetchIntercept,
} from "../../services/catsService";
import "./viewCatsStyles.scss";

const getCatPics = async () => {
  // With the axios interceptor
  const response = await getCatDetailsAxios();

  // With the fetch API interceptor using Monkey patching method
  //const response = await getCatDetailsFetchAPI();

  // With the fetch API interceptor using fetch-intercept library
  // const response = await getCatDetailsFetchIntercept();
  return response;
};

export const ViewCats = () => {
  const [catPics, setCatPics] = useState([]);
  useEffect(() => {
    getCatPics().then((pic) => setCatPics(pic));
  }, []);
  return (
    <div>
      <button onClick={async (e) => setCatPics(await getCatPics())}>
        View Cats
      </button>
      <div className="container">
        {catPics &&
          catPics.length > 0 &&
          catPics?.map((catPic) => (
            <div className="item" key={catPic.id}>
              <img src={catPic.url} alt="" width="300" height="300" />
            </div>
          ))}
      </div>
    </div>
  );
};
