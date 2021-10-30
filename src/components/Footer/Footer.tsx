import { useLocation } from "react-router";
import { IcFacebook, IcInstagram, IcWhatsapp, LogoWhite } from "../../assets";
import { Container } from "../../GlobalStyle";
import {
  FooterAddress,
  FooterAddressContainer,
  FooterBrandContainer,
  FooterBrandSubtitle,
  FooterBrandTitle,
  FooterContainer,
  FooterItemTitle,
  FooterLink,
  FooterLinkContainer,
  FooterLogo,
  FooterLogoContainer,
  FooterMainContainer,
  FooterMediaContainer,
  FooterMediaIcon,
  FooterMediaLink,
  FooterMenuContainer,
} from "./FooterStyles";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/" || pathname === "/masuk" || pathname === "/daftar") {
    return <></>;
  }

  return (
    <FooterContainer>
      <Container>
        <FooterMainContainer>
          <FooterLogoContainer>
            <FooterLogo src={LogoWhite} alt="Logo Meubel Adinda Karya" />
            <FooterBrandContainer>
              <FooterBrandSubtitle>Meubel</FooterBrandSubtitle>
              <FooterBrandTitle>Adinda Karya</FooterBrandTitle>
            </FooterBrandContainer>
          </FooterLogoContainer>

          <FooterAddressContainer>
            <FooterItemTitle>Alamat</FooterItemTitle>
            <FooterAddress>
              Jl. Ahmad Yani II No. 17, Sungai Pinang Dalam, Sungai Pinang,
              Samarinda, Kalimantan Timur, Indonesia
            </FooterAddress>
          </FooterAddressContainer>

          <FooterMenuContainer>
            <FooterItemTitle>Jelajahi Adinda Karya</FooterItemTitle>
            <FooterLinkContainer>
              <FooterLink to="#">Beranda</FooterLink>
              <FooterLink to="#">Semua Furnitur</FooterLink>
              <FooterLink to="#">Keranjang Saya</FooterLink>
              <FooterLink to="#">Tentang Kami</FooterLink>
            </FooterLinkContainer>
          </FooterMenuContainer>

          <FooterMediaContainer>
            <FooterMediaLink href="#">
              <FooterMediaIcon src={IcFacebook} alt="Facebook Adinda Karya" />
            </FooterMediaLink>
            <FooterMediaLink href="#">
              <FooterMediaIcon src={IcInstagram} alt="Instagram Adinda Karya" />
            </FooterMediaLink>
            <FooterMediaLink href="#">
              <FooterMediaIcon src={IcWhatsapp} alt="WhatsApp Adinda Karya" />
            </FooterMediaLink>
          </FooterMediaContainer>
        </FooterMainContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
