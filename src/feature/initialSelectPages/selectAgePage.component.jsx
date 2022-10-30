import './initialSelect.css';
import {useCallback, useEffect, useMemo, useState} from "react";
import {ageIconsOptions} from "./options";

const SelectAgePage = ({selectAge, gender}) => {
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
    setTimeout(() => {
      selectAge(gender)
    }, 300);
  }, [selectAge])

  const ageIcons = useMemo(() => (ageIconsOptions.map(({man, woman}) => gender === 'man' ? man : woman)), [gender])

  const buttonClass = useMemo(() => `button ${appear ? 'button--appeared' : ''}`, [appear])

  return (
    <div className={'page'}>
      <div
        style={{
          display: "flex",
          height: 'inherit',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 'inherit',
          padding: '0 30px 15px 30px',
          boxSizing: 'border-box',
          gap: '30px'
        }}
      >
        <div className={`${buttonClass} button--emoji`} style={appear ? {width: 'inherit', height: '100%'} : {}} onClick={buttonsActive ? () => onClickHandle('child') : () => {}}>{ageIcons[0]}</div>
        <div className={`${buttonClass} button--emoji`} style={appear ? {width: 'inherit', height: '100%'} : {}} onClick={buttonsActive ? () => onClickHandle('middle-age') : () => {}}>{ageIcons[1]}</div>
      </div>
      <div className={`page__text ${appear ? 'page__text--appeared' : ''}`} style={{writingMode: 'horizontal-tb'}}>Select your age</div>
      <div
        style={{
          display: "flex",
          height: 'inherit',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 'inherit',
          padding: '15px 30px 0 30px',
          boxSizing: 'border-box',
          gap: '30px'
        }}
      >
        <div className={`${buttonClass} button--emoji`} style={appear ? {width: 'inherit', height: '100%'} : {}} onClick={buttonsActive ? () => onClickHandle('old') : () => {}}>{ageIcons[2]}</div>
        <div className={`${buttonClass} button--emoji`} style={appear ? {width: 'inherit', height: '100%'} : {}} onClick={buttonsActive ? () => onClickHandle('') : () => {}}>doesn't matter</div>
      </div>
    </div>
  )
}
export default SelectAgePage;