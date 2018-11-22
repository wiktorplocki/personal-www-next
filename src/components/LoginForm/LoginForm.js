import React, { useState, useEffect } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap';

// eslint-disable-next-line prefer-arrow-callback
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    try {
      document.title = `Wiktor Płocki - Login`;
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }, []);
  const handleLogin = (authUrl, plaintextField, passwordField) =>
    fetch(authUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: plaintextField,
        password: passwordField
      })
    });
  return (
    <main className="masthead d-flex">
      <Container className="my-auto text-center flex-center">
        <Row>
          <Col
            xl={{ size: 6, offset: 3 }}
            lg={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
            sm={{ size: 6, offset: 3 }}
            xs={{ size: 6, offset: 3 }}
          >
            <Form>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  id="username"
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </FormGroup>
              <Button
                type="submit"
                color="primary"
                onClick={e => {
                  e.preventDefault();
                  handleLogin('http://localhost:3000', username, password);
                }}
                className="w-100"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default LoginForm;
