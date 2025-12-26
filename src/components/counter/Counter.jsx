import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase = () => setCount(count + 1);
  const increase1 = () => setCount2(count2 + 1);

  useEffect(() => {
    
    if (count >= 10) {
      document.body.style.backgroundColor = "green";
    }

    else if (count2 >= 5) {
      document.body.style.backgroundColor = "white";
    }

    else {
      document.body.style.backgroundColor = "#3b66a1ff";
    }
  }, [count, count2]);

  return (
    <div className="flex flex-col items-center justify-center gap-12 min-h-screen py-12">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl text-white">{count}</h1>
        <button
          onClick={increase}
          className="rounded-[15px] px-6 py-2 bg-blue-500 text-white transition"
        >
          bittaga oshirish
        </button>
      </div>

      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl text-white">{count2}</h1>
        <button
          onClick={increase1}
          className="rounded-[15px] px-6 py-2 bg-blue-500 text-white transition"
        >
          bittaga oshirish
        </button>
      </div>
    </div>
  );
}

export default Counter;
