pragma solidity ^0.5.2;

contract Oracle {
  struct Data {
    address startup;
    uint256 userCount;
  }

  address owner;
  Data[] public data;

  function addData(address _startup, uint256 _userCount) public {
    require(msg.sender == owner);

    data.push(Data(_startup, _userCount));
  }

  function query(address _startup) external view returns(uint256 _userCount) {
    bool flag = true;
    uint256 i = 1;
    while(flag) {
      if(_startup == data[data.length - i].startup) {
        return data[data.length - i].userCount;
      }
    }

    return 0;
  }
}
