import './initialSelect.css';
import {useCallback, useEffect, useMemo, useState} from "react";
import {activityOptions} from "./options";

const SelectActivityPage = ({selectActivity, setIsChoiceOpen}) => {
  const [appear, setAppear] = useState(false);
  const [buttonsActive, setButtonsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 1);
  }, [])

  const onClickHandle = useCallback((gender) => {
    setButtonsActive(false);
    setAppear(false);
    selectActivity(gender)
    setTimeout(() => {
      setIsChoiceOpen(false)
    }, 300);
  }, [selectActivity, setIsChoiceOpen])

  const buttonClass = useMemo(() => `button ${appear ? 'button--appeared' : ''}`, [appear])

  return (
    <div className={'page'} style={appear ? {opacity: 1, transition: '0s'} : {opacity: 0}}>
      <div
        style={{
          display: "flex",
          height: 'inherit',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 'inherit',
          padding: '0 30px 30px 30px',
          boxSizing: 'border-box'
        }}>
        <div
          className={`${buttonClass} button--emoji`}
          style={appear ? {width: 'inherit', height: 'calc(100vh - 30px - 30px - 100px)'} : {}}
          onClick={buttonsActive ? () => onClickHandle('food') : () => {}}
        >
          {activityOptions.food}
        </div>
        <div
          className={`page__text ${appear ? 'page__text--appeared' : ''}`}
          style={appear ? {fontSize: '30px'} : {}}
        >
          Choose your preferred activity
        </div>
        <div
          className={`${buttonClass} button--emoji`}
          style={appear ? {width: 'inherit', height: 'calc(100vh - 30px - 30px - 100px)'} : {}}
          onClick={buttonsActive ? () => onClickHandle('entertainment') : () => {}}
        >
          {activityOptions.entertainment}
        </div>
      </div>
      <div className={buttonClass} style={appear ? {width: '100%', height: '100px'} : {}} onClick={buttonsActive ? () => onClickHandle('') : () => {}}>doesn't matter</div>
    </div>
  )
}
export default SelectActivityPage;