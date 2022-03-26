# 설명

template파일입니다.

## 폰트

https://fonts.google.com/

## 파일 디렉토리

```

index.html // 메인페이지

fonts ┬ Noto Sans Kr (한글) - 4개씩 400 500 700 900
      └ Open Sans (영문) - 4개씩

assets ┬ constant (json)
	   │        └ data.json
       ├ images
       │      └ dummy.png
       └ video
             └ bg_video2.mp4

css(sass)
    style.scss
            ├ abstract
            │   ├ _variable.scss
            │   ├ _function.scss
            │   └ _mixins.scss
            ├ base
            │ 	├ _reset.scss
            │ 	└ _typography.scss # 타이포그래피 font-face 모여있는거
            ├ layout
            │	└_main.scss
            ├ custom
            │    └_common.scss
            └ components
                ├ _button.scss
                ├	_icons.scss
                └ _inputs.scss


            javascript (babel)
                ├ commmon
                │   ├ ui_common.js
                │   └ no_ie.js
                ├ main
                │   └ main.js
                └ pages
                    ├ detail.js
                    └ notice.js

            plugin
                swiper
                    ├ swiper-bundle.min.js
                    └swiper-bundle.min.css
                gsap
                    └ scrollTrigger.js
```

## live-sass complier

```
"liveSassCompile.settings.formats":[
    // This is Default.
    // {
    //     "format": "expanded",
    //     "extensionName": ".css",
    //     "savePath": "~/../css/"
    // },
    // You can add more
    // {
    //     "format": "compressed",
    //     "extensionName": ".min.css",
    //     "savePath": "~/../css/"
    // },
    // More Complex
    {
        "format": "compressed",
        "extensionName": ".css",
        "savePath": "~/../css/"
    }
],
"liveSassCompile.settings.generateMap":false, // .map 제거
```
