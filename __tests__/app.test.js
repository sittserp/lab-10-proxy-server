require('dotenv').config();

// const { execSync } = require('child_process');

const {
  mungeLocation,
  mungeWeather,
  mungeTrails,
  mungeRestaurants }
  = require('../utils.js');

const geo = require('../data/geo.json');
const weather = require('../data/weather.json');
const trails = require('../data/trails.json');
const restaurants = require('../data/restaurants.json');

test('returns location', () => {

  const expectation =
  {
    'formatted_query': 'Portland, Multnomah County, Oregon, USA',
    'latitude': '45.5202471',
    'longitude': '-122.6741949'
  }
    ;

  const data = mungeLocation(geo);

  expect(data).toEqual(expectation);
});

test('returns weather', () => {

  const expectation =
    [{ 'forecast': 'Light snow', 'time': '2020-05-06' }, { 'forecast': 'Few clouds', 'time': '2020-05-07' }, { 'forecast': 'Few clouds', 'time': '2020-05-08' }, { 'forecast': 'Broken clouds', 'time': '2020-05-09' }, { 'forecast': 'Overcast clouds', 'time': '2020-05-10' }, { 'forecast': 'Overcast clouds', 'time': '2020-05-11' }, { 'forecast': 'Light rain', 'time': '2020-05-12' }, { 'forecast': 'Light rain', 'time': '2020-05-13' }]
    ;

  const data = mungeWeather(weather);

  expect(data).toEqual(expectation);
});

