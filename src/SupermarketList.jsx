export default function SupermarketList({ products }) {
  return (
    <>
      <p>SupermarketList</p>
      {products.map((product) => {
        if(product.title === 'Apple') {
          return(
          <li key={product.id}>👌{product.title}</li>

          )
        }
        return (
          <li key={product.id}>{product.title}</li>
        )
      })}
    </>
  )
}