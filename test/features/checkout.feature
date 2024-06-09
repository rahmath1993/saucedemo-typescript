@runner
Feature: checkout Cart Functionality

    Background: Login Success
            Given I open the url
            And user is on "login" page
            And I success login on the website application
                  | username      | password     |
                  | standard_user | secret_sauce |
            And I waiting for loading 2 seconds
            And I click on the button "btnLogin"
            Then I expect that a text "Products" on this page


            
    @checkout-01     
    Scenario:  Add an item to the shopping cart
    Given user is on "checkout" page
    And I waiting for loading 5 seconds
    When I click on the button "addToCartSauceLabsBackpack"
    And I waiting for loading 2 seconds
    And I click on the button "SauceLabsBikeLight"
    And I click on the button "buttonAddToCart"   
    And I click on the button "iconShoppingCart"
    And I click on the button "checkout"
    And I waiting for loading 2 seconds
    And I set "<firstName>" to the inputfield "firstName"
     And I set "<lastName>" to the inputfield "lastName"
            And I set "<postalCode>" to the inputfield "postalCode"      
            And I waiting for loading 2 seconds
            And I click on the button "continue"
            And I waiting for loading 2 seconds
            And I click on the button "finish"
            And I click on the button "back"
            And I waiting for loading 2 seconds
            And I click on the button "burgerMenu"
            And I waiting for loading 2 seconds
            And I click on the button "logout"
            Then I expect that a text "Accepted usernames are:" on this page
            Examples:
                  | firstName      | lastName     |postalCode|
                  | Joni           | Jono         |     15141|