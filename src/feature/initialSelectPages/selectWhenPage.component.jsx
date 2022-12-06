import './initialSelect.css';
import {useCallback, useEffect, useState} from "react";
import {options} from "./options";
import Card from "./card.component";

const SelectWhenPage = ({selectWhen}) => {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 1);
  }, []);

  const onClickHandle = useCallback((when) => () => {
    setAppear(false);
    setTimeout(() => {
      selectWhen(when)
    }, 300);
  }, [selectWhen]);

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
          onClick={onClickHandle(options.when.morning.title)}
          title={options.when.morning.title}
          imageUrl={options.when.morning.imgUrl}
          backgroundColor={options.when.morning.bgColor}
          appear={appear}
        />
        <Card
          onClick={onClickHandle(options.when.evening.title)}
          title={options.when.evening.title}
          imageUrl={options.when.evening.imgUrl}
          backgroundColor={options.when.evening.bgColor}
          appear={appear}
        />
      </div>
      <div style={{background: 'orange'}} className={`card-title ${appear ? 'card-title--appeared' : ''}`}>
        {options.when.title}
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
          onClick={onClickHandle(options.when.afternoon.title)}
          title={options.when.afternoon.title}
          imageUrl={options.when.afternoon.imgUrl}
          backgroundColor={options.when.afternoon.bgColor}
          appear={appear}
        />
        <Card
          onClick={onClickHandle('')}
          title={"doesn't matter"}
          backgroundColor={'black'}
          appear={appear}
        />
      </div>
    </div>
  )
}
export default SelectWhenPage;