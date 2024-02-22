
    var x = 3;

    try {
        const aError= new Error("this a error")
        throw aError;
    } catch (err) {

        console.log(err);
    }finally{
        console.log("this form finally")
    }