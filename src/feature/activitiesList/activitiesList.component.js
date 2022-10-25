import './activitiesList.css';
import {Typography} from "@mui/material";
import {useContext, useMemo} from "react";
import {Markers} from "../../App";

const ActivitiesList = () => {
  const {activeMarkers} = useContext(Markers);

  const renderItems = useMemo(() => (
    <>
      {activeMarkers.map(({title, description, address, images}) => (
        <div>
          <div>{title}</div>
          <div>{address}</div>
          <br/>
        </div>
      ))}
    </>
  ), [activeMarkers])

  return (
    <div className={'activities-list'}>
      <Typography variant="h5" gutterBottom>
        Activities by criteria
      </Typography>
      {renderItems}
    </div>
  )
}

export default ActivitiesList;