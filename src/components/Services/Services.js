import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Konsultasi Agama",
      description:
        "Kami menawarkan layanan konsultasi untuk berbagai pertanyaan dan masalah terkait agama yang Anda hadapi.",
    },
    {
      id: 2,
      title: "Pelatihan Keagamaan",
      description:
        "Kami menyediakan pelatihan keagamaan untuk membantu Anda memahami lebih dalam tentang agama dan spiritualitas.",
    },
    {
      id: 3,
      title: "Acara dan Seminar",
      description:
        "Kami mengorganisir berbagai acara dan seminar yang berkaitan dengan topik-topik keagamaan.",
    },
    {
      id: 4,
      title: "Pembinaan Moral",
      description:
        "Kami menawarkan layanan pembinaan moral untuk membantu individu mengembangkan karakter yang kuat dan berbudi luhur.",
    },
    {
      id: 5,
      title: "Kegiatan Sosial",
      description:
        "Kami menyelenggarakan berbagai kegiatan sosial untuk membantu masyarakat yang membutuhkan dan membangun solidaritas.",
    },
    {
      id: 6,
      title: "Penerbitan Buku Keagamaan",
      description:
        "Kami menerbitkan buku-buku keagamaan yang dapat membantu Anda memperdalam pemahaman tentang agama dan spiritualitas.",
    },
    {
      id: 7,
      title: "Bimbingan Spiritual",
      description:
        "Kami menyediakan bimbingan spiritual untuk membantu Anda menemukan kedamaian dan makna dalam hidup.",
    },
    {
      id: 8,
      title: "Layanan Konseling Keluarga",
      description:
        "Kami menawarkan layanan konseling keluarga untuk membantu memperbaiki komunikasi dan hubungan keluarga.",
    },
    {
      id: 9,
      title: "Program Retret",
      description:
        "Kami menyelenggarakan program retret untuk memberikan waktu bagi refleksi dan pengembangan diri.",
    },
  ];

  return (
    <Container className="services-container">
      <Row className="my-4">
        <Col>
          <h1>Services</h1>
        </Col>
      </Row>
      <Row>
        {services.map((service) => (
          <Col key={service.id} md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
