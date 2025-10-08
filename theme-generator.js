/**
 * Gestiona la creación y aplicación automática de temas,
 * inyectando un botón y los estilos base necesarios.
 * @version 5.2 - Lógica de iconos corregida
 * @author HECTOR DANIEL AYARACHI FUENTES
 */

const COLOR_MAP = {
  "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff",
  "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff",
  "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887", "cadetblue": "#5f9ea0", "chartreuse": "#7fff00",
  "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c",
  "cyan": "#00ffff", "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9",
  "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f", "darkorange": "#ff8c00",
  "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b",
  "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1", "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff",
  "dimgray": "#696969", "dodgerblue": "#1e90ff", "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22",
  "fuchsia": "#ff00ff", "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520",
  "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f", "honeydew": "#f0fff0", "hotpink": "#ff69b4",
  "indianred": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c", "lavender": "#e6e6fa",
  "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080",
  "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2", "lightgray": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6", "magenta": "#ff00ff",
  "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370db",
  "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee", "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead", "navy": "#000080", "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23",
  "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6", "palegoldenrod": "#eee8aa", "palegreen": "#98fb98",
  "paleturquoise": "#afeeee", "palevioletred": "#db7093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f",
  "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080", "rebeccapurple": "#663399",
  "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1", "saddlebrown": "#8b4513", "salmon": "#fa8072",
  "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0",
  "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f",
  "steelblue": "#4682b4", "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347",
  "turquoise": "#40e0d0", "violet": "#ee82ee", "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00", "yellowgreen": "#9acd32"
};

