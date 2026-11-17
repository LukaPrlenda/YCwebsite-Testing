# YachtCharter
- Web App for Chartering Yachts

## Unit tests
- **Setup:** `npm install` or if PowerShell can not run scripts `npm.cmd install`  
- **Run tests:** `npm test` or if PowerShell can not run scripts `npm.cmd test`  
- **Run coverage:** `npm run coverage` or if PowerShell can not run scripts `npm.cmd run coverage`

### Coverage
**Results**  
 % Coverage report from v8  

|File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                    |
|-------------------------|---------|----------|---------|---------|--------------------------------------|
|All files                |   17.71 |     7.36 |   42.22 |   15.57 |                                      |
| YCwebsite_LoginForm.js  |       0 |        0 |       0 |       0 | 2-51                                 |
| YCwebsite_Main.js       |       0 |        0 |       0 |       0 | 1-25                                 |
| YCwebsite_Services.js   |       0 |        0 |       0 |       0 | 2-223                                |
| YCwebsite_SignupForm.js |   36.92 |    36.36 |   11.11 |      40 | 2-17,53-90                           |
| YCwebsite_Theme.js      |       0 |        0 |       0 |       0 | 1-155                                |
| index.js                |    22.1 |       40 |   29.62 |   32.81 | 13-14,19-20,25-26,31,39-69,89,99-113 |
| jQuery-3.7.1.min.js     |   18.98 |     7.06 |   47.22 |     100 | 2                                    |
| jQuery.spapp.js         |      60 |    41.66 |      60 |   58.06 | 15-16,34-35,41-51                    |


**Comment on results**  
Low numbers of coverage are the result of the fact that only two functions are tested, one from YCwebsite_SignupForm.js
and other from index.js .  
Coverage related to jQuery is present because the index.js file has a variable in it which uses jQuery, so it runs on
and uses jQuery when file is import to test file.  
This is a good example that even if the test covered the code, it does not mean that code that ran is tested.