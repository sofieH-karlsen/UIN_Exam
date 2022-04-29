import Flavours from './Flavours'
import IceCream from './IceCream'
import Title from './Title'

export default function Layout() {
  return (
    <div className="layout" data-testid="layout">
      <Title />
      <Flavours />
      <IceCream />
    </div>
  )
}
