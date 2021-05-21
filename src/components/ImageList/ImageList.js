import logger from 'redux-logger';
import { Image } from 'semantic-ui-react';
import './ImageList.css';

const ImageList = ({items}) => {

  const currentList = items && items.map(item => {
    return (
      <Image src={item.url} />
    )
  });

  return (
    <div className={'image-list-container'}>
      {currentList}
    </div>
  ) 
}

export default ImageList;

