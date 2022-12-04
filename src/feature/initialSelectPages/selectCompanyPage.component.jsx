import {useCallback, useEffect, useState} from "react";
import Card from "./card.component";
import {options} from "./options";

const SelectCompanyPage = ({selectCompany}) => {
  const [appear, setAppear] = useState(false);
  const [buttonsActive, setButtonsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 1);
  }, [])

  const onClickHandle = useCallback((company) => () => {
    if (buttonsActive) {
      setButtonsActive(false);
      setAppear(false);
      setTimeout(() => {
        selectCompany(company)
      }, 300);
    }
  }, [selectCompany, buttonsActive])

  return (
    <div className={'page'} style={{flexDirection: 'row'}}>
      <div style={{height: '100%'}}>
        <div
          style={{
            display: "flex",
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            flex: '1 1',
            height: 'calc(50% - 80px)'
          }}
        >
          <Card
            onClick={onClickHandle(options.company.friends.title)}
            title={options.company.friends.title}
            imageUrl={options.company.friends.imgUrl}
            backgroundColor={options.company.friends.bgColor}
            appear={appear}
          />
        </div>
        <div style={{background: 'orange'}} className={`card-title ${appear ? 'card-title--appeared' : ''}`}>
          {options.company.title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            flex: '1 1',
            height: 'calc(50% - 80px)'
          }}
        >
          <Card
            onClick={onClickHandle(options.company.colleagues.title)}
            title={options.company.colleagues.title}
            imageUrl={options.company.colleagues.imgUrl}
            backgroundColor={options.company.colleagues.bgColor}
            appear={appear}
          />
        </div>
      </div>
      <div style={{height: '100%'}}>
        <div
          style={{
            display: "flex",
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            flex: '1 1',
            height: 'calc(80% - 80px)'
          }}
        >
          <Card
            onClick={onClickHandle(options.company.couples.title)}
            title={options.company.couples.title}
            imageUrl={options.company.couples.imgUrl}
            backgroundColor={options.company.couples.bgColor}
            appear={appear}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            flex: '1 1',
            height: 'calc(26% - 80px)',
          }}
        >
          <div style={{width: '100px'}}>
            <Card
              onClick={onClickHandle('')}
              title={"does not matter"}
              backgroundColor={'black'}
              appear={appear}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectCompanyPage;