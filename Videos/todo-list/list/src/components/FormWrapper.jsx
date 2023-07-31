import { TextInput } from "./TextInput";
import {ProductItem} from "./ProductItem";

export const FormWrapper = () => {
    const allProduct = ["Hello", "HEKK", "SDFS","Hello", "HEKK", "SDFS"].map((product) => {
        return <div>
            <ProductItem product={product} />
        </div>
    })
    return (<div>
        <form className="bg-white h-[500px] w-[450px] rounded-lg flex px-4 flex-col gap-y-3">
            <h1 className="text-xl font-bold py-3">TODO APP</h1>

            <TextInput />

            <div  className="flex flex-col gap-y-3 py-2 max-h-[320px] overflow-y-scroll shadow-inner scrollbar pr-2">
                { allProduct }
            </div>

            <div className="flex justify-between items-center">
                <span className="font-semibold">{`You have ${allProduct.length} pending Products`}</span>
                <button className="px-2 rounded text-white bg-sky-500 font-semibold py-2">Clear All</button>
            </div>
        </form>
    </div>)
}