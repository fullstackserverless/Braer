import { Dimensions } from 'react-native'

export const win = Dimensions.get('window')
export const W = win.width
export const H = win.height

export const AndroidDevice = {
  select(variants: any) {
    switch (Math.trunc(W)) {
      case 360: {
        if (Math.trunc(H) === 752) {
          // console.log('diagonal 6.5')
          return variants['diagonal6.5'] || {} // Samsung a51 /  1080x2400 / width -> 360; height -> 752
        }
        // console.log('diagonal 6.8')
        return variants['diagonal6.8'] || {} // ✅ Samsung Note 10+ / 1440x3040 / width -> 360
      }

      case 384: {
        // console.log('diagonal4.7')
        return variants['diagonal4.7'] || {} // ✅ LG Google Nexus 4 / 768x1280 / width -> 384
      }

      case 392: {
        if (Math.trunc(W) === 392 && Math.trunc(H) === 759) {
          // console.log('diagonal 5.6')
          return variants['diagonal5.6'] || {} // ✅ Pixel 3a 1080x2220
        }
        // console.log('diagonal 5.7')
        return variants['diagonal5.7'] || {} // ✅ Google Pixel4 / 1080x2280 / width -> 392.72727272727275;
      }

      case 411: {
        if (Math.trunc(H) === 771) {
          /*
           * ✅ Google Pixel 4 XL ( 1440x3040
           *  diagonal -> 6.3;
           *  window.width -> 411.42857142857144;
           *  window.height -> 771.7142857142857
           *  )
           *
           *  ✅ Google Nexus 6  ( 1440x2560
           *  diagonal -> 5.96;
           *  window.width -> 411.42857142857144;
           *  window.height ->
           *  )
           *
           * */
          // console.log('diagonal 6.3')
          return variants['diagonal6.3'] || {}
        }

        /** Phone list
         *
         * ✅ Google Pixel2 ( 1080x1920
         *  diagonal -> 5.0;
         *  window.width -> 411.42857142857144; )
         *
         * ✅ Nexus 5X ( 1080x19
         *  diagonal -> 5.2;
         *  window.width -> 411.42857142857144; )
         *
         * ✅ Google Pixel XL ( 1440x2560
         *  diagonal -> 5.5;
         *  window.width -> 411.42857142857144; )
         *  window.height -> 683.4285714285714
         * )
         *
         *
         **/
        // console.log('diagonal 5.0')
        return variants['diagonal5.0'] || {}
      }

      case 432: {
        /** Phone list
         * ✅ Pixel 3a XL ( 1080x2160
         *  diagonal -> 6.0;
         *  window.width -> 432; )
         **/
        // console.log('diagonal 6.0')
        return variants['diagonal6.0'] || {}
      }

      case 540: {
        /** Phone list
         * ✅ Xiaomi Redmi Note 9 ( 1080x2340
         *  diagonal -> 6.53;
         *  window.width -> 540; )
         **/
        // console.log('diagonal 6.53')
        return variants['diagonal6.53'] || {}
      }
    }
  }
}

export const IosDevice = {
  select(variants: any) {
    if (W >= 300 && W <= 314) {
      return variants.mobile314 || {}
    }
    if (W >= 315 && W <= 341) {
      return variants.mobile341 || {}
    }
    if (W >= 342 && W <= 359) {
      return variants.mobile359 || {}
    }
    if (W >= 360 && W <= 374) {
      return variants.mobile374 || {}
    }
    if (W === 384) {
      return variants.mobile384 || {}
    }
    if (W >= 375 && W <= 399) {
      return variants.mobile399 || {}
    }
    if (W >= 400 && W <= 409) {
      return variants.mobile409 || {}
    }
    if (W >= 411 && W <= 412) {
      return variants.mobile411 || {}
    }
    if (W >= 410 && W <= 414) {
      return variants.mobile414 || {}
    }
    if (W >= 415 && W <= 480) {
      return variants.mobile480 || {}
    }
    if (W >= 481) {
      return variants.mobile481more || {}
    }
  }
}
