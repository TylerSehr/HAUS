import React from 'react'
import Cards, { Card } from 'react-swipe-card'
import { connect } from 'react-redux';
import axios from 'axios'
import InfoSheet from './InfoSheet'
import { Listing, Parser } from '../../classes/Listing.class'

const mapStateToProps = state => ({
    user: state.user,
    settings: state.settings
});

class SwipeDeck extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ['https://photos.zillowstatic.com/fp/b15d727c1a1be33098b116bb44998398-cc_ft_1536.webp', 'https://photos.zillowstatic.com/cc_ft_1536/ISqlt6am48y65l1000000000.webp', 'https://photos.zillowstatic.com/cc_ft_1536/ISe0xtpecrnwog1000000000.webp', 'https://photos.zillowstatic.com/cc_ft_1536/ISqxq05su6cmeh1000000000.webp', 'https://photos.zillowstatic.com/cc_ft_1536/IS2zbvrh1rdjhw0000000000.webp'],
            contacted: [],
            saved: []
        }
    }

    componentDidMount() {
        // Parser.parseCraigsList(this.props.settings.region, this.props.settings.price);
    }

    action = (direction, item) => {
        if (direction === 'right') {
            this.setState({
                contacted: [
                    ...this.state.contacted,
                    item
                ]
            })
            // alert('email  sent!')
        }
        else if (direction === 'up') {
            this.setState({
                saved: [
                    ...this.state.saved,
                    item
                ]
            })
            // alert('contact info saved and email sent!')
        }
    }

    showInfo = (item) => {
        console.log(item);

    }

    render() {

        return (
            <div>
                <Cards onEnd={() => this.action('end')} className='master-root' >
                    {this.state.data.map((item, index) =>
                        <Card
                            key={index}
                            onSwipeLeft={() => this.action('left', item)}
                            onSwipeRight={() => this.action('right', item)}
                            onSwipeTop={() => this.action('up', item)}>
                            <div className="clickcard" onClick={() => this.showInfo(item)}>
                                <img src={item} className="cardpic" />
                            </div>
                        </Card>
                    )}
                </Cards>
                {/* <InfoSheet card={item} /> */}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SwipeDeck)