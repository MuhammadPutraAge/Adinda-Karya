import { useHistory } from "react-router";
import { CustomButton, FurnitureItem } from "../../components";
import {
  categories,
  getBestFurnitures,
  getNewFurnitures,
} from "../../data/dummy";
import { Container } from "../../GlobalStyle";
import CategoryItem from "./CategoryItem/CategoryItem";
import {
  HomePageButton,
  HomePageButtonContainer,
  HomePageCategory,
  HomePageContainer,
  HomePageFurnitureList,
  HomePageNewFurniture,
  HomePageSection,
  HomePageSectionTitle,
} from "./HomePageStyles";

const HomePage = () => {
  const history = useHistory();

  return (
    <HomePageContainer>
      <Container>
        {/* Category */}
        <HomePageSection>
          <HomePageSectionTitle>Kategori</HomePageSectionTitle>
          <HomePageCategory>
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </HomePageCategory>
        </HomePageSection>

        {/* Best Furniture */}
        <HomePageSection>
          <HomePageSectionTitle>Furnitur Terlaris</HomePageSectionTitle>
          <HomePageFurnitureList>
            {getBestFurnitures().map((furniture) => (
              <FurnitureItem
                key={furniture.id}
                furniture={furniture}
                bestSeller
              />
            ))}
          </HomePageFurnitureList>
        </HomePageSection>

        {/* Newest Furniture */}
        <HomePageSection>
          <HomePageSectionTitle>Furniture Terbaru</HomePageSectionTitle>
        </HomePageSection>

        <HomePageNewFurniture>
          {getNewFurnitures().map((furniture) => (
            <FurnitureItem key={furniture.id} furniture={furniture} />
          ))}
        </HomePageNewFurniture>

        <HomePageButtonContainer>
          <HomePageButton>
            <CustomButton
              onClick={() => history.push("/furnitur")}
              title="Lihat Semua Furnitur"
            />
          </HomePageButton>
        </HomePageButtonContainer>
      </Container>
    </HomePageContainer>
  );
};

export default HomePage;
