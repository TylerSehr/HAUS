import React from 'react'
import Cards, { Card } from 'react-swipe-card'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
});


class SwipeDeck extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            data: ['Alexandre', 'Thomas', 'Lucien']
        }
    }

    action = (direction) => {
        console.log(direction);

    }

    showInfo = (item) => {
        console.log(item);
        
    }

    render() {
        return (
            <Cards onEnd={() => this.action('end')} className='master-root' >
                {this.state.data.map(item =>
                    <Card
                        onSwipeLeft={() => this.action('swipe left')}
                        onSwipeRight={() => this.action('swipe right')}
                        onSwipeBottom={() => this.action('swipe down')}
                        onSwipeTop={() => this.action('swipe up')}>
                        <div className="clickcard" onClick={() => this.showInfo(item)}>
                            <h2>{item}</h2>
                        </div>
                    </Card>
                )}
            </Cards>
        )
    }
}

export default connect(mapStateToProps)(SwipeDeck)