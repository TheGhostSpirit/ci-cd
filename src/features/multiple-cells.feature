Feature: Finding multiple cells next state
  As a player
  I want to find multiple cells next state

  Scenario: hollow block
    Given the following grid
      | . | . | . | . | . |
      | . | X | . | X | . |
      | . | . | . | . | . |
      | . | X | . | X | . |
      | . | . | . | . | . |
    When player triggers next generation
    Then grid should be
      | . | . | . | . | . |
      | . | . | . | . | . |
      | . | . | . | . | . |
      | . | . | . | . | . |
      | . | . | . | . | . |

  Scenario: block
    Given the following grid
      | . | . | . | . | . |
      | . | X | X | X | . |
      | . | X | X | X | . |
      | . | X | X | X | . |
      | . | . | . | . | . |
    When player triggers next generation
    Then grid should be
      | . | . | X | . | . |
      | . | X | . | X | . |
      | X | . | . | . | X |
      | . | X | . | X | . |
      | . | . | X | . | . |

  Scenario: blinker
    Given the following grid
      | . | . | . | . | . |
      | . | . | . | . | . |
      | . | X | X | X | . |
      | . | . | . | . | . |
      | . | . | . | . | . |
    When player triggers next generation
    Then grid should be
      | . | . | . | . | . |
      | . | . | X | . | . |
      | . | . | X | . | . |
      | . | . | X | . | . |
      | . | . | . | . | . |
