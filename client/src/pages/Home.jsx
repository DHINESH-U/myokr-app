// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import { motion } from 'framer-motion';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaShieldAlt, FaBullseye, FaArrowUp } from 'react-icons/fa';
import CountUp from 'react-countup';

const Home = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom right, #f0f4ff, #e1f7f5)', minHeight: '100vh' }}>
      <Container className="py-5">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-center"
        >
          <h1 className="display-4 fw-bold text-primary">🚀 Align Your Team with MyOKR</h1>
          <p className="lead text-secondary">Set, track, and achieve goals that matter – together.</p>
          <Link to="/register">
            <Button variant="success" size="lg" className="px-5 mt-3 shadow">
              Get Started
            </Button>
          </Link>
        </motion.div>

        {/* Counters */}
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="text-success"><CountUp end={5000} duration={3} />+</h2>
            <p>Active Users</p>
          </Col>
          <Col>
            <h2 className="text-primary"><CountUp end={12000} duration={3} />+</h2>
            <p>OKRs Tracked</p>
          </Col>
          <Col>
            <h2 className="text-danger"><CountUp end={250} duration={3} />+</h2>
            <p>Teams Onboarded</p>
          </Col>
        </Row>

        {/* Feature Cards */}
        <Row className="mb-5 text-center">
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="p-4 border-0 shadow-sm bg-light">
                <FaBullseye size={40} className="mb-3 text-primary" />
                <h5 className="text-dark">OKR Management</h5>
                <p>Set and manage OKRs with ease.</p>
              </Card>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="p-4 bg-white border-0 shadow-sm">
                <FaUsers size={40} className="mb-3 text-success" />
                <h5 className="text-dark">Team Hierarchy</h5>
                <p>Structure org into teams and roles.</p>
              </Card>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="p-4 border-0 shadow-sm bg-light">
                <FaChartLine size={40} className="mb-3 text-info" />
                <h5 className="text-dark">Progress Tracking</h5>
                <p>Visual progress and milestone tracking.</p>
              </Card>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="p-4 bg-white border-0 shadow-sm">
                <FaShieldAlt size={40} className="mb-3 text-warning" />
                <h5 className="text-dark">Secure Access</h5>
                <p>Role-based logins and protected data.</p>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Footer */}
        <footer className="text-center text-muted small">
          <p>Made with ❤️ by Dhinesh • MyOKR v1.0 • <a href="https://github.com">GitHub</a></p>
        </footer>
      </Container>

      {/* Back to Top Button */}
      <Button
        variant="dark"
        className="bottom-0 m-4 rounded-circle position-fixed end-0"
        style={{ zIndex: 999 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaArrowUp />
      </Button>
    </div>
  );
};

export default Home;
// git push -u origin main
