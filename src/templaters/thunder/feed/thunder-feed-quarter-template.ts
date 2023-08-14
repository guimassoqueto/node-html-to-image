export type ProductModel = {
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

export class ThunderFeedQuarterTemplate {
  static generate(products: ProductModel[]) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.cdnfonts.com/css/groovy-cartoon-expanded-round" rel="stylesheet">
      <title>Document</title>
      <style>
        * {
          font-family: 'Groovy Cartoon Expanded Round', sans-serif;
        }
        html {
          height: 1080px;
          width: 1080px;
        }
        body {
          margin: 0;
          position: relative;
        }
        #message {
          padding: 0.25em 3em;
          background: #000;
          position: absolute;
          left: 22.5%;
          top: 47.5%;
          color: #fff;
          border-radius: 2em;
          font-size: 2em;
        }
        .container {
          height: 1080px;
          width: 1080px;
          background-image: url('https://raw.githubusercontent.com/guimassoqueto/logos/main/thunder-background.png');
          background-repeat: repeat;
          background-size: 540px 540px;
          position: relative;
          z-index: -99;
        }
        .container::before {
          content: "";
          position: absolute;
          top: -5;
          left: -5;
          width: 100vw;
          height: 100vh;
          background-color: rgba(255, 255, 255, 0.95);
          z-index: -1;
        }
        .row1 {
          height: 540px;
          width: 1080px;
          display: flex;
          flex-direction: row;
          border-bottom: 3px solid #000;
        }
        .row1-col1 {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          border-right: 5px solid #000;
        }
        .row1-col2 {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .row2 {
          height: 540px;
          display: flex;
          flex-direction: row;
          border-top: 3px solid #000;
        }
        .row2-col1 {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          border-right: 5px solid #000;
        }
        .row2-col2 {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .title {
          width: 85%;
          color: #000;
          font-size: 2em;
          text-align: center;
        }
        .image img {
          max-height: 250px;
          max-width: 440px;
        }
        .info {
          display: flex;
          flex-direction: row;  
          justify-content: space-around; 
          align-items: center;
          width: 100%;
        }
        .info_price {
          display: flex;
          flex-direction: column;    
        }
        .info_price-previous {
          color: #777;
          font-size: 1.75em;
          text-decoration: line-through solid #777 3px;
        }
        .info_price-current {
          color: #000000;
          font-size: 2.5em;
        }
        .info_discount {
          color: #CC0C39;
          font-size: 3em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="row1">
          <div class="row1-col1">
            <div class="title">
              ${products[0].title}
            </div>
            <div class="image">
              <img src="${products[0].image_url}">
            </div>
            <div class="info">
              <div class="info_price">
                <div class="info_price-previous">
                  R$ <span>${products[0].previous_price.replace('.', ',')}</span>
                </div>
                <div class="info_price-current">
                  R$ <span>${products[0].price.replace('.', ',')}</span>
                </div>
              </div>
              <div class="info_discount">
                  -<span>${products[0].discount}</span>%
              </div>
            </div>
          </div>
          <div class="row1-col2">
            <div class="title">
              ${products[1].title}
            </div>
            <div class="image">
              <img src="${products[1].image_url}">
            </div>
            <div class="info">
              <div class="info_price">
                <div class="info_price-previous">
                  R$ <span>${products[1].previous_price.replace('.', ',')}</span>
                </div>
                <div class="info_price-current">
                  R$ <span>${products[1].price.replace('.', ',')}</span>
                </div>
              </div>
              <div class="info_discount">
                  -<span>${products[1].discount}</span>%
              </div>
            </div>
          </div>
        </div>
        <div class="row2">
          <div class="row2-col1">
            <div class="title">
              ${products[2].title}
            </div>
            <div class="image">
              <img src="${products[2].image_url}">
            </div>
            <div class="info">
              <div class="info_price">
                <div class="info_price-previous">
                  R$ <span>${products[2].previous_price.replace('.', ',')}</span>
                </div>
                <div class="info_price-current">
                  R$ <span>${products[2].price.replace('.', ',')}</span>
                </div>
              </div>
              <div class="info_discount">
                  -<span>${products[2].discount}</span>%
              </div>
            </div>
          </div>
          <div class="row2-col2">
            <div class="title">
              ${products[3].title}
            </div>
            <div class="image">
              <img src="${products[3].image_url}">
            </div>
            <div class="info">
              <div class="info_price">
                <div class="info_price-previous">
                  R$ <span>${products[3].previous_price.replace('.', ',')}</span>
                </div>
                <div class="info_price-current">
                  R$ <span>${products[3].price.replace('.', ',')}</span>
                </div>
              </div>
              <div class="info_discount">
                  -<span>${products[3].discount}</span>%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="message">
        Ofertas do dia <span id="date"></span> - Links na Bio
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