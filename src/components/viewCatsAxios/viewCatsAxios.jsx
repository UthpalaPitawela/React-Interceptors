import { useEffect, useState } from "react";
import {
  getCatDetails,
  getCatDetailsAxios,
  getCatDetailsFetchAPI,
} from "../../services/catsService";
import "./viewCatsStyles.scss";

const getCatPics = async () => {
  const response = await getCatDetailsFetchAPI();
  // const response = await getCatDetailsAxios();
  console.log("response", response);
  return response;
};

export const ViewCatsAxios = () => {
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
