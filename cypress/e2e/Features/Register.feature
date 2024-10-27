Feature: registraion

Scenario: user should be able to register

Given user visits Tealium
When user Navigate to Regsiter
And User Adds First Name
And User Adds last Name
And User Adds Email
And User Adds password
And User Confirms password
Then User Click register
Then success message should appears

Scenario: User can't register with same email address 

Given user visits Tealium
When user Navigate to Regsiter
And User Adds First Name
And User Adds last Name
And User Adds Email
And User Confirms password
Then User Click register
Then Error message should appears