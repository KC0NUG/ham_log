import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Users extends Component {
  state = {
    users: [],
    user_id: "",
    call_sign: "",
    email: "",
    password: "",
    comments: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, user_id: "", call_sign: "", email: "", comments: "", password: "" })
      )
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
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
    if (this.state.call_sign) {
    // if (this.state.call_sign && this.state.email) {
      API.saveUser({
        call_sign: this.state.call_sign,
        email: this.state.email,
        comments: this.state.comments,
        password: this.state.password
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h3>Contact Logger: Users</h3>
            </Jumbotron>
            <form>
              <Input
                value={this.state.call_sign}
                onChange={this.handleInputChange}
                name="call_sign"
                placeholder="Call Sign (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (Optional)"
              />
              <TextArea
                value={this.state.comments}
                onChange={this.handleInputChange}
                name="comments"
                placeholder="Comments (Optional)"
              />
              <FormBtn
                disabled={!(this.state.call_sign)}
                // disabled={!(this.state.email && this.state.call_sign)}
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h3>Users List</h3>
            </Jumbotron>
            {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user.user_id}>
                    <Link to={"/users/" + user.user_id}>
                      <strong>
                        {user.call_sign}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteUser(user.user_id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Users to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;
