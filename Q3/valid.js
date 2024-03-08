window.onload=init
var isDisabled=true
function init(){
    document.getElementById("submitbutton").addEventListener("click",validate_inputs,false)
    document.getElementById("displayInTable").addEventListener("click",handleClick,false)
}
function handle_button_disable(){
    if(isDisabled===true){
        document.getElementById("displayInTable").disabled=false
    }
}
function handleClick(event){
    event.preventDefault()
    var email=document.getElementById("email").value
    var phone=document.getElementById("phone").value
    var fname=document.getElementById("firstName").value
    var lname=document.getElementById("lastName").value
    var address=document.getElementById("address").value

    var edu=document.getElementById("EducationLevel").value
    var inst=document.getElementById("instituition").value
    var major=document.getElementById("major").value
    var graddate=document.getElementById("gradYear").value

    var JHcompanyName=document.getElementsByClassName("companyname")
    var JHjoiningDate=document.getElementsByClassName("joiningdate")
    var JHleavingdate=document.getElementsByClassName("leavingDate")
    var JHresponse=document.getElementsByClassName("responsibility")
    
    var availdate=document.getElementById("availdate").value
    var availcheck=document.getElementById("customCheck1")
    // if (availcheck.checked){
    //     var checkboxValue=availcheck.value
    // }
    var fromday=document.getElementById("fromday").value
    var today=document.getElementById("today").value

    var refname=document.getElementsByClassName("refName")
    var refContact=document.getElementsByClassName("refContact")
    var refRelation=document.getElementsByClassName("refRelation")

    var relSkills=document.getElementById("relevantSkills").value
    var certificate=document.getElementById("certifications").value

    var resume=document.getElementById("resume").value
    var coverLetter=document.getElementById("coverLetter").value

    var newWindow=window.open()
    var newdocument=newWindow.document

    var bootstrapCSS = newdocument.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
    newdocument.head.appendChild(bootstrapCSS);


    var table=newdocument.createElement("table")
    table.className="table table-bordered table-striped mx-3 my-3"

    var Heading="Job Application Form"
    var Headings=["Personal Information","Education","Job History","Availability","Reference","Resume","Skills"]
    

    var textPI=newdocument.createTextNode(Headings[0])
    var textHead=newdocument.createTextNode(Heading)
    var JHText=newdocument.createTextNode(Headings[2])
    var EduText=newdocument.createTextNode(Headings[1])
    var RefText=newdocument.createTextNode(Headings[4])
    var AvailText=newdocument.createTextNode(Headings[3])
    var SkillsText=newdocument.createTextNode(Headings[6])
    var ResText=newdocument.createTextNode(Headings[5])


    var headingPI=newdocument.createElement("th")
    var heading=newdocument.createElement("th")
    var JH=newdocument.createElement("th")
    var Edu=newdocument.createElement("th")
    var Ref=newdocument.createElement("th")
    var Skills=newdocument.createElement("th")
    var Avail=newdocument.createElement("th")
    var Resume=newdocument.createElement("th")

    heading.setAttribute("colspan","4")
    heading.style.textAlign="center"
    headingPI.appendChild(textPI)
    headingPI.setAttribute("colspan","4")
    heading.appendChild(textHead)
    JH.setAttribute("colspan","4")
    JH.appendChild(JHText)
    Edu.setAttribute("colspan","4")
    Edu.appendChild(EduText)
    Ref.setAttribute("colspan","4")
    Ref.appendChild(RefText)
    Avail.setAttribute("colspan","4")
    Avail.appendChild(AvailText)
    Skills.setAttribute("colspan","4")
    Skills.appendChild(SkillsText)
    Resume.setAttribute("colspan","4")
    Resume.appendChild(ResText)

    var headerRow = newdocument.createElement("tr");
    // headerRow.className="d-flex justify-content-center"
    var headerRowPI = newdocument.createElement("tr");
    var headerRowRes = newdocument.createElement("tr");
    var headerRowEdu = newdocument.createElement("tr");
    var headerRowAvail = newdocument.createElement("tr");
    var headerRowRef = newdocument.createElement("tr");
    var headerRowSkills=newdocument.createElement("tr");
    // headerRowPI.className="d-flex justify-content-center"


    headingPI.setAttribute("colspan","3")
    headerRow.appendChild(heading);
    headerRowPI.appendChild(headingPI)
    headerRowEdu.appendChild(Edu)
    headerRowAvail.appendChild(Avail)
    headerRowRef.appendChild(Ref)
    headerRowSkills.appendChild(Skills)
    headerRowRes.appendChild(Resume)

    table.appendChild(headerRow)
    table.appendChild(headerRowPI)

    var rowOnePI=newdocument.createElement("tr")
    var rowTwoPI=newdocument.createElement("tr")


    var fnameText=newdocument.createTextNode("First Name : " + fname)
    var lnameText=newdocument.createTextNode("Last Name : " + lname)
    var emailText=newdocument.createTextNode("Email : " + email)
    var phoneText=newdocument.createTextNode("Contact : " + phone)
    var addText=newdocument.createTextNode("Address : " + address)

    var fnameNode=newdocument.createElement("td")
    var lnameNode=newdocument.createElement("td")
    var emailNode=newdocument.createElement("td")
    var addressNode=newdocument.createElement("td")
    var phoneNode=newdocument.createElement("td")

    fnameNode.appendChild(fnameText)
    lnameNode.appendChild(lnameText)
    emailNode.appendChild(emailText)
    addressNode.appendChild(addText)
    phoneNode.appendChild(phoneText)

    rowOnePI.appendChild(fnameNode)
    rowOnePI.appendChild(lnameNode)
    rowOnePI.appendChild(emailNode)
    rowTwoPI.appendChild(addressNode)
    rowTwoPI.appendChild(phoneNode)
    // table.appendChild(row)

    table.appendChild(rowOnePI)
    table.appendChild(rowTwoPI)

    rowOnePI=newdocument.createElement("tr")
    rowTwoPI=newdocument.createElement("tr")

    var EduText=newdocument.createTextNode("Highest Education Level : " + edu)
    var instText=newdocument.createTextNode("Instituition : " + inst)
    var dateText=newdocument.createTextNode("Graduation Year : " + graddate)
    var majorText=newdocument.createTextNode("Major : " + major)

    var EduNode=newdocument.createElement("td")
    var instNode=newdocument.createElement("td")
    var dateNode=newdocument.createElement("td")
    var majorNode=newdocument.createElement("td")

    EduNode.appendChild(EduText)
    instNode.appendChild(instText)
    dateNode.appendChild(dateText)
    majorNode.appendChild(majorText)

    rowOnePI.appendChild(instNode)
    rowOnePI.appendChild(EduNode)
    rowOnePI.appendChild(majorNode)
    rowOnePI.appendChild(dateNode)


    table.appendChild(headerRowEdu)
    table.appendChild(rowOnePI)
    // table.appendChild(rowTwoPI)


    table.appendChild(JH)
    for (let i=0; i<JHcompanyName.length;i++){
        if (JHcompanyName[i].value){
            rowOnePI=newdocument.createElement("tr")
            var compNameText=newdocument.createTextNode("Company Name : " + JHcompanyName[i].value)
            var Node=newdocument.createElement("td")
            Node.appendChild(compNameText)
            rowOnePI.appendChild(Node)

            var resposeText=newdocument.createTextNode("Responsibility : " + JHresponse[i].value)
            Node=newdocument.createElement("td")
            Node.appendChild(resposeText)
            rowOnePI.appendChild(Node)

            var JoiningDateText=newdocument.createTextNode("Joining Date : " + JHjoiningDate[i].value)
            Node=newdocument.createElement("td")
            Node.appendChild(JoiningDateText)
            rowOnePI.appendChild(Node)
            
            var LeavingDateText=newdocument.createTextNode("Leaving Date : " + JHleavingdate[i].value)
            Node=newdocument.createElement("td")
            Node.appendChild(LeavingDateText)
            rowOnePI.appendChild(Node)
            table.appendChild(rowOnePI)
        }
    }

    table.appendChild(headerRowAvail)
    rowOnePI=newdocument.createElement("tr")
    var startdateText=newdocument.createTextNode("Starting Date : " + availdate)
    var Node=newdocument.createElement("td")
    Node.appendChild(startdateText)
    rowOnePI.appendChild(Node)

    if(availcheck.checked){
        var availCheckText=newdocument.createTextNode("Willingness To Relocate : " + "Yes")
    }
    else{
        var availCheckText=newdocument.createTextNode("Willingness To Relocate : " + "No")
    }
    var Node=newdocument.createElement("td")
    Node.appendChild(availCheckText)
    rowOnePI.appendChild(Node)

    var fromdateText=newdocument.createTextNode("Working Days : " + fromday +" - "+today)
    Node=newdocument.createElement("td")
    Node.appendChild(fromdateText)
    rowOnePI.appendChild(Node)

    table.appendChild(rowOnePI)

    table.appendChild(headerRowRef)
    for (let i=0; i<refname.length;i++)
    {
        if(refname[i].value){
            rowOnePI=newdocument.createElement("tr")
            var refNameText=newdocument.createTextNode("Name : " + refname[i].value)
            var Node=newdocument.createElement("td")
            Node.appendChild(refNameText)
            rowOnePI.appendChild(Node)

            var refContact=newdocument.createTextNode("Contact : " + refContact[i].value)
            var Node=newdocument.createElement("td")
            Node.appendChild(refContact)
            rowOnePI.appendChild(Node)

            var refRelation=newdocument.createTextNode("Relation : " + refRelation[i].value)
            var Node=newdocument.createElement("td")
            Node.appendChild(refRelation)
            rowOnePI.appendChild(Node)

            table.appendChild(rowOnePI)
        }
    }
    table.appendChild(headerRowSkills)
    rowOnePI=newdocument.createElement("tr")
    var relSkillsText=newdocument.createTextNode("Skills : " + relSkills)
    var Node=newdocument.createElement("td")
    Node.setAttribute("colspan","4")
    Node.appendChild(relSkillsText)
    rowOnePI.appendChild(Node)
    table.appendChild(rowOnePI)


    rowOnePI=newdocument.createElement("tr")
    var certText=newdocument.createTextNode("Certifications : " + certificate)
    var Node=newdocument.createElement("td")
    Node.setAttribute("colspan","4")
    Node.appendChild(certText)
    rowOnePI.appendChild(Node)
    table.appendChild(rowOnePI)

    table.appendChild(headerRowRes)
    rowOnePI=newdocument.createElement("tr")

    var ResumeText=newdocument.createTextNode("Resume : " + resume)
    Node=newdocument.createElement("td")
    Node.setAttribute("colspan","2")
    Node.appendChild(ResumeText)
    rowOnePI.appendChild(Node)

    var CVText=newdocument.createTextNode("Cover Letter : " + coverLetter)
    Node=newdocument.createElement("td")
    Node.setAttribute("colspan","2")
    Node.appendChild(CVText)
    rowOnePI.appendChild(Node)

    table.appendChild(rowOnePI)
    newdocument.body.appendChild(table)

}

