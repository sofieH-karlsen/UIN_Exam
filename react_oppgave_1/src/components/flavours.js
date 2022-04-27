export default function Flavours (){
   return(
      <section id="options" data-testid="options">
         <Title title={title} />
         <div className="option" data-testid="flavours" id="flavours">
            <label htmlFor="flavour">
               <select defaultValue="chocolate" id="flavour" data-testid="flavour">
                  {/* TODO: Lag statisk liste med verdiene under. Bruk .map og key. Alle verdiene i option må være med 
                  .MAP & KEY
                  
                  ER VANILLA EN OPTION?
                  <option data-testid="option" value="strawberry">
                     Jordbær
                  </option>
                  */}
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
   )
};
