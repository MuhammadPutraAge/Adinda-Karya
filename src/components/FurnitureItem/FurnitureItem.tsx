import NumberFormat from "react-number-format";
import { Furniture } from "../../data/dummy";
import {
  FurnitureItemBadge,
  FurnitureItemContainer,
  FurnitureItemImage,
  FurnitureItemInfo,
  FurnitureItemPrice,
  FurnitureItemTitle,
} from "./FurnitureItemStyles";

interface Props {
  furniture: Furniture;
  bestSeller?: boolean;
}

const FurnitureItem: React.FC<Props> = ({ furniture, bestSeller = false }) => {
  return (
    <FurnitureItemContainer to={`/furnitur/${furniture.id}`}>
      <FurnitureItemImage image={furniture.image}>
        {bestSeller && <FurnitureItemBadge>Terlaris</FurnitureItemBadge>}
      </FurnitureItemImage>

      <FurnitureItemInfo>
        <FurnitureItemTitle>{furniture.title}</FurnitureItemTitle>
        <FurnitureItemPrice>
          <NumberFormat
            value={furniture.price}
            displayType={"text"}
            thousandSeparator="."
            decimalSeparator=","
            prefix={"Rp. "}
          />
        </FurnitureItemPrice>
      </FurnitureItemInfo>
    </FurnitureItemContainer>
  );
};

export default FurnitureItem;
