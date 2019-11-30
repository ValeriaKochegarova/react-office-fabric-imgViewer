import React from 'react';
import { Image } from 'office-ui-fabric-react/lib/Image';
import './image.css';
import {
  CommandBar,
  ICommandBarItemProps
} from 'office-ui-fabric-react/lib/CommandBar';
import { initializeIcons } from '@uifabric/icons';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
initializeIcons();
export class ImageExample extends React.Component<any, any> {
  public render() {
    const img = [
      { id: '1', src: 'https://picsum.photos/64/64/?image=0' },
      { id: '2', src: 'https://picsum.photos/64/64/?image=10' },
      { id: '3', src: 'https://picsum.photos/64/64/?image=20' }
    ];
    const _items: ICommandBarItemProps[] = [
      {
        key: 'newItem',
        text: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
        iconProps: { iconName: 'Add' },
        onClick: () => alert('Add')
      },
      {
        key: 'download',
        text: 'Download',
        iconProps: { iconName: 'Download' },
        onClick: () => console.log('Download')
      },
      {
        key: 'edit',
        text: 'Edit',
        iconProps: { iconName: 'EditPhoto' },
        onClick: () => alert('Edit')
      },
      {
        key: 'delete',
        text: 'Delete',
        iconProps: { iconName: 'Delete' },
        onClick: () => alert('Delete')
      },
      {
        key: 'refresh',
        iconProps: { iconName: 'Refresh' },
        className: 'refresh-button',
        onClick: () => alert('Refresh')
      }
    ];
    return (
      <div>
        <div className="command-bar">
          <CommandBar
            className="bar"
            items={_items}
            ariaLabel='Use left and right arrow keys to navigate between commands'
          />
        </div>
        <span className="line"></span>
        <div className='all'>
          <div className='main-img'>
          <Icon iconName="ChevronLeft" className="chevronLeft" onClick={this.arrowLeft}></Icon>
            <Image src='https://picsum.photos/200/300' alt='example' />
            <Icon iconName="ChevronRight" className="chevronRight"></Icon>
          </div>
          <div className='thumbnails'>
            {img.map(images => {
              return <Image src={images.src} key={images.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }


  public arrowLeft = () => {
        alert('left');
  }
}

export default ImageExample;