// --- Iconos SVG ---
const MOON_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3304.85 3304.44" style="width:28px; height:28px;">
<defs>
<clipPath id="clip-0"><path clip-rule="nonzero" d="M 116 116 L 3189 116 L 3189 3189 L 116 3189 Z M 116 116 "/></clipPath>
<clipPath id="clip-1"><path clip-rule="evenodd" d="M 116.199219 1652.199219 C 116.199219 2062.488281 275.957031 2448.21875 566.109375 2738.371094 C 856.238281 3028.5 1241.980469 3188.269531 1652.269531 3188.269531 C 2062.570312 3188.269531 2448.320312 3028.5 2738.449219 2738.371094 C 3031.46875 2445.378906 3189.949219 2057.761719 3188.609375 1651.03125 C 3143.621094 1723.660156 3090.140625 1791.109375 3028.53125 1852.730469 C 2817.929688 2063.328125 2537.96875 2179.308594 2240.148438 2179.308594 C 1942.351562 2179.308594 1662.371094 2063.328125 1451.78125 1852.730469 C 1241.179688 1642.121094 1125.191406 1362.160156 1125.191406 1064.351562 C 1125.191406 766.539062 1241.179688 486.539062 1451.78125 275.980469 C 1513.25 214.511719 1580.480469 161.128906 1652.898438 116.238281 L 1652.179688 116.179688 C 1241.890625 116.179688 856.15625 275.921875 566.109375 566.011719 C 275.957031 856.160156 116.199219 1241.898438 116.199219 1652.199219 Z M 772.675781 2531.800781 C 1001.410156 2760.570312 1305.558594 2886.511719 1629.078125 2886.511719 C 1952.589844 2886.511719 2256.71875 2760.511719 2485.488281 2531.800781 C 2508.179688 2509.101562 2544.949219 2509.101562 2567.648438 2531.800781 C 2590.339844 2554.488281 2590.339844 2591.230469 2567.648438 2613.949219 C 2316.921875 2864.660156 1983.640625 3002.730469 1629.078125 3002.730469 C 1274.53125 3002.730469 941.191406 2864.660156 690.515625 2613.949219 C 667.820312 2591.230469 667.820312 2554.488281 690.515625 2531.800781 C 713.210938 2509.101562 749.96875 2509.101562 772.675781 2531.800781 "/></clipPath>
<linearGradient id="linear-pattern-0" gradientUnits="userSpaceOnUse" x1="-0.000100981" y1="0" x2="1.000401" y2="0" gradientTransform="matrix(-0.000134218, -3070.55, 3070.55, -0.000134218, 1652.41, 3187.96)">
<stop offset="0" stop-color="rgb(89.802551%, 90.194702%, 89.802551%)"/><stop offset="0.03125" stop-color="rgb(89.64386%, 90.023804%, 89.637756%)"/><stop offset="0.0625" stop-color="rgb(89.324951%, 89.680481%, 89.306641%)"/><stop offset="0.09375" stop-color="rgb(89.006042%, 89.337158%, 88.975525%)"/><stop offset="0.125" stop-color="rgb(88.687134%, 88.993835%, 88.644409%)"/><stop offset="0.15625" stop-color="rgb(88.368225%, 88.650513%, 88.313293%)"/><stop offset="0.1875" stop-color="rgb(88.050842%, 88.30719%, 87.982178%)"/><stop offset="0.21875" stop-color="rgb(87.731934%, 87.963867%, 87.651062%)"/><stop offset="0.25" stop-color="rgb(87.413025%, 87.620544%, 87.319946%)"/><stop offset="0.28125" stop-color="rgb(87.094116%, 87.277222%, 86.988831%)"/><stop offset="0.3125" stop-color="rgb(86.775208%, 86.933899%, 86.659241%)"/><stop offset="0.34375" stop-color="rgb(86.456299%, 86.590576%, 86.328125%)"/><stop offset="0.375" stop-color="rgb(86.13739%, 86.247253%, 85.997009%)"/><stop offset="0.40625" stop-color="rgb(85.818481%, 85.903931%, 85.665894%)"/><stop offset="0.4375" stop-color="rgb(85.499573%, 85.560608%, 85.334778%)"/><stop offset="0.46875" stop-color="rgb(85.180664%, 85.217285%, 85.003662%)"/><stop offset="0.5" stop-color="rgb(84.861755%, 84.873962%, 84.672546%)"/><stop offset="0.53125" stop-color="rgb(84.542847%, 84.53064%, 84.341431%)"/><stop offset="0.5625" stop-color="rgb(84.223938%, 84.187317%, 84.010315%)"/><stop offset="0.59375" stop-color="rgb(83.906555%, 83.843994%, 83.679199%)"/><stop offset="0.625" stop-color="rgb(83.587646%, 83.500671%, 83.348083%)"/><stop offset="0.65625" stop-color="rgb(83.268738%, 83.157349%, 83.016968%)"/><stop offset="0.6875" stop-color="rgb(82.949829%, 82.814026%, 82.685852%)"/><stop offset="0.71875" stop-color="rgb(82.63092%, 82.470703%, 82.354736%)"/><stop offset="0.75" stop-color="rgb(82.312012%, 82.12738%, 82.023621%)"/><stop offset="0.78125" stop-color="rgb(81.993103%, 81.784058%, 81.692505%)"/><stop offset="0.8125" stop-color="rgb(81.674194%, 81.440735%, 81.361389%)"/><stop offset="0.84375" stop-color="rgb(81.355286%, 81.097412%, 81.030273%)"/><stop offset="0.875" stop-color="rgb(81.036377%, 80.754089%, 80.699158%)"/><stop offset="0.90625" stop-color="rgb(80.717468%, 80.410767%, 80.368042%)"/><stop offset="0.9375" stop-color="rgb(80.39856%, 80.067444%, 80.036926%)"/><stop offset="0.96875" stop-color="rgb(80.081177%, 79.724121%, 79.705811%)"/><stop offset="1" stop-color="rgb(79.763794%, 79.38385%, 79.377747%)"/></linearGradient>
</defs>
<path fill-rule="evenodd" fill="rgb(0%, 0%, 0.784302%)" d="M 1652.179688 116.179688 C 1241.890625 116.179688 856.15625 275.921875 566.109375 566.011719 C 275.957031 856.160156 116.199219 1241.898438 116.199219 1652.199219 C 116.199219 2062.488281 275.957031 2448.21875 566.109375 2738.371094 C 856.238281 3028.5 1241.980469 3188.269531 1652.269531 3188.269531 C 2062.570312 3188.269531 2448.320312 3028.5 2738.449219 2738.371094 C 3031.46875 2445.378906 3189.949219 2057.761719 3188.609375 1651.03125 C 3143.621094 1723.660156 3090.140625 1791.109375 3028.53125 1852.730469 C 2817.929688 2063.328125 2537.96875 2179.308594 2240.148438 2179.308594 C 1942.351562 2179.308594 1662.371094 2063.328125 1451.78125 1852.730469 C 1241.179688 1642.121094 1125.191406 1362.160156 1125.191406 1064.351562 C 1125.191406 766.539062 1241.179688 486.539062 1451.78125 275.980469 C 1513.25 214.511719 1580.480469 161.128906 1652.898438 116.238281 C 1652.648438 116.179688 1652.421875 116.179688 1652.179688 116.179688 Z M 1652.261719 3304.441406 C 1210.921875 3304.441406 796.011719 3132.558594 483.953125 2820.5 C 171.878906 2508.449219 0 2093.53125 0 1652.171875 C 0 1210.820312 171.867188 795.921875 483.953125 483.851562 C 795.984375 171.851562 1210.851562 0 1652.179688 0 C 1728.308594 0 1805.058594 5.308594 1880.421875 15.75 C 1906.761719 19.398438 1927.300781 40.511719 1930.191406 66.988281 C 1933.078125 93.480469 1917.578125 118.519531 1892.628906 127.738281 C 1757.339844 177.859375 1636.660156 255.328125 1533.941406 358.089844 C 1345.269531 546.738281 1241.410156 797.53125 1241.410156 1064.320312 C 1241.410156 1331.128906 1345.28125 1581.941406 1533.941406 1770.570312 C 1722.558594 1959.238281 1973.390625 2063.121094 2240.148438 2063.121094 C 2506.921875 2063.121094 2757.730469 1959.238281 2946.390625 1770.570312 C 3049.121094 1667.851562 3126.628906 1547.160156 3176.738281 1411.851562 C 3185.988281 1386.898438 3210.910156 1371.5 3237.46875 1374.289062 C 3263.941406 1377.171875 3285.109375 1397.699219 3288.738281 1424.070312 C 3360.601562 1942.21875 3189.980469 2451.191406 2820.640625 2820.53125 C 2508.5 3132.558594 2093.609375 3304.441406 1652.261719 3304.441406 "/>
<path fill-rule="evenodd" fill="rgb(0%, 0%, 0.784302%)" d="M 1629.078125 3002.730469 C 1274.53125 3002.730469 941.191406 2864.660156 690.515625 2613.949219 C 667.820312 2591.230469 667.820312 2554.488281 690.515625 2531.800781 C 713.210938 2509.101562 749.96875 2509.101562 772.675781 2531.800781 C 1001.410156 2760.570312 1305.558594 2886.511719 1629.078125 2886.511719 C 1952.589844 2886.511719 2256.71875 2760.511719 2485.488281 2531.800781 C 2508.179688 2509.101562 2544.949219 2509.101562 2567.648438 2531.800781 C 2590.339844 2554.488281 2590.339844 2591.230469 2567.648438 2613.949219 C 2316.921875 2864.660156 1983.640625 3002.730469 1629.078125 3002.730469 "/>
<g clip-path="url(#clip-0)"><g clip-path="url(#clip-1)"><path fill-rule="nonzero" fill="url(#linear-pattern-0)" d="M 116.199219 3188.269531 L 3189.949219 3188.269531 L 3189.949219 116.179688 L 116.199219 116.179688 Z M 116.199219 3188.269531 "/></g></g>
</svg>
`;

const SUN_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2886 2872" style="width:28px; height:28px;">
<defs>
<clipPath id="clip-0-sun"><path d="M 416.398438 861.828125 L 415.0625 853.238281 C 413.410156 831.519531 404.132812 805.019531 387.238281 773.71875 C 256.101562 613.371094 191.25 517.929688 192.6875 487.390625 C 167.007812 422.039062 170.550781 313.738281 203.320312 162.5 C 281.894531 288.328125 350.515625 365.179688 409.175781 393.058594 C 426.335938 402.191406 451.207031 408.910156 483.789062 413.210938 C 613.597656 405.519531 724.617188 412.851562 816.839844 435.230469 C 832.136719 284.828125 924.019531 140.570312 1092.480469 2.46875 C 1051.191406 105.789062 1036.851562 174.269531 1049.46875 207.878906 C 1056.160156 244.71875 1099.460938 281.929688 1179.378906 319.519531 C 1242 222.820312 1307.769531 157.359375 1376.691406 123.109375 C 1438.890625 86.351562 1569.789062 45.308594 1769.398438 0 C 1699.828125 82.238281 1665.601562 144.910156 1666.699219 188.011719 C 1668.429688 203.261719 1673.578125 217.289062 1682.171875 230.121094 L 1751.53125 320.640625 C 1763.359375 342.070312 1774.171875 370.308594 1783.960938 405.359375 C 1823.308594 352.589844 1868.179688 321.128906 1918.589844 310.960938 C 1913.28125 303.589844 1985.449219 307.410156 2135.121094 322.449219 C 2164.558594 323.019531 2191.519531 318.480469 2216.011719 308.828125 C 2269.960938 284.738281 2321.070312 228.78125 2369.328125 140.949219 C 2385.539062 226.019531 2392.460938 292.660156 2390.089844 340.871094 C 2394.589844 356.160156 2376.730469 419.160156 2336.519531 529.871094 C 2331.628906 552.21875 2330.96875 589.308594 2334.53125 641.109375 C 2423.558594 647.75 2487.71875 661.441406 2527.011719 682.199219 C 2561.28125 697.191406 2621.078125 741.941406 2706.429688 816.460938 C 2726.058594 830.699219 2747.589844 843.789062 2771.019531 855.730469 C 2673.5 840.761719 2609.820312 844.351562 2580.011719 866.5 C 2548.449219 883.261719 2523.429688 937.859375 2504.929688 1030.269531 C 2569.089844 1058.898438 2617.378906 1087.710938 2649.789062 1116.699219 C 2663.910156 1129.871094 2676.261719 1144.238281 2686.820312 1159.820312 L 2760.429688 1275.429688 C 2773.679688 1291.648438 2797.78125 1309.171875 2832.75 1327.980469 L 2756.988281 1319.96875 L 2629.429688 1266.660156 C 2605.710938 1259.871094 2588.980469 1258.601562 2579.25 1262.828125 C 2561.980469 1265.371094 2538.75 1283.808594 2509.589844 1318.148438 C 2514.308594 1352.878906 2520.820312 1380 2529.109375 1399.5 C 2567.429688 1473.488281 2629.851562 1525.230469 2716.378906 1554.710938 C 2766.390625 1576.800781 2822.769531 1556.019531 2885.519531 1492.371094 C 2858.878906 1578.148438 2830.570312 1635.5 2800.609375 1664.429688 C 2786.96875 1676.480469 2771.75 1684.21875 2754.980469 1687.648438 C 2677.609375 1693.21875 2637.511719 1699.679688 2634.691406 1707.039062 C 2606.320312 1723.78125 2580.820312 1759.691406 2558.171875 1814.769531 C 2646.378906 1862.089844 2702.191406 1905.519531 2725.609375 1945.050781 C 2752.71875 1981.75 2772.691406 2052.667969 2785.519531 2157.808594 C 2730.851562 2126.984375 2685.300781 2112.527344 2648.878906 2114.425781 C 2640.410156 2114.589844 2627.808594 2117.882812 2611.078125 2124.308594 L 2495.019531 2181.152344 C 2473.660156 2189.144531 2433.128906 2192.539062 2373.429688 2191.335938 C 2365.808594 2250.777344 2353.660156 2297.503906 2336.980469 2331.507812 L 2244.558594 2464.136719 C 2207.25 2595.519531 2289.949219 2630.308594 2492.648438 2568.5 C 2446.96875 2620.179688 2413.390625 2651.648438 2391.921875 2662.910156 C 2221.660156 2750.996094 2005.128906 2699.953125 1742.300781 2509.78125 C 1696.238281 2557.398438 1659.371094 2587.167969 1631.699219 2599.09375 C 1624.679688 2606.550781 1574.558594 2621.011719 1481.320312 2642.476562 C 1462.898438 2648.832031 1448.570312 2658.5 1438.339844 2671.480469 C 1415.390625 2695.445312 1417.828125 2761.992188 1445.660156 2871.125 C 1361.53125 2818.285156 1305.671875 2767.394531 1278.089844 2718.457031 C 1247.921875 2673.535156 1217.140625 2583.636719 1185.769531 2448.757812 C 1161.691406 2477.375 1137.539062 2499.734375 1113.320312 2515.832031 L 959.0625 2588.941406 C 939.777344 2600.078125 923.855469 2614.128906 911.289062 2631.089844 C 884.144531 2663.246094 875.222656 2736.589844 884.527344 2851.125 C 784.316406 2740.980469 722.019531 2656.15625 697.628906 2596.644531 C 687.984375 2570.566406 684.703125 2547.023438 687.789062 2526.015625 C 686.445312 2517.964844 696.199219 2485.636719 717.054688 2429.035156 C 720.992188 2408.242188 721.914062 2395.785156 719.828125 2391.664062 C 713.113281 2354.324219 681.90625 2308.488281 626.199219 2254.160156 C 574.957031 2260.183594 492.429688 2244.21875 378.621094 2206.253906 C 361.519531 2203.558594 344.195312 2204.160156 326.644531 2208.066406 C 279.332031 2220.453125 224.753906 2274.25 162.910156 2369.457031 C 159.070312 2239.574219 166.882812 2146.617188 186.34375 2090.582031 C 195.597656 2066.488281 207.941406 2047.386719 223.367188 2033.289062 L 345.894531 1950.277344 C 362.171875 1934.550781 375.410156 1900.964844 385.605469 1849.519531 C 307.542969 1750.238281 238.882812 1689.371094 179.617188 1666.898438 C 165.054688 1663.441406 152.304688 1664.25 141.367188 1669.328125 L 0 1740.320312 C 20.625 1601.75 52.3125 1504.28125 95.054688 1447.910156 C 132.011719 1389.25 219.875 1314.160156 358.648438 1222.648438 C 350.316406 1117.898438 325.160156 1055.929688 283.179688 1036.761719 C 241.835938 1011.359375 151.171875 1006.921875 11.1875 1023.410156 C 126.382812 937.089844 205.875 886.179688 249.667969 870.699219 C 295.710938 850.289062 351.289062 847.328125 416.398438 861.828125 "/></clipPath>
<radialGradient id="radial-pattern-0" gradientUnits="userSpaceOnUse" cx="259.485" cy="544.3305" r="1641.15" gradientTransform="matrix(1, 0, 0, 1, 1181.29, 874.55)"><stop offset="0" stop-color="rgb(99.606323%, 75.559998%, 2.333069%)"/><stop offset="0.25" stop-color="rgb(99.606323%, 71.476746%, 1.73645%)"/><stop offset="0.5" stop-color="rgb(99.606323%, 67.520142%, 1.156616%)"/><stop offset="0.75" stop-color="rgb(99.606323%, 63.500977%, 0.569153%)"/><stop offset="1" stop-color="rgb(99.606323%, 59.606934%, 0%)"/></radialGradient>
<clipPath id="clip-2-sun"><path d="M 465 458 L 2417 458 L 2417 2409 L 465 2409 Z M 465 458 "/></clipPath>
<clipPath id="clip-3-sun"><path d="M 2416.308594 1434.269531 L 2407.410156 1566.640625 C 2365.199219 1833.308594 2241.710938 2046.59375 2036.929688 2206.476562 C 1830.730469 2366.234375 1587.921875 2431.015625 1308.5 2400.820312 C 1041.820312 2358.617188 828.539062 2235.125 668.652344 2030.34375 C 617.425781 1964.148438 575.226562 1892.023438 542.0625 1813.960938 L 500.25 1693.589844 C 477.277344 1610.761719 465.664062 1524.320312 465.40625 1434.269531 C 472.378906 1157.941406 567.613281 928.019531 751.109375 744.53125 C 934.605469 561.03125 1164.519531 465.800781 1440.859375 458.820312 C 1717.191406 465.800781 1947.109375 561.03125 2130.609375 744.53125 C 2314.109375 928.019531 2409.339844 1157.941406 2416.308594 1434.269531 "/></clipPath>
<radialGradient id="radial-pattern-1" gradientUnits="userSpaceOnUse" cx="259.40025" cy="577.917" r="975.795" gradientTransform="matrix(1, 0, 0, 1, 1181.29, 874.55)"><stop offset="0" stop-color="rgb(99.606323%, 92.027283%, 22.584534%)"/><stop offset="0.25" stop-color="rgb(99.606323%, 87.940979%, 17.526245%)"/><stop offset="0.5" stop-color="rgb(99.606323%, 83.984375%, 12.626648%)"/><stop offset="0.75" stop-color="rgb(99.606323%, 80.059814%, 7.76825%)"/><stop offset="1" stop-color="rgb(99.606323%, 75.68512%, 2.352905%)"/></radialGradient>
</defs>
<g clip-path="url(#clip-0-sun)"><g clip-path="url(#clip-0-sun)"><path fill-rule="nonzero" fill="url(#radial-pattern-0)" d="M 0 0 L 0 2871.125 L 2885.519531 2871.125 L 2885.519531 0 Z M 0 0 "/></g></g>
<g clip-path="url(#clip-2-sun)"><g clip-path="url(#clip-3-sun)"><g clip-path="url(#clip-3-sun)"><path fill-rule="nonzero" fill="url(#radial-pattern-1)" d="M 465.40625 458.820312 L 465.40625 2431.015625 L 2416.308594 2431.015625 L 2416.308594 458.820312 Z M 465.40625 458.820312 "/></g></g></g>
</svg>
`;


