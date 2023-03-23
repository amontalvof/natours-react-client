import { IChildren } from '../../types/children';
import LogoWhite from '../../../assets/logo-white.png';
import {
    HeaderContainer,
    HeadingPrimary,
    HeadingPrimaryMain,
    HeadingPrimarySub,
    Logo,
    LogoBox,
    TextBox,
} from './styles';

interface HeaderProps extends IChildren {}

const Header = (props: HeaderProps) => {
    return (
        <HeaderContainer>
            <LogoBox>
                <Logo src={LogoWhite} alt="logo" />
            </LogoBox>
            <TextBox>
                <HeadingPrimary>
                    <HeadingPrimaryMain>Outdoors</HeadingPrimaryMain>
                    <HeadingPrimarySub>is where life happens</HeadingPrimarySub>
                </HeadingPrimary>
            </TextBox>
        </HeaderContainer>
    );
};

export default Header;
