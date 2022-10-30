import './initialSelect.css';
import {useCallback, useEffect, useMemo, useState} from "react";
import {genderOptions} from "./options";

const SelectGenderPage = ({selectGender}) => {
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
      selectGender(gender)
    }, 300);
  }, [selectGender])

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
          padding: '0 30px 30px 30px',
          boxSizing: 'border-box'
      }}>
        <div
          className={`${buttonClass} button--emoji`}
          style={appear ? {width: 'inherit', height: 'calc(100vh - 30px - 30px - 100px)'} : {}}
          onClick={buttonsActive ? () => onClickHandle('man') : () => {}}
        >
          {genderOptions.man}
        </div>
        <div className={`page__text ${appear ? 'page__text--appeared' : ''}`}>Select your gender</div>
        <div
          className={`${buttonClass} button--emoji`}
          style={appear ? {width: 'inherit', height: 'calc(100vh - 30px - 30px - 100px)'} : {}}
          onClick={buttonsActive ? () => onClickHandle('woman') : () => {}}
        >
          {genderOptions.woman}
        </div>
      </div>
      <div className={buttonClass} style={appear ? {width: '100%', height: '100px'} : {}} onClick={buttonsActive ? () => onClickHandle('') : () => {}}>doesn't matter</div>
    </div>
  )
}
export default SelectGenderPage;