test('returns trails', () => {

  const expectation =
    [{
      'condition_date': '2020-09-16',
      'condition_time': '14:37:11',
      'conditions': 'All Clear',
      'length': 17.3,
      'location': 'Superior, Colorado',
      'name': 'Boulder Skyline Traverse',
      'star_votes': 93,
      'stars': 4.7,
      'summary': 'The classic long mountain route in Boulder.',
      'trail_url': 'https://www.hikingproject.com/trail/7011192/boulder-skyline-traverse',
    },
    {
      'condition_date': '2020-10-22',
      'condition_time': '13:00:06',
      'conditions': 'All Clear',
      'length': 5.7,
      'location': 'Boulder, Colorado',
      'name': 'Bear Peak Out and Back',
      'star_votes': 123,
      'stars': 4.6,
      'summary': 'A must-do hike for Boulder locals and visitors alike!',
      'trail_url': 'https://www.hikingproject.com/trail/7000130/bear-peak-out-and-back',
    },
    {
      'condition_date': '2020-10-19',
      'condition_time': '15:37:52',
      'conditions': 'All Clear',
      'length': 5.3,
      'location': 'Boulder, Colorado',
      'name': 'Sunshine Lion\'s Lair Loop',
      'star_votes': 119,
      'stars': 4.5,
      'summary': 'Great Mount Sanitas views are the reward for this gentler loop in Sunshine Canyon.',
      'trail_url': 'https://www.hikingproject.com/trail/7004226/sunshine-lions-lair-loop',
    },
    {
      'condition_date': '2020-11-03',
      'condition_time': '16:01:11',
      'conditions': 'Minor Issues',
      'length': 4.9,
      'location': 'Boulder, Colorado',
      'name': 'Green Mountain via Ranger/Saddle Rock Loop',
      'star_votes': 89,
      'stars': 4.5,
      'summary': 'A loop with a variety of terrain, a lot of climbing, and great views of Boulder.',
      'trail_url': 'https://www.hikingproject.com/trail/7011191/green-mountain-via-rangersaddle-rock-loop',
    },
    {
      'condition_date': '2020-10-12',
      'condition_time': '13:48:51',
      'conditions': 'All Clear',
      'length': 7.6,
      'location': 'Coal Creek, Colorado',
      'name': 'Walker Ranch',
      'star_votes': 139,
      'stars': 4.5,
      'summary': 'An awesome and challenging hike near Boulder with great scenery.',
      'trail_url': 'https://www.hikingproject.com/trail/7002439/walker-ranch',
    },
    {
      'condition_date': '2020-10-18',
      'condition_time': '17:03:19',
      'conditions': 'All Clear',
      'length': 3.3,
      'location': 'Boulder, Colorado',
      'name': 'Royal Arch Out and Back',
      'star_votes': 158,
      'stars': 4.4,
      'summary': 'A classic Boulder hike to a natural arch with great views.',
      'trail_url': 'https://www.hikingproject.com/trail/7004682/royal-arch-out-and-back',
    },
    {
      'condition_date': '2020-10-14',
      'condition_time': '19:04:37',
      'conditions': 'All Clear',
      'length': 3.2,
      'location': 'Boulder, Colorado',
      'name': 'Mount Sanitas Loop',
      'star_votes': 110,
      'stars': 4.1,
      'summary': 'Very popular and scenic loop right from the edge of town.',
      'trail_url': 'https://www.hikingproject.com/trail/7000000/mount-sanitas-loop',
    },
    {
      'condition_date': '2020-10-17',
      'condition_time': '19:04:26',
      'conditions': 'All Clear',
      'length': 6.7,
      'location': 'Boulder, Colorado',
      'name': 'Betasso Preserve',
      'star_votes': 75,
      'stars': 4.2,
      'summary': 'This hike is easily accessible from Boulder and offers amazing singletrack with beautiful views.',
      'trail_url': 'https://www.hikingproject.com/trail/7001019/betasso-preserve',
    },
    {
      'condition_date': '2020-09-19',
      'condition_time': '19:29:09',
      'conditions': 'All Clear',
      'length': 3.9,
      'location': 'Boulder, Colorado',
      'name': 'Green Mountain West Ridge',
      'star_votes': 32,
      'stars': 4.1,
      'summary': 'The easiest route to the spectacular summit of Green Mountain.',
      'trail_url': 'https://www.hikingproject.com/trail/7004594/green-mountain-west-ridge',
    },
    {
      'condition_date': '2020-11-07',
      'condition_time': '11:03:26',
      'conditions': 'All Clear',
      'length': 11.1,
      'location': 'Superior, Colorado',
      'name': 'Marshall Mesa to Spring Brook Loop',
      'star_votes': 26,
      'stars': 4.3,
      'summary': 'Some of the best trails that Boulder has to offer with a variety of options that never get old.',
      'trail_url': 'https://www.hikingproject.com/trail/7017569/marshall-mesa-to-spring-brook-loop',
    },
    ];

  const data = mungeTrails(trails);

  expect(data).toEqual(expectation);
});

