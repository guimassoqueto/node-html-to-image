type ProductModel = {
  id: string;
  title: string;
  image_url: string;
  category: string;
  reviews: number;
  free_shipping: boolean;
  price: string;
  previous_price: string;
  discount: number;
  created_at: Date;
  updated_at: Date;
};

export class ThunderFeedFullTemplate {
  static generate(product: ProductModel) {
    if (product.id.includes("nike.com") || product.id.includes("adidas.com")) {
      return sportsTemplate(product);
    }

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"> 
    <title>Document</title>
    <style>
      * {
        font-family: 'Bebas Neue', sans-serif;
      }
      html {
        height: 1080px;
        width: 1080px;
      }
      body {
        margin: 0;
        background-image: url('https://raw.githubusercontent.com/guimassoqueto/logos/main/thunder-feed-bg-1.png');
        background-repeat: no-repeat;
        
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3em 0 3em 0;
      }
      .container_header {
        margin-top: 4em;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .container_header--date {
        color: #ffdd09;
        font-size: 3em;
        height: .5em;
      }
      .container_header--offer {
        color: #fff;
        font-size: 15em;
        -webkit-text-stroke: 2px #000;
        height: 1em;
      }
      .container_header--info {
        color: #000;
        font-size: 3em;
        background-color: #ffdd09;
        padding: 0.15em 0.25em 0;
        border-radius: .2em;
      }
      .container_body {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .container_body-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 3em 3em 1.5em;
        height: 400px;
      }
      .container_body-item--description {
        display: flex;
        flex-direction: column;
        align-items:flex-start;
      }
      #previousPrice {
        color: #555;
        font-size: 3.5em;
        text-decoration: line-through 5px;
      }
      #price {
        color: #000000;
        font-size: 4.5em;
      }
      #discount {
        background-color: #000000;
        padding: .25em .5em;
        color: #ffdd09;
        font-size: 4.5em;
        border-radius: 3em;
      }
      .container_body-item--image img {
        margin-left: 3em;
        max-height: 400px;
        max-width: 600px;
      }
      .container_footer {
        display: flex;
        flex-direction: row;
        align-items:flex-start;
        margin-left: 15em;
      }
      #title {
        color: #000000;
        font-size: 3em;
        text-align: left;
      }
    
      
    </style>
    </head>
    <body>
    <div class="container">
      <div class="container_header">
        <span class="container_header--date">Só Hoje <span id="date"></span></span>
        <span class="container_header--offer">Oferta</span>
        <span class="container_header--info">Link na Bio</span>
      </div>
      <div class="container_body">
        <div class="container_body-item">
          <div class="container_body-item--description">
            <span id="previousPrice">R$ ${
      product.previous_price.replace(".", ",")
    }</span>
            <span id="price">R$ ${product.price.replace(".", ",")}</span>
            <span id="discount">-${product.discount}%</span>
          </div>
          <div class="container_body-item--image">
            <img id="productImage" src="${product.image_url}">
          </div>
        </div>
      </div>
      <div class="container_footer">
        <span id="title">${product.title}</span>
      </div>
    </div>
    <script>
      const dateElement = document.getElementById("date");
      const date = new Date();
      const currentDay = String(date.getDate()).padStart(2, '0');
      const currentMonth = String(date.getMonth() + 1).padStart(2, '0');
      dateElement.innerText = currentDay + "/" + currentMonth;
    </script>
    </body>
    </html>
    `;
  }
}

function sportsTemplate(product: ProductModel) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:ital,wght@0,1;0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,1;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
      rel="stylesheet">
    <style>
      * {
        font-family: 'Sofia Sans Condensed', sans-serif;
        font-weight: 700;
      }
    body {
      margin: 0;
      overflow: hidden;
      height: 5000px;
      width: 1080px;
    }
    .container {
      background-image: url("${product.image_url}");    
      height: 1080px;
      width: 1080px;
      padding-top: 7em;
    }

    #discount {
      position: relative;
    }

    .circle {
      width: 220px;
      height: 220px;
      line-height: 220px;
      border-radius: 50%;
      font-size: 6em;
      color: #fff;
      text-align: center;
      background: #000
    }
    .prices {
      font-size: 4em;
      text-align: center;
      margin-top: 9em;
    }
    #previousPrice {
      text-decoration: line-through .1em;
      color: #8b8b8b;
    }
    
  </style>
  <body>
      <div class="container" id="container">
        <div class="discount" id="discount">
          <div class="circle">-${product.discount}%</div>
        </div>
        <div class="prices">
          <span id="previousPrice">R$ ${
    product.previous_price.replace(".", ",")
  }</span>
          <span>R$ ${product.price.replace(".", ",")}</span>
        </div>
      </div>
    <script>
      const productId = "${product.id}";
      const containerElement = document.getElementById("container");
      const discountElement = document.getElementById("discount");
      const bodyElement = document.body;

      if (productId.includes("adidas")) {
        containerElement.style.backgroundPosition = "0 -200px"
        bodyElement.style.backgroundColor = "#EBEEF0"
        discountElement.style.marginLeft = "45em"
      }

      if (productId.includes("nike")) {
        discountElement.style.marginLeft = "8em"
        bodyElement.style.backgroundColor = "#F5F5F5"
      }
    </script>
  </body>
  </html>
  `;
}
