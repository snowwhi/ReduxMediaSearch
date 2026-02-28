
import ResultGrid from './ResultGrid'
import Searchbox from './Searchbox'
import Tester from '../../ApiMediaSearch/Tester'
import Tabs from './Tabs'
const HomePage = () => {
  return (
    <div className=' w-full min-h-screen'>
    <Searchbox/>
     <Tabs/>
    <Tester/>
    </div>
  )
}

export default HomePage