import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesFavorited: 0,
    };
  }

  handleFavoriteClick = () => {
    this.setState({ timesFavorited: this.state.timesFavorited + 1 });
  }

  handleImageClick = () => {
    console.log('card clicked');
    this.props.specifyBeast(this.props.beastDetails);
  } 

  render() {
    return (
      <Card>
        <Card.Body>
          <div className="headerContainer">
            <Card.Title>{this.props.beastDetails.title}</Card.Title>
            {/* HEART IMAGE!!!!!!!!! */}
            {/* <img src="/src/assets/heart.png" alt="heart"></img>  */}
            {/* <img src={} alt="heart"></img>  */}
            {this.state.timesFavorited}
          </div>
          <Card.Img variant="top" onClick={this.handleImageClick} src={this.props.beastDetails.image_url} />
          <Card.Text>{this.props.beastDetails.description}</Card.Text>
          <Button variant="primary" onClick={this.handleFavoriteClick}></Button>
          {/* <Button onClick={() => setLikes(likes + 1)} variant="primary">:sparkling_heart: Like</Button> */}
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;

// const HornedBeasts = (props) => {
//     return (
//         <div>
//             <h2>{props.title}</h2>
//             <img src={props.imageUrl} alt={props.title} title={props.title} />
//             <p>{props.description}</p>
//         </div>
//     );
// }

// export default HornedBeasts;

