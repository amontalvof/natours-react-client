import { HeaderContainer } from './styles';
import { IChildren } from '../../types/children';

interface HeaderProps extends IChildren {}

const Header = (props: HeaderProps) => {
    return <HeaderContainer>Some text</HeaderContainer>;
};

export default Header;
