import { useState } from "react";
import { DesktopPattern, IconDice, MobilePattern } from "./assets";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [quote, setquote] = useState(null);
  const url = "https://api.adviceslip.com/advice";



  const fetchdata = () => {
    axios
      .get(url)
      .then((res) => setquote(res.data.slip))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    !quote && fetchdata()
  },[])
  

  const HandleClick = () => {
    fetchdata();``
  };

  return (
    <div className="min-h-[100vh]  bg-dark-blue flex items-center justify-center">
      <div className="relative rounded-md bg-grayish-blue w-[90%] max-w-[600px] flex flex-col items-center gap-4 pt-4 sm:pt-6 px-4 sm:px-6 pb-12">
        <h4 className="tracking-widest text-neon-green">ADVICE #{quote?.id}</h4>
        <p className="font-bold text-[24px] text-white text-center">
          {quote?.advice || '...'}
        </p>
        <img
          src={MobilePattern}
          alt="mobile pattern divider"
          className="sm:hidden"
        />
        <img
          src={DesktopPattern}
          alt="desktop pattern divider"
          className="hidden sm:block"
        />
        <div className="cursor-pointer flex items-center justify-center bg-neon-green hover:shadow-glowy-custom w-[3.5rem] aspect-square rounded-full absolute bottom-0 translate-y-[50%]" onClick={HandleClick}>
          <img
            src={IconDice}
            alt="icon dice"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default App;
