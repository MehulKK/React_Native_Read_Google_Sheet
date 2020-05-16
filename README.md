# Read Google Spread Sheet - React Native 

Read Google Spread Sheet display and bind in list

<p align="center">
  <img src="https://github.com/MehulKK/React_Native_Read_Google_Sheet/blob/master/image/demo.gif">
</p>

## Section 1
Creating a Google Sheet

####  Step 1 
Go to [Google Sheets](https://docs.google.com/spreadsheets/u/0/).

#### Step 2 : 
Create a new spreadsheet

<p align="center">
  <img src="https://github.com/MehulKK/React_Native_Read_Google_Sheet/blob/master/image/create.png">
</p>

## Section 2: Publishing your Google Sheets to the web

####  Step 1 
Click **File > Publish to the web…**

<p align="center">
  <img src="https://github.com/MehulKK/React_Native_Read_Google_Sheet/blob/master/image/file.png">
</p>

#### Step 2
Click **Publish**, then **OK**

<p align="center">
  <img src="https://github.com/MehulKK/React_Native_Read_Google_Sheet/blob/master/image/publish_web_0.png">
</p>

#### Step 3
No need to do anything here

<p align="center">
  <img src="https://github.com/MehulKK/React_Native_Read_Google_Sheet/blob/master/image/publish_web.png">
</p>


## Section 3: Using your Google Sheets as JSON endpoint
#### Step 1


[https://spreadsheets.google.com/feeds/list/YOURGOOGLESHEETCODE/SHEETPAGENUMBER/public/values?alt=json](https://spreadsheets.google.com/feeds/list/YOURGOOGLESHEETCODE/SHEETPAGENUMBER/public/values?alt=json)

#### Step 2:

Go to your opened Google Sheets and check the address bar

<p align="center">
  <img src="https://github.com/MehulKK/React_Native_Read_Google_Sheet/blob/master/image/address_bar_1.png">
</p>


#### Step 3:

Go to the template URL and replace

**YOURGOOGLESHEETCODE** with ```1ikcdDRhklW2mzjooRlyZbQDf70CAWUTN3DItUQGLaSY```

**SHEETPAGENUMBER** to ```1```

#### Step 4:

Retrieve JSON URL

***[https://spreadsheets.google.com/feeds/list/1ikcdDRhklW2mzjooRlyZbQDf70CAWUTN3DItUQGLaSY/1/public/values?alt=json](https://spreadsheets.google.com/feeds/list/1ikcdDRhklW2mzjooRlyZbQDf70CAWUTN3DItUQGLaSY/1/public/values?alt=json)***

<p align="center">
  <img src="https://github.com/MehulKK/React_Native_Read_Google_Sheet/blob/master/image/json.png">
</p>