test('returns restaurants', () => {

  const expectation =
    [
      {
        'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/VCCk-GaBia6oV0iMvAHzlg/o.jpg',
        'name': 'Edelweiss Sausage Co & Delicatessen',
        'price': '$',
        'rating': 4,
        'url': 'https://www.yelp.com/biz/edelweiss-sausage-co-and-delicatessen-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/c2vvSdWqdq0k_qt315OSBQ/o.jpg',
        'name': 'Kenny & Zuke\'s Delicatessen',
        'price': '$$',
        'rating': 3.5,
        'url': 'https://www.yelp.com/biz/kenny-and-zukes-delicatessen-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/LrlAFu_FjqBfIOr_N-keUg/o.jpg',
        'name': 'Break Bread - Pearl',
        'price': undefined,
        'rating': 5,
        'url': 'https://www.yelp.com/biz/break-bread-pearl-portland-2?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Gaf5p-6vf4H3u9GU5F5YfQ/o.jpg',
        'name': 'Charlie\'s Deli & Delivery',
        'price': '$',
        'rating': 4,
        'url': 'https://www.yelp.com/biz/charlies-deli-and-delivery-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/8tOmEEI_NJLNx9A3fJMBBw/o.jpg',
        'name': 'The Baker\'s Mark',
        'price': '$',
        'rating': 4.5,
        'url': 'https://www.yelp.com/biz/the-bakers-mark-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/w1tcp-5xJyQz19HH05JoVA/o.jpg',
        'name': 'Cheryl’s on 12th',
        'price': '$$',
        'rating': 4.5,
        'url': 'https://www.yelp.com/biz/cheryl-s-on-12th-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/joOZDgWBOUE-ClU9DJzRYw/o.jpg',
        'name': 'Urban Pantry',
        'price': '$$',
        'rating': 3.5,
        'url': 'https://www.yelp.com/biz/urban-pantry-portland-3?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/DBfsLw-ApILzpq6vfrpg-Q/o.jpg',
        'name': 'Tails & Trotters',
        'price': '$$',
        'rating': 4.5,
        'url': 'https://www.yelp.com/biz/tails-and-trotters-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/S8ZFxBdU9y65ylkh1W-dFA/o.jpg',
        'name': 'Aunt Tillie\'s Deli',
        'price': '$',
        'rating': 4.5,
        'url': 'https://www.yelp.com/biz/aunt-tillies-deli-portland-3?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ANeMgCMaTbM-aOqGcJ70CA/o.jpg',
        'name': 'Sammich',
        'price': '$$',
        'rating': 4.5,
        'url': 'https://www.yelp.com/biz/sammich-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/wljh0qgJ78tKUelrEpwNcQ/o.jpg',
        'name': 'East Side Delicatessen',
        'price': '$',
        'rating': 4,
        'url': 'https://www.yelp.com/biz/east-side-delicatessen-portland-14?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Vo7GK2WKMWkfdlhKYU2Fuw/o.jpg',
        'name': 'World Foods',
        'price': '$$',
        'rating': 4.5,
        'url': 'https://www.yelp.com/biz/world-foods-portland-2?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/VQ9lSrwmzYsfgLSkroO4bw/o.jpg',
        'name': 'Kornblatt\'s',
        'price': '$$',
        'rating': 3.5,
        'url': 'https://www.yelp.com/biz/kornblatts-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/iRlU-jbVh63_fddNGP9t6Q/o.jpg',
        'name': 'Otto\'s Sausage Kitchen & Meat Market',
        'price': '$',
        'rating': 4.5,
        'url': 'https://www.yelp.com/biz/ottos-sausage-kitchen-and-meat-market-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/P2-miw5Zhrn3npOqs_jHkg/o.jpg',
        'name': 'Ross Island Grocery & Cafe',
        'price': '$',
        'rating': 4,
        'url': 'https://www.yelp.com/biz/ross-island-grocery-and-cafe-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/dMoaU9PxMjGjZelcZccsuw/o.jpg',
        'name': 'Plaza Deli',
        'price': '$',
        'rating': 4.5,
        'url': 'https://www.yelp.com/biz/plaza-deli-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/H3DtRXfn_RBr5dTUlKolQQ/o.jpg',
        'name': 'Lottie & Zula\'s',
        'price': undefined,
        'rating': 5,
        'url': 'https://www.yelp.com/biz/lottie-and-zulas-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ZlZdHrFCThOP618Tp8s2Iw/o.jpg',
        'name': 'Devil\'s Dill Sandwich Shop',
        'price': '$',
        'rating': 4.5,
        'url': 'https://www.yelp.com/biz/devils-dill-sandwich-shop-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/mLxdp7dineu1BuSk6z7akw/o.jpg',
        'name': 'Phil\'s Meat Market & Delicatessen',
        'price': '$$',
        'rating': 4,
        'url': 'https://www.yelp.com/biz/phils-meat-market-and-delicatessen-portland-2?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      },
      {
        'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/VGPagpsKuPGJxDYpWj-mcg/o.jpg',
        'name': 'Sebastiano’s',
        'price': undefined,
        'rating': 5,
        'url': 'https://www.yelp.com/biz/sebastiano-s-portland?adjust_creative=6XK5jeAUhXbmeemnZDOB7g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6XK5jeAUhXbmeemnZDOB7g',
      }]
    ;

  const data = mungeRestaurants(restaurants);

  expect(data).toEqual(expectation);
});
