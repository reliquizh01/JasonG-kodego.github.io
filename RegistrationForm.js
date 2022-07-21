let tGFormShowing = false;
let eOFormShowing = false;
const tGBenefits = document.getElementById("TagOrderBenefits");
const eOBenefits = document.getElementById("eatOwnerBenefits");

// Widescreen
const tGForm = document.getElementById("TagOrderForm");
const eOForm = document.getElementById("EatOwnerForm");
// Mobile
let mTGForm = document.getElementById("TagOrderFormMobile");
let mEOForm = document.getElementById("EatOwnerFormMobile");


//Obtain width of Screen [768]
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

mTGForm.style.display = "none";
mEOForm.style.display = "none";

// PC Screen
if(width > 1000){
    tGForm.style.display = "block";
    eOForm.style.display = "block";

    mEOForm.style.display = "none";
    mTGForm.style.display = "none";

}
// Mobile
else{    
    tGForm.style.display = "none";
    eOForm.style.display = "none";
}

const ShowTgForm = () =>{
    // PC Screen
    if(width > 1000)
    {
        if(tGForm.style.visibility == "visible")
        {
            tGForm.style.visibility = "hidden";
        }
        else{
            tGForm.style.visibility = "visible";
        }
    
        eOForm.style.visibility = "hidden";

        tGBenefits.style.display = "block";
        eOBenefits.style.display = "block";
    }
    // Mobile
    else{
        if(mTGForm.style.display == "none")
        {
            mTGForm.style.display = "block";
        }
        else{
            mTGForm.style.display = "none";
            mEOForm.style.display = "none";
        }
    }
};

const ShowEoForm = () =>{
    // PC Screen
    if(width > 1000)
    {
        if(eOForm.style.visibility == "visible"){
            eOForm.style.visibility = "hidden";
        }
        else{
            eOForm.style.visibility = "visible";
        }
    
        tGForm.style.visibility = "hidden";

        tGBenefits.style.display = "block";
        eOBenefits.style.display = "block";
    }
    // Mobile
    else{
        if(mEOForm.style.display == "none")
        {
            mEOForm.style.display = "block";
        }
        else{

            mTGForm.style.display = "none";
            mEOForm.style.display = "none";
        }

    }
};

