import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Input, FormBtn } from "../../components/Form";


class Detail extends Component {
  state = {
    user: {},
    contacts: [],
    contact_call_sign: "",
    createdAt: ""
  };
  
  
  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
      this.loadContacts();
  }

  loadContacts = () => {
    API.getContact(this.props.match.params.id)
    .then(res => {
      this.setState({ contacts: res.data })
    }
    )
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.contact_call_sign) {
    // if (this.state.call_sign && this.state.email) {
      API.saveContact({
        user_id: this.state.user.user_id,
        contact_call_sign: this.state.contact_call_sign       
      })
        .then(res => this.loadContacts())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h3>
               USER: {this.state.user.call_sign}            
              </h3>
            </Jumbotron>
            <form>
              <Input
                value={this.state.contact_call_sign}
                onChange={this.handleInputChange}
                name="contact_call_sign"
                placeholder="Contact Call Sign (required)"
              />
              <FormBtn
                disabled={!(this.state.contact_call_sign)} 
                onClick={this.handleFormSubmit}
              >
                Submit Contact
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h3>Contact List</h3>
            </Jumbotron>
            {this.state.contacts.length ? (
              <List>
                {this.state.contacts.map(contact => (
                  <ListItem key={contact.contact_id}>
                    <Link to={"/contacts/" + contact.contact_id}>
                      <strong>
                        {contact.contact_call_sign + '  ' + contact.createdAt}
                      </strong>
                    </Link>                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Contacts to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Users</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
