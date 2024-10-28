Feature: Login 
Scenario: User Login With Vaild Data
Given user visits Tealium
When user Navigate to Login
Then User Adds Email
And User Adds Password
Then User Clicks Login


Scenario: User Login With Invalid Data
Given user visits Tealium
When user Navigate to Login
Then User Adds Email
And User Adds Wrong Password
Then User Clicks Login
Then Error message should appears