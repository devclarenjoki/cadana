import { useReducer } from "react";
import "./index.css";
import ImageCarousel from "./ImageCarousel";
import globe from "./Images/sm-globe.png";
import shield from "./Images/sm-shield-check.png";

const initialState = {
  additionalPrice: 0,
  kemper: {
    price: 1799,
    name: "Kemper Profiling Amp"
  },
  store: [
    { id: 1, name: "Power Amp", price: 449 },
    { id: 2, name: "Foot Controller", price: 449 }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "BUY_ITEM":
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="">
      <div className="flex md:block md:justify-center items-start flex-col sm:px-20 lg:pl-20">
        <h1 className="text-4xl text-black max-w-prose font-bold mt-10 mb-5">
          Get your Kemper Profiling Amp
        </h1>
      </div>
      <div className="divide-y divide-gray-500 pl-10">
        <p className="text-gray-500 text-lg mx-10">
          All your favorite amps and effects, together in one little box.
        </p>
        <hr className="border border-gray-900 mt-5 mb-2 mx-10" />
      </div>
      <div className="">
        <section className="inline-block float-left lg:sticky lg:top-3 lg:left-0 sm:px-10 lg:pl-20 lg:w-1/2 align-top mt-5">
          <ImageCarousel className="" />
        </section>
        <section className="inline-block float-right lg:w-1/2 sm:pr-10 lg:pr-20 sm:pl-10 lg:pl-0 align-top">
          <div className="flex flex-col right">
            <p className="text-gray-500 mt-5 text-lg md:w-full ">Starting at</p>
            <h1 className="text-5xl font-bold mb-5">${state.kemper.price}</h1>
            <p className="font-medium">
              The KEMPER PROFILER™ is the leading-edge digital guitar amplifier
              and all-in-one effects processor.
            </p>
            <p className="text-gray-500">
              Hailed as a game-changer by guitarists the world over, the
              PROFILER™ is the first digital guitar amp to really nail the full
              and dynamic sound of a guitar or bass amp.
            </p>
            <p className="text-gray-500 mb-5">
              This is made possible by a radical, patented technology and
              concept which we call "PROFILING".
            </p>
          </div>
          <div className="md:flex-1 mb-5">
            <p className="text-2xl font-medium mb-2">Form Factor</p>
            <div className="md:overflow-hidden md:flex md:items-stretch md:justify-evenly md:space-x-5 cursor-pointer">
              <section
                tabIndex="0"
                className="border shadow-sm rounded-lg border-gray-300 active:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 
              focus:border-gray-700 focus-within:border-gray-700 hover:border-gray-400 md:float-left md:w-6/12 p-5"
              >
                <p className="font-medium">Profiler Head</p>
                <p>
                  Compact amplifier head, perfect for a speaker cabinet or desk.
                </p>
              </section>
              <br />
              <section
                tabIndex="0"
                className="border shadow-sm rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 
                  focus:border-gray-700 active:border-gray-700 hover:border-gray-400 cursor-pointer md:float-left md:w-6/12 p-5"
              >
                <p className="font-medium">Profiler Rack</p>
                <p>3U rackmount version of the classic profiling amplifier.</p>
              </section>
            </div>
          </div>
          <br />
          <div className="mb-5">
            <p className="text-2xl font-medium pb-2">Power Amp</p>
            <section
              tabIndex="0"
              className="border shadow-sm rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 
      focus:border-gray-700 active:border-gray-700 hover:border-gray-400 px-5 py-2 cursor-pointer"
            >
              <p className="font-medium">None</p>
              <p>Use in the studio or with your own power amp.</p>
            </section>
            <br />
            <section
              tabIndex="0"
              className="border shadow-sm rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400
      focus:border-gray-700 active:border-gray-700 hover:border-gray-400 px-5 py-2"
            >
              <p className="font-medium">Powered</p>
              <div
                onClick={() =>
                  dispatch({ type: "BUY_ITEM", payload: state.store[0].price })
                }
                className="flex cursor-pointer"
              >
                <p className="flex-1 text-left">
                  Built-in 600W solid state power amp.
                </p>
                <p className="text-right">+{state.store[0].price}</p>
              </div>
            </section>
          </div>
          <br />
          <div className="mb-5">
            <p className="text-2xl font-medium mb-2">Foot Controller</p>
            <section
              tabIndex="0"
              className="border shadow-sm rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus-visible:ring-gray-400
      focus:border-gray-700 active:border-gray-700 hover:border-gray-400 px-5 py-2 cursor-pointer"
            >
              <p className="font-medium">None</p>
            </section>
            <br />
            <section
              tabIndex="0"
              className="border shadow-sm rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus-visible:ring-gray-400
      focus:border-gray-700 active:border-gray-700 hover:border-gray-400 px-5 py-2 cursor-pointer"
            >
              <div
                onClick={() =>
                  dispatch({ type: "BUY_ITEM", payload: state.store[1].price })
                }
                className="flex"
              >
                <p className="font-medium flex-1 text-left">
                  Profiler Remote Foot Controller
                </p>
                <p className="text-right">+{state.store[1].price}</p>
              </div>
            </section>
          </div>
          <div className="divide-y divide-gray-500">
            <p className="font-medium px-2 pt-8 pb-2">Specifications</p>
            <div className="flex p-2">
              <p className="flex-1 text-left">Amp Models</p>
              <p className="text-right">200</p>
            </div>
            <div className="flex p-2">
              <p className="text-gray-900 flex-1 text-left">Effects Loop</p>
              <p className="text-right">200</p>
            </div>
            <div className="flex p-2">
              <p className="text-gray-900 flex-1 text-left">Inputs</p>
              <p className="text-right">2 x 1/4”</p>
            </div>
            <div className="flex p-2">
              <p className="text-gray-900 flex-1 text-left">MIDI I/O</p>
              <p className="text-right">In/Out/Thru</p>
            </div>
            <div className="flex p-2">
              <p className="text-gray-900 flex-1 text-left">Height</p>
              <p className="text-right">8.54”</p>
            </div>
            <div className="flex p-2">
              <p className="text-gray-900 flex-1 text-left">Width</p>
              <p className="text-right">14.88</p>
            </div>
            <div className="flex p-2">
              <p className="text-gray-900 flex-1 text-left">Depth</p>
              <p className="text-right">6.81”</p>
            </div>
            <div className="flex p-2 mb-10">
              <p className="text-gray-900 flex-1 text-left">Weight</p>
              <p className="text-right">11.73 lbs</p>
              <hr />
            </div>
          </div>
        </section>
        <div className="flex items-stretch justify-evenly sticky bottom-0 border-t bg-gray-50 flex-col md:flex-row w-full px-10 py-3">
          <div className="flex flex-col lg:flex-row md:w-1/2 lg:w-full">
            <div className="hidden md:block">
              <img
                src={globe}
                alt="/"
                className="w-6 h-6 md:float-left mx-5 mb-5"
              />
              <p className="font-medium ">Free shipping</p>
              <p className="hidden lg:flex">
                Get 2-day free shipping anywhere in North America.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src={shield}
                alt="/"
                className="w-6 h-6 md:float-left mx-5 mb-5"
              />
              <p className="font-medium">2 Year Warranty</p>
              <p className="hidden lg:flex">
                If anything goes wrong in the first two years, we'll replace it
                for free.
              </p>
            </div>
          </div>
          <div className="overflow:hidden flex sm:flex-row md:relative md:mr-20 sm:justify-end lg:justify-start lg:w-1/3">
            <div className="lg:ml-10">
              <p className="text-3xl font-bold md:float-right md:text-right sm:mr-5 md:mr-0">
                ${state.kemper.price + state.additionalPrice}
              </p>
              <br />
              <p className="hidden md:block float-left">
                Need financing?
                <a href="/financing" className="underline">
                  Learn more
                </a>
              </p>
            </div>
            <div className="md:absolute lg:inline-block md:-right-20 md:pb-5 md:self-center">
              <button
                class="p-2 bg-gray-900 rounded-lg font-normal text-sm text-white
                focus:outline-none focus:ring-2 focus:ring-gray-300  hover:bg-gray-700 active:bg-gray-900"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
