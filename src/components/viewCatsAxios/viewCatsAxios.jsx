
import { useEffect, useState } from "react"
import { getCatDetails } from "../../services/axiosService";
import './viewCatsAxios.scss';

const getCatPics = async () => {
    const response = await getCatDetails();
    console.log('response', response);
    return response.data;
}

export const ViewCatsAxios = () => {
    const [catPics, setCatPics] = useState([]);
    useEffect(() => {
        getCatPics().then(pic=>setCatPics(pic));
    },[])
    return (
        <div>
            <button onClick={async(e) => setCatPics(await getCatPics()) }>View Cats</button>
            <div className="container" >
            {catPics && catPics.length>0 && catPics?.map((catPic) => 
              (  

                   <div className="item" key={catPic.id}>
                       <img src={catPic.url} alt="" width="300" height="300" />
                    </div>

           ) )}
            
                </div>
        </div>

    )
}