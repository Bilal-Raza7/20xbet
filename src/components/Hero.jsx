import React, { useState } from "react";
import casino from "../images/casino.png";
import crick from "../images/crcik.png";
import matka from "../images/matka.png";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <>
      <Marquee
        pauseOnHover={true}
        speed={100}
        className="text-7xl"
        autoFill={true}
      >
        <p className="grad">Welcome To 20xBet &nbsp;</p>
      </Marquee>
      <div className="container w-full">
        <div className="m-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3">
          <div className="card 2xl:w-96 lg:w-72 xl:w-80 md:64 sm:w-60 w-54 bg-white text-black shadow-xl xl:m-6 lg:m-5 md:m-4 sm:m-3 my-5 mx-2">
            <figure>
              <img src={casino} alt="Album" className="w-40" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Casino Game is Live Now!</h2>
              <p>Click the button to Play </p>
              <div className="card-actions justify-end">
                <a href="/casino">
                  <button className="btn bg-blue-500 text-white">Play</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card 2xl:w-96 lg:w-72 xl:w-80 md:64 sm:w-60 w-54 bg-white text-black shadow-xl xl:m-6 lg:m-5 md:m-4 sm:m-3 my-5 mx-2">
            <figure>
              <img src={crick} alt="Album" className="w-40" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Cricket Game is Live Now!</h2>
              <p>Click the button to Play </p>
              <div className="card-actions justify-end">
                <a href="/cricket">
                  <button className="btn bg-blue-500 text-white">Play</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card 2xl:w-96 lg:w-72 xl:w-80 md:64 sm:w-60 w-54 bg-white text-black shadow-xl xl:m-6 lg:m-5 md:m-4 sm:m-3 my-5 mx-2">
            <figure>
              <img src={matka} alt="Album" className="w-40" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Matka Game is Live Now!</h2>
              <p>Click the button to Play </p>
              <div className="card-actions justify-end">
                <a href="/matka">
                  <button className="btn bg-blue-500 text-white">Play</button>
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
