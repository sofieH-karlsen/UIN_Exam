import IceCream from './IceCream'

export default function Layout({ css }) {
  return (
    <div className="layout" data-testid="layout">
      <section id="options" data-testid="options">
        {/* TODO: Skal vise oppdatert tittel. Nå er den hardkodet */}
        <h1 data-testid="title">Her kommer tittel</h1>
        {/* TODO: Håndtere endringer i dropdown */}
        <div className="option" data-testid="flavours" id="flavours">
          <label htmlFor="flavour">
            <select defaultValue="chocolate" id="flavour" data-testid="flavour">
              {/* TODO: Lag statisk liste med verdiene under. Bruk .map og key. Alle verdiene i option må være med */}
              <option data-testid="option" value="strawberry">
                Jordbær
              </option>
              <option data-testid="option" value="banana">
                Banan
              </option>
              <option data-testid="option" value="lime">
                Lime
              </option>
              <option data-testid="option" value="blueberry">
                Blåbær
              </option>
              <option data-testid="option" value="chocolate">
                Sjokolade
              </option>
            </select>
          </label>
        </div>
      </section>
      <IceCream css={css} />
    </div>
  )
}
