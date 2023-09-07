import horror from '../data/books/horror.json'
import Button from 'react-bootstrap/Button';
import {Card, Row, Col} from 'react-bootstrap';



const BookCard = () => {
    console.log(horror);
  return (
    <Row className='w-100 justify-content-between g-3'>
        {horror.map((book) => {
        return (<Col lg={3} md={4} xs={12} key={book.asin} >
            <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                ${book.price}
                </Card.Text>
                <Button variant="primary">Acquista subito</Button>
            </Card.Body>
            </Card>
        </Col> )
        })};
    </Row>
  );
}

export default BookCard;