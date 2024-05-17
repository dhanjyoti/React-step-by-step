import { useEffect } from 'react'
import {add} from "../Redux/Cardslice";
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchproduct } from '../Redux/ProductSlice';


const Home = () => {
  const dispatch = useDispatch();
  const {data:products, status} = useSelector((state)=>state.product);

  useEffect(()=>{
    dispatch(fetchproduct())
  },[]);

  const handlead =(product)=>{
    dispatch(add(product));
  }

  if(status === STATUSES.Loading){
    return <h1>Loading...</h1>
  }

  return (
    <div className='flex flex-wrap'>
      {
        products.map((product)=>(
          <div className='flex flex-col items-center justify-between w-48 bg-slate-100 m-3 p-2 ' key={product.id}>
            <img className='w-20 h-24' src={product.image} alt='img' />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button 
              onClick={()=>handlead(product)}
            className='p-1 rounded-sm bg-blue-500 text-white'>Add to card</button>
          </div>
        ))
      }
    </div>
  )
}

export default Home