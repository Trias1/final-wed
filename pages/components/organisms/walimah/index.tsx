import React from "react";
import { FiClock, FiHeart, FiXCircle, FiUsers } from "react-icons/fi";

const AdabWalimah = () => {
  return (
    <>
      <div className="containers mt-5">
        <div className="card">
          <h1 className="title">Adab - Adab Walimah</h1>
          <p>
            Tanpa mengurangi rasa hormat, ada hal-hal dalam adab seorang muslim
            ketika menghadiri walimah yang harus diperhatikan :
          </p>

          <div className="adabItem">
            <div className="content">
              <h2>Memperhatikan Waktu Shalat</h2>
              <p>
                Pastikan waktu shalat tetap diperhatikan selama acara walimah
                dengan menyediakan area khusus untuk shalat.
              </p>
            </div>
            <div className="content">
              <h2>Mendoakan Mempelai</h2>
              <p>
                Sampaikan doa yang tulus untuk kedua mempelai, semoga mereka
                mendapatkan keberkahan dan kebahagiaan dalam pernikahan.
              </p>
            </div>
            <div className="content">
              <h2>Tidak Berjabat Tangan dengan yang Bukan Mahram</h2>
              <p>
                Hindari berjabat tangan dengan orang yang bukan mahram sebagai
                bentuk penghormatan dan untuk menjaga aurat.
              </p>
            </div>
            <div className="content">
              <h2>Menutup Aurat</h2>
              <p>
                Seluruh tamu dan penyelenggara hendaknya berpakaian sopan dan
                menutup aurat sesuai dengan tuntunan syariat Islam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdabWalimah;
