

function render_header(parent)
{
  // Funktionen tar emot referensen till container-noden för headern.
  // Funktionsanropet finns redan på plats i index.js. Studera argumentet som skickas där.
  // Funktionen skapar de nödvändiga HTML-elementen så att headern ser ut
  // som den på videon: Tre random bilder och texten centrerad.

  // Krav:
  // Nyckeln *style* får i denna kod endast användas för att ange bakgrundsbild-filen.
  // Det går dock såklart även att lösa det hela med <img> istället för att ha bilderna
  // som bakgrundsbilder. I så fall får inte nyckeln *style* användas alls i koden här.

  // Glöm inte: Du måste även fylla i header.css så att headern ser ut som den på videon. Se header.css
  
  let headerCon = document.createElement("div");
  headerCon.classList.add("headerContainer");
  parent.appendChild(headerCon);

  let imageCon = document.createElement("div");
  imageCon.classList.add("headerImageContainer");
  headerCon.appendChild(imageCon);

  for (let i = 0; i < 3; i++) {
    let image = document.createElement("div");
    image.classList.add(`image${i}`);
    let randomCountry = Math.floor(Math.random()*COUNTRIES.length);
    let randomImage = Math.floor(Math.random()*COUNTRIES[randomCountry].imagesNormal.length)
    
    image.style.backgroundImage = `url(./media/geo_images/${COUNTRIES[randomCountry].imagesNormal[randomImage]})`;
    imageCon.appendChild(image);
  }

  let image2 = document.querySelector(".image1");
  let h1 = document.createElement("h1");
  h1.innerHTML = `Utbytesstudier <br> Missa inte chansen!`;
  image2.appendChild(h1);
}