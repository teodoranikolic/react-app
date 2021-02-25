import React from 'react';

function EmptyCart(){
	return(
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto text-title">
					<h1>your cart is currently empty</h1>
				</div>
			</div>	
		</div>
	);
}

export default EmptyCart;