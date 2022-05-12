// {
//     "collectCoverage":true,
//     "coverageThreshold":{
//         "global":{
//             "branches": 100,
//             "lines":90
//         }
//     },
//     "coverageReporters": ["lcov","text"],
//     "coverageDirectory": "coverage",
//     "testTimeout": 10000
// }

module.exports ={
    "moduleNameMapper": {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'jest-transform-stub',
        '\\.(css|scss|sass)$': 'identity-obj-proxy',
      },

      clearMocks: true,

    
      setupFiles: ['jest-canvas-mock', 'jest-localstorage-mock'],
      "resetMocks": false,
      "collectCoverage":true,
    //   "coverageThreshold":{
    //       "global":{
    //           "branches": 50,
    //           "lines":50
    //       }
    //   },
      "coverageReporters": ["lcov","text"],
      "coverageDirectory": "coverage",
      "testTimeout": 10000,
      
}