import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Button from '../Components/Button'
import Products from '../Components/Product'
import Content from '../Components/Content'
import SearchBar from '../Components/SearchBar'
import '@testing-library/jest-dom';


Enzyme.configure({ adapter: new Adapter() })

//TEST IT RENDERS w/o CRASHING
it("renders without crashing", () =>{
  shallow(<div />)
})


//TEST POPULATION OF THE PRODUCTS LIST
describe('Products', () => {
  it('should render `No products match your search query` inside a div if array is empty', () => {
    const wrapper = shallow(<Content products={[]} />)
    const p = wrapper.find('p[id="noProduct"]').at(0)
    expect(p)
  })

  it('should render a list of products with the body of each item inside a div', () => {
    const productList = [
    						{ name: "Name", image: '', kg_carbon: 100, stock: 0, rank: 'A' }, 
    					 	{ name: "Name_2", image: '', kg_carbon: 120, stock: 0, rank: 'B' }, 
    					 	{ name: "Name_3", image: '', kg_carbon: 400, stock: 0, rank: 'C' }
    					 ]

    const wrapper = shallow(<Products products={productList} />)
    const items = wrapper.find('div[class="container"]')
    expect(items).toHaveLength(1) //for now, just check that it renders ... may need to update productlist to get it working
  })
})

//TEST SEARCH BAR FUNCTIONALITY (FILTERING)
//RE-DO once we fix the search bar
