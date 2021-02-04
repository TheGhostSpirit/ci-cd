Feature: Finding living cell next state
  As a player
  I want to find a living cell next state

  Scenario: living central cell has no living neighbour
    Given the following grid
      | . | . | . |
      | . | X | . |
      | . | . | . |
    When player triggers next generation 
    Then central cell should be .

  Scenario: living central cell has 1 living neighbour
    Given the following grid
      | . | X | . |
      | . | X | . |
      | . | . | . |
    When player triggers next generation 
    Then central cell should be .

  Scenario: living central cell has 2 living neighbours
    Given the following grid
      | . | X | . |
      | . | X | X |
      | . | . | . |
    When player triggers next generation 
    Then central cell should be X

  Scenario: living central cell has 3 living neighbours
    Given the following grid
      | . | X | X |
      | . | X | X |
      | . | . | . |
    When player triggers next generation 
    Then central cell should be X

  Scenario: living central cell has 4 living neighbours
    Given the following grid
      | . | X | . |
      | X | X | X |
      | . | X | . |
    When player triggers next generation 
    Then central cell should be .

  Scenario: living central cell has 5 living neighbours
    Given the following grid
      | . | X | . |
      | X | X | X |
      | . | X | X |
    When player triggers next generation 
    Then central cell should be .

  Scenario: living central cell has 6 living neighbours
    Given the following grid
      | . | X | X |
      | X | X | X |
      | . | X | X |
    When player triggers next generation 
    Then central cell should be .

  Scenario: living central cell has 7 living neighbours
    Given the following grid
      | X | . | X |
      | X | X | X |
      | X | X | X |
    When player triggers next generation 
    Then central cell should be .

  Scenario: living central cell has 8 living neighbours
    Given the following grid
      | X | X | X |
      | X | X | X |
      | X | X | X |
    When player triggers next generation 
    Then central cell should be .
