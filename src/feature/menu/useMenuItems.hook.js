import {useCallback, useContext, useEffect, useState} from "react";
import {Markers} from "../../App";
import {markers} from "../../markers";
import {categories} from "../../categories";

const useMenuItems = () => {
  const [selected, setSelected] = useState(new Set());
  const {updateMarkers} = useContext(Markers);

  useEffect(() => {
    const newMarkers = markers.filter(({criteria}) => {
      let everyThingFound = true;
      selected.forEach((value) => {
        if (criteria.indexOf(value) === -1) {
          everyThingFound = false;
        }
      });
      return everyThingFound
    });
    updateMarkers(newMarkers);
  }, [selected, updateMarkers]);

  const onClickMenuItem = useCallback((id) => {
    let newSelected = new Set(selected);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelected(newSelected)
  }, [selected]);

  return {
    categories,
    selected,
    onClickMenuItem
  }
}

export default useMenuItems;