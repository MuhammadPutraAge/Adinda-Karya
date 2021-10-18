import { SizedBoxContainer } from "./SizedBoxStyles";

interface Props {
  width?: string;
  height?: string;
}

const SizedBox: React.FC<Props> = ({ width = "0", height = "0" }) => {
  return <SizedBoxContainer width={width} height={height} />;
};

export default SizedBox;
