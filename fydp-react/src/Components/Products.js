import React from 'react';
import Product from './Product'
import shirt from '../Assets/shirt.png'
import shorts from '../Assets/shorts.png'
import pants from '../Assets/pants.png'
import bodysuit from '../Assets/bodysuit.png'

const Products = (props) => {
	return (
		<div className='container'>
			<div className='container-list-item-border' style={{backgroundColor: props.background}}>
				<Product name={"Gonzalo T-Shirt"} carbon="42.6" image={shirt} rank="A"/>
	    		<Product name={"Cozy fleece Perfect 2'' Sweatshort"} carbon="202.8" image={shorts} rank="C"/>
	    		<Product name={"Skyline Pant"} carbon="202.8" image={pants} rank="B"/>
	    		<Product name={"Contour Crewneck Longsleeve Bodysuit"} carbon="202.8" image={bodysuit} rank="D"/>
			</div>
		</div>
	)
}

Products.defaultProps = {
	title: 'Store Products',
	background: 'var(--grey)'
}

export default Products