import { Category } from "../../../data/dummy";
import {
  CategoryItemContainer,
  CategoryItemIcon,
  CategoryItemTitle,
} from "./CategoryItemStyles";

interface Props {
  category: Category;
}

const CategoryItem: React.FC<Props> = ({ category }) => {
  return (
    <CategoryItemContainer to={`/furnitur?category=${category.id}`}>
      <CategoryItemIcon
        src={category.icon}
        alt={`Kategori ${category.title}`}
      />
      <CategoryItemTitle>{category.title}</CategoryItemTitle>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
