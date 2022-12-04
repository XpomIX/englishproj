import {useCallback, useEffect, useState} from "react";
import Card from "./card.component";
import {options} from "./options";

const SelectWherePage = ({selectWhere}) => {
  const [appear, setAppear] = useState(false);
  const [buttonsActive, setButtonsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 1);
  }, [])

  const onClickHandle = useCallback((where) => () => {
    if (buttonsActive) {
      setButtonsActive(false);
      setAppear(false);
      setTimeout(() => {
        selectWhere(where)
      }, 300);
    }
  }, [selectWhere, buttonsActive])

  return (
    <div className={'page'}>
      <div style={{background: 'orange'}} className={`card-title ${appear ? 'card-title--appeared' : ''}`}>
        {options.where.title}
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
          onClick={onClickHandle(options.where.outside.title)}
          title={options.where.outside.title}
          imageUrl={options.where.outside.imgUrl}
          backgroundColor={options.where.outside.bgColor}
          appear={appear}
        />
        <Card
          onClick={onClickHandle(options.where.inside.title)}
          title={options.where.inside.title}
          imageUrl={options.where.inside.imgUrl}
          backgroundColor={options.where.inside.bgColor}
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
export default SelectWherePage;