interface Image {
	url_570xN: string,
}
export interface Items {
	listing_id: number,
	url: string,
	MainImage: Image,
	title: string,
	currency_code: string,
	price: string,
	quantity: number
}

export interface ItemsProps {
	items: Items[]
}

function Listing({ items }: ItemsProps) {
	return (items.map((item) => {
		let currensy: string = '';
		let price: string = '';
		let classLevel: string = '';
		if (item.quantity <= 20) {
			classLevel = "level-medium"
		} else {
			classLevel = "level-high"
		}
		if (item.quantity <= 10) {
			classLevel = "level-low"
		}
		if (item.currency_code === 'USD') {
			currensy = '$';
		} else if (item.currency_code === 'EUR') {
			currensy = '€';
		}
		price = currensy + item.price;
		if (item.currency_code === 'GBP') {
			currensy = item.currency_code;
			price = item.price + ' ' + currensy;
		}
		if (item.MainImage === undefined) {
			return
		}

		const itemsRender = items.map((item) => {
			if (!item.title) {
				return null;
			}

			return <div className="item" key={item.listing_id}>
				<div div className="item-image" key={item.listing_id} >
					<a href={item.url}>
						<img src={item.MainImage.url_570xN} alt={item.title} />
					</a>
				</div>
				<div className="item-details">
					<p className="item-title">{item.title}</p>
					<p className="item-price">{price}</p>
					<p className={`item-quantity ${classLevel}`}>{item.quantity}</p>
				</div>
			</div>
		})
		return (
			<div className="item-list">
				{itemsRender}
			</div>
		);
	}));

}
export default Listing;