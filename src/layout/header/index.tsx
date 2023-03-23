import { HeaderContainer, Logo, LogoBox } from './styles';
import { IChildren } from '../../types/children';
import LogoWhite from '../../../assets/logo-white.png';

interface HeaderProps extends IChildren {}

const Header = (props: HeaderProps) => {
    return (
        <HeaderContainer>
            <LogoBox>
                <Logo src={LogoWhite} alt="logo" />
            </LogoBox>
        </HeaderContainer>
    );
};

export default Header;
