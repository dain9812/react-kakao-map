import getOverlayContent from "../utils/getOverlayContent";

export const zoomIn = (map) => {
  const level = map.getLevel();
  map.setLevel(level - 1);
};

export const zoomOut = (map) => {
  const level = map.getLevel();
  map.setLevel(level + 1);
};

export const setOverlayMapTypeId = (map, maptype, option) => {
  if (option === "add") {
    if (maptype === "traffic") {
      map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TRAFFIC);
    } else if (maptype === "bicycle") {
      map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.BICYCLE);
    } else {
      map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TERRAIN);
    }
  } else {
    if (maptype === "traffic") {
      map.removeOverlayMapTypeId(window.kakao.maps.MapTypeId.TRAFFIC);
    } else if (maptype === "bicycle") {
      map.removeOverlayMapTypeId(window.kakao.maps.MapTypeId.BICYCLE);
    } else {
      map.removeOverlayMapTypeId(window.kakao.maps.MapTypeId.TERRAIN);
    }
  }
};

export const getSearchMap = (map, search, setSearch) => {
  if (search === "") return;
  const markers = [];
  const overlay = new window.kakao.maps.CustomOverlay({ zIndex: 1 });
  overlay.setMap(null);
  const ps = new window.kakao.maps.services.Places();
  ps.keywordSearch(search, placesSearchCB);

  function placesSearchCB(data, status) {
    if (status === window.kakao.maps.services.Status.OK) {
      displayPlace(data);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      setSearch("");
      alert("검색 결과가 존재하지 않습니다.");
    }
  }

  function displayPlace(place) {
    const bounds = new window.kakao.maps.LatLngBounds();

    for (let i = 0; i < place.length; i++) {
      const marker = displayMarker(place[i]);
      bounds.extend(new window.kakao.maps.LatLng(place[i].y, place[i].x));

      (function (marker, place) {
        window.kakao.maps.event.addListener(marker, "click", () => {
          displayPlaceInfo(place);
          map.panTo(new window.kakao.maps.LatLng(place.y, place.x));
        });
      })(marker, place[i]);
    }

    map.setBounds(bounds);
  }

  function displayMarker(place) {
    const marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(place.y, place.x),
    });

    markers.push(marker);

    return marker;
  }

  function displayPlaceInfo(place) {
    const closeOverlay = () => {
      overlay.setMap(null);
    };

    const content = getOverlayContent(place, closeOverlay);
    const position = new window.kakao.maps.LatLng(place.y, place.x);

    overlay.setContent(content);
    overlay.setMap(map);
    overlay.setPosition(position);

    overlay.setMap(map);
  }
};
