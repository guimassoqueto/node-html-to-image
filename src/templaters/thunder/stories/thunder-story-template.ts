import { ProductModel } from "../../../domain/models/product-model.js";

export class ThunderStoryTemplate {
  static generate(product: ProductModel): string {
    return `
		<!DOCTYPE html>
		<html lang="en">
		
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Promo Thunder</title>
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<script src="https://kit.fontawesome.com/0f4b01b0f5.js" crossorigin="anonymous"></script>
			<link
				href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:ital,wght@0,1;0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,1;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
				rel="stylesheet">
			<style>
				* {
					font-family: 'Sofia Sans Condensed', sans-serif;
					font-weight: 700;
				}
		
				.background_container {
					background-image: url("https://raw.githubusercontent.com/guimassoqueto/logos/main/thunder-background.png");
					background-size: contain;
					/* Adjust this property as needed */
					background-position: center center;
					/* Adjust this property as needed */
					height: 100vh !important;
					width: 100vw !important;
					position: relative;
					/* To position the overlay correctly */
					z-index: -99;
				}
		
				.background_container::before {
					content: "";
					position: absolute;
					top: -5;
					left: -5;
					width: 100vw;
					height: 100vh;
					background-color: rgba(255, 255, 255, 0.95);
					z-index: -1;
				}
		
				.container {
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
					height: 100vh;
					margin-right: 3em;
					margin-left: 3em;
				}
		
				.container_header {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding-top: 2em;
				}
		
				.container_header-logo img {
					height: 12em;
				}
		
				.container_title {
					display: flex;
					flex-direction: row;
					justify-content: center;
				}
		
				.container_title h1 {
					font-size: 2.75em;
					color: #000;
					font-weight: 700;
				}
		
				.container_image {
					display: flex;
					flex-direction: row;
					justify-content: center;
					position: relative;
				}
		
				.container_image img {
					max-height: 40vh;
					max-width: 980px;
				}
		
				.container_rating {
					display: flex;
					flex-direction: row;
					justify-content: center;
				}
		
				.container_rating img {
					height: 2.5em;
				}
		
				.container_info {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					font-size: 2.75em;
				}
		
				.container_price {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					margin-left: 3em;
					margin-right: 3em;
				}
		
				.container_price-discount {
					font-size: 5em;
					font-weight: 600;
					color: #CC0C39;
				}
		
				.container_price-price--old {
					font-size: 2.75em;
					color: #777;
					text-decoration: solid line-through #777 4px;
				}
		
				.container_price-price--new {
					font-size: 3.75em;
				}
		
				#priceNewInfo {
					font-size: 0.8em;
				}
				
				.button_wrapper{
					display: flex;
					flex-direction: column;
					align-items: center;
				}
		
				.button_info {
					font-size: 2.5em;
				}
		
				.container_button {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}
		
				.container_button-img:first-child {
					margin-right: 2.5em;
				}
		
				.container_button-img:last-child {
					margin-left: 2.5em;
				}
		
				.container_button-img img {
					margin-top: 1.5em;
					height: 8em;
				}
		
				.container_button-button {
					border: 0.4em solid #000;
					border-radius: 1em;
					height: 10em;
					width: 60vw;
					margin-bottom: 4em;
				}
			</style>
		</head>
		
		<body>
			<div class="background_container">
				<div class="container">
					<div class="container_header">
						<div class="container_header-logo">
							<img id="marketplaceLogo" src="https://raw.githubusercontent.com/guimassoqueto/logos/main/pdd1.png">
						</div>
					</div>
					<div class="container_title">
						<h1 id="title">${product.title}</h1>
					</div>
					<div class="container_image">
						<img id="image" src="${product.image_url}">
					</div>
					<div class="container_info">
						<div class="container_info-shipping" id="infoShipping">
							<span>Frete Grátis com Amazon Prime</span>
						</div>
						<div class="container_info-installments" id="infoInstallments">
							<span>Parcele sem juros</span>
						</div>
					</div>
					<div class="container_price">
						<div class="container_price-price">
							<div class="container_price-price--old">
								<span>R$</span>
								<span id="priceOld">${product.previous_price}</span>
							</div>
							<div class="container_price-price--new">
								<span>R$</span>
								<span id="priceNew">${product.price}</span>
								<span id="priceNewInfo"></span>
							</div>
						</div>
						<div class="container_price-discount">
							<span id="priceDiscount">-${product.discount}%</span>
						</div>
					</div>
					<div class="button_wrapper">
						<span class="button_info">
							<i class="fa-solid fa-arrow-turn-down fa-flip-horizontal"></i>
							<span id="button_info-msg">TOQUE AQUI PARA COMPRAR</span>
							<i class="fa-solid fa-arrow-turn-down"></i>
						</span>
						<div class="container_button">
							<div class="container_button-img">
								<img
									src="https://raw.githubusercontent.com/guimassoqueto/logos/da22a5334a130498005a1427825baff7f72de371/flash-thunder-svgrepo-com.svg"
									alt="">
							</div>
							<div class="container_button-button"></div>
							<div class="container_button-img">
								<img
									src="https://raw.githubusercontent.com/guimassoqueto/logos/da22a5334a130498005a1427825baff7f72de371/flash-thunder-svgrepo-com.svg"
									alt="">
							</div>
						</div>
					</div>
			</div>
				<script>
					const productUrl = "${product.url}"
					const installments = ${parseFloat(product.price) > 100};
					const freeShipping = ${product.free_shipping};
		
		
					const titleElement = document.getElementById("title");
					const marketplaceLogoElement = document.getElementById("marketplaceLogo");
					const imageElement = document.getElementById("image");
					const infoShippingElement = document.getElementById("infoShipping");
					const infoInstallmentsElement = document.getElementById("infoInstallments");
					const priceOldElement = document.getElementById("priceOld");
					const priceNewElement = document.getElementById("priceNew");
					const priceNewInfoElement = document.getElementById("priceNewInfo");
					const priceDiscountElement = document.getElementById("priceDiscount");
		
					if (!freeShipping) infoShippingElement.style.display = "none";
					if (!installments) infoInstallmentsElement.style.display = "none";
					
					if (productUrl.includes("magazineluiza")) {
						priceNewInfoElement.innerText = "  no Pix"
					}
				</script>
			</div>
		</body>
		
		</html>
    `;
  }
}
