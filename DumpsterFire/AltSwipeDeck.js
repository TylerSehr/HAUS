import React from 'react'
import Cards, { Card } from 'react-swipe-card'


const data = ['Alexandre', 'Thomas', 'Lucien']

class SwipeDeck extends React.Component {
    constructor(props) {
        super(props)
    }

    action = (yeah) => {
        console.log('');

    }

    render() {
        return (
            <div>
                <Cards onEnd={this.action('end')}>
                    {data.map((item, index) =>
                        <Card
                            key={index}
                            onSwipeLeft={this.action('swipe left')}
                            onSwipeRight={this.action('swipe right')}>
                            <h2>{item}</h2>
                        </Card>
                    )}
                </Cards>
            </div>
        )
    }
}

export default SwipeDeck

