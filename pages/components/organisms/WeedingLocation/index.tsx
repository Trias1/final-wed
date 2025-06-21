import React from "react";
import { BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

export default function WeedingLocation() {
  return (
    <div id="weddingDate">
      <div className="containers mt-4">
        <div className="card-wed">
          <h2 className="section-titles">Save The Date</h2>

          <div className="card-duo">
            {/* Akad Nikah */}
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Akad Nikah</h3>
                <p className="card-subtitle">
                  Insya Allah akan diselenggarakan pada:
                </p>
                <div className="save-the-date">
                  <span className="day">Minggu</span>
                  <div className="date-container">
                    <span className="date">28</span>
                    <hr className="date-line" />
                  </div>
                  <span className="month">September</span>
                  <span className="year">2025</span>
                </div>
                <div className="event-detail">
                  <BsClock className="icon" />
                  <h4>08.00 - 10.00 WIB</h4>
                </div>
                <div className="event-detail">
                  <GoLocation className="icon" />
                  <h4>
                    Jl. Pangeran Cakrabuana No.102, Sendang, Kec. Sumber,
                    Kabupaten Cirebon, Jawa Barat 45611
                  </h4>
                </div>
              </div>
            </div>

            {/* Walimah */}
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Walimah</h3>
                <p className="card-subtitle">
                  Akan dilaksanakan pada hari yang sama:
                </p>
                <div className="save-the-date">
                  <span className="day">Minggu</span>
                  <div className="date-container">
                    <span className="date">28</span>
                    <hr className="date-line" />
                  </div>
                  <span className="month">September</span>
                  <span className="year">2025</span>
                </div>
                <div className="event-detail">
                  <BsClock className="icon" />
                  <h4>12.00 - 15.00 WIB</h4>
                </div>
                <div className="event-detail">
                  <GoLocation className="icon" />
                  <h4>
                    Jl. Pangeran Cakrabuana No.102, Sendang, Kec. Sumber,
                    Kabupaten Cirebon, Jawa Barat 45611
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
