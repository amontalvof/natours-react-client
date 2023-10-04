import { Col1of2, Row } from "../../layout/grid/styles";
import { HeadingSecondary, SectionAbout } from "./styles";

const About = () => {
    return (
        <SectionAbout>
            <div className="u-center-text u-margin-bottom-8">
                <HeadingSecondary>Exciting tours for adventurous people</HeadingSecondary>
            </div>
            <Row>
                <Col1of2>Col 1 of 2</Col1of2>
                <Col1of2>Col 1 of 2</Col1of2>
            </Row>
        </SectionAbout>
    );
};

export default About;