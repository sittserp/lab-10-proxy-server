
function mungeLocation(location) {
    return {
        formatted_query: location[0].display_name,
        latitude: location[0].lat,
        longitude: location[0].lon
    };
}

function mungeWeather(weatherData) {
    return weatherData.data.map(item => {
        return {
            forecast: item.weather.description,
            time: item.datetime
        };
    }).slice(1, 9);
}

function mungeTrails(trailData) {
    return trailData.trails.map(item => {
        return {

            name: item.name,
            location: item.location,
            length: item.length,
            stars: item.stars,
            star_votes: item.starVotes,
            summary: item.summary,
            trail_url: item.url,
            conditions: item.conditionStatus,
            condition_date: item.conditionDate,
            condition_time: '0:00:00'
        };
    }).slice(0, 10);
}

module.exports = {
    mungeLocation,
    mungeWeather,
    mungeTrails
};

