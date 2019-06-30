import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardStack } from 'og-react-swipe';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    user: state.user,
});

class SwipeDeck extends Component {
    constructor(props) {
        super(props);

        this.leftDrag = this.leftDrag.bind(this);
        this.rightDrag = this.rightDrag.bind(this);
        this.onRunOut = this.onRunOut.bind(this);

        // utility functions
        this.round = Math.round;
        this.random = Math.random;
        this.abs = Math.abs;
    }

    render() {
        let cards = [];

        for (let i = 0; i < 10; i++) {
            let color = 'rgb(' +
                this.round(this.random() * 255) + ',' +
                this.round(this.random() * 255) + ',' +
                this.round(this.random() * 255) + ')';

            let animate = new Map([
                [
                    'opacity',
                    (x, y) => {
                        x = this.abs(x);

                        if (x > 100) x = 100;

                        return (120 - x) / 120;
                    }
                ]
            ]);

            cards.push(
                <Card key={i} data={{ card_num: i }} undraggable={i == 9}
                    animate={animate} animateThrottle={20}>
                    <div style={{
                        backgroundColor: color,
                        width: '100%',
                        height: '200px',
                    }} />
                </Card>
            );
        }

        return (
            <div className="app" style={{ overflow: 'hidden' }}>
                <CardStack style={{ width: '200px', margin: '100px auto' }}
                    diff={100}
                    onRunOut={this.onRunOut}
                    onLeft={this.leftDrag}
                    onRight={this.rightDrag}
                    onClick={this.click}
                    clickBount={3}
                    limit={120}
                    bottomLimit={40}>
                    {cards}
                </CardStack>
            </div>
        );
    }

    leftDrag(data, amount) {
        console.log('Dragged left: ', amount);
        console.log(data);
    }

    rightDrag(data, amount) {
        console.log('Dragged right: ', amount);
        console.log(data);
    }

    click(data, amount) {
        console.log('Click!');
        console.log(data);
    }

    onRunOut() {
        console.log('No more cards left!');
    }
}

export default connect(mapStateToProps)(SwipeDeck)