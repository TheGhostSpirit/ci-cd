Feature: Finding dead cell next state
  As a player
  I want to find a dead cell next state

  Scenario: dead cell has no living neighbour
    Given the following grid
      | . | . | . |
      | . | . | . |
      | . | . | . |
    When player triggers next generation 
    Then central cell should be .
