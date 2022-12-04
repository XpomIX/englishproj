import './card.css';

const Card = ({title, imageUrl, onClick, backgroundColor, appear}) => {
  return (
    <div className={`card ${appear ? 'card--appeared' : ''}`} style={!imageUrl ? {justifyContent: 'center'} : {}}>
      <div
        style={{background: backgroundColor, cursor: 'pointer'}}
        className={`card-title ${appear ? 'card-title--appearedButton' : ''}`}
        onClick={onClick}
      >
        {title}
      </div>
      {imageUrl ? <div style={{
        width: '100%',
        height: 'calc(100% - 117px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className={'card-content'}>
          <img alt={''} src={imageUrl} className={'card-content__img'}/>
        </div>
      </div> : ''}
    </div>
  )
}
export default Card;