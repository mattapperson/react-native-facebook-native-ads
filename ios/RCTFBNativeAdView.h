//
//  FBAdChoicesView.h
//  RNFacebookNativeAds
//
//  Created by Matt Apperson on 9/20/16.
//  Copyright © 2016 Facebook. All rights reserved.
//
#import <UIKit/UIKit.h>
#import <FBAudienceNetwork/FBAudienceNetwork.h>
#import "RCTConvert.h"
#import "UIView+React.h"

@interface RCTFBNativeAdView : UIView  <FBNativeAdDelegate>
@property (nonatomic, copy) RCTDirectEventBlock onFail;
@property (nonatomic, copy) RCTDirectEventBlock onDidClick;
@property (nonatomic, copy) RCTDirectEventBlock onLoad;
@property (nonatomic, copy) RCTDirectEventBlock onView;

@end
