import React from 'react';
// import Button from 'react-bootstrap/Button';

class Footer extends React.Component {

  // this is how we pass data to components (i.e. props)
  // We only need to use constructor and super when we want to pass data through

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <footer>

        <h6>{this.props.authorName}</h6>
      </footer>
    )
  }
}

export default Footer;

// function Footer() {

//     return(
//       // JSX goes here, think of this as HTML
//       <footer>
//         <h6>John Thomas Gause III</h6>
//       </footer>
//     )
//   }
  
//   // every component should be exported from the file
//   export default Footer;