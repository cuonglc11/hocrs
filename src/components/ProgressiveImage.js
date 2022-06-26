import React from 'react'
import { View, Animated, ActivityIndicator } from 'react-native'
import ProTypes from 'prop-types'
const defaultImage = require('../resoucrce/images/no-image.png')
const ProgressiveImage = ({ thumbnailSource,
    source,
    containerStyle,
    thumbnailStyle,
    style,
    sizeLoading = 'small',
    color = 'black'
}) => {
   const thumbnailAnimated  = new Animated.Value(1)
   const imageAnimated  = new  Animated.Value(0)
//    const handleTh
}