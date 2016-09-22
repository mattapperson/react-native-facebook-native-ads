import {
    Component,
    PropTypes
} from 'react';
import React from 'react';
import { NativeModules, requireNativeComponent, View, Text, processColor } from 'react-native';

const { RNFacebookNativeAds } = NativeModules;

class NativeAdView extends Component {
    render() {
        var nativeAdViewStyle = this.props.nativeAdViewStyle || {};
        return (
        <View>
            <FBNativeAdView
                style={{
                    width: 300,
                    height: 300,
                    ...this.props.style
                }}
                nativeAdViewStyle={{
                    ...nativeAdViewStyle,
                    autoplayEnabled: nativeAdViewStyle.autoplayEnabled || false,
                    backgroundColor: processColor(nativeAdViewStyle.buttonTitleColor || 'white'),
                    buttonTitleColor: processColor(nativeAdViewStyle.buttonTitleColor || 'white'),
                    titleColor: processColor(nativeAdViewStyle.titleColor || 'white'),
                    descriptionColor: processColor(nativeAdViewStyle.descriptionColor || 'white'),
                    buttonColor: processColor(nativeAdViewStyle.buttonColor || 'grey'),
                    buttonTitleColor: processColor(nativeAdViewStyle.buttonTitleColor || 'black'),
                    buttonBorderColor: processColor(nativeAdViewStyle.buttonBorderColor || 'transparent')
                }}
                placementID={this.props.placementID} />
        </View>

        )
    }
}

NativeAdView.propTypes = {
    placementID: PropTypes.string.isRequired,
    style: PropTypes.object,
    nativeAdViewStyle: PropTypes.object
};

var FBNativeAdView = requireNativeComponent('FBNativeAdView', NativeAdView);


exports.NativeAdView = NativeAdView;
