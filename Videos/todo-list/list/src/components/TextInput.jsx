import { useState } from 'react';
export const TextInput = () => {
    const [onEnteredValue, valueType] = useState("")
  return (
      <div className="flex gap-x-3">
          {valueType}
            <input type="text"
                   onInput={(event) => onEnteredValue(event.target.value)}
                   className="outline-none border-2 border-gray rounded placeholder:text-sm h-12 pl-2 text-sm w-full"
                   placeholder="Enter the Product"
                   value={valueType}
            />
            <button className="px-2 rounded text-white text-3xl bg-sky-500 font-semibold w-[50px]">+</button>
      </div>
  )
}