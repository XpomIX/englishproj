import {useCallback, useContext, useEffect, useState} from "react";
import {Markers} from "../../App";

const categories = [
  {title: 'To eat', position: [57.15943164550077, 65.52244595081531]},
  {title: 'To money', position: [57.158764697238176, 65.5251221617048]},
  {title: 'To russian', position: [57.15833170843232, 65.52698875221336]}
]
const useMenuItems = () => {
  const [selected, setSelected] = useState(new Set());
  const {updateMarkers} = useContext(Markers);

  useEffect(() => {
    updateMarkers(categories.filter((item) => selected.has(item.title)));
  }, [selected, updateMarkers]);

  const onClickMenuItem = useCallback((id) => {
    let newSelected = new Set(selected);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelected(newSelected)
  }, [selected])

  return {
    categories,
    selected,
    onClickMenuItem
  }
}

export default useMenuItems;