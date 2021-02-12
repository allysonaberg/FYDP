import React from 'react';
import Product from './Product'

const Products = (props) => {
	return (
		<div className='container'>
			<div className='container-list-item-border' style={{backgroundColor: props.background}}>
				{props.products.map((product) => (
					<Product onToggle={props.onToggle} id={product.id} name={product.name} carbon={product.carbon} image={product.image} rank={product.rank}/>
				))}
			</div>
		</div>
	)
}

Products.defaultProps = {
	title: 'Store Products',
	background: 'var(--grey)'
}

export default Products