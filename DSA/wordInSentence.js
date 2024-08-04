let sentence =
  "For nearly a decade, we've harnessed the power of AI and collaborated with local partners to make Google Maps more helpful for people in India, and customized to the needs of users across the country. By mapping over 7 million kilometers of roads, 300 million buildings, and 35 million businesses and places across India, we’ve been able to provide real-time traffic predictions, offer immersive experiences like Street View and Live View walking navigation, connect millions of consumers and businesses, and even tackle societal challenges like traffic congestion and flood forecasting. Our quest to build a better Maps experience is never ending, and India presents many amazing opportunities to bring the best of our AI and geospatial technologies to address complex real-world challenges. Today, we're thrilled to share exciting new features that we're launching in India to make your navigation and exploration journeys more efficient and sustainable. Many of these solutions are being pioneered in India, for India. From a custom-built AI approach for tackling narrow roads and flyovers, to powering sustainable journeys with EV charging stations, as well as enabling the biggest community of maps contributors to surface real-time road disruptions on the map, we’re excited to bring such helpful features to millions across the country. India truly is at the center of our innovation, and we can’t wait to build the future of Maps right here.";

let wordArray = sentence.split(" ");

let count = 0;
for(let i=0; i<wordArray.length; i++){
    if(wordArray[i] == "the"){
        count += 1;
    }
}
console.log(count);