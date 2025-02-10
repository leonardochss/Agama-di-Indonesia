import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="about-container aboutbg">
      <Row className="my-4">
        <Col>
          <h1>Tentang Kami</h1>
          <p>
            Website ini dibuat dengan tujuan untuk memberikan informasi yang
            komprehensif dan akurat tentang enam agama yang diakui di Indonesia.
            Kami berharap website ini dapat menjadi sumber pengetahuan yang
            bermanfaat bagi semua orang.
          </p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <Card className="team-card">
            <Card.Body>
              <Card.Title>Tim Pengembang</Card.Title>
              <Card.Text>
                Kami adalah tim yang terdiri dari berbagai latar belakang yang
                memiliki minat dalam pengembangan web dan pendidikan agama.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="sources-card">
            <Card.Body>
              <Card.Title>Sumber Informasi</Card.Title>
              <Card.Text>
                Informasi yang kami sajikan berasal dari berbagai sumber
                terpercaya seperti buku, artikel akademis, dan situs web resmi
                dari masing-masing agama.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <Card className="vision-mission-card">
            <Card.Body>
              <Card.Title>Visi dan Misi</Card.Title>
              <Card.Text>
                Visi kami adalah untuk mempromosikan pemahaman antar agama dan
                misi kami adalah untuk menyediakan informasi yang akurat dan
                mudah diakses tentang enam agama di Indonesia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="contact-card">
            <Card.Body>
              <Card.Title>Kontak</Card.Title>
              <Card.Text>
                Jika Anda memiliki pertanyaan atau masukan, silakan hubungi kami
                melalui email di info@komposindo.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <Card className="acknowledgment-card">
            <Card.Body>
              <Card.Title>Penghargaan</Card.Title>
              <Card.Text>
                Terima kasih kepada semua individu dan organisasi yang telah
                membantu dalam pengembangan website ini.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
