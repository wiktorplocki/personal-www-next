import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, NavItem, NavLink, Row } from 'reactstrap';

// eslint-disable-next-line prefer-arrow-callback
const AdminDashboard = () => {
  const tabs = ['Blogs', 'Projects', 'Technologies'];
  const [activeNavItem, setActiveNavItem] = useState(0);
  useEffect(() => {
    try {
      document.title = `Wiktor Płocki - Admin`;
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <Nav tabs>
            {tabs.map((tab, index) => (
              <NavItem
                active={activeNavItem === index}
                onClick={() => setActiveNavItem(index)}
              >
                <NavLink href="#" active={activeNavItem === index}>
                  {tab}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <section className="content-box">
            <div className="w-100">
              <Container>
                <Row>
                  <Col>
                    <h1>Content!</h1>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
