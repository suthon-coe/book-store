import React, { Component } from 'react';
import db from './firestore'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'

const Book = ({title}) => (
  <div>{title}</div>
)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {books: []}
  }
  componentDidMount(){
    let self = this;
    db.collection('book').get().then( snapshot => {
      let books = _.map(snapshot.docs, doc => ({id: doc.id, ...doc.data()}))
      self.setState({books})
    })
  }
  render() {
    return (
      <div>
        <Carousel>
          {
            _.map(this.state.books, book => {
              return (
                <Carousel.Item>
                  <img height={300}  src={book.imageUrl} />
                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.price}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })            
          }
        </Carousel>
      </div>
    );
  }
}

export default App;
