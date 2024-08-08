// import { useState } from "react";
import CatalogList from "./CatalogList/CatalogList";
import { useQuery } from "@tanstack/react-query";
import { AppService } from "../../../../service/service";
import Loading from "../../../UI/Loading/Loading";

const Catalog = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["catalogItemData"],
    queryFn: () => {
      return AppService.getAllItems();
    },
  });

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div
        style={{
          fontSize: 40,
          padding: "20px 0px 50px 0px",
          textAlign: "center",
        }}
        className="title"
      >
        Catalog
      </div>
      {isPending ? <Loading /> : <CatalogList data={data} />}
    </div>
  );
};

export default Catalog;
