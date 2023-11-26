class MyException extends Error{

}

function callMe(name) {
    if(name === 'Eko'){
        throw new MyException('Ups my exception happens')
    }else{
        return 'OK'
    }
}

module.exports = {MyException, callMe}