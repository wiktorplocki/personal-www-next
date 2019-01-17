import React, { useRef, useEffect, useContext } from 'react';
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
import AuthContext from '../../context/AuthContext';

// eslint-disable-next-line prefer-arrow-callback
const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  useEffect(() => {
    try {
      document.title = `Wiktor Płocki - Login`;
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }, []);
  const handleLogin = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const query = `query {
      login(email: "${email}", password: "${password}") {
        token
        tokenExpiry
      }
    }`;
    fetch(process.env.GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(result =>
        login(result.data.login.token, result.data.login.tokenExpiry)
      )
      .catch(err => {
        console.error(err); // eslint-disable-line no-console
      });
  };
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
            <Form onSubmit={handleLogin}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input id="email" placeholder="Email" innerRef={emailRef} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  innerRef={passwordRef}
                />
              </FormGroup>
              <Button type="submit" color="primary" className="w-100">
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
