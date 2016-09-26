import {
    Component,
    PropTypes
} from 'react';
import React from 'react';
import { NativeModules, requireNativeComponent, View, Text, processColor } from 'react-native';

const { RNFacebookNativeAds } = NativeModules;

class NativeAdView extends Component {
    _onFail = (event) => {
        if(!this.props.onFail) return;

        this.props.onFail(event.nativeEvent)
    }
    _onView = (event) => {
        if(!this.props.onView) return;

        this.props.onView(event.nativeEvent)
    }
    _onDidClick = (event) => {
        if(!this.props.onDidClick) return;

        this.props.onDidClick(event.nativeEvent)
    }
    _onLoad = (event) => {
        if(!this.props.onLoad) return;

        this.props.onLoad(event.nativeEvent)
    }
    render() {
        var nativeAdViewStyle = this.props.nativeAdViewStyle || {};
        return (
        <View>
            <FBNativeAdView
                onFail={this._onFail}
                onView={this._onView}
                onDidClick={this._onDidClick}
                onLoad={this._onLoad}
                style={{
                    width: this.state.width,
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
                placementID={this.props.placementID}
            />
        </View>

        )
    }
}

NativeAdView.propTypes = {
    ...View.propTypes,
    placementID: PropTypes.string.isRequired,
    style: PropTypes.object,
    onFail: PropTypes.func,
    onView: PropTypes.func,
    onDidClick: PropTypes.func,
    onLoad: PropTypes.func,
    nativeAdViewStyle: PropTypes.object
};

var FBNativeAdView = requireNativeComponent('FBNativeAdView', NativeAdView);


exports.NativeAdView = NativeAdView;
