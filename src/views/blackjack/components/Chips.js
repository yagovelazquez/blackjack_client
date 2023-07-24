import React from 'react';

const chipsData = [
  { color: 'bg-red-500', value: 1 },
  { color: 'bg-white', value: 5 },
  { color: 'bg-green-500', value: 10 },
  { color: 'bg-blue-500', value: 20 },
  { color: 'bg-black text-white', value: 50 },
  { color: 'bg-yellow-500', value: 100 },
];

const Chips = ({onAddValue}) => {
  return (
    <div className="flex space-x-2">
      {chipsData.map((data) => (
        <div
        onClick={() => onAddValue(data.value)}
          key={data.value}
          className={`w-16 cursor-pointer h-16 rounded-full border-4 font-extrabold flex justify-center items-center ${data.color}`}
        >
          {data.value}
        </div>
      ))}
    </div>
  );
};

export default Chips;
