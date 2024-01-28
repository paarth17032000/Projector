"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect } from "react";

export default function Home() {
  useEffect(() => {
    const wheel = document.getElementById("wheel");

    if (wheel) {
      for (let i = 1; i <= 24; i++) {
        let tag = document.createElement("span");
        tag.className =
          "absolute top-0 left-0 w-full h-full after::absolute after::w-[5%] after::top-[2px] after::left-[calc(50%-0px)] after:rotate-[" +
          15 * i +
          "deg] after:origin-bottom after:h-[30px] after:bg-black";
        console.log(tag);
        wheel.appendChild(tag);
      }
    }
  }, []);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#90e0ef] p-24">
      <div className="flex flex-col w-[400px]">
        <motion.div
          // initial={{ x: "-100vw" }}
          // animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-[70px] bg-orange-400"
        ></motion.div>
        <motion.div
          className="w-full h-[70px] bg-white flex justify-center "
        >
          <div className="w-[70px]  relative h-[70px] rounded-full border-2 border-indigo-600">
            <div id="wheel" className="absolute top-0 left-0 w-full h-full">
              {/* <span className="absolute top-0 left-0 w-full h-full after:absolute after:w-[5%] after:top-[2px] after:left-[calc(50%-0px)] after:rotate-[-7.5deg] after:origin-bottom after:h-[30px] after:bg-black"></span> */}
            </div>{" "}
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 1, delay: 1 }}
          className="w-full h-[70px] bg-green-500"
        ></motion.div>
      </div>
    </main>
  );
}
