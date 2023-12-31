//GEOG 384 - Assignment #1 - Fall 2023
/*This code is used to create a simple storymap website for Assignment 1 of GEOG 384.  Much of the code structure has been taken from Assignment1.zip 
file that was provided to us.  It is structured in chapters and takes tilesets created in mapbox to create the map utilized on the site.  
The site the result of this code can be found on is https://neogeoweb.ca/group2 - this code has been verified to work on both Chrome and FireFox for sure (for now)
*/

var config = {
    style: 'mapbox://styles/sophiedaigs/cln2i91to06jz01nshi9og7dd',   //the ID to our mapbox style with our four different tilesets
    accessToken: 'pk.eyJ1Ijoic29waGllZGFpZ3MiLCJhIjoiY2xuMXpna2FiMDNiMjJ1bzVya3lwdjYwaSJ9.pW8gnsDtGm1niEspM6akuA', //access token connecting to our cyberduck 
    showMarkers: false,
    markerColor: '#3FB1CE', 
    projection: 'equirectangular',  //this projection has been chosen from using mapbox information
    inset: true,  //set inset map as true or false resulting in an inset map appearing on the page in the bottom righthand side
    theme: 'light',
    use3dTerrain: false, //set true for enabling3D maps.
    title: 'The Summer Olympic Games',                             // the title of our storymap
    subtitle: 'A catalyst for urban infrastructural development',  // the subtitle for our storymap 
    byline: 'By: Celeste, Jenny, Shelby, and Sophie',              // author line of our storymap 
    footer: 'Our sources can be found here: <a href="sources.html"> Group 2 Sources </a>',
    
    /* Below are the chapters to be displayed on the provided website.  We start with an intro than move to London, Rio, and then Tokyo
    */

    chapters: [
    {
            id: 'intro',                                           //The id of our first chapter
            alignment: 'center',                                   // alignment set to center to center our text and image on the page 
            hidden: false,										   // we don't want this chapter hidden
            title: 'Introduction',                                 // the title that will display above our text 
            image: './images/intro_olympics.jpg',                  // jpg image inside the images folder of our cyberduck that will display on the website
            description: '<p>Hosting the Olympic games was seen as a great honor for countries; a way to gain global awareness and prestige; to boost tourism and local economies. However, hosting such a global event is a massive undertaking for the host city and country. More recently countries are becoming hesitant to take up that responsibility and that price tag. About nine years in advance, countries bid to compete for a spot in the selection of the games, including a hefty submission fee and detailed plans of construction and urban design. Sufficient facilities are needed to  accommodate hundreds of thousands of foreigners to watch over 10,000 athletes in 300 events (McBride). In the last decade costs for hosts have totaled between $10-50 billion USD. Much of this cost is a result of updating and developing urban infrastructure, including transportation systems, sporting facilities, housing accommodation and more. The urban developments that are designed in time for the games leave lasting benefits and newly developed resources for residents of the host city and country. The games provide an opportunity to revitalize neglected or declining areas with state of the art accommodations and facilities, as well as increased parks and green space, improving the quality of life for residents in years to come.Now we are going to look at the past three summer Olympic games: examples of the urban infrastructural development in London, Rio de Janeiro, and Tokyo.',
            location: {
                center: [21.63233, 37.63722],                      //This location instructs the map where exactly to position the map within its projection to display, this coorindate is set to Olympia, Greece, the birthplace of the ancient Olympics 
                zoom: 16,
                pitch: 47.50,
                bearing: 24,
            },
            mapAnimation: 'flyTo',                                // the movement of the map to reach the coordinate
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                                     // 
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'london_2012',                                   //the id of our second chapter 
            alignment: 'left',                                   // alignemnt set to the left side of the page where our text and image will display- so that the back map can be seen on the right side  
            hidden: false,
            title: 'London 2012',                                // the displayed title of the chapter
            image: './images/London_2012.jpg',                   // jpg image inside the image folder of our cycberduck that will display this specific london image onto the website
            description: 'Now we are taking a look at London, England, the host of the 2012 summer Olympic Games. A majority of the events were held in the facilities on the east side of London. As seen in the video below, this site used to be a light industry hub covered in power lines, railways and contaminated by toxic waste. Curator-in-Chief at New London Architecture, Peter Murray, states that he used to cycle in the area, “passing huge mountains of discarded fridges, avoiding the burnt-out cars and broken glass strewn across the deserted streets. To transform such a desolate place into a piece of city in less than two decades is remarkable and would have been impossible without the catalyst of the Olympics” (Living, Learning, Legacy). Now revitalized due to the 7 year ‘mega-project’, costing upwards of 8 billion pounds, the park now known as Queen Elizabeth Olympic Park occupies 2.5 square km, the size of 357 football fields of the area (GOV.UK). In 2015 the park was opened up again to the public with facilities updated to accommodate the new audience. For example the aquacenter removed the temporary seating addition and added a daycare center, family training facilities, cafe and public plaza (GOV.UK). In addition to the high-end sporting facilities and community areas, the park also contains offices, five new residential areas, schools, public art, and hundreds of acres of green space to welcome tourists and provide residents with new, well maintained urban facilities. With over six million visitors each year, the park has regenerated the east side of London and provided the cities with hugely beneficial sustainable urban and green infrastructure (England - World Parks Week Feature Park). <iframe width="420" height="315" src="https://www.youtube.com/embed/Xi47b97sTis?si=kSzxpI8JR6MrxvzH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            location: {
                center: [-0.02784, 51.54344],                    //This location instructs the map where exactly to position the map within its projection to display, this coordinate will display the Queen Elizabeth Park and some context of London area too
                zoom: 12,
                pitch: 25.30,
                bearing: 0
            },
            mapAnimation: 'flyTo',                               // the movement of the map to reach the coordinate
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'rio_2016',                                  //the id of our third chapter 
            alignment: 'right',                              // alignemnt rotating to the right side of the page where our text and image will display, and the back map will be seen on the left side
            hidden: false,
            title: 'Rio de Janeiro 2016',                    // the dispalyed title of the chapter
            image: './images/Rio.jpg',                       // jpg image inside the image folder of our cycberduck that will display this specific Rio image onto the website
            description: 'Prior to the 2016 Olympics the transit system in Rio was crowded, unreliable, and old. Hosting the Olympics gave them incentive to develop three different types of transit; bus, metro, and light rail. They ended up doubling public transit infrastructure, including extending the metro more than 16 km. It’s installation made Rio the first city in Brazil to connect the airport to downtown by transit. According the Philippe Bovy, an Olympic transport expert: “Thanks to Olympic catalyst impact, it took Rio only 6-7 years to make a 25-30 year public transport progress jump towards much better urban mobility for all”. During the games, 2.2 million passengers used the newly built transit to travel to venues. The transit system not only ended up helping spectators and employees get to the games, but has had long-lasting effects on the inhabitants of the city and their access to public transportation. Shown on the map in red is the VLT network which was installed as part of the infrastructure development prior to the games. The stations are indicated here with the train icon. This network is what linked the city centre to the airport. It also deeply affected the landscape of the city as a promenade was built along with it only to be used by the VLT and pedestrians.<h3> List of VLT Stations </h3><ul><li>Gamboa</li><li>Rodoviária</li><li>Cordeiro da Graça</li><li>Santo Cristo</li><li>Pereira Reis</li><li>Vila Olímpica</li><li>Praia Formosa</li><li>Equador</li><li>Cidade do Samba</li><li>Utopia AquaRio</li><li>Providência</li><li>Harmonia</li><li>Parada dos Navios</li><li>Parada dos Museus</li><li>Candelária</li><li>Sete de Setembro</li><li>Cinelândia</li><li>Carioca</li><li>Central</li><li>Saara</li><li>Tiradentes</li><li>Colombo</li><li>Praça XV</li><li>Itamaraty</li><li>Camerino</li><li>Santa Rita</li><li>Santos Dumont</li><li>Antônio Carlos</li><li>São Bento</li><li>São Diogo</li></ul>',
              location: {
                center: [-43.17071, -22.90906],             //This location instructs the map where exactly to position the map within its projection to display, this coordinate will display the area where the Rio bus stops and bus lines run
                zoom: 13.43,
                pitch: 0,
                bearing: 0,
                // flyTo and easeTo additional controls-
                // The two options below control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //    speed: 2, // make the flying slow
                //    curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',                          
            rotateAnimation: false, 
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tokyo_2020',                             //the id of our fourth and final chapter
            alignment: 'left',                            // alignemnt back on the left side of the page where our text and image will display, and the back map will be seen on the right side
            hidden: false,
            title: 'Tokyo 2020',                          // the dispalyed title of the chapter
            image: './images/toyko2020.JPG',              // jpg image inside the image folder of our cycberduck that will display this specific Tokyo games image onto the website
            description: '<h2>Infrastructure renewal</h2> <p>The Tokyo organizers had been wanting to renew their infrastructure for years after the Tokyo summer games of 1964. In addition, Tokyo also wanted to show their recovery since the 2011 earthquake and to spark hope during a pandemic. In “… total 43 competition venues, just eight were built from scratch, each with a focus on social and environmental considerations and a legacy plan to ensure their long-term use after the Games.( Japan Online Media Center)”</p> <p>One example is the Azuma Baseball Stadium (image above). It is located in the Fukushima Prefecture, 200 km north-east of Tokyo. A nuclear disaster induced by the 2011 tsunami and earthquake worsened the area. The stadium was first built in 1986 and was chosen for renovation, to hold softball and baseball matches. The location was intentionally chosen as an attempt to show the recovery and renewal of the prefecture 10 years after the tragic disasters (Tokyo Organizing Committee). This example shows how the Olympics were used to push for urban renewal across Japan, not just in Tokyo.</p> <h2> Impacts </h2> <p>What is the legacy of the 2020 Olympic games? Heavy financial cost and corruption aside, the renovation and construction of sports facilities along with the hosting of the games increased physical activity and interest in various sports. After the games, all facilities were open to the public which allowed people to enjoy a wide range of sports and led to the hosting of many competitions. For example, the Sea Forest Waterway has become a hotspot for activity with its aquatic sports competitions, and music and culture festivals (IOC). </p>',
            location: {
                center: [140.36478, 37.72076],           //This location instructs the map where exactly to position the map within its projection to display, this coordinate will display the stadium just outside of Fukushima
                zoom: 17.05,
                pitch: 55.49,
                bearing: -137.59
            },
            mapAnimation: 'flyTo',                     // the movement of the map to reach the coordinate
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        //ADD FURTHER CHAPTERS HERE. 
    ]
};
