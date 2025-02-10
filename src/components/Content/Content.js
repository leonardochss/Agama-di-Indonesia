import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Content.css";

const Content = () => {
  return (
    <div>
      <div className="content mt-5 background-image">
        <div className="container">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Agama Islam</Card.Title>
              <Card.Text>
                Islam adalah agama monoteistik yang didirikan oleh Nabi Muhammad
                pada abad ke-7 di Arab, dengan Al-Qur'an sebagai kitab sucinya.
                Ajaran utamanya meliputi keyakinan pada satu Tuhan (Allah),
                nabi-nabi, kitab-kitab suci, malaikat, hari kiamat, dan takdir.
                Praktik dasar Islam terdiri dari lima rukun: syahadat
                (pernyataan iman), salat (doa lima waktu), zakat (amal), puasa
                di bulan Ramadan, dan haji (ziarah ke Mekah). Islam mengajarkan
                keadilan, kesederhanaan, dan kasih sayang serta melarang
                tindakan-tindakan seperti pembunuhan, pencurian, dan perzinaan.
              </Card.Text>
              <Link to="/agama-islam">
                <Button variant="success">Read More</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="text-center mt-5">
            <Card.Body>
              <Card.Title>Agama Kristen Protestan</Card.Title>
              <Card.Text>
                Kristen Protestan berasal dari gerakan reformasi pada abad ke-16
                yang dipelopori oleh Martin Luther, John Calvin, dan tokoh-tokoh
                lainnya. Mereka menentang praktik-praktik dalam Gereja Katolik
                Roma pada saat itu dan menekankan pentingnya kepercayaan pribadi
                dan otoritas Alkitab. Kristen Protestan mengakui Alkitab sebagai
                sumber otoritatif tunggal iman dan praktik mereka, serta
                mengajarkan bahwa keselamatan diperoleh melalui iman pada Yesus
                Kristus sebagai Tuhan dan Juruselamat. Gereja-gereja Protestan
                memiliki berbagai denominasi dan keyakinan teologis, tetapi
                umumnya mengakui dua sakramen utama: baptisan dan Perjamuan
                Kudus (Ekaristi).
              </Card.Text>
              <Link to="/agama-kristen-protestan">
                <Button variant="success">Read More</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="text-center mt-5">
            <Card.Body>
              <Card.Title>Agama Katolik</Card.Title>
              <Card.Text>
                Katolik merupakan cabang utama dalam agama Kristen, yang
                mengakui otoritas Gereja Katolik Roma dan Paus sebagai pengajar
                otoritatif. Mereka menghormati Sakramen-sakramen, seperti
                baptisan, konfirmasi, dan Ekaristi (perjamuan suci), serta
                percaya bahwa keselamatan diperoleh melalui iman pada Yesus
                Kristus sebagai Anak Allah dan Juruselamat dunia.
              </Card.Text>
              <Link to="/agama-katolik">
                <Button variant="success">Read More</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="text-center mt-5">
            <Card.Body>
              <Card.Title>Agama Hindu</Card.Title>
              <Card.Text>
                Agama Hindu memiliki akar yang sangat kuno di India dan
                mengandung berbagai aliran dan praktik keagamaan. Penganut Hindu
                meyakini dalam konsep reinkarnasi dan karma, di mana kehidupan
                setelah mati dipengaruhi oleh perbuatan dalam kehidupan
                sebelumnya. Mereka juga memuja banyak dewa dan dewi, seperti
                Brahma, Wisnu, Siwa, dan lainnya, serta menghormati Veda sebagai
                teks suci tertua dan terpenting.
              </Card.Text>
              <Link to="/agama-hindu">
                <Button variant="success">Read More</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="text-center mt-5">
            <Card.Body>
              <Card.Title>Agama Buddha</Card.Title>
              <Card.Text>
                Agama Buddha didirikan oleh Siddhartha Gautama, yang kemudian
                dikenal sebagai Buddha, di India pada abad ke-6 SM. Agama ini
                mengajarkan tentang empat kebenaran mulia yang mengungkap
                penyebab penderitaan manusia (dukkha) dan jalan untuk mencapai
                pembebasan, atau nirwana, melalui Jalan Mulia Delapan Anggota.
                Penganut Buddha mempraktikkan meditasi untuk mencapai pencerahan
                dan menghormati ajaran-ajaran Buddha sebagai panduan spiritual
                mereka.
              </Card.Text>
              <Link to="/agama-buddha">
                <Button variant="success">Read More</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="text-center mt-5">
            <Card.Body>
              <Card.Title>Agama Konghucu</Card.Title>
              <Card.Text>
                Konghucu adalah sistem pemikiran, filsafat, dan ajaran etika
                yang berasal dari Tiongkok, didasarkan pada ajaran-ajaran Kong
                Fuzi (Konfusius). Ajaran Konghucu menekankan pentingnya etika,
                hubungan sosial yang harmonis, dan penghargaan terhadap tradisi
                dan leluhur. Penganutnya mempraktikkan ritual keagamaan seperti
                sembahyang dan upacara penghormatan terhadap leluhur, serta
                mengembangkan moralitas pribadi dan sosial berdasarkan ajaran
                Konfusius.
              </Card.Text>
              <Link to="/agama-konghucu">
                <Button variant="success">Read More</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Content;
