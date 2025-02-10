  import React, { useState } from 'react';
  import { Container, Row, Col, Form, Button } from 'react-bootstrap';
  import './ContactUs.css';

  const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data submitted:', formData);
    };

    return (
      <Container className="contact-us-container">
        <Row className="my-4">
          <Col>
            <h1>Contact Us</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>Hubungi Kami</h2>
            <p>Alamat: Jalan Contoh No. 123, Medan, Indonesia</p>
            <p>Email: info@komposindo.com</p>
            <p>Telepon: +62 21 12345678</p>
          </Col>
          <Col md={6}>
            <h2>Kirim Pesan</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama Anda"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan email Anda"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Pesan</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Masukkan pesan Anda"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Kirim
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };

  export default ContactUs;
