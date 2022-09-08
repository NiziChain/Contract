//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.1;

// import "hardhat/console.sol";

contract Niji {
    mapping(uint => bool) private _rights;

    /*
        一次創作者の作品登録
        ロイヤリティを設定できる。0も可能
        また、ロイヤリティは後からでも設定できる(setRoyalty(uint))

        @return contentId
    */
    function register(uint _royalty) public returns (uint) {

    }

    /*
        二次創作者の作品登録
        ロイヤリティが設定されていたら支払いを行う
        @return contentId
    */
    function register(uint _parent_id) public returns (uint) {

    }

    function setRoyalty(uint _content_id) public {

    }

    function buyRights(uint _content_id) public {
        return true;
    }

    function getRights(uint _content_id) public view returns(bool) {
        return true;
    }
}
