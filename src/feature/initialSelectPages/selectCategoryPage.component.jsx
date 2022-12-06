import './initialSelect.css';
import {useCallback, useEffect, useState} from "react";
import {options} from "./options";
import './card.css';
import Card from "./card.component";

const SelectCategoryPage = ({selectCategory, setIsChoiceOpen}) => {
  const [appear, setAppear] = useState(false);
  const [buttonsActive, setButtonsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 1);
  }, [])

  const onClickHandle = useCallback((gender) => () => {
    if (buttonsActive) {
      setButtonsActive(false);
      setAppear(false);
      setTimeout(() => {
        selectCategory(gender)
        setIsChoiceOpen(false)
      }, 300);
    }
  }, [selectCategory, buttonsActive, setIsChoiceOpen])

  return (
    <div className={'page'} style={appear ? {opacity: 1, transition: '0s'} : {opacity: 0}}>
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
          onClick={onClickHandle(options.category.withChildren.title)}
          title={options.category.withChildren.title}
          imageUrl={options.category.withChildren.imgUrl}
          backgroundColor={options.category.withChildren.bgColor}
          appear={appear}
        />
        <Card
          onClick={onClickHandle(options.category.withPets.title)}
          title={options.category.withPets.title}
          imageUrl={options.category.withPets.imgUrl}
          backgroundColor={options.category.withPets.bgColor}
          appear={appear}
        />
      </div>
      <div style={{background: 'orange'}} className={`card-title ${appear ? 'card-title--appeared' : ''}`}>
        {options.category.title}
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
          onClick={onClickHandle(options.category.company.title)}
          title={options.category.company.title}
          imageUrl={options.category.company.imgUrl}
          backgroundColor={options.category.company.bgColor}
          appear={appear}
        />
        <Card
          onClick={onClickHandle(options.category.alone.title)}
          title={options.category.alone.title}
          imageUrl={options.category.alone.imgUrl}
          backgroundColor={options.category.alone.bgColor}
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
export default SelectCategoryPage;