import React from "react";
import "./AgamaBudha.css";

const AgamaBuddha = () => {
  return (
    <div className="agama-buddha bgbudha">
      <div className="card">
        <h1>Agama Buddha</h1>
        <p>
          Agama Buddha didirikan oleh Siddhartha Gautama, yang kemudian dikenal
          sebagai Buddha, di India pada abad ke-6 SM. Agama ini mengajarkan
          tentang empat kebenaran mulia yang mengungkap penyebab penderitaan
          manusia (dukkha) dan jalan untuk mencapai pembebasan, atau nirwana,
          melalui Jalan Mulia Delapan Anggota.
        </p>
      </div>
      <div className="card">
        <h2>Empat Kebenaran Mulia</h2>
        <ul>
          <li>
            <strong>Kebenaran Mulia tentang Dukkha:</strong> Kehidupan ini penuh
            dengan penderitaan.
          </li>
          <li>
            <strong>Kebenaran Mulia tentang Asal Mula Dukkha:</strong>{" "}
            Penderitaan berasal dari nafsu keinginan dan ketidaktahuan.
          </li>
          <li>
            <strong>Kebenaran Mulia tentang Akhir Dukkha:</strong> Penderitaan
            dapat diakhiri dengan menghentikan nafsu keinginan.
          </li>
          <li>
            <strong>Kebenaran Mulia tentang Jalan Menuju Akhir Dukkha:</strong>{" "}
            Jalan Mulia Delapan Anggota adalah cara untuk mengakhiri
            penderitaan.
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>Jalan Mulia Delapan Anggota</h2>
        <ul>
          <li>Pandangan Benar</li>
          <li>Pikiran Benar</li>
          <li>Ucapan Benar</li>
          <li>Tindakan Benar</li>
          <li>Mata Pencaharian Benar</li>
          <li>Usaha Benar</li>
          <li>Perhatian Benar</li>
          <li>Konsentrasi Benar</li>
        </ul>
      </div>
      <div className="card">
        <h2>Tiga Permata</h2>
        <ul>
          <li>Buddha: Guru yang tercerahkan</li>
          <li>Dharma: Ajaran Buddha</li>
          <li>Sangha: Komunitas para biksu dan biksuni</li>
        </ul>
      </div>
      <div className="card">
        <h2>Hari Raya Buddha</h2>
        <ul>
          <li>
            <strong>Vesak:</strong> Perayaan kelahiran, pencerahan, dan wafatnya
            Buddha.
          </li>
          <li>
            <strong>Asalha Puja:</strong> Perayaan Buddha memberikan khotbah
            pertama tentang Empat Kebenaran Mulia.
          </li>
          <li>
            <strong>Magha Puja:</strong> Perayaan memperingati pertemuan penting
            para murid Buddha.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AgamaBuddha;
