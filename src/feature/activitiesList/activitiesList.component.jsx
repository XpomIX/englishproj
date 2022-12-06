import './activitiesList.css';
import {Box, Button, Rating, Tooltip, Typography} from "@mui/material";
import {Fragment, useCallback, useContext, useMemo} from "react";
import {Markers} from "../../App";

const ActivitiesList = ({activeMarkers}) => {
  const {hoverMarkerId, updateHoverMarkerId, setMapCenter} = useContext(Markers);

  const tooltip = useCallback((title, description, position, rating) => {
      return (
          <Fragment>
            <img alt={''} src={'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png'} style={{width: '300px', height: '200px'}}/>
            <Box><Typography style={{fontSize: '24px'}}>{title}</Typography>
              <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly /></Box>
            <div style={{fontSize: '20px'}}>{description}</div>
            <Button variant={'contained'} onClick={() => setMapCenter(position)}>See on the map</Button>
          </Fragment>
      )
  }, [])

  const renderItems = useMemo(() => (activeMarkers.map(({title, description, address, id, position, rating}) => (
      <Tooltip title={tooltip(title, description, position, rating)} placement={'right'} key={`activitiesList_${id}`}>
          <div
              className={'activities-list-item'}
              onMouseEnter={() => updateHoverMarkerId(id)}
              onMouseLeave={() => updateHoverMarkerId('')}
          >
              <div className={'activities-list-item__title'}>{title}</div>
              <div>{address}</div>
              <br/>
          </div>
      </Tooltip>
  ))), [activeMarkers])

  const activitiesLength = useMemo(() => renderItems.length, [renderItems])
  const activitiesBody = useMemo(() => renderItems.length ? renderItems : 'Available places is not found', [renderItems])

  return (
    <div className={'activities-list'}>
      <Typography variant="h5" gutterBottom>
        Activities by criteria ({activitiesLength})
      </Typography>
      <div>
        {activitiesBody}
      </div>
    </div>
  )
}

export default ActivitiesList;