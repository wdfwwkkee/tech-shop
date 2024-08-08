import * as styled from "./style.style";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../UI/Header/Header";
import Divider from "../../UI/Divider/Divider";
import Back from "../../UI/Back/Back";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import WindowIcon from "@mui/icons-material/Window";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import CategoryList from "./CategoryList/CategoryList";
import { AppService } from "../../../service/service";
import { Spec } from "../../../types/Spec";
const CatalogCategory = () => {
  const { category } = useParams();
  const [grid_state, setGrid_state] = useState(4);
  const [selectedSpecs, setSelectedSpecs] = useState<Spec[]>([]);

  const navigate = useNavigate();

  function handleGridState(state: number) {
    setGrid_state(state);
  }

  const handleSpecs = (specItem: Spec) => {
    setSelectedSpecs((prevSpecs) => {
      const exists = prevSpecs.some(
        (spec) =>
          spec.title === specItem.title && spec.spec[0] === specItem.spec[0]
      );
      if (exists) {
        return prevSpecs.filter(
          (spec) =>
            !(
              spec.title === specItem.title && spec.spec[0] === specItem.spec[0]
            )
        );
      } else {
        return [...prevSpecs, specItem];
      }
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const validCategories = await AppService.getCategoryOnlyNames();
        if (category && !validCategories.includes(category)) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, [category, navigate]);

  return (
    <styled.CatalogCategory>
      <Header />
      <Divider />
      <div className="main">
        <div className="Header">
          <div className="title">
            <Back />
            <div className="category-name">{category}</div>
          </div>
          <div className="sort">
            <div className="popular-sort">
              <button>
                <div className="icon">
                  <ImportExportIcon />
                </div>
                <div className="text">Popular</div>
              </button>
            </div>
            <div className="grid-state">
              <button
                onClick={() => handleGridState(4)}
                className={grid_state === 4 ? "grid-btn active" : "grid-btn"}
              >
                <WindowIcon />
              </button>
              <button
                onClick={() => handleGridState(12)}
                className={grid_state === 12 ? "grid-btn active" : "grid-btn"}
              >
                <ViewHeadlineIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="category-content">
          <div className="category-filter">
            <CategoryFilter
              selectedSpecs={selectedSpecs}
              handleSpecs={handleSpecs}
              category={category}
            />
          </div>
          <div className="category-list">
            <CategoryList
              selectedSpecs={selectedSpecs}
              setSelectedSpecs={setSelectedSpecs}
              gridState={grid_state}
              category={category}
            />
          </div>
        </div>
      </div>
    </styled.CatalogCategory>
  );
};

export default CatalogCategory;
