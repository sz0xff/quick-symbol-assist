function save(_account){
    let account = _account;

    console.log(account);

    const prbkey = account.privateKey;
    console.log(prbkey);
    const pubkey = account.publicKey;
    const address_row = account.address.address;
    const address_ntype = account.address.networkType;
    
    let text = account +"'s information" + "\r\n";
    text = text + "privateKey:"+prbkey+ "\r\n";
    text = text +"publicKey:"+pubkey+ "\r\n";
    text = text +"RowAddress:"+address_row+ "\r\n";
    text = text +"Type:"+address_ntype+ "\r\n\r\n";
    text = text +"If you want to load this account,you should type bellow." + "\r\n";
    text = text +'load("'+ prbkey +'",' + address_ntype + ');' + "\r\n";
    console.log(text);

    const blob = new Blob([text],{type:"text/plain"});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    // link.download = _account+ '_information.txt';
    link.download = 'account_information.txt';
    link.click();

}


function load(_prbkey,_networkType){
    const prbkey = String(_prbkey);
    const networkType = _networkType;

    let account = sym.Account.createFromPrivateKey(
        prbkey,
        networkType
    );
    console.log(account);   
}