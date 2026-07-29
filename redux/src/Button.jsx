import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './Slice/Slice'

const Button = () => {
  const dispatch = useDispatch()
  const counts = useSelector((state)=>state.users.count)
  return (
    <div className='App'>
      <p>{counts}</p>
      <button onClick={()=>{dispatch(increment(1))}}>Incremnt</button>
      <button onClick={()=>{dispatch(decrement(1))}}>Decrement</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
      </div>
  )
}
export default Button