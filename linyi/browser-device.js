var browserName;var browserVersion;detectBrowser();function detectBrowser(){if(/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){browserName="firefox";var ffversion=new Number(RegExp.$1);browserVersion=Math.floor(ffversion)}if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){browserName="internet explorer";var ieversion=new Number(RegExp.$1);browserVersion=Math.floor(ieversion)}if(/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)){browserName="opera";var oprversion=new Number(RegExp.$1);browserVersion=Math.floor(oprversion)}if((navigator.userAgent.toLowerCase().indexOf("chrome")>-1)&&(navigator.userAgent.toLowerCase().indexOf("safari")!=-1)){browserName="chrome";browserVersion=""}if((navigator.userAgent.toLowerCase().indexOf("chrome")==-1)&&(navigator.userAgent.toLowerCase().indexOf("safari")!=-1)){browserName="safari";browserVersion=""}}var deviceName;detectDevice();function detectDevice(){if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i))){deviceName="iosdevice"}else{if(navigator.userAgent.match(/Android/i)){deviceName="android"}else{if(navigator.userAgent.match(/BlackBerry/i)){deviceName="blackberry"}else{if(navigator.userAgent.match(/IEMobile/i)){deviceName="iemobile"}else{if(navigator.userAgent.match(/Silk/i)){deviceName="kindle"}else{deviceName="computer"}}}}}};