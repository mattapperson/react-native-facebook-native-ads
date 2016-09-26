#import "FBNativeAdViewManager.h"
#import "RCTFBNativeAdView.h"

@implementation FBNativeAdViewManager {
    NSString* _placementID;
    NSDictionary* _attributes;
}


RCT_EXPORT_MODULE()


-(UIView*)view
{
    return [[RCTFBNativeAdView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(placementID, NSString)
RCT_EXPORT_VIEW_PROPERTY(onFail, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDidClick, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onLoad, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onView, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(nativeAdViewStyle, NSDictionary)



@end
