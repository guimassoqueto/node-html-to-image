type ProductModel = {
  id: string
  title: string
  image_url: string
  category: string
  reviews: number
  free_shipping: boolean
  price: string
  previous_price: string
  discount: number
  created_at: Date
  updated_at: Date
}

export class ThunderFeedFullTemplate {
  static generate(product: ProductModel) {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.cdnfonts.com/css/bebas-neue" rel="stylesheet">
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
      font-weight: bold;
    }
    .container_header--date {
      color: #ffdd09;
      font-size: 3em;
      height: 1em;
    }
    .container_header--offer {
      color: #fff;
      font-size: 15em;
      -webkit-text-stroke: 2px #000;
      height: .8em;
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
      font-weight: bold;
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
      font-weight: 600;
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
          <span id="previousPrice">R$ ${product.previous_price.replace('.', ',')}</span>
          <span id="price">R$ ${product.price.replace('.', ',')}</span>
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
    `
  }
}