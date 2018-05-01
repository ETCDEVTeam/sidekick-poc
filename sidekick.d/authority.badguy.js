if (ensureAuthorityAccount()) {
  authorities.push(eth.accounts[0]); // bad guy!
  runAuthority();
}
