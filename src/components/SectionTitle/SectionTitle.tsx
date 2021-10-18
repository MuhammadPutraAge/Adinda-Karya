import {
  SectionTitleContainer,
  SectionTitleDescription,
  SectionTitleHeading,
} from "./SectionTitleStyles";

interface Props {
  title: string;
  description: string;
}

const SectionTitle: React.FC<Props> = ({ title, description }) => {
  return (
    <SectionTitleContainer>
      <SectionTitleHeading>{title}</SectionTitleHeading>
      <SectionTitleDescription>{description}</SectionTitleDescription>
    </SectionTitleContainer>
  );
};

export default SectionTitle;
