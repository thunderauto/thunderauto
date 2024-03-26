import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = ({ item }) => {
  return (
    <div className="grid  md:grid-cols-4 gap-5 w-full min-h-[50vh] ">
      <div className="row-span-2 relative flex items-center justify-center flex-col text-color1 ">
        <img src={item.img} className="rounded w-full" />

        <h1 className="absolute top-5 text-color3">{item.title}</h1>
        <Link to={item.link}> View Accessories</Link>
      </div>

      <div className="md:row-span-2 md:col-span-3 grid md:grid-cols-3 gap-5">
        {item.data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-color1 flex-col"
          >
            <img src={item.img} className="rounded" />
            <h1 className="text-color3">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
