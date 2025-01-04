import React, {
    useRef,
    useEffect,
    useState,
    useCallback } from "react";
import "../styles/MapPage.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapbox from 'mapbox-gl';
import placesData from "../Data/places.json";

mapbox.accessToken = process.env.REACT_APP_MAP_API_KEY;

const MapPage = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(19.13);
    const [lat] = useState(52);
    const [zoom] = useState(4.9);

    const generateList = useCallback(() => {
        const mapList = document.getElementById('listDiv');

        mapList.innerHTML = '';

        placesData.features.forEach((feature) => {
            const { properties } = feature;
            const { name, address, page } = properties;

            const popListContent = `
                <div class="listElements">
                    <a class="listElementName" href="${page}">${name}</a><br>
                    <a class="listElementAddress">adres: ${address}</a>
                </div>
            `;

            const popListEl = document.createElement('div');
            popListEl.innerHTML = popListContent;

            mapList.appendChild(popListEl);
        });
    }, []);

    const addMarkers = useCallback(() => {
        placesData.features.forEach((feature) => {
            const { geometry, properties } = feature;
            const { coordinates } = geometry;
            const { name, address, page } = properties;

            const elements = document.createElement("div");
            elements.className = "marker";

            const popContent = `
                <div class="pop-content">
                    <a href="${page}" class="pop-name">${name}</a>
                    <br><br>
                    <a class="pop-address">adres: ${address}</a>
                </div>
            `;

            const popup = new mapbox.Popup({ offset: 25 });
            const popupElement = document.createElement("div");
            popupElement.innerHTML = popContent;
            popup.setDOMContent(popupElement);

            new mapbox.Marker(elements)
                .setLngLat(coordinates)
                .setPopup(popup)
                .addTo(map.current);
        });
    }, []);

    useEffect(() => {
        if (map.current) return;

        map.current = new mapbox.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
        });

        addMarkers();
    }, [addMarkers, lng, lat, zoom]);

    useEffect(() => {
        generateList();
    }, [generateList]);

    return (
        <main>
            <div className="headDiv">
                <h1 className="mainTitle">Mapa specjalistów</h1>
            </div>

            <div className="contentDiv">
                <p id="pMap">Lokalizacje klinik oraz
                    sanatoriów przeznaczonych dla osób chorych na RRMS znajdziesz na poniższej mapie.</p>

                <div ref={mapContainer} className="map-container"/>

                <div className="line" id="lineMap"></div>

                <div className="expertLoc">
                    <p>Lista klinik i sanatoriów wskazana na powyższej mapie:</p>
                    <div id="listDiv" />

                </div>
            </div>
        </main>
    );
}

export default MapPage;