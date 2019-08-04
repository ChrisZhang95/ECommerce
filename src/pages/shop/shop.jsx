import React from 'react';
import shopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: shopData,
        }
    }

    render() {
        const collections = this.state.collections;
        return (
          <div>SHOP PAGE
            {
              collections.map(({ id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
              ))
            }
          </div>
          
        );
    }
}

export default ShopPage;