class AutoTheme {
  #baseColors;
  #buttonOptions;
  #isDark = false;
  #isPageInitiallyDark = false;
  #colorCache = new Map();
  #toggleButton;

  constructor(baseColors, buttonOptions = {}) {
    this.#baseColors = baseColors || { surface: '#ffffff', text: '#2c3e50' };
    this.#validateColors();

    this.#buttonOptions = {
      position: { bottom: '20px', right: '20px' },
      exclude: [],
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease',
      ...buttonOptions
    };

    this.#init();
  }

  #validateColors() {
    for (const [name, color] of Object.entries(this.#baseColors)) {
      if (!/^#([A-Fa-f0-9]{3,4}){1,2}$/.test(color)) {
        console.error(`AutoTheme Error: Invalid HEX color format for "${name}": ${color}. Using default.`);
        this.#baseColors[name] = name === 'surface' ? '#ffffff' : '#2c3e50';
      }
    }
  }

  #hexToHsl(hex) {
    try {
      const fullHex = hex.length === 4 ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}` : hex;
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
      if (!result) throw new Error(`Invalid HEX color: ${hex}`);
      
      let r = parseInt(result[1], 16) / 255;
      let g = parseInt(result[2], 16) / 255;
      let b = parseInt(result[3], 16) / 255;

      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }

      return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    } catch (error) {
      console.error(error.message);
      return { h: 0, s: 0, l: 100 }; // Default to white on error
    }
  }

  #generateDarkColors() {
    const darkColors = {};
    for (const [name, hex] of Object.entries(this.#baseColors)) {
      const hsl = this.#hexToHsl(hex);
      const invertedL = 100 - hsl.l;
      let adjustedS = hsl.s;
      if (invertedL > 50) adjustedS = Math.max(30, hsl.s * 0.8);
      else adjustedS = Math.min(90, hsl.s * 1.2);
      darkColors[name] = `hsl(${hsl.h}, ${adjustedS}%, ${invertedL}%)`;
    }
    return darkColors;
  }

  #getEffectiveBackgroundColor() {
    let element = document.body;
    while (element) {
      const bgColor = window.getComputedStyle(element).backgroundColor;
      if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') return bgColor;
      element = element.parentElement;
    }
    return 'rgb(255, 255, 255)'; // Default to white
  }

  #colorNameToHex(color) {
    return COLOR_MAP[color.toLowerCase()] || null;
  }

  #isColorDark(colorString) {
    const sanitizedColor = colorString.toLowerCase().trim();
    if (this.#colorCache.has(sanitizedColor)) {
      return this.#isColorDark(this.#colorCache.get(sanitizedColor));
    }

    let r, g, b;
    let match;

    if ((match = sanitizedColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/))) {
      [, r, g, b] = match.map(Number);
    } else if ((match = sanitizedColor.match(/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/))) {
      [, r, g, b] = match.map(c => parseInt(c, 16));
    } else if ((match = sanitizedColor.match(/#([a-f\d])([a-f\d])([a-f\d])/))) {
      [, r, g, b] = match.map(c => parseInt(c + c, 16));
    } else if ((match = sanitizedColor.match(/hsla?\((\d+),\s*(\d+)%?,\s*(\d+)%?/))) {
      const [, h, s, l] = match.map(Number);
      const s_norm = s / 100, l_norm = l / 100;
      const c = (1 - Math.abs(2 * l_norm - 1)) * s_norm;
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = l_norm - c / 2;
      let r_temp = 0, g_temp = 0, b_temp = 0;
      if (h < 60) { [r_temp, g_temp, b_temp] = [c, x, 0]; }
      else if (h < 120) { [r_temp, g_temp, b_temp] = [x, c, 0]; }
      else if (h < 180) { [r_temp, g_temp, b_temp] = [0, c, x]; }
      else if (h < 240) { [r_temp, g_temp, b_temp] = [0, x, c]; }
      else if (h < 300) { [r_temp, g_temp, b_temp] = [x, 0, c]; }
      else { [r_temp, g_temp, b_temp] = [c, 0, x]; }
      r = Math.round((r_temp + m) * 255);
      g = Math.round((g_temp + m) * 255);
      b = Math.round((b_temp + m) * 255);
    } else {
      const hexColor = this.#colorNameToHex(sanitizedColor);
      if (hexColor) {
        this.#colorCache.set(sanitizedColor, hexColor);
        return this.#isColorDark(hexColor);
      }
      return false; // Cannot determine
    }

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
    return luminance < 128;
  }

  recalculatePageTheme() {
    const bodyBgColor = this.#getEffectiveBackgroundColor();
    this.#isPageInitiallyDark = this.#isColorDark(bodyBgColor);
    this.setTheme(this.#isDark);
  }

  setTheme(isDark, manualToggle = false) {
    try {
      if (this.#isDark === isDark && document.documentElement.hasAttribute('data-theme-initialized')) return;

      this.#isDark = isDark;
      
      // Añadimos una clase para la animación y la removemos cuando termina
      if (this.#toggleButton) {
        this.#toggleButton.classList.add('is-switching');
        this.#toggleButton.addEventListener('animationend', () => this.#toggleButton.classList.remove('is-switching'), { once: true });
      }
      this.#toggleButton?.setAttribute('aria-pressed', String(isDark));

      if (document.startViewTransition) {
        document.startViewTransition(() => this.#applyThemeChanges(manualToggle));
      } else {
        this.#applyThemeChanges(manualToggle);
      }
    } catch (error) {
      console.error('Error setting theme:', error);
    }
  }

  #applyThemeChanges(manualToggle) {
    if (manualToggle) {
      localStorage.setItem('theme-preference', this.#isDark ? 'dark' : 'light');
    }

    const liveRegion = document.getElementById('theme-announcer');
    if (liveRegion) liveRegion.textContent = `Tema cambiado a modo ${this.#isDark ? 'oscuro' : 'claro'}.`;

    if (this.#isPageInitiallyDark !== this.#isDark) {
      document.documentElement.setAttribute('data-theme', 'inverted');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    document.documentElement.setAttribute('data-theme-initialized', 'true');

    window.dispatchEvent(new CustomEvent('themechange', {
      detail: { isDark: this.#isDark, manualToggle }
    }));

    this.#updateToggleButton();
  }

  #createToggleButton() {
    const button = document.createElement('button');
    button.id = 'theme-toggle-button';
    button.setAttribute('aria-label', 'Cambiar entre tema claro y oscuro');

    let initialPositionStyles = this.#buttonOptions.position;
    try {
      const savedPosition = JSON.parse(localStorage.getItem('theme-button-position') ?? '{}');
      if (typeof savedPosition.left === 'number' && typeof savedPosition.top === 'number') {
        initialPositionStyles = { left: `${savedPosition.left}px`, top: `${savedPosition.top}px` };
      }
    } catch (error) {
      console.error('Error parsing saved button position:', error);
      localStorage.removeItem('theme-button-position');
    }

    Object.assign(button.style, {
      position: 'fixed',
      ...initialPositionStyles,
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
      zIndex: '9999',
      transition: 'transform 0.2s ease, background-color 0.3s ease, color 0.3s ease'
    });

    button.addEventListener('mouseover', () => button.style.transform = 'scale(1.1)');
    button.addEventListener('mouseout', () => button.style.transform = 'scale(1)');
    button.addEventListener('click', () => this.setTheme(!this.#isDark, true));
    
    this.#makeDraggable(button);

    document.body.appendChild(button);
    this.#toggleButton = button;
  }

  #makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    const onMouseDown = (e) => {
      if (e.button !== 0) return;

      isDragging = true;
      const rect = element.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      element.style.cursor = 'grabbing';
      element.style.transition = 'none';

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp, { once: true });
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const x = Math.max(0, Math.min(window.innerWidth - element.offsetWidth, e.clientX - offsetX));
      const y = Math.max(0, Math.min(window.innerHeight - element.offsetHeight, e.clientY - offsetY));
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      element.style.cursor = 'pointer';
      element.style.transition = 'transform 0.2s ease, background-color 0.3s ease, color 0.3s ease';
      document.removeEventListener('mousemove', onMouseMove);
      
      localStorage.setItem('theme-button-position', JSON.stringify({ left: element.offsetLeft, top: element.offsetTop }));
    };

    element.addEventListener('mousedown', onMouseDown);
  }

  #injectLiveRegion() {
    const liveRegion = document.createElement('div');
    liveRegion.id = 'theme-announcer';
    liveRegion.setAttribute('aria-live', 'polite');
    Object.assign(liveRegion.style, { position: 'absolute', width: '1px', height: '1px', margin: '-1px', padding: '0', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: '0' });
    document.body.appendChild(liveRegion);
  }

  #updateToggleButton() {
    if (!this.#toggleButton) return;
    // --- CORREGIDO: Muestra el icono del tema actual ---
    this.#toggleButton.innerHTML = this.#isDark ? MOON_ICON : SUN_ICON;
    this.#toggleButton.style.backgroundColor = 'var(--color-surface)';
    this.#toggleButton.style.color = 'var(--color-text)';
  }

  #injectBaseStyles() {
    const style = document.createElement('style');
    const baseExclusions = ['img', 'video', 'iframe', '#theme-toggle-button', '[data-theme-exclude]', '[style*="background-image"]'];
    const userExclusions = this.#buttonOptions.exclude.filter(e => typeof e === 'string');
    const allExclusionSelectors = [...new Set([...baseExclusions, ...userExclusions])];
    const exclusionSelector = allExclusionSelectors.map(sel => `[data-theme="inverted"] ${sel}`).join(',\n');

    const exclusionFunctions = this.#buttonOptions.exclude.filter(e => typeof e === 'function');
    if (exclusionFunctions.length > 0) {
      document.querySelectorAll('*').forEach(el => {
        if (exclusionFunctions.some(fn => fn(el))) {
          el.setAttribute('data-theme-exclude', '');
        }
      });
    }

    const highContrast = window.matchMedia('(prefers-contrast: more)').matches;
    const contrastValue = highContrast ? '110%' : '90%';
    const brightnessValue = highContrast ? '100%' : '95%';
    const { transitionDuration, transitionTimingFunction } = this.#buttonOptions;
    const darkColors = this.#generateDarkColors();

    style.textContent = `
      :root {
        --color-surface: ${this.#baseColors.surface || '#ffffff'};
        --color-text: ${this.#baseColors.text || '#2c3e50'};
      }

      [data-theme="inverted"] {
        --color-surface: ${darkColors.surface || '#2c3e50'};
        --color-text: ${darkColors.text || '#ffffff'};
      }

      html {
        transition: filter ${transitionDuration} ${transitionTimingFunction};
      }

      [data-theme="inverted"] {
        filter: invert(1) hue-rotate(180deg) contrast(${contrastValue}) brightness(${brightnessValue});
        background-color: #fff;
      }

      ${exclusionSelector} {
        filter: invert(1) hue-rotate(180deg);
      }

      @keyframes rotate-icon {
        0% { transform: rotate(-90deg) scale(0); opacity: 0; }
        70% { transform: rotate(20deg) scale(1.2); opacity: 1; }
        100% { transform: rotate(0deg) scale(1); opacity: 1; }
      }

      #theme-toggle-button.is-switching svg {
        animation: rotate-icon 0.4s ${transitionTimingFunction};
      }

    `;
    document.head.appendChild(style);
  }

  #init() {
    this.#injectBaseStyles();
    this.#injectLiveRegion();
    this.#createToggleButton();

    this.#isPageInitiallyDark = this.#isColorDark(this.#getEffectiveBackgroundColor());

    const savedPreference = localStorage.getItem('theme-preference');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
    const initialThemeIsDark = savedPreference ? savedPreference === 'dark' : systemPreference.matches;

    this.setTheme(initialThemeIsDark);

    let debounceTimer;
    systemPreference.addEventListener('change', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        if (!localStorage.getItem('theme-preference')) {
          this.setTheme(e.matches);
        }
      }, 100);
    });

    const observer = new MutationObserver(() => this.recalculatePageTheme());
    observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });
  }
}

