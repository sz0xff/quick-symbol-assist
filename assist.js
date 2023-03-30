function save(_account){
    let account = _account;

    console.log(account);

    const prbkey = account.privateKey;
    const pubkey = account.publicKey;
    const address_row = account.address.address;
    const address_ntype = account.address.networkType;
    
    let text = account +"'s information" + "\r\n";
    text = text + "privateKey:"+prbkey+ "\r\n";
    text = text +"publicKey:"+pubkey+ "\r\n";
    text = text +"RowAddress:"+address_row+ "\r\n";
    text = text +"Type:"+address_ntype+ "\r\n";
    console.log(text);

    const blob = new Blob([text],{type:"text/plain"});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = _account+ '_information.txt';
    link.click();

}
