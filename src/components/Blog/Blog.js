import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Pentingnya Toleransi Beragama',
      content: 'Toleransi beragama adalah kunci untuk kehidupan yang harmonis di masyarakat yang beragam. Menghargai dan memahami perbedaan adalah langkah pertama menuju dunia yang damai dan inklusif. Dalam konteks Indonesia, yang dikenal dengan keberagaman agama, toleransi beragama menjadi sangat penting. Semua individu, tanpa memandang agamanya, harus hidup berdampingan dengan damai dan saling menghormati.'
    },
    {
      id: 2,
      title: 'Sejarah Singkat Agama Islam di Indonesia',
      content: 'Agama Islam telah memiliki sejarah panjang dan kaya di Indonesia. Dimulai dari kedatangan pedagang Arab dan penyebar agama Islam, agama ini dengan cepat menyebar di seluruh kepulauan. Penyebaran ini tidak hanya mempengaruhi aspek spiritual masyarakat, tetapi juga aspek sosial dan budaya. Hingga saat ini, Islam menjadi agama mayoritas di Indonesia dan terus memainkan peran penting dalam kehidupan sehari-hari masyarakat.'
    },
    {
      id: 3,
      title: 'Pengaruh Agama Hindu dalam Budaya Bali',
      content: 'Agama Hindu memiliki pengaruh yang sangat kuat dalam budaya Bali. Upacara keagamaan, seni, dan arsitektur di Bali sangat dipengaruhi oleh tradisi Hindu. Masyarakat Bali menjalankan berbagai ritual dan upacara yang didasarkan pada ajaran Hindu, menciptakan budaya yang unik dan kaya yang dikenal di seluruh dunia.'
    }
  ];

  return (
    <Container className="blog-container">
      <Row className="my-4">
      </Row>
      <Row>
        {blogPosts.map(post => (
          <Col key={post.id} md={12} className="mb-4">
            <Card className="blog-card">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
