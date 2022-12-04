import './initialSelect.css';
import {useCallback, useEffect, useState} from "react";
import {options} from "./options";
import Card from "./card.component";

const SelectActivityPage = ({selectActivity, setIsChoiceOpen}) => {
  const [appear, setAppear] = useState(false);
  const [buttonsActive, setButtonsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 1);
  }, []);

  const onClickHandle = useCallback((activity) => () => {
    setButtonsActive(false);
    setAppear(false);
    selectActivity(activity)
    setTimeout(() => {
      setIsChoiceOpen(false)
    }, 300);
  }, [selectActivity, setIsChoiceOpen])

  return (
    <div className={'page'} style={appear ? {opacity: 1, transition: '0s'} : {opacity: 0}}>
      <div style={{background: 'orange'}} className={`card-title ${appear ? 'card-title--appeared' : ''}`}>
        {options.activity.title}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          flex: '1 1',
          height: 'calc(80% - 122px)'
        }}
      >
        <Card
          onClick={onClickHandle(options.activity.food.title)}
          title={options.activity.food.title}
          imageUrl={options.activity.food.imgUrl}
          backgroundColor={options.activity.food.bgColor}
          appear={appear}
        />
        <Card
          onClick={onClickHandle(options.activity.entertainment.title)}
          title={options.activity.entertainment.title}
          imageUrl={options.activity.entertainment.imgUrl}
          backgroundColor={options.activity.entertainment.bgColor}
          appear={appear}
        />
      </div>
      <Card
        onClick={onClickHandle('')}
        title={"doesn't matter"}
        backgroundColor={'black'}
        appear={appear}
      />
    </div>
  )
}
export default SelectActivityPage;