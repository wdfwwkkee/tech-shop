import Header from "../../UI/Header/Header";
import Divider from "../../UI/Divider/Divider";
import * as styled from "./style.style";
import DetailItem from "./DetailItem/DetailItem";
import Back from "../../UI/Back/Back";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppService } from "../../../service/service";
import { Item } from "../../../types/DataItem";

const Details = () => {
  const { detailItem } = useParams();
  const [data, setData] = useState<Item>();
  useEffect(() => {
    if (detailItem) {
      const fetchData = async () => {
        try {
          const data = await AppService.getItemById(detailItem);
          setData(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [detailItem]);

  return (
    <styled.Detail>
      <Header />
      <Divider />
      <div className="main">
        {data ? (
          <>
            <div className="header">
              <Back />
              <div className="name">{data.name}</div>
            </div>
            <DetailItem item={data} />
          </>
        ) : (
          <div className="Not-found">
            <div>
              Not found
            </div>
            <Link to={'/'}>Return to main</Link>
          </div>
        )}
      </div>
    </styled.Detail>
  );
};

export default Details;
