

const Foodcard = ({item}) => {
    const {name,price,recipe,image} = item
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 top-4  px-2">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions flex flex-col items-center">
            <button className="btn btn-outline ">ADD TO CART</button>
          </div>
        </div>
      </div>
    );
};

export default Foodcard;