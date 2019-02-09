pragma solidity ^0.5.2;

contract FoundingControl {
  struct Condition {
    uint256 time;
    uint256 userCount;
    uint256 amount;
    uint256 stage;
  }

  address public owner;
  address public investr;
  address payable public startup;
  uint256 public stageCount;
  Condition[] public stage;
  mapping(uint256 => Condition) public milestone;

  uint256 internal currentStage;

  constructor(address _investr, address payable _startup) public {
    owner = msg.sender;
    investr = _investr;
    startup = _startup;
  }

  function addStage(uint256 _time,uint256 _userCount, uint256 _amount) public returns(bool success) {
    require(msg.sender == owner);

    stageCount++;
    stage[stageCount] = Condition(_time, _userCount, _amount, stageCount);

    return true;
  }

  function check(uint256 _time, uint256 _userCount) public returns(bool success) {
    require(msg.sender == owner);
    require(_time > milestone[currentStage].time);
    require(_userCount > milestone[currentStage].userCount);

    startup.transfer(milestone[currentStage].amount);

    if(currentStage < stageCount) currentStage++;

    return true;
  }
}
