import {useEffect, useState} from "react";

function ShippingForm({ country }) {
    const [cities, setCities] = useState(null);
    // This Effect fetches cities for a country
    useEffect(() => {
        let ignore = false;
        fetch(`/api/cities?country=${country}`)
            .then(response => response.json())
            .then(json => {
                if (!ignore) {
                    setCities(json);
                }
            });
        return () => {
            ignore = true;
        };
    }, [country]);

    const [city, setCity] = useState(null);
    const [areas, setAreas] = useState(null);
    // This Effect fetches areas for the selected city
    useEffect(() => {
        if (city) {
            let ignore = false;
            fetch(`/api/areas?city=${city}`)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setAreas(json);
                    }
                });
            return () => {
                ignore = true;
            };
        }
    }, [city]);

// ...
}

// The above can be re-written like this:
function useData(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        if (url) {
            let ignore = false;
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setData(json);
                    }
                });
            return () => {
                ignore = true;
            };
        }
    }, [url]);
    return data;
}

function ShippingFormWithCustomHooks({ country }) {
    const cities = useData(`/api/cities?country=${country}`);
    const [city, setCity] = useState(null);
    const areas = useData(city ? `/api/areas?city=${city}` : null);
// ...
}