/**
 * Punto de entrada de la aplicación.
 * Define los colores base y activa el sistema de temas autónomo.
 * @author HECTOR DANIEL AYARACHI FUENTES
 */
const myBrandColors = {
  surface: '#ffffff',
  text: '#2c3e50'
};

// Crea una nueva instancia de la clase y le pasa los colores base.
new AutoTheme(myBrandColors, {
  // Ejemplo de exclusiones:
  // exclude: [
  //   '.logo', // Selector CSS
  //   (el) => el.id === 'map-container' // Función de callback
  // ]
});

(()=>{const b="font-family:monospace;font-size:10px;line-height:7px;letter-spacing:-1.5px;padding:0;margin:0;zoom:0.5";const c=["transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#40514b","transparent","transparent","transparent","transparent","transparent","#a6abaa","#696e6d","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#5e6869","#5d6b67","#607473","#4c5c58","transparent","transparent","transparent","transparent","transparent","#777c7a","#8a8f8e","transparent","transparent","transparent","transparent","#878785","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#566360","#7b8480","#424d45","#59645e","transparent","transparent","transparent","#7d8180","#888c8b","#8d938c","transparent","transparent","transparent","transparent","#9da19d","transparent","transparent","transparent","#a7aca6","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#56635d","#6d746d","#979b93","transparent","#6a7473","transparent","#7b7e7c","#8d9391","transparent","#6b6f67","transparent","transparent","transparent","#cacac7","transparent","transparent","transparent","#b2b3b0","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#606e68","#6c756e","#66746b","transparent","#666d6b","#4e5754","transparent","transparent","transparent","transparent","#babeb6","#c8c9c6","#e5e6e2","#c5c6c4","transparent","#bec1bb","#c2c4bc","#9da199","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#cdbaa5","#ccb9a4","#ac9c87","#746d5d","#7d786d","#888c81","#a8a69e","#959289","#939990","#b5b5ae","#afb1aa","#b9bab3","#d3d4cd","#acb1aa","#939992","#999e96","#babebb","transparent","#6a6c67","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#8d7d68","#a3866d","#c7a68a","#b9977b","#caac8e","#caaa8d","#cdad92","#c7ab8f","#c9ad94","#c8ad96","#c9b49c","#c0ae9b","#bfb1a1","#cabbab","#c0b1a0","#cdc1b4","#b7b2a7","#a4a599","#c4bfb7","#c8c4bd","#c4c0b8","#b4aca2","#cabdb0","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#9c9388","#887767","#927860","#9d7c5f","#aa886c","#a07e61","#bf9d81","#c5a387","#c6a88c","#c8ac8f","#c7aa90","#bea48c","#c9b39c","#c9b49c","#c7b199","#cbb69f","#d2bda7","#d3bdaa","#d7c2b0","#c8b5a3","#bca997","#d1bead","#c8b39f","#c0a892","#c8b19a","#d8c0a9","#cfb59a","#c7a98c","#caad92","#d3c2b2","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#a8a297","#877d71","#716151","#947a64","#c2a388","#af9076","#987a62","#a0826a","#a1856f","#ac907a","#b19782","#b59b86","#b9a088","#bca38b","#c8b198","#c4af97","#d2bca7","#cab49b","#cbb197","#ccb29b","#d5bba4","#d7bda6","#dcc6ad","#e0cdb4","#e3ceb4","#e4ceb2","#e3ceb3","#dec8ac","#ceb194","#c7a68a","#c7a68a","#c1a084","#cbb399","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#9c968c","#7f756a","#7c6d5f","#98826e","#b99e81","#b0947c","#7b644d","#735b4b","#816d5b","#8b7765","#8f7964","#9b8470","#ac947d","#b69d86","#baa189","#bea68e","#c4ab92","#cbb198","#d1b7a1","#d2b9a3","#d1b79e","#c8ad94","#d1b59d","#d7bda4","#e4ccb3","#e5cfb6","#dfc9b1","#e4cdb4","#e7d0b7","#e8d1b8","#dec6ac","#d3b69b","#d0b295","#cbad90","#cbab8f","#c8aa8a","#cdb59d","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#787068","#807365","#8d7b67","#b79d82","#a9876a","#91795f","#483326","#664f40","#8a735c","#937b65","#876e5b","#86715c","#96806b","#a38a74","#b49b83","#c1a990","#c6ae95","#c9b299","#c2ac93","#cab39a","#cfb59a","#cbb091","#bfa389","#c5a88d","#dac0a4","#e5ceb2","#e4cdb3","#e4ceb4","#e8d4bb","#ebd9bf","#ebd9c0","#ead6bc","#e1cbaf","#d6b99c","#c5a68a","#d4b496","#dabd9b","#ccae8d","#d0b197","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#73655e","#8e7a63","#a68a6c","#997d5f","#675244","#3e342a","#61503a","#7c6850","#7c634e","#745b47","#816856","#927f68","#a48d78","#b09581","#b0977e","#b49b82","#bba389","#c6ad94","#b79e87","#a78d76","#b79b81","#c7a98b","#b99c7f","#c3a384","#d2b293","#e3c6a8","#e4caae","#e1caaf","#e2cdb4","#e0cdb5","#e4d1b8","#ebd6bd","#e8d2ba","#c8ae96","#c5a68f","#d4b89c","#c4a489","#b99a81","#d8bfa4","#c9a58c","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#887b6e","#85705d","#a78a71","#a28b76","#6f5b4a","#594637","#523f2d","#614f3b","#574433","#64503f","#7b6452","#a48e77","#ab9279","#ad947a","#a08470","#967d68","#9c8470","#ad9480","#b29986","#9a806f","#775d4a","#9e8368","#c6a88b","#cdad91","#d5b699","#c6aa8c","#d7bc9e","#dabda0","#d7b99c","#c6a98b","#cfb398","#dec7b1","#e6d4bd","#ebd9c1","#ebd8bf","#c4a892","#bda088","#ba9b7f","#ad8a6f","#b6957a","#c9ac90","#cba88d","#cdaf96","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#837163","#a68f79","#847765","#91887d","#74695d","#5f4f3f","#5b4839","#523f30","#5c4736","#846b56","#a89078","#a48c72","#977f66","#63523f","#443d33","#4b3728","#6d4d33","#4f4339","#433b34","#645647","#b8a590","#b39a83","#d7bba1","#dec4ab","#cdb299","#d4baa0","#c4a689","#ccae90","#bfa286","#a38b73","#90765f","#7a6151","#856f59","#c0aa95","#e6d4ba","#e7d0b7","#b7987d","#a6876b","#9d7e64","#a8886e","#ceb090","#c5a98b","#d4bba7","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#9c9186","transparent","transparent","#706a5c","#665b4a","#5f4f3e","#51402f","#5b4b39","#77644e","#89745b","#89735b","#947d68","#886f5c","#5b5040","#423b2f","#42362a","#6b4e36","#5b4431","#46392c","#45392f","#705e4d","#b59f86","#ccb296","#c9b096","#c5ab92","#c5ad93","#cdb398","#d0b498","#bca389","#8a7d70","#a78669","#8f816f","#866c56","#a18770","#dcc4aa","#dcc3a9","#cfb49d","#af9379","#ac9175","#c1a486","#c0a081","#ba9a7f","#b9997d","#c6b19b","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#85847a","#746756","#6c5b49","#62503d","#604d39","#614f3b","#5f4c3a","#6a5643","#7c6850","#877058","#8c765f","#7d6755","#685747","#5c4c3c","#594b3e","#625447","#736457","#998a79","#a49584","#a38e7d","#9c8470","#9f866f","#a58c76","#ab927a","#baa088","#c3a891","#d0b59b","#d1b89f","#b49c84","#9e856f","#ac927d","#dfc8af","#e7d2b7","#dfc6ad","#d7bda3","#ba9f87","#a68d79","#9e7c63","#b0896e","#ba9b82","#baa18a","#c0b09d","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#7c786a","#82705d","#816954","#7d6550","#78634e","#6c5946","#5a4a39","#4e4131","#5c4e3d","#695644","#786351","#786550","#6e5b49","#645343","#6b5a4b","#715f4e","#725d4c","#7a6555","#816c5c","#7c6859","#84705f","#8e7661","#917867","#8a7263","#8c7463","#9b806d","#b0957f","#c3a88d","#d4b89a","#dbbfa2","#dec1a5","#e2c8ad","#e7d1b4","#e8d2b8","#e7ceb5","#cfb39a","#c5ab90","#c9b8a8","transparent","#c19e8b","transparent","#a19082","#c8baa9","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#b0afa5","#968879","#988772","#917d67","#826a56","#765e49","#725b48","#6c5949","#5d4b3c","#5f4e3e","#635344","#685d4d","#645849","#605547","#5e5445","#655848","#685a4a","#756353","#8b7867","#9f8976","#ae9781","#b29a84","#af9983","#a28f7e","#978374","#7c6d61","#7e7364","#857665","#998672","#b49d87","#c2a88e","#caae91","#d6bb9f","#e0c7ae","#e7d1b7","#edd6bb","#ecd4ba","#e6cbb0","#e1c8ad","#d8c5b0","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#a39f97","#877d6e","#9e8d7b","#97836c","#a08670","#987d68","#8c725d","#7e6751","#6e5c45","#665541","#6f5e4d","#6a5a4a","#625242","#6a5d4d","#5e5141","#615644","#736554","#816c5c","#856e5e","#86705f","#85715d","#816d5a","#6b5e4e","#48463c","#3a3d36","#393833","#42433f","#53514a","#5c564e","#625850","#726359","#c0aa90","#d6b99e","#dbc0a7","#dec4ab","#e9d3b8","#e7d2b7","#ead2b8","#e6ceb4","#dac2a8","#d7c2b0","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#8b8a84","#655d51","#8b7969","#a18872","#9f846d","#9b816a","#947a64","#826651","#755e47","#6f5944","#695342","#635141","#655546","#645646","#756858","#7a6854","#7c6a55","#7e6c5a","#837362","#8e7c6a","#917e6e","#817264","#5d5248","#35302d","#35302c","#504740","#2e2721","#564d45","#70625a","#61544c","#423730","#867461","#c9b199","#d8c2a9","#ddc7ad","#e4cfb4","#e6d1b6","#e5cdb3","#e8d0b6","#e3cab1","#dbc2ab","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#434d5e","#6e675f","#ac9880","#b0977d","#a78a71","#9a7c65","#8a6e57","#7c604a","#755841","#705540","#6b513f","#6c5343","#72604e","#746254","#6b5e4e","#6e6353","#7d7161","#877866","#907f6d","#938271","#948373","#8f7f6f","#8d8174","#786c63","#4d443d","#463d36","#3f362f","#4a3e38","#53443c","#5f5149","#66564d","#a18f7f","#c3ae9c","#d2bba7","#d3bca4","#d8bfa5","#e7cfb5","#ead1b7","#e3cbb1","#e2cab0","#e2ceb2","#d8c7bc","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#133365","#45556c","#9e9282","#998573","#917e6a","#94806d","#8f7863","#907863","#7e6350","#866855","#765b48","#725948","#715c47","#735e4a","#776556","#716654","#7b6d5a","#877966","#8f7e6d","#927f6e","#948272","#a89689","#ac9b8e","#9e8d80","#96877a","#6f6157","#584a43","#52453d","#4c4139","#584a42","#69594e","#8c796b","#beaa9d","#cdb8a9","#d2bca6","#cfb9a0","#d0b89a","#dfc6ae","#e0c9b0","#e4cfb2","#e7d1b3","#dbc7ae","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#213f75","#494d69","#44515b","#68645b","#877f71","#8b7a6b","#a28d7c","#8a7461","#907a66","#9f866c","#846854","#826854","#6f5644","#6a5441","#7b6553","#756352","#7b6557","#816d5a","#887463","#867460","#8e7c69","#968372","#9b8271","#9d8673","#9f8878","#9b8778","#8e7c71","#7f6962","#78645c","#705a53","#786659","#958371","#af9c87","#c2ae9b","#c6b29e","#ccb8a0","#c5b197","#d1b8a0","#d5bca1","#e1cdb1","#e2ceaf","#e4cfb0","#ddc9ad","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#214e84","#2e4f89","#424c69","#1b3149","#324150","#4b474e","#887d74","#88786b","#9a8974","#b09c83","#a48d70","#a08670","#745c47","#755d4a","#725a4b","#7b6253","#705848","#6d5646","#765e4d","#6b5a49","#65594b","#5e5248","#716058","#7d5d55","#966c64","#a57a71","#b68a84","#966765","#ad7978","#bd8c88","#bc9088","#927666","#c3af97","#c0aa8f","#bfa48c","#b69b83","#bba587","#c9b194","#ceb59a","#dcc3ac","#ddcab3","#ddc9b0","#ddc1a6","#d7b9a1","#cfbba5","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#3a4e6a","#2b5691","#264e95","#15346a","#092646","#182b4a","#4a586e","#44484c","#867c74","#b09e8c","#b7a089","#b89e87","#a2846e","#896d58","#866955","#85674e","#85654e","#7c614f","#6d5747","#695546","#615043","#574b43","#302b25","#4b3d39","#513834","#946b68","#bb8887","#ca9494","#d6a3a2","#bc8585","#d09c9a","#d8a69f","#dfb6ab","#c9b09a","#d6ba9f","#cfb59b","#cab59c","#b39d86","#ba9f89","#e2cab4","#e2cfb7","#d1ccbf","#c0bcbc","#dfbb98","#d9bba0","#d1b9a4","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#022c58","#0f5aa2","#2056ab","#153d7b","#022b51","#163967","#1d3a66","#243341","#787876","#a0917d","#b09982","#b89d87","#a48a72","#ab8f77","#a2836a","#a28367","#937458","#8b6b51","#8b6f5a","#8c735d","#7c6753","#6f6150","#4f493d","#30312c","#2f2925","#a17878","#d3a19f","#c99896","#d5a3a2","#d6a4a2","#d3a1a0","#c99893","#cea098","#dab8a9","#d1b79f","#dfcaaf","#e4d3bb","#d1bfb0","#b8b0a6","#d0ccbf","#cec7c3","#a6c4d0","#afbfcf","#e5c6a3","#d4bca2","#d7c6b7","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#122f4b","#023a6d","#01538f","#2373c3","#465d8b","#232c3f","#0c3a72","#0d3b70","#0e2549","#374968","#918e8e","#aa9583","#bfa690","#b3997e","#bb9f83","#a5896c","#b69b7e","#ac9174","#a68669","#a7876e","#a38871","#a9937d","#ab9887","#816c61","#5c564e","#353a34","#2f2e27","#816661","#d4a4a2","#deabae","#d6a7a9","#cd9fa1","#ca9997","#d9a8a4","#dcbcae","#ccb9a3","#cbb6a4","#e4d3be","#ddd3c1","#c5d1c8","#c5bfc1","#acb5c6","#79b4db","#a7bdcd","#efceae","#dfc5aa","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#0a6678","#003950","#013e73","#06477f","#89787a","#c19d70","#ab8a68","#263957","#2056a3","#0d2859","#234584","#838fae","#a39690","#b1968a","#b49c84","#aa9079","#b19780","#c3a98f","#c3a98e","#bea287","#bda286","#c0a68d","#c1ab95","#a99685","#a39283","#a19081","#ad9e90","#a29889","#5a5147","#493a34","#706058","#87726b","#8b716b","#c9afa4","#c9b4a6","#d1c2b0","#a59790","#a5958e","#a7a4a2","#a3b9bf","#93bad8","#7fb5e3","#7fafde","#5daee1","#a4bcc6","#e7caae","#dfc3a7","#dbc1a9","#cec3ba","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#0a6aab","#05416c","#063466","#003d71","#143766","#95735d","#c68e96","#be9397","#9c9093","#4466a0","#0f386a","#103f79","#4373b6","#596a84","#918679","#9f8d7e","#aa9684","#b9a38f","#cfb6a2","#ccb29e","#ccb29c","#cdb39d","#c8b3a1","#d0bfaf","#c2b3a3","#c0b0a1","#c2b1a3","#c1b0a2","#beaea1","#bbac9f","#bdad9f","#c0afa3","#c8b5aa","#c2b0a3","#c8b6a8","#cfbeac","#d2c7b3","#a8a0a2","#818997","#5c7ea5","#5aaae4","#59ace7","#59abdd","#58a9dc","#5ba9e2","#b2c2c5","#e8caac","#e1c6a9","#d9c1a6","transparent","transparent","transparent","transparent","transparent","transparent","#3a82b0","#026fb8","#0263ad","#004785","#02537e","#024776","#083a70","#39485e","#647c8d","#3264a5","#113d73","#27599f","#0b447f","#083d7e","#4375cb","#667db4","#979190","#a99b91","#baa796","#c7b3a0","#cbb7a8","#cfbbad","#ccb8a7","#c4b1a0","#d1c1b6","#d5c8bc","#cec3b8","#b9aea3","#afa298","#baaca3","#b2a49b","#b7a99d","#af9f93","#c5b3a6","#ccbaaa","#d1c6b5","#bcb4a7","#c5beba","#a5abb3","#677c99","#6f8ab1","#57a2d8","#73a6d8","#70a9c6","#6ac3cb","#57b4d1","#52aee1","#c4cbc2","#e8cdac","#d7c8b1","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#2795bf","#0a74b8","#0662af","#095195","#013469","#00416e","#063967","#0b3865","#0b4176","#0d457f","#0a3f74","#316fbb","#226baf","#196aaf","#0f5aa8","#3971b7","#7d88a1","#a8a2a3","#b6aca7","#c9bfb6","#c4bbb0","#beb6ab","#a9a6a1","#9d9998","#a6a6a7","#b6b4b3","#938f8b","#9c9799","#97929b","#9a999d","#939398","#868895","#a4a1a1","#cdc7be","#c5bfba","#aab4bf","#4b74a1","#7ea5cc","#5a83ae","#19497b","#629dd9","#56abe2","#8fa9c1","#c5cdd2","#d0e1e6","#59b0d4","#59a7da","#d3ccbc","#e8d1b1","#e4cdb4","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#1a6fab","#146abb","#0e61af","#075aa5","#013a76","#033669","#09396b","#0c3666","#0e3460","#143565","#1b4173","#3e8ac2","#4197d1","#748eb8","#7a8fb1","#3991c9","#0e91d7","#56a9d1","#627b8f","#677885","#5c7790","#4b739b","#547aab","#5078b3","#5486c0","#476eb5","#426fbd","#3a6db8","#3768ad","#355fa1","#516c8c","#5c6e81","#54728a","#477092","#678fb8","#6b94c7","#4c7ebf","#3969a3","#0e4789","#5e9bda","#56a7e7","#50a8e2","#70aad5","#76c8d1","#76b6c9","#67a9d3","#71add5","#e6d0b4","#e4cdb3","#dfc3a8","#d4c0b0","transparent","transparent","transparent","transparent","transparent","transparent","#176fa7","#1c73c2","#135ba3","#0a63ac","#064a79","#013b5f","#07548c","#19629c","#9d9895","#a88588","#5f656f","#173754","#6196c6","#88a4d1","#78a9d8","#238ed0","#1397dd","#62acd6","#638ab0","#4374b9","#215ab1","#174b9b","#195fa0","#347398","#3b657f","#224670","#093765","#013365","#07305f","#1a3752","#524c63","#415c93","#4b82c9","#4688d6","#3686c8","#4099c9","#185c8c","#0d4377","#4b88bd","#4fa8e5","#4fa8e6","#52a7e6","#57a8e7","#58a9e9","#55ace8","#51abe6","#a2c3d5","#ecd2b3","#e2c9ae","#ddccbb","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#287f9d","#ac95a2","#5f6783","#26528b","#74859b","#1c666d","#06456c","#5686a0","#336f9b","#294c7c","#19396b","#42436e","#2c78b2","#1e8ed7","#208cd7","#2890de","#2592e1","#246aa1","#257390","#4599a9","#3f658e","#2c5889","#194b80","#0e4a8f","#13498b","#104c94","#1e54a5","#2c67b8","#ab9794","#d3aeb2","#6a87bb","#3981ca","#2977c1","#1b71b1","#146095","#054379","#043c70","#5f9bc7","#6fc3e7","#5aa8e4","#4ea7e5","#51a6e6","#63a4e3","#69a4da","#a2aec4","#c5b1a7","#e6cfb6","#e4cab1","#e3cbaf","#dccab3","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#264c6f","#888b95","#b99a97","#466895","#015aa9","#135596","#4f546b","#595773","#665871","#2a406c","#1d4174","#49608c","#5683b7","#3597dd","#4295db","#3a8dd5","#1e6da3","#3175c0","#6581ac","#738ebb","#3162a8","#256fb9","#2769b4","#2b5fa1","#8b8684","#c6987a","#bb839a","#9f8a92","#7b8085","#285c9a","#1460b2","#1965b2","#0e5aa1","#02407d","#063c74","#184c89","#4382b9","#58aade","#51a7e7","#4fa6e7","#50a4e8","#52a5ea","#9ab0c6","#e8d1c4","#e3cfb7","#e7d3b7","#e3d1b3","#e0caad","#daccb8","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#0d5792","#367cbc","#2771b5","#0363af","#0063b1","#085aa4","#0254a5","#034e99","#00478e","#004585","#0b4f93","#388ace","#0a579d","#1093dd","#1094e0","#0983d0","#245b93","#5880ba","#6688ab","#b7b1ab","#206bbb","#064494","#155198","#6c7282","#b59388","#b89f9c","#797689","#2c5d9b","#1a5393","#084689","#003a79","#053b80","#104994","#214f8f","#40699e","#5ea5d9","#7aa5d9","#e4bbc4","#9da9c1","#5ba2e0","#58a3e1","#aeb1bd","#e5d2bc","#e7d1b9","#e4ceb4","#e1c8af","#dbc7b3","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#133d5f","#0d5ea2","#077bc4","#0073be","#036eba","#0060ac","#0156a3","#01509b","#004c90","#05538f","#09508d","#014380","#066aa5","#029ae4","#0295e0","#028dda","#085ea1","#6e6e8a","#aaaabc","#5e7cac","#2c6ab4","#3f8ad7","#1459a3","#013471","#05356e","#073974","#073e7e","#074188","#074790","#0b4896","#0b4a97","#164c98","#214d91","#2d5f93","#5197d4","#99a4c2","#c8afba","#d4b1c1","#a2a5c2","#57a4e2","#92b7cf","#e8d4b9","#e6d2bb","#e8d1b8","#e5ceb5","#d8c2ad","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#32525d","#133c5b","#025591","#0275c4","#0175c2","#016fb1","#0181af","#017a9e","#016991","#004b85","#004787","#01518e","#2b87c1","#169de2","#0294e0","#038edc","#0e6cb4","#3c5881","#5d6f88","#6f8bb2","#0c7bc7","#0257a6","#1668bc","#327ac9","#285e93","#1c4d7b","#034588","#074382","#064183","#0d4189","#10448d","#0f4991","#165b9d","#3785be","#58a4de","#7a9ed0","#6ca2d7","#52abe0","#5ea6dc","#b9c7c8","#e8d3b5","#ead1b9","#e6d0b8","#e6ceb4","#e5cdb3","#dbc8b1","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#a0a9b6","#275a6e","#123955","#083f5e","#0e4777","#0273b6","#0172c5","#0861ad","#1d62a0","#074d84","#024f82","#064983","#033d7c","#90a0c0","#5698bf","#0592dd","#0191de","#0075c0","#01569d","#03599e","#3679ae","#358ac5","#0b76c2","#047fb6","#01699f","#054c92","#1a579f","#0a3f87","#0a3d77","#113d79","#184073","#0e3f78","#174779","#6d839a","#69a7ca","#48a5e7","#4da6e8","#52a6e8","#66acd9","#d3c8af","#dcc5ad","#dfcebb","#e4cfb7","#e5d0b5","#e5cfb3","#d9c5ab","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#7c898f","#446573","#2c5871","#163c56","#0f4865","#115f83","#044b74","#02406f","#045ca1","#00579e","#004486","#003971","#013d70","#144b81","#7bb0d9","#5aa4d3","#64acdb","#3fa5dc","#0a83c7","#0168b0","#015da0","#0868ae","#177cc1","#1b8ad2","#216eae","#065a8a","#0e3b75","#043b74","#083c76","#0a3c77","#0b3d7d","#244a77","#425f79","#908991","#c6b1c4","#51a5db","#4ea4e1","#52a5dd","#92acb5","#d0b496","#ccb49c","#e2cbb2","#e1c9b1","#e5cdb3","#e5ceb0","#e5ceae","#e1c8ad","#dbc7af","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#9aa0a1","#6b7880","#4a6872","#3c6170","#395966","#294956","#11384b","#194361","#316182","#0e3b5f","#042e55","#023360","#084078","#00356c","#023663","#5787ba","#8bafe4","#8daddd","#89abdb","#7faad9","#158bcc","#107ac1","#0c67b1","#0d64ad","#1570b8","#2282c6","#817da5","#a68e93","#32597a","#053b77","#0c3b6f","#073d73","#0d3b77","#123a77","#204b89","#9eaab6","#5da7dc","#75bae3","#81bad3","#a09791","#b29580","#c8b098","#d1b59c","#d3b9a1","#e2cbb1","#e5cdb2","#e5cfaf","#e4cbac","#e2c9aa","#e0cab6","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#7c858a","#4d656d","#435f65","#3f595c","#3d5455","#3d5252","#3f4f4f","#3e4e4e","#3d4e4c","#43524d","#475250","#465250","#2d4258","#0e345e","#01315d","#205592","#629bdb","#3595d3","#2c93d8","#248ed4","#2389d2","#1f7dc7","#1670ba","#1b6fb8","#147cc7","#6985ad","#b69b8c","#6a898f","#226a9a","#1f578a","#0e487c","#0f4777","#0e3f81","#8aa2bc","#97afd8","#5ca0cf","#709085","#937363","#a38c72","#b79d87","#c2a991","#d1b69f","#d8bea5","#dfc6ac","#e5caad","#e5ccac","#dec7ab","#e1ceb6","transparent","#dcc9bc","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#98a09d","#526466","#485d5f","#475a5a","#435655","#415555","#415252","#414f50","#445251","#485653","#4a5753","#48524f","#47514b","#474d48","#484746","#3c4553","#2e4b6d","#738eb2","#708fb2","#3a91c9","#288fd7","#288ad3","#2485cb","#207dc4","#1e7ac0","#1379be","#0a7ac3","#1b7cc2","#1969b5","#0b4e9b","#03488f","#034389","#4173a5","#7cadcf","#9599a7","#988069","#947a61","#977e68","#ac927b","#ac927c","#b79c86","#ccb198","#d6bba1","#dbc1a7","#e2c8aa","#e5ccac","#dec2a3","#ddc0a2","#decbb1","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#526363","#4d5d5b","#4c5c5a","#495956","#465653","#47544f","#4a5450","#48514b","#4b5149","#525852","#555a56","#535452","#4b504c","#52504a","#584f4a","#594e42","#7e7066","#88a9b7","#969fb0","#2b94d3","#2b8bd5","#4183bb","#83839c","#b58caf","#a58ba6","#847d8c","#705885","#104b8d","#04488d","#024b8e","#3e6faa","#a7a8ba","#9f8b78","#a78a6c","#a98f79","#a48a73","#a48973","#a18571","#b99d87","#b69a84","#bb9e86","#d0b396","#dcc3a5","#e1c7a9","#e1c7a7","#ddc2a0","#dac7b1","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#a1a5a3","#5c6967","#515e59","#4e5b56","#4b5851","#4d5650","#4d524c","#4f5047","#58544a","#625c51","#686257","#625f56","#595953","#55534b","#595449","#64564a","#7f6a58","#927760","#a28168","#9d9593","#5094c2","#3491cb","#6389b9","#807f9c","#6d7ca2","#5671a3","#265fa1","#0b5899","#125894","#457eaf","#4b7ba4","#988575","#a38669","#b3967e","#b69a82","#b99c87","#a28671","#9c826c","#a78d77","#b69a85","#c5a991","#c0a38a","#ceb299","#d4b89e","#dec0a3","#e2c6a8","#d6bea2","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#7f8482","#555e5a","#535c57","#31ceff","#545751","#5c5850","#675d52","#6e6153","#7a6a5c","#7a675a","#786a5d","#656153","#5a5a50","#8b75ff","#946bff","#9d62ff","#b39073","#c29e80","#be9a7f","#caaa89","#b6a28e","#5e86a4","#2586c7","#157fc4","#2477bd","#2669ad","#648dbc","#5285b3","#74797d","#937861","#977c64","#a1856d","#b69a84","#b99c87","#b1917c","#a38972","#927962","#a88f79","#a99078","#ceb299","#bc9c84","#c7a88c","#d6b79b","#dbbc9f","#d6b89b","#d1bba5","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#a9a9a9","#676f6a","#28d7ff","#31ceff","#3ac4ff","#43bcff","#645647","#7e6d5b","#846f5c","#877059","#85755e","#6c6658","#645e53","#746857","#89725b","#9d62ff","#bd997e","#c6a387","#c4a487","#d2b497","#ceb094","#bba48b","#cac2b8","#659dbb","#0d7abe","#237cb8","#548fb1","transparent","#ccc3b7","#a69685","#887259","#876a4f","#96775e","#a4866e","#9e7f69","#9d836b","#866d56","#9e846f","#b0927d","#bb9b83","#caaa8e","#c4a287","#cba98e","#d4b594","#d3b69b","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#28d7ff","#7f7b77","#53504a","#43bcff","#4db4ff","#56abff","#5ea1ff","#775d46","#708fff","#7987ff","#6b6057","#7a6457","#9f816c","#9d62ff","#b7977b","#c6a586","#c6a583","#c13fff","#c936ff","#d32dff","#dc23ff","transparent","transparent","#f70aff","#ff00ff","#ff09f7","transparent","transparent","transparent","transparent","transparent","#97806b","#978064","#9f866c","#7b6754","#8d735f","#a0856f","#b59780","#b5957c","#c8957d","#d4aa8d","#ccad8f","#cab298","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#28d7ff","transparent","#595b53","#42bbff","#4cb3ff","#54a9ff","#5ea1ff","#765a44","#708fff","#7986ff","#6f6758","#97816e","#b09079","#9d62ff","#be9d81","#b99375","#c9a381","#c03fff","#cfae90","transparent","transparent","transparent","#ed12ff","transparent","transparent","#ff09f6","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#89817a","#816a59","#9f846e","#a38872","#b49581","#bd9a87","#c29e88","#caaa92","#ccb39c","#cabaaa","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#28d7ff","transparent","transparent","#44bdff","#4cb3ff","#56a9ff","#5ea1ff","transparent","#708fff","#7986ff","#937f70","#937c65","#9f8169","#9d62ff","#b9977b","#b79173","#b748ff","#c13fff","#caa787","#cab49b","transparent","transparent","#ed12ff","#f70aff","#ff00ff","#ff0af6","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#7e6f65","#876a53","#8c705a","#9f826d","#927560","#ab8a76","#9e7e69","#b4937f","#c1a38d","#ceb29c","#d1c0b2","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#28d7ff","transparent","transparent","#43bcff","transparent","#56a9ff","#5da0ff","transparent","#6f8fff","#7986ff","#947e69","#917663","#a78c76","#9d62ff","#ba9a7e","#b7977b","#b748ff","#c03eff","#c6a385","#cbb29c","transparent","transparent","#ec11ff","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#74604f","#7d6251","#8c715d","#866a57","#9e836e","#ac907b","#a18470","#ab8f7a","#c3ab92","#c5b8a7","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","#28d7ff","#32ceff","#3bc5ff","#43bcff","transparent","transparent","#5ea1ff","#6799ff","#708fff","#7986ff","#7a6b5e","#8b75ff","#946bff","#9d63ff","#a65aff","#bfa58e","#b79c85","#c13fff","#ca36ff","#d32dff","#dc23ff","transparent","#ed12ff","#f709ff","#ff00ff","#ff0af6","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent"];const s=c.map(h=>h==='transparent'?'background:transparent;'+b:'color:'+h+';background:transparent;'+b);console.log("%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c %c %c %c %c %c█%c█%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c %c %c %c %c %c█%c█%c %c %c %c %c█%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c %c %c %c█%c█%c█%c %c %c %c %c█%c %c %c %c█%c %c %c %c %c %c %c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c %c█%c %c█%c█%c %c█%c %c %c %c█%c %c %c %c█%c %c %c %c %c %c %c %c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c %c█%c█%c %c %c %c %c█%c█%c█%c█%c %c█%c█%c█%c %c %c %c %c %c %c %c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c█%c %c %c %c %c %c %c %c %c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c \n%c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█\n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█\n%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c█%c %c█%c█\n%c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c \n%c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c \n%c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c \n%c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c \n%c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c \n%c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c \n%c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c \n%c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c \n%c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c \n%c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c \n%c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c \n%c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c \n%c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c \n%c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c \n%c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c \n%c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c \n%c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c \n%c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c \n%c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c \n%c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c \n%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c \n%c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c█%c %c %c %c %c %c \n%c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c \n%c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c \n%c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c %c \n%c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c %c \n%c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c %c %c \n%c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c█%c█%c█%c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c %c %c \n%c %c %c %c %c█%c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c█%c %c %c█%c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c %c \n%c %c %c %c %c█%c %c %c█%c█%c█%c█%c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c█%c█%c█%c█%c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c \n%c %c %c %c %c█%c %c %c█%c %c█%c█%c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c█%c %c %c %c %c %c %c %c %c %c %c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c %c %c %c %c %c %c \n%c %c %c %c %c█%c█%c█%c█%c %c %c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c█%c %c█%c█%c█%c█%c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c %c \n",...s)})();
