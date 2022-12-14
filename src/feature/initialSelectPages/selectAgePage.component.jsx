import './initialSelect.css';
import {useCallback, useEffect, useState} from "react";
import {options} from "./options";
import './card.css';
import Card from "./card.component";

const SelectAgePage = ({selectAge}) => {
  const [appear, setAppear] = useState(false);
  const [buttonsActive, setButtonsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 1);
  }, [])

  const onClickHandle = useCallback((age) => () => {
    if (buttonsActive) {
      setButtonsActive(false);
      setAppear(false);
      setTimeout(() => {
        selectAge(age)
      }, 300);
    }
  }, [selectAge, buttonsActive])

  return (
    <div className={'page'}>
      <div
        style={{
          display: "flex",
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          flex: '1 1',
          height: 'calc(50% - 122px)'
        }}
      >
        <Card
          onClick={onClickHandle(options.age.kids.title)}
          title={options.age.kids.title}
          imageUrl={options.age.kids.imgUrl}
          backgroundColor={options.age.kids.bgColor}
          appear={appear}
        />
        <Card
          onClick={onClickHandle(options.age.elderly.title)}
          title={options.age.elderly.title}
          imageUrl={options.age.elderly.imgUrl}
          backgroundColor={options.age.elderly.bgColor}
          appear={appear}
        />
      </div>
      <div style={{background: 'orange'}} className={`card-title ${appear ? 'card-title--appeared' : ''}`}>
        {options.age.title}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          flex: '1 1',
          height: 'calc(50% - 122px)'
        }}
      >
        <Card
          onClick={onClickHandle(options.age.students.title)}
          title={options.age.students.title}
          imageUrl={options.age.students.imgUrl}
          backgroundColor={options.age.students.bgColor}
          appear={appear}
        />
        <Card
          onClick={onClickHandle(options.age.middleAge.title)}
          title={options.age.middleAge.title}
          imageUrl={options.age.middleAge.imgUrl}
          backgroundColor={options.age.middleAge.bgColor}
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
export default SelectAgePage;