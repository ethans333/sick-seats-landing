import HorizontalLine from "./Components/HorizontalLine";
import basketball from "./assets/basketball.svg";
import jumbotron from "./assets/jumbo-tron.png";
import inapp from "./assets/app-ss.png";
import SendMessage from "./Components/SendMessage";
import { useState } from "react";

export default function App() {
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="h-[40vh] lg:h-[50vh] grid grid-cols-2">
        <div className="flex flex-col justify-center h-full ml-[10vw] xl:ml-[5vw]">
          <h1 className="font-bold tracking-tight">Sick Seats</h1>
          <h3 className="font-semibold mt-3">
            <a className="font-black">Elevate</a> Your Seat
          </h3>
        </div>
        <div className="animate-bounce relative flex flex-col justify-center items-center h-full">
          <span className="absolute animate-ping inline-flex w-16 h-16 lg:h-24 lg:w-24 rounded-full bg-[#ff8324] opacity-25"></span>
          <img src={basketball} className="animate-spin w-16 lg:w-24" />
        </div>
      </div>
      <HorizontalLine TopPadding={false} />
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-[10vw] xl:ml-[5vw] gap-x-10 gap-y-10">
        <div>
          <h3 className="font-semibold">Our Product</h3>
          <p className="mt-3">
            Our product helps your fans have the most legendary experience
            possible by allowing them to upgrade their seating experience during
            intermission. During half time fans can bid on better seats that
            were never filled. The highest bidder will be able to upgrade their
            seat to elevate their experience.
          </p>
        </div>
        <img className="rounded-lg shadow-xl w-96 mx-auto" src={inapp} />
      </div>
      <HorizontalLine />
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-[10vw] xl:mr-[5vw] gap-x-10 gap-y-10">
        <div className="lg:order-last">
          <h3 className="font-semibold">About Us</h3>
          <p className="mt-3">
            This product was initialzed at the 2024 Magic Innovation
            Competition. We are a team of seven entrepreneurs who are passionate
            about enhancing the current event experience. In January of 2024 we
            won the Magic Innovation Competition and were recognized at half
            time during the Magic game.
          </p>
        </div>
        <img className="rounded-lg shadow-xl w-96 mx-auto" src={jumbotron} />
      </div>
      <HorizontalLine />
      <div className="mx-[10vw] xl:mr-[5vw] mb-16 lg:mb-24">
        <h3 className="font-semibold mb-5">Contact Us</h3>
        <div className="lg:w-[65%] mx-auto">
          <input
            placeholder="First Name"
            type="text"
            className="border rounded-lg rounded-md w-full h-fit py-2 px-2 mb-3"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Your Email"
            type="text"
            className="border rounded-lg rounded-md w-full h-fit py-2 px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            rows="10"
            placeholder="Message"
            type="text"
            className="mt-3 border rounded-lg rounded-md w-full h-fit py-2 px-2 hidden"
          />
          <div className="flex justify-center">
            <button
              onClick={() => SendMessage(first_name, email)}
              className="mt-3 mx-auto bg-[#ff8324] text-white rounded-lg rounded-md w-full h-fit py-1.5 px-3 hover:bg-[#cc5800]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
