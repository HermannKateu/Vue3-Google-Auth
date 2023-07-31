export const ProductItem = ({product}) => {
  return (
      <div className="border rounded px-2 py-3 shadow-md hover:shadow-xl cursor-pointer bg-gray-100">
          { product }
      </div>
  )
}