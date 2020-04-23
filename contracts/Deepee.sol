pragma solidity 0.5.16;


contract Deepee {
    address payable public totalPool;
    string public name;
    string public symbol;

    address owner;
    mapping(address => bool) public trustedParticipants;
    address[] public participants;
    mapping(address => uint256) public participantsBalances;

    event Deposited(address indexed payee, uint256 symbolAmount);
    event Withdrawn(address indexed payee, uint256 symbolAmount);

    constructor(string memory _name, string memory _symbol) public {
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
    }

    function getParticipants() public view returns (address[] memory) {
        return participants;
    }

    function addParticipants(address _participant)
        public
        returns (bool success)
    {
        require(msg.sender == owner, "You cannot add participant");
        trustedParticipants[_participant] = true;
        participants.push(_participant);
        return true;
    }

    function participantExist(address _participant)
        public
        view
        returns (bool success)
    {
        return trustedParticipants[_participant];
    }

    function getTotalPoolBalance() public view returns (uint256) {
        return totalPool.balance;
    }

    function deposit(uint256 _value) public payable returns (bool success) {
        uint256 newVal = _value / 10;
        require(
            participantsBalances[msg.sender] >= newVal,
            "Your balance is too low"
        );
        totalPool.transfer(newVal);
        emit Deposited(msg.sender, newVal);
        return true;
    }

    function withdraw(uint256 _value) public payable returns (bool success) {
        uint256 newVal = _value / 10;
        require(trustedParticipants[msg.sender], "You cannot withdraw money");
        require(totalPool.balance >= newVal, "Not enough funds");
        msg.sender.transfer(newVal);
        emit Withdrawn(msg.sender, newVal);
        return true;
    }
}
