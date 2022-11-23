import restImage from './restaurant.jpg';

export default function restaurantHtml() {
    const imageDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const content = document.getElementById('content');
    
    const image = new Image();
    image.src = restImage;
    imageDiv.appendChild(image);
    content.appendChild(imageDiv);


    headlineDiv.innerHTML = "<h1>John's Restaurant</h1>";
    content.appendChild(headlineDiv);

    descriptionDiv.innerHTML = "<p>John's Restaurant started in 2020, inspired by the opportunities that presented themselves due to Covid 19. It is situated in Nairobi, Kenya and delivers to anywhere within Nairobi.</p>";
    content.appendChild(descriptionDiv);
    
};

