


aggiungiMarker(map);







function aggiungiMarker(mappa) {

       L.marker([41.890210, 12.492231]).addTo(mappa)
        .bindPopup("Colosseo");

   
    L.marker([41.898610, 12.476872]).addTo(mappa)
        .bindPopup("Pantheon");

   
    L.marker([41.900932, 12.483313]).addTo(mappa)
        .bindPopup("Fontana di Trevi");

    
    L.marker([41.902165, 12.453937]).addTo(mappa)
        .bindPopup("Piazza San Pietro");



}