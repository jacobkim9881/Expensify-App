import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import DesktopBackgroundImage from '@assets/images/home-background--desktop.svg';
import MobileBackgroundImage1 from '@assets/images/home-background--mobile.png';
import MobileBackgroundImage from '@assets/images/home-background--mobile.svg';
import useThemeStyles from '@hooks/useThemeStyles';
import type BackgroundImageProps from './types';
import {View, Image, StyleSheet} from 'react-native';


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
	const test1 = React.useEffect(() => {
		console.log('hihi');
		console.log(MobileBackgroundImage)
		console.log('Image: ', Image)
		console.log('image2: ', test3)
		setTimeout(() => {
			setShowSvg(true);
		}, 1000)
	}, []);
	const test2 = React.useCallback(() => {
		console.log('afd');
	}, []);
	const test3 =  (
	    <Image
		    //source={require('./home-background--mobile.png')}
		 source={MobileBackgroundImage1}
		 style={{
			 //	 styles.stretch
			 width: width,
				 minHeight: 700,
			 display: !showSvg ?'block' : 'none'
		 }}
                />

	);
	const test4 = (
         <MobileBackgroundImage
                    width={width}
                    style={styles.signInBackground}
		    display={showSvg ?'block' : 'none'}
                />

	);
	
    return (
        <Animatable.View
            style={styles.signInBackground}
            animation={fadeIn}
            duration={transitionDuration}
    >
	    {test3}
	{test4}
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
