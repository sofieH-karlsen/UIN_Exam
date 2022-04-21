import Flavours from './Flavours'
import IceCream from './IceCream'

export default function Layout({ css, flavour, setFlavour }) {
  return (
    <div className="layout" data-testid="layout">
      <Flavours
          flavour={flavour} 
          setFlavour={setFlavour}
        />
      <IceCream css={css}/>
    </div>
  )
}
