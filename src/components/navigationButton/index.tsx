import { Anchor } from './styles';

interface NavigationButtonProps {
    txColor: string;
    bgColor: string;
    href: string;
    text: string;
}

const NavigationButton = ({
    href,
    txColor,
    bgColor,
    text,
}: NavigationButtonProps) => {
    return (
        <Anchor href={href} txColor={txColor} bgColor={bgColor}>
            {text}
        </Anchor>
    );
};

export default NavigationButton;
