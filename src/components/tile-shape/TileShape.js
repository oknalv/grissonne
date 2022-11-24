import { Component } from 'react';
import './TileShape.scss';

class TileShape extends Component {

    render() {
        return (
            <svg
                className='tile-shape'
                viewBox='0 0 900 900'
                height='900'
                width='900'
            >
                <path
                    d='M 0,0 L 0,900 L 900,900 L 900,0 z'
                    style={{ "--fill-color": 'white'}}
                    className='background'
                />
                <path
                    d='M 0,0 L 0,900 L 900,900 L 900,0 z'
                    style={{ "--fill-color": 'var(--tile-shape-background-color)'}}
                />
                <path
                    d='M 0,0 L 0,900 L 900,900 L 900,0 z M 60,60 L 60,840 L 840,840 L 840,60 z'
                    style={{ "--fill-color": 'var(--tile-shape-frame-color)' }}
                />
                <path
                    d='M 80,80 L 80,820 L 820,820 L 820,80 z M 100,100 L 100,800 L 800,800 L 800,100 z'
                    style={{ "--fill-color": 'var(--tile-shape-frame-color)' }}
                />
                { this.props.children }
            </svg>
        )
    }
}

export default TileShape;