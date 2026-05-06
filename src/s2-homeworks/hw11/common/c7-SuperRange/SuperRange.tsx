import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 200,
                '& .MuiSlider-track': {
                    border: 'none',
                    background: 'linear-gradient(90deg, red, orange, yellow, green, blue, purple)',
                },
                '& .MuiSlider-rail': {
                    opacity: 0.3,
                    background: '#ccc',
                },
                '& .MuiSlider-thumb': {
                    backgroundColor: 'white',
                    border: '2px solid #999',
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
