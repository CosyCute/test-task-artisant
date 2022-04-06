import React, { useEffect, useState } from 'react';
import { API_KEY } from './config/config';
import Card from './components/Card/Card';
import Loader from './components/Loader/Loader';
import Pagination from './components/Pagination/Pagination';
import Switch from './components/Switch/Switch';
import { CardItemProps } from './components/Card/Card';
export interface Product {
  product_id: number,
  name: string,
  created_by: {
    display_name: string,
  },
  quantity_available: number,
  quantity_nfts_created: number,
  initial_price: number,
}
function App() {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const [pagesLength, setPagesLength] = useState<number[]>()

  const [availableFilter, setAvailableFilter] = useState(false)

  const [filterArr, setFilterArr] = useState([])

  const pagesQuantity = (res: number) => {
    let tempArr = new Array(Math.floor(res / 12))
    for (let i = 0; i < tempArr.length; i++)
      tempArr[i] = i + 1
    setPagesLength(tempArr)
  }

  useEffect(() => {
    fetch(`${API_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.data.products)
        pagesQuantity(res.data.products.length)
        setFilterArr(res.data.products)
      })
      .then(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (availableFilter) {
      let tempArr = products.filter((x: Product) => x.quantity_available > 0)
      setFilterArr(tempArr)
      pagesQuantity(tempArr.length)
      setPage(1)
    }
    else setFilterArr(products)
  }, [availableFilter])

  const [page, setPage] = useState(1)

  return (
    <div className="App">
      {loading
        ?
        <Loader />
        :
        <div>
          <div className='heading-info'>
            <div>
              <h1 onClick={() => console.log(pagesLength)}>Explore</h1>
              <p>Buy and sell digital fashion NFT art</p>
            </div>
            <div className='toggle'>
              <span>Only available</span>
              <Switch toggle={availableFilter} setToggle={setAvailableFilter} />
            </div>
          </div>
          <div className='products'>
            {filterArr.slice(12 * page, 12 * (1 + page)).map((x: Product) =>
              <Card key={x.product_id} element={x} />)}
          </div>
          <Pagination page={page} setPage={setPage} arr={pagesLength} />
        </div>
      }
    </div>
  );
}

export default App;
