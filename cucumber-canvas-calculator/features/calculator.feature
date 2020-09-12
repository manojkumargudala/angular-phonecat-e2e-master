Feature: Test online calculator scenarios

  Scenario Outline: Test subtraction, division and CE functionalities
    Given Open chrome browser and start application
    When I enter "<value1>" "<operator>" and "<value2>"
    Then I should be able to seeing the value "<expected>"

    Examples: 
      | value1 | value2 | operator | expected |
      |      2 |      2 | /        |        1 |
      |    201 |    201 | /        |        1 |
      |    201 |    201 | +        |      402 |
      |   20.1 |   20.1 | +        |     40.2 |
      |   20.1 |      0 | /        | Error    |
      |   20.1 |      0 | /        | ERROR    |
