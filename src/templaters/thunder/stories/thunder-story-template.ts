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
	  <link href="https://fonts.cdnfonts.com/css/groovy-cartoon-expanded-round" rel="stylesheet">
	  <link rel="preconnect" href="https://fonts.googleapis.com">
	  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Public+Sans:wght@900&display=swap" rel="stylesheet"> 
	  <style>
	    @import url("https://fonts.cdnfonts.com/css/bubbleboddy-neue-trial");
	    * {
	      font-family: 'Groovy Cartoon Expanded Round', sans-serif;
	    }

	    .background_container {
	      background-image: url("https://raw.githubusercontent.com/guimassoqueto/logos/main/thunder-background.png");
	      background-size:contain; /* Adjust this property as needed */
	      background-position: center center; /* Adjust this property as needed */
	      height: 100vh !important;
	      width: 100vw !important; 
	      position: relative; /* To position the overlay correctly */
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
	      justify-content:space-evenly;
	      height: 100vh;
	      margin-right: 3em;
	      margin-left: 3em;
	    }
	    .container_header {
	      display: flex;
	      flex-direction: row;
	      justify-content: center;
	      align-items: center;
	      padding-top: 4em;
	    }
	    .container_header-logo img {
	      height: 5em;
	    }
	    .container_title {
	      display: flex;
	      flex-direction: row;
	      justify-content: center;
	    }
	    .container_title h1{
	      font-size: 2.75em;
	      color: #000;
	      font-weight: 500;
	    }
	    .container_image {
	      display: flex;
	      flex-direction: row;
	      justify-content: center;
	      position: relative;
	    }
	    .container_image img{
	      max-height: 40vh;
				max-width: 980px;
	    }

	    .container_image--fomo {
	      position: absolute; 
	      top: 50%; 
	      left: 50%;
	      transform: translate(-50%, 290%);
	      background-color: #CC0C39;
	      padding: 20px;
	      width:max-content;
	      border-radius: 1em;
	      display: none;
	    }
	    #fomoMessage {
	      font-family: 'Public Sans', sans-serif;
	      color: white;
	      text-transform: uppercase;
	      font-weight: bold;
	      font-size: 2em;
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
	      justify-content:space-between;   
	      align-items: center;
	      margin-left: 3em;
	      margin-right: 3em;
	    }
	    .container_price-discount {
	      font-size: 5em;
	      font-weight: 600;
	      color: #CC0C39;
	    }
	    .container_price-price--old{
	      font-size: 2.75em;
	      color: #777;
	      text-decoration: solid line-through #777 4px;
	    }

	    .container_price-price--new{
	      font-size: 3.75em;
	    }
	    .container_button {
	      display: flex;
	      flex-direction: row;
	      justify-content: space-between;
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
		  <!--<img src="https://vetores.org/d/magalu.svg">-->
		  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg">
		</div>
	      </div>
	      <div class="container_title">
		<h1 id="title"></h1>
	      </div>
	      <div class="container_image">
		<img id="image">
		<div class="container_image--fomo">
		  <span id="fomoMessage"></span>
		</div>
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
		      <span id="priceOld"></span>
		  </div>
		  <div class="container_price-price--new">
		      <span>R$</span>
		      <span id="priceNew"></span>
		  </div>
		</div>
		<div class="container_price-discount">
		  <span id="priceDiscount"></span>
		</div>
	      </div>
	      <div class="container_button">
		<div class="container_button-img">
		  <img src="https://raw.githubusercontent.com/guimassoqueto/logos/da22a5334a130498005a1427825baff7f72de371/flash-thunder-svgrepo-com.svg" alt="">
		</div>
		<div class="container_button-button"></div>
		<div class="container_button-img">
		  <img src="https://raw.githubusercontent.com/guimassoqueto/logos/da22a5334a130498005a1427825baff7f72de371/flash-thunder-svgrepo-com.svg" alt="">
		</div>
	      </div>
	    </div>
	    <script>
	      const title = "${product.title}";
	      const imageUrl = "${product.image_url}";
	      const previousPrice = "${product.previous_price}";
	      const price = "${product.price}";
	      const discount = "${product.discount}";
	      const installments = ${parseFloat(product.price) > 100};
	      const freeShipping = ${product.free_shipping};  
	      

	      const titleElement = document.getElementById("title");
	      const imageElement = document.getElementById("image");
	      const infoShippingElement = document.getElementById("infoShipping");
	      const infoInstallmentsElement =  document.getElementById("infoInstallments");
	      const priceOldElement = document.getElementById("priceOld");
	      const priceNewElement = document.getElementById("priceNew");
	      const priceDiscountElement = document.getElementById("priceDiscount");
	      const fomoMessageElement = document.getElementById("fomoMessage");

	      if (!freeShipping) infoShippingElement.style.display = "none";
	      if (!installments) infoInstallmentsElement.style.display = "none";

	      const randomFomo = ["Desconto imperdível!", "Oferta incrível, não perca!", "Preço baixo, aproveite!", "Promoção relâmpago!", "Economize já!", "Só hoje, desconto!", "Compre e economize!", "Não perca essa!", "Preço de arrasar!", "Super desconto hoje!", "Aproveite o desconto!", "Oferta única, corra!", "Desconto sensacional!", "Só agora, promoção!", "Aproveite o preço!", "Acaba em instantes!", "Economia garantida!", "Promoção exclusiva hoje!", "Preço incrível!", "Desconto especial!"]
	      if (parseFloat(discount) >= 25) {
		document.querySelector(".container_image--fomo").style.display = "block";
		fomoMessageElement.innerText = randomFomo[Math.floor(Math.random() * randomFomo.length)]
	      } 

	      titleElement.innerText = title;
	      imageElement.setAttribute("src", imageUrl);
	      priceOldElement.innerText = previousPrice;
	      priceNewElement.innerText = price;
	      priceDiscountElement.innerText =  discount && "-" + discount.toString() + "%";
	    </script>
	  </div>
	</body>
	</html>
    `;
  }
}