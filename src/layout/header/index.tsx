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
import NavigationButton from '../../components/navigationButton';
import { WHITE, GRAY } from '../../constants/colors';

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
                <NavigationButton
                    href="#"
                    text="Discover our tours"
                    txColor={GRAY}
                    bgColor={WHITE}
                    animated
                />
            </TextBox>
        </HeaderContainer>
    );
};

export default Header;
