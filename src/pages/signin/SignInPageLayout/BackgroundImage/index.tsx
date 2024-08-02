import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import DesktopBackgroundImage from '@assets/images/home-background--desktop.svg';
import MobileBackgroundImage1 from '@assets/images/home-background--mobile.png';
import MobileBackgroundImage from '@assets/images/home-background--mobile.svg';
import useThemeStyles from '@hooks/useThemeStyles';
import type BackgroundImageProps from './types';
import {View, Image, StyleSheet} from 'react-native';
import { lazy } from 'react';


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 350,
    height: 700,
  },
});

function BackgroundImage({width, transitionDuration, isSmallScreen = false}: BackgroundImageProps) {
    const styles = useThemeStyles();
    const fadeIn = {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    };
	const [showSvg, setShowSvg] = useState(false);	
	const [pngDimention, setDimension] = useState({});
const getHeight = width 
const [svgHeight, setHeight] = useState(0);
 const ref = React.useRef()
	const getDimention = (img) => {
		setDimension( (obj => ({dimensions:{height:img.offsetHeight,
                                   width:img.offsetWidth}})));
		console.log('img: ', img)
    };
	const test1 = React.useEffect(() => {
		console.log('hihi');
		//console.log(MobileBackgroundImage)
		//console.log('Image: ', Image)
		console.log('image2: ', test3)
		console.log('width: ', width);
		//const {pngHeight, pngWidth} = pngDimention;
		//const getBackgroundHeight = pngHeight / (width * pngWidth);
		const getBackgroundHeight = (width * 540) / 800;
		setHeight(getBackgroundHeight);
		//console.log('{pngHeight, pngWidth}: ', {pngHeight, pngWidth});	
		console.log('ref: ', ref)
		setTimeout(() => {

		console.log('height: ', ref.current)
			setShowSvg(true);
		}, 1000)
	}, []);
	const test2 = React.useCallback(() => {
		console.log('afd');
	}, []);
	const test3 =  (
		<Image
			ref={ref}
			onLoad={getDimention}
		    //source={require('./home-background--mobile.png')}
		 source={MobileBackgroundImage1}
		 style={{
			 //	 styles.stretch
			 position: 'absolute',
			 width: width,
				 minHeight:((width * 540) / 800) > 700 ? 700 : 0,
				 height: ((width * 540) / 800),
				 //height: svgHeight,
				 bottom: ((width * 540) / 800) > 700 ? 0 : 80,
				 top: ((width * 540) / 800) > 700 ? 0 : 80,
				 left: 0,
			 display: !showSvg ?'block' : 'none'
		 }}
                />

	);
	const test4 = lazy((
		<MobileBackgroundImage
                    width={width}
		    style={
			   styles.signInBackground	    }
		    display={showSvg ?'block' : 'none'}
                />

	));
	
    return (
        <Animatable.View
            style={styles.signInBackground}
            animation={fadeIn}
            duration={transitionDuration}
    >
	    {test3}
	{
	}
	

{/*
            {isSmallScreen ? (
                <MobileBackgroundImage
                    width={width}
                    style={styles.signInBackground}
                />
            ) : (
                <DesktopBackgroundImage
                    width={width}
                    style={styles.signInBackground}
                />
            )}

  */}     
        </Animatable.View>
    );
}

BackgroundImage.displayName = 'BackgroundImage1';

export default BackgroundImage;
