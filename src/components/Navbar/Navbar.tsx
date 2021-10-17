import { Link, useLocation } from "react-router-dom";
import { IcBuy, IcSearch, LogoWhite } from "../../assets";
import { Container } from "../../GlobalStyle";
import {
  Nav,
  NavbarContainer,
  NavBrandContainer,
  NavBrandSubtitle,
  NavBrandTitle,
  NavCartLogo,
  NavLinkContainer,
  NavLinkLogin,
  NavLinkRegister,
  NavLogo,
  NavLogoContainer,
  NavMainContainer,
  NavSearchButton,
  NavSearchButtonContainer,
  NavSearchContainer,
  NavSearchInput,
} from "./NavbarStyles";

const Navbar = () => {
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/masuk" ||
    location.pathname === "/daftar"
  ) {
    return <></>;
  }

  return (
    <NavbarContainer>
      <Container>
        <Nav>
          <NavLogoContainer>
            <NavLogo src={LogoWhite} alt="Logo Meubel Adinda Karya" />
            <NavBrandContainer>
              <NavBrandSubtitle>Meubel</NavBrandSubtitle>
              <NavBrandTitle>Adinda Karya</NavBrandTitle>
            </NavBrandContainer>
          </NavLogoContainer>

          <NavMainContainer>
            <NavSearchContainer>
              <NavSearchInput placeholder="Lemari, Meja Kantor" />
              <NavSearchButtonContainer>
                <NavSearchButton src={IcSearch} alt="Cari Furnitur" />
              </NavSearchButtonContainer>
            </NavSearchContainer>
            <Link to="#">
              <NavCartLogo src={IcBuy} alt="Keranjang Belanja" />
            </Link>
          </NavMainContainer>

          <NavLinkContainer>
            <NavLinkRegister to="#">Daftar</NavLinkRegister>
            <NavLinkLogin to="#">Masuk</NavLinkLogin>
          </NavLinkContainer>
        </Nav>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
