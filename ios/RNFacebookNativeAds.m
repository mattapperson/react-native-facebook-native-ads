
#import "RNFacebookNativeAds.h"
#import "RCTBridgeModule.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation RNFacebookNativeAds

FBMediaView *adCoverMediaView;
UIView *adView;
FBNativeAd *nativeAd;
FBAdChoicesView *adChoicesView;

@synthesize bridge = _bridge;

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(showNativeAd:(NSString *)placementID)
{
    nativeAd = [[FBNativeAd alloc] initWithPlacementID:placementID];
    nativeAd.delegate = self;
    [nativeAd loadAd];
}


- (void)nativeAdDidLoad:(FBNativeAd *)nativeAd
{
    [nativeAd.icon loadImageAsyncWithBlock:^(UIImage *icon) {

        [self.bridge.eventDispatcher sendAppEventWithName:@"nativeAdDidLoad"
         body:@{
                @"title": nativeAd.title,
                @"subtitle": nativeAd.subtitle,
                @"socialContext": nativeAd.socialContext,
                @"callToAction": nativeAd.callToAction,
                @"body": nativeAd.body,
                @"placementID": nativeAd.placementID,
                @"icon": @{
                        @"url": nativeAd.icon.url.absoluteString,
                        @"width": @(nativeAd.icon.width),
                        @"height": @(nativeAd.icon.height),
                        },
                @"coverImage": @{
                        @"url": nativeAd.coverImage.url.absoluteString,
                        @"width": @(nativeAd.icon.width),
                        @"height": @(nativeAd.icon.height),
                        },
          }];

    
    }];
//    
//    [self.adCoverMediaView setNativeAd:nativeAd];
//    
//    // Add adChoicesView
//    adChoicesView = [[FBAdChoicesView alloc] initWithNativeAd:nativeAd];
//    [self.adView addSubview:adChoicesView];
//    [adChoicesView updateFrameFromSuperview];
//    
//    // Register the native ad view and its view controller with the native ad instance
//    [nativeAd registerViewForInteraction:self.adView withViewController:self];
}

- (void)nativeAd:(FBNativeAd *)nativeAd didFailWithError:(NSError *)error
{
    NSLog(@"Ad failed to load with error: %@", error);
}
@end
  
