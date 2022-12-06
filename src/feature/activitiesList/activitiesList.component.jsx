import './activitiesList.css';
import {Box, Button, Rating, Tooltip, Typography} from "@mui/material";
import {Fragment, useCallback, useContext, useMemo} from "react";
import {Markers} from "../../App";

import img1 from '../../restrantsSituation/whatsapp-image-2021-10-11-at-15.03.13-2.jpeg';
import img2 from '../../restrantsSituation/whatsapp-image-2021-10-11-at-15.08.50-1 (1).jpeg';
import img3 from '../../restrantsSituation/whatsapp-image-2021-10-11-at-15.08.50-2.jpeg';
import img4 from '../../restrantsSituation/whatsapp-image-2021-10-11-at-15.08.50-1.jpeg';

const images = [img1, img2, img3, img4]

const ActivitiesList = ({activeMarkers}) => {
  const {hoverMarkerId, updateHoverMarkerId, setMapCenter} = useContext(Markers);

  const tooltip = useCallback((title, description, position, rating, index, image) => {
      return (
          <Fragment>
            <img alt={''} src={image ? image : images[index % 4]} style={{width: '300px', height: '200px'}}/>
            <Box><Typography style={{fontSize: '24px'}}>{title}</Typography>
              <Box
                sx={{
                  width: 200,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Rating
                  name="half-rating-read"
                  defaultValue={rating}
                  precision={0.1}
                  readOnly
                />
                <Box sx={{ ml: 2, fontSize: '16px' }}>{rating}</Box>
              </Box>
            </Box>
            <div style={{fontSize: '20px'}}>{description}</div>
            <Button variant={'contained'} onClick={() => setMapCenter(position)}>See on the map</Button>
          </Fragment>
      )
  }, [])

  const renderItems = useMemo(() => (activeMarkers.map(({title, description, address, id, position, rating, image}, index) => (
      <Tooltip title={tooltip(title, description, position, rating, index, image)} placement={'right'} key={`activitiesList_${id}`}>
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
      <div style={{height: '-webkit-fill-available', overflowY: 'auto', padding: '15px'}}>
        {activitiesBody}
      </div>
    </div>
  )
}

export default ActivitiesList;