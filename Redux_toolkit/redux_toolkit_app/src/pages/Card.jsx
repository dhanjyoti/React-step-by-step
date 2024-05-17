import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/Cardslice";

const Card = () => {
  const dispatch = useDispatch();
  const carditems = useSelector((state) => state.card);
  const handleremove =(id)=>{
    dispatch(remove(id))
  }

  return (
    <div className="bg-slate-200">
      <h1>Card page</h1>
      <div>
        {carditems.map((item) => (
          <div className="flex flex-row items-center justify-between bg-white p-10 my-5 mx-10" key={item.id}>
            <img className="w-20" src={item.image} alt="img" />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="bg-violet-600 text-white rounded-md py-2 px-5" onClick={()=>handleremove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
