import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useHistory, useRouteMatch } from "react-router";
import { IcArrowLeft } from "../../assets";
import {
  CustomButton,
  FurnitureItem,
  Loading,
  QuantityBox,
  SectionTitle,
  SizedBox,
} from "../../components";
import { Furniture, furnitures, getFurnitureById } from "../../data/dummy";
import { Container } from "../../GlobalStyle";
import {
  FurnitureDetailsBackContainer,
  FurnitureDetailsBackIcon,
  FurnitureDetailsBackIconContainer,
  FurnitureDetailsBackTitle,
  FurnitureDetailsButtonContainer,
  FurnitureDetailsCategoryTitle,
  FurnitureDetailsContainer,
  FurnitureDetailsContent,
  FurnitureDetailsDescription,
  FurnitureDetailsDescriptionTitle,
  FurnitureDetailsImage,
  FurnitureDetailsInfo,
  FurnitureDetailsPrice,
  FurnitureDetailsQtyContainer,
  FurnitureDetailsQtyTitle,
  FurnitureDetailsRelated,
  FurnitureDetailsTitle,
} from "./FurnitureDetailsStyles";

const FurnitureDetails = () => {
  const history = useHistory();

  const { params } = useRouteMatch<{ id: string }>();

  const [furniture, setFurniture] = useState<Furniture>();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setFurniture(getFurnitureById(params.id));
  }, [params.id]);

  const onSubtract = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const onAdd = () => {
    if (furniture) {
      if (qty < furniture.stock) {
        setQty(qty + 1);
      }
    }
  };

  if (!furniture) {
    return <Loading />;
  }

  return (
    <FurnitureDetailsContainer>
      <Container>
        {/* Back Button */}
        <FurnitureDetailsBackContainer>
          <FurnitureDetailsBackIconContainer onClick={() => history.goBack()}>
            <FurnitureDetailsBackIcon
              src={IcArrowLeft}
              alt="Kembali Ke Halaman Sebelumnya"
            />
          </FurnitureDetailsBackIconContainer>
          <FurnitureDetailsBackTitle>
            Kembali Ke Halaman Sebelumnya
          </FurnitureDetailsBackTitle>
        </FurnitureDetailsBackContainer>

        {/* Furniture Details */}
        <FurnitureDetailsContent>
          {/* Furniture Image */}
          <FurnitureDetailsImage image={furniture.image} />

          {/* Furniture Information */}
          <FurnitureDetailsInfo>
            <div>
              <FurnitureDetailsCategoryTitle>
                Kategori {furniture.category.title}
              </FurnitureDetailsCategoryTitle>
              <FurnitureDetailsTitle>{furniture.title}</FurnitureDetailsTitle>
            </div>

            <div>
              <FurnitureDetailsDescriptionTitle>
                Deskripsi:
              </FurnitureDetailsDescriptionTitle>
              <FurnitureDetailsDescription>
                {furniture.description}
              </FurnitureDetailsDescription>
            </div>

            <FurnitureDetailsPrice>
              <NumberFormat
                value={furniture.price}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp. "
              />
            </FurnitureDetailsPrice>

            <FurnitureDetailsQtyContainer>
              <FurnitureDetailsQtyTitle>Jumlah:</FurnitureDetailsQtyTitle>
              <QuantityBox value={qty} onSubtract={onSubtract} onAdd={onAdd} />
            </FurnitureDetailsQtyContainer>

            <FurnitureDetailsButtonContainer>
              <CustomButton
                onClick={() => {}}
                title="Tambah Keranjang"
                type="secondary"
              />
              <SizedBox width="4rem" height="1.4rem" />
              <CustomButton onClick={() => {}} title="Beli Sekarang" />
            </FurnitureDetailsButtonContainer>
          </FurnitureDetailsInfo>
        </FurnitureDetailsContent>

        {/* Related Furniture */}
        <SectionTitle
          title="Furnitur Terkait"
          description={`Lihat furnitur lain yang terkait dengan ${furniture.title}`}
        />
        <FurnitureDetailsRelated>
          {furnitures.map((furniture) => (
            <FurnitureItem key={furniture.id} furniture={furniture} />
          ))}
        </FurnitureDetailsRelated>
      </Container>
    </FurnitureDetailsContainer>
  );
};

export default FurnitureDetails;
