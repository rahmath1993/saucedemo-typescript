@login
Feature: Login

        Background:
            Given I open the url

        @login-01
        Scenario: Login Succses
              And user is on "login" page
             When I set "<username>" to the inputfield "username"
              And I set "<password>" to the inputfield "password"
              And I click on the button "btnLogin"
             Then I expect that a text "Products" on this page
        Examples:
                  | username      | password     |
                  | standard_user | secret_sauce |

        @login-02
        Scenario: User get alert "Epic sadface: Username is required"
              And user is on "login" page
             When I set "<username>" to the inputfield "username"
              And I set "<password>" to the inputfield "password"
              And I click on the button "btnLogin"
              And I waiting for loading 2 seconds
             Then I expect that a text "Epic sadface: Username is required" on this page
        Examples:
                  | username | password     |
                  |          | secret_sauce |

        @login-03
        Scenario: User get alert "Epic sadface: Password is required"
              And user is on "login" page
             When I set "<username>" to the inputfield "username"
              And I set "<password>" to the inputfield "password"
              And I click on the button "btnLogin"
              And I waiting for loading 2 seconds
             Then I expect that a text "Epic sadface: Password is required" on this page
        Examples:
                  | username      | password |
                  | standard_user |          |
                  

        @login-04
        Scenario: User get alert "Epic sadface: Sorry, this user has been locked out"
              And user is on "login" page
             When I set "<username>" to the inputfield "username"
              And I set "<password>" to the inputfield "password"
              And I click on the button "btnLogin"
             Then I expect that a text "Epic sadface: Sorry, this user has been locked out" on this page
        Examples:
                  | username        | password     |
                  | locked_out_user | secret_sauce |

     