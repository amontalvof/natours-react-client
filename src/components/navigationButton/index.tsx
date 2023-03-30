import { Anchor } from './styles';

interface NavigationButtonProps {
    txColor: string;
    bgColor: string;
    href: string;
    text: string;
    animated?: boolean;
}

const NavigationButton = ({
    href,
    txColor,
    bgColor,
    text,
    animated = false,
}: NavigationButtonProps) => {
    return (
        <Anchor
            href={href}
            txColor={txColor}
            bgColor={bgColor}
            animated={animated}
        >
            {text}
        </Anchor>
    );
};

export default NavigationButton;
