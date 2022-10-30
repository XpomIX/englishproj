import './activitiesList.css';
import {Typography} from "@mui/material";
import {useContext, useMemo} from "react";
import {Markers} from "../../App";

const ActivitiesList = ({activeMarkers}) => {
  const {hoverMarkerId, updateHoverMarkerId} = useContext(Markers);

  const renderItems = useMemo(() => (activeMarkers.map(({title, description, address, images, id}) => (
      <div
        className={'activities-list-item'}
        onMouseEnter={() => updateHoverMarkerId(id)}
        onMouseLeave={() => updateHoverMarkerId('')}
        style={{
          background: hoverMarkerId === id ? '#966BD6' : 'rgba(150,107,214,0.49)',
          color: hoverMarkerId === id ? 'white' : 'black'
        }}
        key={`activitiesList_${id}`}
      >
        <div className={'activities-list-item__title'}>{title}</div>
        <div>{address}</div>
        <br/>
      </div>
  ))), [activeMarkers, hoverMarkerId, updateHoverMarkerId])

  return (
    <div className={'activities-list'}>
      <Typography variant="h5" gutterBottom>
        Activities by criteria ({renderItems.length})
      </Typography>
      {renderItems.length ? renderItems : 'Available places is not found'}
    </div>
  )
}

export default ActivitiesList;