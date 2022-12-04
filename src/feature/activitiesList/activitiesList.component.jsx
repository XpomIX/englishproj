import './activitiesList.css';
import {Box, Button, Rating, Tooltip, Typography} from "@mui/material";
import {Fragment, useContext, useMemo} from "react";
import {Markers} from "../../App";

const ActivitiesList = ({activeMarkers}) => {
  const {hoverMarkerId, updateHoverMarkerId, setMapCenter} = useContext(Markers);

  const tooltip = (title, description, images, position) => {
      return (
          <Fragment>
            <img alt={''} src={images[0]} style={{width: '300px', height: '200px'}}/>
            <Box><Typography style={{fontSize: '24px'}}>{title}</Typography>
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.1} readOnly /></Box>
            <div style={{fontSize: '20px'}}>{description}</div>
            <Button variant={'contained'} onClick={() => setMapCenter(position)}>See on the map</Button>
          </Fragment>
      )
  }

  const renderItems = useMemo(() => (activeMarkers.map(({title, description, address, images, id, position}) => (
      <Tooltip title={tooltip(title, description, images, position)} placement={'right'}>
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
      </Tooltip>
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