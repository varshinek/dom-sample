function create_label(tagname, attrname, attrvalue, content)
{
    var label_ele = document.createElement(tagname);
    label_ele.setAttribute(attrname , attrvalue);
    label_ele.innerHTML = content;
    return label_ele;
}
function break_create()
{
    var break_ele = document.createElement("br");
    return break_ele;
}
function input_create(tagname, attrname1, attrvalue1, attrname2 , attrvalue2)
{
    var input_ele = document.createElement(tagname);
    input_ele.setAttribute(attrname1 , attrvalue1);
    input_ele.setAttribute(attrname2 , attrvalue2);
    return input_ele;
}
function sub_create(tagname , attrname1, attrvalue1, attrname2 , attrvalue2, content)
{
    var sub_ele = document.createElement(tagname);
    sub_ele.setAttribute(attrname1 , attrvalue1);
    sub_ele.setAttribute(attrname2, attrvalue2);
    sub_ele.innerHTML = content;
    return sub_ele;
}
function foo()
{
    var firstname = document.getElementById("firstname").value
    var middlename = document.getElementById("middlename").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var location = document.getElementById("location").value
    console.log("Firstname: " +firstname)
    console.log("Middlename: " +middlename)
    console.log("Lastname: " +lastname)
    console.log("Email: " +email)
    console.log("Location: " +location)

    var fname = document.createElement("div");
    fname.innerHTML = `${"Firstname: "+firstname}`;
    document.body.append(fname);
    var mname = document.createElement("div");
    mname.innerHTML = `${"Middlename: "+middlename}`;
    document.body.append(mname);
    var lname = document.createElement("div");
    lname.innerHTML = `${"Lastname: "+lastname}`;
    document.body.append(lname);
    var mail = document.createElement("div");
    mail.innerHTML = `${"Email: "+email}`;
    document.body.append(mail);
    var loc = document.createElement("div");
    loc.innerHTML = `${"Location: "+location}`;
    document.body.append(loc);
}

document.body.append(create_label("label","for", "firstname", "Firstname"));
document.body.append(break_create());
document.body.append(input_create("input","type","text","id","firstname"));
document.body.append(break_create());
document.body.append(create_label("label","for", "middlename", "Middlename"));
document.body.append(break_create());
document.body.append(input_create("input","type","text","id","middlename"));
document.body.append(break_create());
document.body.append(create_label("label","for", "lastname", "lastname"))
document.body.append(break_create());
document.body.append(input_create("input","type","text","id","lastname"));
document.body.append(break_create());
document.body.append(create_label("label","for", "mail", "Email"))
document.body.append(break_create());
document.body.append(input_create("input","type","email","id","email"));
document.body.append(break_create());
document.body.append(create_label("label","for", "location", "Location"))
document.body.append(break_create());
document.body.append(input_create("input","type","text","id","location"));
document.body.append(break_create());
document.body.append(break_create());
document.body.append(sub_create("button","type","button","onclick","foo()","Click here"));
