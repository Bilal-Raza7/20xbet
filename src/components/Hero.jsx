import React from "react";
import casino from "../images/casino.png";
import crick from "../images/crcik.png";
import matka from "../images/matka.png";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="m-6">
          <div className="card lg:card-side bg-base-100 shadow-xl xl:m-6 lg:m-5 md:m-4 sm:m-3 my-5 mx-2">
            <figure>
              <img src={casino} alt="Album" className="w-40" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Casino Game is Live Now!</h2>
              <p>Click the button to Play </p>
              <div className="card-actions justify-end">
                <a href="/casino">
                  <button className="btn btn-primary">Play</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-xl xl:m-6 lg:m-5 md:m-4 sm:m-3 my-5 mx-2">
            <figure>
              <img src={crick} alt="Album" className="w-40" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Cricket Game is Live Now!</h2>
              <p>Click the button to Play </p>
              <div className="card-actions justify-end">
                <a href="/cricket">
                  <button className="btn btn-primary">Play</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-xl xl:m-6 lg:m-5 md:m-4 sm:m-3 my-5 mx-2">
            <figure>
              <img src={matka} alt="Album" className="w-40" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Matka Game is Live Now!</h2>
              <p>Click the button to Play </p>
              <div className="card-actions justify-end">
                <a href="/matka">
                  <button className="btn btn-primary">Play</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
