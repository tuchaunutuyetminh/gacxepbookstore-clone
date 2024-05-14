import {TopHeader, Navigation} from '../../components'
const Header = () => {
  return (
    <div className="w-main max-w-full flex flex-col gap-6">
       <TopHeader />
       <Navigation />
    </div>
  )
}

export default Header