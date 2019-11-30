import React from 'react';
import { Image } from 'office-ui-fabric-react/lib/Image';
import './image.css';
import {
  CommandBar,
  ICommandBarItemProps
} from 'office-ui-fabric-react/lib/CommandBar';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { initializeIcons } from '@uifabric/icons';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
initializeIcons();


export interface myState {
    hideDialog: boolean;
  }
export class ImageExample extends React.Component<any, myState> {
    public state: myState = {
        hideDialog: true,
      };
  public render() {
    const { hideDialog } = this.state;
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
        onClick: this._showDialog
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
        <Dialog
        hidden={hideDialog}
        onDismiss={this._closeDialog}
        dialogContentProps={{
            type: DialogType.normal,
            title: 'Create image',
            subText: 'Do you want to send this message without a subject?'
          }}
        modalProps={{
            titleAriaId: 'Create image',
            subtitleAriaId: '',
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
          }}
        >
         <DialogFooter>
            <PrimaryButton onClick={this._closeDialog} text="Add" />
            <DefaultButton onClick={this._closeDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }


  public arrowLeft = () => {
        alert('left');
  }
  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  };

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  };

}

export default ImageExample;
