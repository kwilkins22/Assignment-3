//YOUR TASK BEGINS BELOW LINE 705!!
//This is an array, which is set up in the same format as a .json file
var citiesList = [
  {
    "Country": "cn",
    "City": "shanghai",
    "Population": 14608512,
    "Latitude": 31.045556,
    "Longitude": 121.399722
  },
  {
    "Country": "br",
    "City": "sao paulo",
    "Population": 10021437,
    "Latitude": -23.473293,
    "Longitude": -46.665803
  },
  {
    "Country": "cd",
    "City": "kinshasa",
    "Population": 7787832,
    "Latitude": -4.3,
    "Longitude": 15.3
  },
  {
    "Country": "eg",
    "City": "cairo",
    "Population": 7734602,
    "Latitude": 30.05,
    "Longitude": 31.25
  },
  {
    "Country": "cn",
    "City": "peking",
    "Population": 7480601,
    "Latitude": 39.928889,
    "Longitude": 116.388333
  },
  {
    "Country": "gb",
    "City": "london",
    "Population": 7421228,
    "Latitude": 51.514125,
    "Longitude": -0.093689
  },
  {
    "Country": "co",
    "City": "bogota",
    "Population": 7102602,
    "Latitude": 4.649178,
    "Longitude": -74.062827
  },
  {
    "Country": "bd",
    "City": "dhaka",
    "Population": 6493177,
    "Latitude": 23.7230556,
    "Longitude": 90.4086111
  },
  {
    "Country": "br",
    "City": "rio de janeiro",
    "Population": 6023742,
    "Latitude": -22.9,
    "Longitude": -43.233333
  },
  {
    "Country": "cl",
    "City": "santiago",
    "Population": 4837248,
    "Latitude": -33.45,
    "Longitude": -70.666667
  },
  {
    "Country": "ca",
    "City": "toronto",
    "Population": 4612187,
    "Latitude": 43.666667,
    "Longitude": -79.416667
  },
  {
    "Country": "au",
    "City": "sydney",
    "Population": 4394585,
    "Latitude": -33.861481,
    "Longitude": 151.205475
  },
  {
    "Country": "cn",
    "City": "wuhan",
    "Population": 4184206,
    "Latitude": 30.580125,
    "Longitude": 114.273405
  },
  {
    "Country": "cn",
    "City": "chongqing",
    "Population": 3967028,
    "Latitude": 29.562778,
    "Longitude": 106.552778
  },
  {
    "Country": "cn",
    "City": "xian",
    "Population": 3953191,
    "Latitude": 34.258333,
    "Longitude": 108.928611
  },
  {
    "Country": "cn",
    "City": "chengdu",
    "Population": 3950437,
    "Latitude": 30.666667,
    "Longitude": 104.066667
  },
  {
    "Country": "eg",
    "City": "alexandria",
    "Population": 3811512,
    "Latitude": 31.1980556,
    "Longitude": 29.9191667
  },
  {
    "Country": "cn",
    "City": "tianjin",
    "Population": 3766207,
    "Latitude": 39.142222,
    "Longitude": 117.176667
  },
  {
    "Country": "au",
    "City": "melbourne",
    "Population": 3730212,
    "Latitude": -37.813938,
    "Longitude": 144.963425
  },
  {
    "Country": "ci",
    "City": "abidjan",
    "Population": 3692570,
    "Latitude": 5.309657,
    "Longitude": -4.012656
  },
  {
    "Country": "cn",
    "City": "shenyang",
    "Population": 3512192,
    "Latitude": 41.792222,
    "Longitude": 123.432778
  },
  {
    "Country": "de",
    "City": "berlin",
    "Population": 3398362,
    "Latitude": 52.516667,
    "Longitude": 13.4
  },
  {
    "Country": "ca",
    "City": "montreal",
    "Population": 3268513,
    "Latitude": 45.5,
    "Longitude": -73.583333
  },
  {
    "Country": "cn",
    "City": "harbin",
    "Population": 3229883,
    "Latitude": 45.75,
    "Longitude": 126.65
  },
  {
    "Country": "cn",
    "City": "guangzhou",
    "Population": 3152825,
    "Latitude": 23.116667,
    "Longitude": 113.25
  },
  {
    "Country": "es",
    "City": "madrid",
    "Population": 3102644,
    "Latitude": 40.408566,
    "Longitude": -3.69222
  },
  {
    "Country": "cn",
    "City": "nanjing",
    "Population": 3087010,
    "Latitude": 32.061667,
    "Longitude": 118.777778
  },
  {
    "Country": "af",
    "City": "kabul",
    "Population": 3043589,
    "Latitude": 34.516667,
    "Longitude": 69.183333
  },
  {
    "Country": "ao",
    "City": "luanda",
    "Population": 2776125,
    "Latitude": -8.836804,
    "Longitude": 13.233174
  },
  {
    "Country": "et",
    "City": "addis abeba",
    "Population": 2757807,
    "Latitude": 9.024325,
    "Longitude": 38.749226
  },
  {
    "Country": "cn",
    "City": "taiyuan",
    "Population": 2722475,
    "Latitude": 37.726944,
    "Longitude": 112.470833
  },
  {
    "Country": "br",
    "City": "salvador",
    "Population": 2711903,
    "Latitude": -12.983333,
    "Longitude": -38.516667
  },
  {
    "Country": "cn",
    "City": "changchun",
    "Population": 2537421,
    "Latitude": 43.88,
    "Longitude": 125.322778
  },
  {
    "Country": "eg",
    "City": "gizeh",
    "Population": 2443490,
    "Latitude": 30.0086111,
    "Longitude": 31.2122222
  },
  {
    "Country": "br",
    "City": "fortaleza",
    "Population": 2416920,
    "Latitude": -3.316667,
    "Longitude": -41.416667
  },
  {
    "Country": "co",
    "City": "cali",
    "Population": 2392897,
    "Latitude": 3.437222,
    "Longitude": -76.5225
  },
  {
    "Country": "br",
    "City": "belo horizonte",
    "Population": 2373255,
    "Latitude": -19.916667,
    "Longitude": -43.933333
  },
  {
    "Country": "br",
    "City": "brasilia",
    "Population": 2207812,
    "Latitude": -15.783333,
    "Longitude": -47.916667
  },
  {
    "Country": "do",
    "City": "santo domingo",
    "Population": 2202016,
    "Latitude": 18.4666667,
    "Longitude": -69.9
  },
  {
    "Country": "fr",
    "City": "paris",
    "Population": 2110694,
    "Latitude": 48.866667,
    "Longitude": 2.333333
  },
  {
    "Country": "cn",
    "City": "jinan",
    "Population": 2069266,
    "Latitude": 36.668333,
    "Longitude": 116.997222
  },
  {
    "Country": "cn",
    "City": "tangshan",
    "Population": 2054526,
    "Latitude": 37.3325,
    "Longitude": 114.701389
  },
  {
    "Country": "cn",
    "City": "dalian",
    "Population": 2035307,
    "Latitude": 38.912222,
    "Longitude": 121.602222
  },
  {
    "Country": "co",
    "City": "medellin",
    "Population": 2000001,
    "Latitude": 6.25184,
    "Longitude": -75.563591
  },
  {
    "Country": "dz",
    "City": "algiers",
    "Population": 1980242,
    "Latitude": 36.7630556,
    "Longitude": 3.0505556
  },
  {
    "Country": "gh",
    "City": "accra",
    "Population": 1963460,
    "Latitude": 5.55,
    "Longitude": -0.2166667
  },
  {
    "Country": "ec",
    "City": "guayaquil",
    "Population": 1952029,
    "Latitude": -2.1666667,
    "Longitude": -79.9
  },
  {
    "Country": "cn",
    "City": "jilin",
    "Population": 1881977,
    "Latitude": 43.850833,
    "Longitude": 126.560278
  },
  {
    "Country": "cn",
    "City": "hangzhou",
    "Population": 1878129,
    "Latitude": 30.29365,
    "Longitude": 120.161419
  },
  {
    "Country": "cn",
    "City": "nanchang",
    "Population": 1871351,
    "Latitude": 28.55,
    "Longitude": 115.933333
  },
  {
    "Country": "gn",
    "City": "conakry",
    "Population": 1871185,
    "Latitude": 9.5091667,
    "Longitude": -13.7122222
  },
  {
    "Country": "au",
    "City": "brisbane",
    "Population": 1843459,
    "Latitude": -27.47101,
    "Longitude": 153.024292
  },
  {
    "Country": "ca",
    "City": "vancouver",
    "Population": 1837970,
    "Latitude": 49.25,
    "Longitude": -123.133333
  },
  {
    "Country": "by",
    "City": "minsk",
    "Population": 1742123,
    "Latitude": 53.9,
    "Longitude": 27.5666667
  },
  {
    "Country": "de",
    "City": "hamburg",
    "Population": 1733846,
    "Latitude": 53.55,
    "Longitude": 10
  },
  {
    "Country": "br",
    "City": "curitiba",
    "Population": 1718433,
    "Latitude": -25.416667,
    "Longitude": -49.25
  },
  {
    "Country": "cn",
    "City": "qingdao",
    "Population": 1642245,
    "Latitude": 36.098611,
    "Longitude": 120.371944
  },
  {
    "Country": "br",
    "City": "manaus",
    "Population": 1598227,
    "Latitude": -3.113333,
    "Longitude": -60.025278
  },
  {
    "Country": "cn",
    "City": "xinyang",
    "Population": 1590668,
    "Latitude": 32.095833,
    "Longitude": 114.120278
  },
  {
    "Country": "es",
    "City": "barcelona",
    "Population": 1570378,
    "Latitude": 41.398371,
    "Longitude": 2.1741
  },
  {
    "Country": "at",
    "City": "vienna",
    "Population": 1569315,
    "Latitude": 48.2,
    "Longitude": 16.366667
  },
  {
    "Country": "cn",
    "City": "urumqi",
    "Population": 1508225,
    "Latitude": 43.800965,
    "Longitude": 87.600459
  },
  {
    "Country": "br",
    "City": "recife",
    "Population": 1478118,
    "Latitude": -8.05,
    "Longitude": -34.9
  },
  {
    "Country": "gh",
    "City": "kumasi",
    "Population": 1468797,
    "Latitude": 6.6833333,
    "Longitude": -1.6166667
  },
  {
    "Country": "au",
    "City": "perth",
    "Population": 1446715,
    "Latitude": -31.95224,
    "Longitude": 115.861397
  },
  {
    "Country": "ar",
    "City": "cordoba",
    "Population": 1441007,
    "Latitude": -31.413496,
    "Longitude": -64.181052
  },
  {
    "Country": "cn",
    "City": "lanzhou",
    "Population": 1417742,
    "Latitude": 36.056389,
    "Longitude": 103.792222
  },
  {
    "Country": "br",
    "City": "belem",
    "Population": 1407737,
    "Latitude": -1.45,
    "Longitude": -48.483333
  },
  {
    "Country": "cn",
    "City": "fushun",
    "Population": 1400646,
    "Latitude": 41.7,
    "Longitude": 123.883333
  },
  {
    "Country": "ec",
    "City": "quito",
    "Population": 1399814,
    "Latitude": -0.2166667,
    "Longitude": -78.5
  },
  {
    "Country": "cn",
    "City": "luoyang",
    "Population": 1390581,
    "Latitude": 34.683611,
    "Longitude": 112.453611
  },
  {
    "Country": "cn",
    "City": "hefei",
    "Population": 1388904,
    "Latitude": 31.863889,
    "Longitude": 117.280833
  },
  {
    "Country": "co",
    "City": "barranquilla",
    "Population": 1380437,
    "Latitude": 10.963889,
    "Longitude": -74.796389
  },
  {
    "Country": "cd",
    "City": "lubumbashi",
    "Population": 1374808,
    "Latitude": -11.666667,
    "Longitude": 27.466667
  },
  {
    "Country": "br",
    "City": "porto alegre",
    "Population": 1372763,
    "Latitude": -30.033333,
    "Longitude": -51.2
  },
  {
    "Country": "cn",
    "City": "handan",
    "Population": 1358318,
    "Latitude": 36.566667,
    "Longitude": 114.533333
  },
  {
    "Country": "cn",
    "City": "suzhou",
    "Population": 1343091,
    "Latitude": 31.311389,
    "Longitude": 120.618056
  },
  {
    "Country": "bd",
    "City": "khulna",
    "Population": 1342429,
    "Latitude": 22.8,
    "Longitude": 89.55
  },
  {
    "Country": "cm",
    "City": "douala",
    "Population": 1338144,
    "Latitude": 4.0502778,
    "Longitude": 9.7
  },
  {
    "Country": "cm",
    "City": "yaounde",
    "Population": 1299446,
    "Latitude": 3.8666667,
    "Longitude": 11.5166667
  },
  {
    "Country": "de",
    "City": "munich",
    "Population": 1246133,
    "Latitude": 48.15,
    "Longitude": 11.5833
  },
  {
    "Country": "ar",
    "City": "rosario",
    "Population": 1218497,
    "Latitude": -32.946818,
    "Longitude": -60.639317
  },
  {
    "Country": "cn",
    "City": "anshan",
    "Population": 1199275,
    "Latitude": 41.123611,
    "Longitude": 122.99
  },
  {
    "Country": "cn",
    "City": "xuzhou",
    "Population": 1199193,
    "Latitude": 34.180454,
    "Longitude": 117.15707
  },
  {
    "Country": "cn",
    "City": "fuzhou",
    "Population": 1179720,
    "Latitude": 26.061389,
    "Longitude": 119.306111
  },
  {
    "Country": "cn",
    "City": "guiyang",
    "Population": 1171633,
    "Latitude": 26.583333,
    "Longitude": 106.716667
  },
  {
    "Country": "br",
    "City": "goiania",
    "Population": 1171209,
    "Latitude": -16.666667,
    "Longitude": -49.266667
  },
  {
    "Country": "br",
    "City": "guarulhos",
    "Population": 1169601,
    "Latitude": -23.45068,
    "Longitude": -46.526175
  },
  {
    "Country": "cz",
    "City": "prague",
    "Population": 1154508,
    "Latitude": 50.083333,
    "Longitude": 14.466667
  },
  {
    "Country": "ae",
    "City": "dubai",
    "Population": 1137376,
    "Latitude": 25.258172,
    "Longitude": 55.304717
  },
  {
    "Country": "az",
    "City": "baku",
    "Population": 1116513,
    "Latitude": 40.395278,
    "Longitude": 49.882222
  },
  {
    "Country": "cg",
    "City": "brazzaville",
    "Population": 1115773,
    "Latitude": -4.2591667,
    "Longitude": 15.2847222
  },
  {
    "Country": "cn",
    "City": "wuxi",
    "Population": 1108647,
    "Latitude": 31.568873,
    "Longitude": 120.288573
  },
  {
    "Country": "am",
    "City": "yerevan",
    "Population": 1093499,
    "Latitude": 40.1811111,
    "Longitude": 44.5136111
  },
  {
    "Country": "dk",
    "City": "copenhagen",
    "Population": 1089958,
    "Latitude": 55.666667,
    "Longitude": 12.583333
  },
  {
    "Country": "au",
    "City": "adelaide",
    "Population": 1074168,
    "Latitude": -34.928661,
    "Longitude": 138.598633
  },
  {
    "Country": "bg",
    "City": "sofia",
    "Population": 1062065,
    "Latitude": 42.6833333,
    "Longitude": 23.3166667
  },
  {
    "Country": "cn",
    "City": "datong",
    "Population": 1052678,
    "Latitude": 40.093611,
    "Longitude": 113.291389
  },
  {
    "Country": "ge",
    "City": "tbilisi",
    "Population": 1049516,
    "Latitude": 41.725,
    "Longitude": 44.7908333
  },
  {
    "Country": "cn",
    "City": "xianyang",
    "Population": 1034081,
    "Latitude": 34.33778,
    "Longitude": 108.70261
  }
  ];
  //console.log(citiesList);


//This function will assign a different icon to each city, based on the population value. It takes as its input the population, and returns an icon url.
var url; 
function assignIcon(p){
   		if (p < 1500000)
    		url = 'http://neogeoweb.ca/icons/heWhoKnocks.png';
  		if (p > 2000000)
    		url = 'http://neogeoweb.ca/icons/mickey.png';
  		if (p > 3000000)
    		url = 'http://neogeoweb.ca/icons/cap.png';
  		if (p > 4000000)
    		url = 'http://neogeoweb.ca/icons/winterfell.png';
  		if (p > 100000000)
    		url = 'http://neogeoweb.ca/icons/purpleGuy.png';    
    return url
  }

//This is the standard initialize map function fromt the Google 'Simple Map' page, modified startLatLng
//https://developers.google.com/maps/documentation/javascript/examples/map-simple 
function initMap() {
       var startLatLng = new google.maps.LatLng(10,-14) 
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: startLatLng 
        });

	for(i=0;i<citiesList.length;i++){

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(citiesList[i].Latitude, citiesList[i].Longitude),
          icon: assignIcon(citiesList[i].Population), 
          map: map,
          title: citiesList[i].City
        });
	}
}
initMap();













