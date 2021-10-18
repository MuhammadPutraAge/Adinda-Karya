import { IcAdd, IcRemove } from "../../assets";
import {
  QuantityBoxContainer,
  QuantityBoxIcon,
  QuantityBoxMinusContainer,
  QuantityBoxPlusContainer,
  QuantityBoxValue,
} from "./QuantityBoxStyles";

interface Props {
  onSubtract: () => void;
  onAdd: () => void;
  value: number;
}

const QuantityBox: React.FC<Props> = ({ onSubtract, onAdd, value }) => {
  return (
    <QuantityBoxContainer>
      <QuantityBoxMinusContainer onClick={onSubtract}>
        <QuantityBoxIcon src={IcRemove} alt="Kurangi Jumlah" />
      </QuantityBoxMinusContainer>
      <QuantityBoxValue>{value}</QuantityBoxValue>
      <QuantityBoxPlusContainer onClick={onAdd}>
        <QuantityBoxIcon src={IcAdd} alt="Tambah Jumlah" />
      </QuantityBoxPlusContainer>
    </QuantityBoxContainer>
  );
};

export default QuantityBox;
