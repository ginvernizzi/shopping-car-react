/* eslint-disable react/prop-types */

const priceRanges = ['$0 - $99', '$10 - $19', '$20 - $49', '$50 - $100', '$100 - $149', '$150 o más']

const PriceFilter = ({setPriceFilter}) => {

const managePriceValues = (e) => {
  // console.log(e.target.value);
  setPriceFilter(e.target.value)
}

  return (
    <>
    <p style={{textAlign: 'left'}}>Price:</p>
    <div className='price-filter'>      
      {
        priceRanges.map((price) =>           
        <label key={price} htmlFor=""> {price}
            <input style={{marginLeft: '10px'}} type="radio" name="priceValues" value={price} onChange={managePriceValues} />
          </label>)
      }
    </div>
    </>
  )
}

export default PriceFilter


