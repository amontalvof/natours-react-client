import { Col1of2, Col1of3, Col1of4, Col2of3, Col2of4, Col3of4, Row } from "./styles";

const Grid = () => {
    return (
        <section>
            <Row>
                <Col1of2>Col 1 of 2</Col1of2>
                <Col1of2>Col 1 of 2</Col1of2>
            </Row>
            <Row>
                <Col1of3>Col 1 of 3</Col1of3>
                <Col1of3>Col 1 of 3</Col1of3>
                <Col1of3>Col 1 of 3</Col1of3>
            </Row>
            <Row>
                <Col1of3>Col 1 of 3</Col1of3>
                <Col2of3>Col 2 of 3</Col2of3>
            </Row>
            <Row>
                <Col1of4>Col 1 of 4</Col1of4>
                <Col1of4>Col 1 of 4</Col1of4>
                <Col1of4>Col 1 of 4</Col1of4>
                <Col1of4>Col 1 of 4</Col1of4>
            </Row>
            <Row>
                <Col1of4>Col 1 of 4</Col1of4>
                <Col1of4>Col 1 of 4</Col1of4>
                <Col2of4>Col 2 of 4</Col2of4>
            </Row>
            <Row>
                <Col1of4>Col 1 of 4</Col1of4>
                <Col3of4>Col 3 of 4</Col3of4>
            </Row>
        </section>
    );
};

export default Grid;