function validate_inputs(event){
    event.preventDefault()
    const firstName=document.getElementById("firstName").value
    const LastName=document.getElementById("lastName").value
    const email=document.getElementById("email").value
    const phone=document.getElementById("phone").value
    const term=document.getElementById("termsCheckbox")
    const privacy=document.getElementById("privacyCheckbox")

    console.log("first name",firstName)
    var textEmail=''
    var textname=''
    var textlname=''
    var textphone=''
    var termText=''
    const alphabetRegex = /[a-zA-Z]/;
    var flag=true

    if(firstName.length<2){
        textname='Enter Valid Name !!'
        document.getElementById("errorfName").style.color="red"
        flag=false;
        isDisabled=isDisabled && flag
    }
    if(LastName.length<2){
        textlname='Enter Valid Name !!'
        document.getElementById("errorlName").style.color="red"
        flag=false;
        isDisabled=isDisabled && flag
    }
    if(phone.length!=11 || phone[0]!='0' || phone[1]!='3' || alphabetRegex.test(phone)){
        textphone="Enter Valid Contact !!"
        document.getElementById("errorPhone").style.color="red"
        flag=false;
        isDisabled=isDisabled && flag
    }
    if (email.length>8 && email.includes('@')){
        textEmail=''
    }
    else{
        textEmail="Enter Valid Email !!"
        document.getElementById("errorEmail").style.color="red"
        flag=false;
        isDisabled=isDisabled && flag
    }
    if(!term.checked){
        termText="Agree to terms and Conditions to proceed."
        document.getElementById("termError").style.color="red"
        flag=false;
        isDisabled=isDisabled && flag
    }
    document.getElementById("errorfName").innerHTML = textname;
    document.getElementById("errorlName").innerHTML = textlname;
    document.getElementById("errorPhone").innerHTML = textphone;
    document.getElementById("errorEmail").innerHTML = textEmail;
    document.getElementById("termError").innerHTML = termText;
    handle_button_disable()
}

