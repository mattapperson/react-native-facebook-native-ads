# react-native-facebook-native-ads

## Getting started
First off, this is iOS only for now. PRs are welcome to add Android support

`$ npm install react-native-facebook-native-ads --save`

Then download the Facebook SDK and place the `FBAudienceNetwork.framework` file in your projects `/ios` directory.
Add then add the framework to your apps frameworks in xcode.
You could alternatively install the FB SDK using cocoapods...

### Mostly automatic installation

`$ react-native link react-native-facebook-native-ads`

### Manual installation

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-facebook-native-ads` and add `RNFacebookNativeAds.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNFacebookNativeAds.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<


## Usage
```javascript
import RNFacebookNativeAds from 'react-native-facebook-native-ads';

class ExampleNativeAd extends Component {
  render() {
    return (
      <View>
        <NativeAdView
            placementID="YOUR_PLACEMENT_ID_HERE"
            style={{
                backgroundColor: 'blue',
                width: 300,
                height: 300
            }}
            nativeAdViewStyle={{
                buttonTitleColor: 'white'
            }}
        />
      </View>
    );
  }
}
```
